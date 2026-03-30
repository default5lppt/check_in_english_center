# 📋 BUILD PROMPT — Lịch Dạy Học (T3 Stack + MySQL + Docker)

---

## 🧱 TECH STACK

- **Framework:** Next.js (App Router) via `create-t3-app`
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** tRPC
- **ORM:** Prisma
- **Database:** MySQL (via Docker)
- **Fonts:** `Be Vietnam Pro` + `Quicksand` (Google Fonts)
- **i18n:** `next-intl` for Vietnamese ↔ English language switching

---

## 🐳 DOCKER SETUP

Create a `docker-compose.yml` at the project root:

```yaml
version: "3.8"
services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: lich_day
      MYSQL_USER: appuser
      MYSQL_PASSWORD: apppassword
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

`.env`:
```
DATABASE_URL="mysql://appuser:apppassword@localhost:3306/lich_day"
```

---

## 🗄️ PRISMA SCHEMA (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model School {
  id        String   @id @default(cuid())
  name      String   // e.g. "TN", "TA", "AT1"
  color     String   // hex color
  bg        String   // hex background
  order     Int      @default(0)
  createdAt DateTime @default(now())

  timings   SchoolTiming[]
  sessions  ScheduleSession[]
}

model Teacher {
  id        String   @id @default(cuid())
  name      String
  color     String
  createdAt DateTime @default(now())

  sessions  ScheduleSession[]
}

model TeachingAssistant {
  id        String   @id @default(cuid())
  name      String
  color     String
  createdAt DateTime @default(now())

  sessions  ScheduleSession[]
}

model GlobalSetting {
  id            String @id @default("singleton")
  period1Start  String @default("14:00")  // HH:mm
}

model SchoolTiming {
  id         String @id @default(cuid())
  schoolId   String
  school     School @relation(fields: [schoolId], references: [id], onDelete: Cascade)
  period2Start String // HH:mm — per-school start of period 2
  period3Start String // HH:mm — per-school start of period 3 (auto or manual)

  @@unique([schoolId])
}

model ScheduleSession {
  id          String   @id @default(cuid())
  weekStart   String   // ISO date of Monday e.g. "2025-03-24"
  dayIndex    Int      // 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri
  periodIndex Int      // 0=Tiết 1, 1=Tiết 2, 2=Tiết 3
  schoolId    String
  school      School   @relation(fields: [schoolId], references: [id], onDelete: Cascade)
  teacherId   String?
  teacher     Teacher?  @relation(fields: [teacherId], references: [id], onDelete: SetNull)
  taId        String?
  ta          TeachingAssistant? @relation(fields: [taId], references: [id], onDelete: SetNull)
  note        String?  @db.Text
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([weekStart, dayIndex, periodIndex, schoolId])
}
```

---

## 🔌 tRPC ROUTERS

Create the following routers under `src/server/api/routers/`:

### `school.ts`
- `getAll` — list all schools ordered by `order`
- `create(name, color, bg)` — add a school
- `update(id, name, color, bg)` — edit a school
- `delete(id)` — delete school + cascade sessions and timings

### `teacher.ts`
- `getAll` — list all teachers
- `create(name, color)`
- `update(id, name, color)`
- `delete(id)`

### `ta.ts` (TeachingAssistant)
- `getAll`
- `create(name, color)`
- `update(id, name, color)`
- `delete(id)`

### `timing.ts`
- `getGlobal` — get `period1Start` from `GlobalSetting`
- `updateGlobal(period1Start)` — update global period 1 time
- `getSchoolTimings` — get all `SchoolTiming` records
- `upsertSchoolTiming(schoolId, period2Start, period3Start)` — create or update

### `schedule.ts`
- `getWeek(weekStart: string)` — return all sessions for a given week ISO Monday date
- `upsertSession(weekStart, dayIndex, periodIndex, schoolId, teacherId?, taId?, note?)` — create or update a session cell
- `deleteSession(weekStart, dayIndex, periodIndex, schoolId)` — clear a cell

---

## 🎨 UI DESIGN (match the HTML mock closely)

### Color tokens (use CSS variables via Tailwind config or `globals.css`):
```css
:root {
  --bg: #f0f4f8;
  --surface: #ffffff;
  --surface-alt: #f7f9fc;
  --text: #1a2332;
  --text-secondary: #5a6a7e;
  --text-muted: #8896a8;
  --border: #e2e8f0;
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --primary-light: #dbeafe;
  --accent: #f59e0b;
  --danger: #ef4444;
  --success: #10b981;
}
```

School palette (cycle through for new schools):
`['#3b82f6','#8b5cf6','#ec4899','#14b8a6','#f97316','#06b6d4','#e11d48','#84cc16']`

Staff palette (cycle through for new staff):
`['#3b82f6','#8b5cf6','#ec4899','#14b8a6','#f97316','#06b6d4','#e11d48','#84cc16','#6366f1','#0891b2','#d946ef','#65a30d']`

---

## 🧭 APP LAYOUT & NAVIGATION

### Top Navigation Bar (sticky, dark navy gradient `#1e3a5f → #2d5a8e`):
- Brand: 📚 icon + "Lịch Dạy Học" / "Teaching Schedule" (follows active language)
- Tabs: `📅 Lịch dạy` | `👩‍🏫 Giáo Viên` | `🧑‍💼 Trợ Giảng` | `⚙️ Cài đặt giờ` | `🏫 Trường`
- Right side: Language toggle button `🌐 VI / EN` + `💾 Lưu` button + `🗑️` reset button
- Language toggle switches all UI text instantly without page reload
- Active language persisted in `localStorage` key `"lang"` (default: `"vi"`)

Each tab is a Next.js page or a tab-panel within a single page layout.

---

## 📅 TAB 1: LỊCH DẠY (Schedule View)

### Week Navigation:
- `◀` / `▶` buttons to navigate weeks
- Display: "Tuần hiện tại" / "Tuần +1" / "Tuần -1"
- Date range shown: "24/3 – 28/3/2025"
- "Hôm nay" button to reset to current week
- Week state stored as ISO Monday date string, e.g. `"2025-03-24"`

### Schedule Table Structure:
```
| Giờ học | Thứ 2     | Thứ 3     | Thứ 4     | Thứ 5     | Thứ 6     |
|         | TN TA AT1 | TN TA AT1 | TN TA AT1 | TN TA AT1 | TN TA AT1 |
|---------|-----------|-----------|-----------|-----------|-----------|
| Tiết 1  | cell cell | ...
| Tiết 2  | cell cell | ...
| Tiết 3  | cell cell | ...
```

### Left column "Giờ học":
- **Tiết 1**: one shared time shown → `14:00 – 14:35` (uses `period1Start` from GlobalSetting)
- **Tiết 2**: per-school times stacked:
  ```
  14:35–15:10 (TN)
  14:40–15:15 (TA)
  14:45–15:20 (AT1)
  ```
- **Tiết 3**: per-school times stacked, auto = period2 end + 20 min, or manual override:
  ```
  15:30–16:05 (TN)
  15:35–16:10 (TA)
  ...
  ```

### Schedule Cell (each `periodIndex × schoolId × dayIndex`):
- Min size: `120px × 80px`
- If **empty**: show `+` icon centered, muted, `opacity: 0.3`
- If **filled** show:
  - Left accent border colored by school color
  - `● Teacher Name` (bold, dot = teacher color)
  - `TA: TA Name` (secondary text)
  - Note badge (italic, blue pill): e.g. `Mock Test`
- **Conflict badge**: if same teacher or TA appears in same period + same day across schools → show `⚠️ TRÙNG` red pulsing badge on affected cells
- Click → open Edit Cell Modal

### Edit Cell Modal:
```
Title: "Tiết 2 · TN · Thứ 3"
- Dropdown: Giáo viên (list from Teacher table, includes "-- Chọn --")
- Dropdown: Trợ giảng (list from TA table, includes "-- Chọn --")
- Textarea: Ghi chú (placeholder: "VD: Mock Test, Nghỉ, Dạy bù...")
Buttons: [Xoá] [Huỷ] [Lưu]
```
- On save: call `schedule.upsertSession`
- On clear: call `schedule.deleteSession`

---

## 👩‍🏫 TAB 2: GIÁO VIÊN

- Card with header "👩‍🏫 Danh sách Giáo Viên"
- List of teachers, each row:
  - Color dot | Name | ✏️ edit | 🗑️ delete
- Bottom add row: text input + "+ Thêm" button
- Edit → opens staff edit modal with name input + color picker (circles)

---

## 🧑‍💼 TAB 3: TRỢ GIẢNG

Same layout as Giáo Viên tab but for `TeachingAssistant`.

---

## ⚙️ TAB 4: CÀI ĐẶT GIỜ

Card layout, title "⏰ Cài đặt giờ học"
Sub-note: "Mỗi tiết 35 phút. Tiết 3 = Tiết 2 kết thúc + 20 phút nghỉ (có thể chỉnh tay)."

Rows:
1. **Tiết 1 (tất cả):** `[time input 14:00]` → `→ 14:35`
2. **Tiết 2 (theo trường):** for each school:
   - `TN [time input 14:35]` → `→ 15:10`
   - `TA [time input 14:40]` → `→ 15:15`
   - `AT1 [time input 14:45]` → `→ 15:20`
   - On change → auto-recalculate Tiết 3 for that school
3. **Tiết 3 (chỉnh tay hoặc tự tính):** for each school:
   - `TN [time input 15:30]` → `→ 16:05` `[Tự tính]`
   - "Tự tính" button = period2End + 20min → writes back to input

All changes call `timing.upsertSchoolTiming` or `timing.updateGlobal`.

---

## 🏫 TAB 5: TRƯỜNG

- Grid of school cards:
  - Color square | School name | 🗑️ delete button
- Bottom add row: text input (uppercase auto) + "+ Thêm trường" button
- On add: generate next color from palette, create `School` + default `SchoolTiming`
- On delete: confirm → delete school + cascade

---

## 📐 BUSINESS LOGIC

### Constants:
```ts
const PERIOD_DURATION = 35 // minutes
const BREAK_DURATION = 20  // minutes between period 2 and 3
const DAYS = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6']
```

### Week key:
```ts
function getMonday(offset = 0): string {
  const now = new Date()
  const day = now.getDay()
  const mon = new Date(now)
  mon.setDate(now.getDate() - (day === 0 ? 6 : day - 1) + offset * 7)
  return mon.toISOString().slice(0, 10) // "YYYY-MM-DD"
}
```

### Time helpers:
```ts
const timeToMins = (t: string) => {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}
const minsToTime = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2,'0')}:${String(m % 60).padStart(2,'0')}`

const getEndTime = (start: string) =>
  minsToTime(timeToMins(start) + PERIOD_DURATION)

const autoCalcP3 = (p2Start: string) =>
  minsToTime(timeToMins(p2Start) + PERIOD_DURATION + BREAK_DURATION)
```

### Conflict detection (client-side):
For each week render, group sessions by `(weekStart, dayIndex, periodIndex)`.
If the same `teacherId` or `taId` appears in more than one school in that group → mark all those cells as `conflict = true` → show red `⚠️ TRÙNG` badge.

---

## 🎨 COMPONENT STRUCTURE (suggested)

```
src/
├── app/
│   ├── layout.tsx          ← TopNav, font loading
│   ├── page.tsx            ← Tab state, renders active panel
│   └── globals.css         ← CSS variables, base styles
├── components/
│   ├── TopNav.tsx
│   ├── schedule/
│   │   ├── SchedulePanel.tsx    ← week nav + table
│   │   ├── ScheduleTable.tsx    ← renders <table>
│   │   ├── TimeCell.tsx         ← left column time display
│   │   ├── ScheduleCell.tsx     ← individual cell, handles click
│   │   └── EditCellModal.tsx    ← modal for editing a cell
│   ├── staff/
│   │   ├── StaffPanel.tsx       ← shared for teacher/TA
│   │   ├── StaffList.tsx
│   │   └── EditStaffModal.tsx
│   ├── schools/
│   │   └── SchoolsPanel.tsx
│   └── settings/
│       └── TimeSettingsPanel.tsx
├── server/api/routers/
│   ├── school.ts
│   ├── teacher.ts
│   ├── ta.ts
│   ├── timing.ts
│   └── schedule.ts
└── utils/
    └── time.ts   ← timeToMins, minsToTime, getEndTime, autoCalcP3, getMonday
```

---

## 🔔 UX DETAILS

- **Toast notifications** (bottom-right): success (green), error (red), warning (yellow)
  - "✅ Đã lưu", "✅ Đã thêm [tên]", "Đã xoá ô", "⚠️ TRÙNG lịch!"
- **Keyboard:** `Escape` closes any open modal
- **Click outside modal** → closes modal
- **Enter key** in add-staff / add-school inputs → triggers add
- **Empty state** when no schools: centered icon 🏫 + "Chưa có trường nào · Vào tab Trường để thêm"
- **Mobile responsive:** table scrolls horizontally, nav collapses brand text on small screens

---

## 🌐 ACCESSIBILITY TO OTHER DEVICES

Since this uses a real MySQL database + tRPC (server-side), data is shared across all users and devices automatically — no localStorage needed. Deploy with Vercel or a VPS with Docker Compose running both the Next.js app and the MySQL container.

---

## 🌏 INTERNATIONALIZATION (i18n)

### Library: `next-intl`

Install: `npm install next-intl`

### Language files

`src/locales/vi.json`:
```json
{
  "nav": {
    "brand": "Lịch Dạy Học",
    "schedule": "Lịch dạy",
    "teachers": "Giáo Viên",
    "tas": "Trợ Giảng",
    "settings": "Cài đặt giờ",
    "schools": "Trường",
    "save": "Lưu",
    "reset": "Xoá tất cả"
  },
  "schedule": {
    "title": "Lịch dạy",
    "currentWeek": "Tuần hiện tại",
    "weekPlus": "Tuần +{n}",
    "weekMinus": "Tuần -{n}",
    "today": "Hôm nay",
    "timeCol": "Giờ học",
    "period": "Tiết {n}",
    "days": ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6"],
    "emptySchool": "Chưa có trường nào",
    "emptySchoolSub": "Vào tab \"Trường\" để thêm trường mới",
    "conflictBadge": "⚠️ TRÙNG"
  },
  "cell": {
    "editTitle": "Tiết {period} · {school} · {day}",
    "teacher": "Giáo viên",
    "ta": "Trợ giảng",
    "note": "Ghi chú",
    "notePlaceholder": "VD: Mock Test, Nghỉ, Dạy bù...",
    "selectTeacher": "-- Chọn giáo viên --",
    "selectTA": "-- Chọn trợ giảng --",
    "delete": "Xoá",
    "cancel": "Huỷ",
    "save": "Lưu"
  },
  "teachers": {
    "title": "Danh sách Giáo Viên",
    "placeholder": "Tên giáo viên mới...",
    "add": "+ Thêm",
    "edit": "Sửa Giáo Viên",
    "noData": "Chưa có giáo viên nào"
  },
  "tas": {
    "title": "Danh sách Trợ Giảng",
    "placeholder": "Tên trợ giảng mới...",
    "add": "+ Thêm",
    "edit": "Sửa Trợ Giảng",
    "noData": "Chưa có trợ giảng nào"
  },
  "settings": {
    "title": "Cài đặt giờ học",
    "subtitle": "Mỗi tiết 35 phút. Tiết 3 = Tiết 2 kết thúc + 20 phút nghỉ (có thể chỉnh tay).",
    "period1Label": "Tiết 1 (tất cả)",
    "period2Label": "Tiết 2 (theo trường)",
    "period3Label": "Tiết 3 (chỉnh tay hoặc tự tính)",
    "autoCalc": "Tự tính"
  },
  "schools": {
    "title": "Quản lý Trường",
    "placeholder": "Tên viết tắt (VD: TN, TA, AT1)...",
    "add": "+ Thêm trường",
    "deleteConfirm": "Xoá trường này? Lịch của trường sẽ bị xoá."
  },
  "toast": {
    "saved": "✅ Đã lưu",
    "added": "✅ Đã thêm {name}",
    "deleted": "Đã xoá ô",
    "updated": "✅ Đã cập nhật",
    "conflict": "⚠️ Trùng lịch!",
    "p3Recalc": "✅ Đã tính lại tiết 3",
    "resetAll": "Đã xoá toàn bộ"
  },
  "staff": {
    "name": "Tên",
    "color": "Màu"
  }
}
```

`src/locales/en.json`:
```json
{
  "nav": {
    "brand": "Teaching Schedule",
    "schedule": "Schedule",
    "teachers": "Teachers",
    "tas": "Teaching Assistants",
    "settings": "Time Settings",
    "schools": "Schools",
    "save": "Save",
    "reset": "Reset All"
  },
  "schedule": {
    "title": "Weekly Schedule",
    "currentWeek": "Current Week",
    "weekPlus": "Week +{n}",
    "weekMinus": "Week -{n}",
    "today": "Today",
    "timeCol": "Time",
    "period": "Period {n}",
    "days": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "emptySchool": "No schools added yet",
    "emptySchoolSub": "Go to the \"Schools\" tab to add a school",
    "conflictBadge": "⚠️ CONFLICT"
  },
  "cell": {
    "editTitle": "Period {period} · {school} · {day}",
    "teacher": "Teacher",
    "ta": "Teaching Assistant",
    "note": "Note",
    "notePlaceholder": "E.g. Mock Test, Day off, Make-up class...",
    "selectTeacher": "-- Select teacher --",
    "selectTA": "-- Select TA --",
    "delete": "Delete",
    "cancel": "Cancel",
    "save": "Save"
  },
  "teachers": {
    "title": "Teacher List",
    "placeholder": "New teacher name...",
    "add": "+ Add",
    "edit": "Edit Teacher",
    "noData": "No teachers yet"
  },
  "tas": {
    "title": "Teaching Assistant List",
    "placeholder": "New TA name...",
    "add": "+ Add",
    "edit": "Edit Teaching Assistant",
    "noData": "No teaching assistants yet"
  },
  "settings": {
    "title": "Time Settings",
    "subtitle": "Each period is 35 minutes. Period 3 = Period 2 end + 20 min break (can be manually adjusted).",
    "period1Label": "Period 1 (all schools)",
    "period2Label": "Period 2 (per school)",
    "period3Label": "Period 3 (manual or auto)",
    "autoCalc": "Auto-calculate"
  },
  "schools": {
    "title": "Manage Schools",
    "placeholder": "Abbreviation (e.g. TN, TA, AT1)...",
    "add": "+ Add School",
    "deleteConfirm": "Delete this school? All its schedule data will be removed."
  },
  "toast": {
    "saved": "✅ Saved",
    "added": "✅ Added {name}",
    "deleted": "Cell cleared",
    "updated": "✅ Updated",
    "conflict": "⚠️ Schedule conflict!",
    "p3Recalc": "✅ Period 3 recalculated",
    "resetAll": "All data cleared"
  },
  "staff": {
    "name": "Name",
    "color": "Color"
  }
}
```

### Implementation

**Context & hook** (`src/contexts/LangContext.tsx`):
```ts
type Lang = 'vi' | 'en'

// Store active lang in React context
// Read/write to localStorage key "lang"
// Provide: lang, setLang, t(key: string, vars?: Record<string,string>) => string
```

**`t()` helper** supports simple variable interpolation:
```ts
t('toast.added', { name: 'Cô Mai' }) // → "✅ Đã thêm Cô Mai"
t('cell.editTitle', { period: '2', school: 'TN', day: 'Thứ 3' })
```

**Language toggle button** in `TopNav`:
```tsx
<button onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}>
  🌐 {lang === 'vi' ? 'EN' : 'VI'}
</button>
```
- Styled like the other nav action buttons (white border, semi-transparent)
- Switches instantly, no page reload
- Persists across sessions via localStorage

**Wrap app** in `LangProvider` at `layout.tsx` level so all components access `t()` via `useLang()` hook.

**Every hardcoded UI string** must use `t('key')` — no raw Vietnamese or English strings in JSX.

### Updated component structure:
```
src/
├── locales/
│   ├── vi.json
│   └── en.json
├── contexts/
│   └── LangContext.tsx     ← LangProvider, useLang(), t()
```

---

## 📌 NOTES

- Do NOT use localStorage — all data persists in MySQL via Prisma
- School name should be auto-uppercased on input
- When a school is deleted, all its `ScheduleSession` and `SchoolTiming` records cascade-delete
- Default seed data (optional): 3 schools (TN, TA, AT1), 3 teachers, 2 TAs, period1Start = "14:00"
- Add a `prisma/seed.ts` for initial data
- Language preference saved in `localStorage` key `"lang"` — does NOT need to be stored in MySQL since it is a per-user UI preference, not shared data
- Default language is Vietnamese (`"vi"`)

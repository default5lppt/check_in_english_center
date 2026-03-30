/*
  Warnings:

  - You are about to drop the column `note` on the `ScheduleSession` table. All the data in the column will be lost.
  - You are about to drop the column `taId` on the `ScheduleSession` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `ScheduleSession` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ScheduleSession` DROP FOREIGN KEY `ScheduleSession_taId_fkey`;

-- DropForeignKey
ALTER TABLE `ScheduleSession` DROP FOREIGN KEY `ScheduleSession_teacherId_fkey`;

-- DropIndex
DROP INDEX `ScheduleSession_taId_fkey` ON `ScheduleSession`;

-- DropIndex
DROP INDEX `ScheduleSession_teacherId_fkey` ON `ScheduleSession`;

-- AlterTable
ALTER TABLE `ScheduleSession` DROP COLUMN `note`,
    DROP COLUMN `taId`,
    DROP COLUMN `teacherId`;

-- CreateTable
CREATE TABLE `ClassEntry` (
    `id` VARCHAR(191) NOT NULL,
    `sessionId` VARCHAR(191) NOT NULL,
    `teacherId` VARCHAR(191) NULL,
    `taId` VARCHAR(191) NULL,
    `classId` VARCHAR(191) NULL,
    `roomId` VARCHAR(191) NULL,
    `order` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClassEntry` ADD CONSTRAINT `ClassEntry_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `ScheduleSession`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassEntry` ADD CONSTRAINT `ClassEntry_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassEntry` ADD CONSTRAINT `ClassEntry_taId_fkey` FOREIGN KEY (`taId`) REFERENCES `TeachingAssistant`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassEntry` ADD CONSTRAINT `ClassEntry_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClassEntry` ADD CONSTRAINT `ClassEntry_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

type ToastType = "success" | "error" | "warning";

interface Toast {
	id: number;
	message: string;
	type: ToastType;
}

interface ToastContextValue {
	showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({
	showToast: () => undefined,
});

let counter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const showToast = useCallback(
		(message: string, type: ToastType = "success") => {
			const id = ++counter;
			setToasts((prev) => [...prev, { id, message, type }]);
			setTimeout(() => {
				setToasts((prev) => prev.filter((t) => t.id !== id));
			}, 3000);
		},
		[],
	);

	return (
		<ToastContext.Provider value={{ showToast }}>
			{children}
			<div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
				{toasts.map((toast) => (
					<ToastItem
						key={toast.id}
						onClose={() =>
							setToasts((prev) => prev.filter((t) => t.id !== toast.id))
						}
						toast={toast}
					/>
				))}
			</div>
		</ToastContext.Provider>
	);
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
	useEffect(() => {
		return () => undefined;
	}, []);

	const bg =
		toast.type === "success"
			? "bg-green-500"
			: toast.type === "error"
				? "bg-red-500"
				: "bg-yellow-500";

	return (
		<div
			className={`${bg} flex items-center gap-2 rounded-lg px-4 py-3 font-medium text-sm text-white shadow-lg`}
			style={{ minWidth: "200px", animation: "slideIn 0.2s ease" }}
		>
			<span className="flex-1">{toast.message}</span>
			<button
				className="ml-2 opacity-70 hover:opacity-100"
				onClick={onClose}
				type="button"
			>
				✕
			</button>
		</div>
	);
}

export const useToast = () => useContext(ToastContext);

import { ReactNode } from "react";
import { ToastPosition } from "react-toastify";


export interface DevToolsBlockerProps {
    children: ReactNode;
    toastOptions?: {
        position?: ToastPosition;
        autoClose?: number;
        closeOnClick?: boolean;
        pauseOnHover?: boolean;
        color?: string;
    };
}
import React, { useEffect } from 'react';
import { toast, ToastContainer, ToastPosition } from 'react-toastify';
import { DevToolsBlockerProps } from '../types/DevToolsBlockerProps';

const DevToolsBlocker: React.FC<DevToolsBlockerProps> = ({ children, toastOptions }) => {
    useEffect(() => {
        const showWarning = () => {
            toast.error("Dev Tools are not allowed to open!", {
                position: toastOptions?.position || "top-right",
                autoClose: toastOptions?.autoClose || 2000,
                hideProgressBar: true,
                closeOnClick: toastOptions?.closeOnClick ?? true,
                pauseOnHover: toastOptions?.pauseOnHover ?? false,
                draggable: false,
                toastId: 'uniqueToastId',
                style: { backgroundColor: toastOptions?.color || '#fff' }
            });
        };

        const detectDevTools = () => {
            const widthThreshold = window.outerWidth - window.innerWidth > 160;
            const heightThreshold = window.outerHeight - window.innerHeight > 160;

            if (widthThreshold || heightThreshold) {
                showWarning();
                window.location.reload();
            }
        };

        const interval = setInterval(detectDevTools, 1000);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
                e.preventDefault();
                showWarning();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            showWarning();
        };

        window.addEventListener('contextmenu', handleContextMenu);

        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [toastOptions]);

    return (
        <>
            {children}
            <ToastContainer limit={1} />
        </>
    );
};

export default DevToolsBlocker;

import React, { useState, useEffect } from 'react';

interface DisableScreenshotProps {
    screenMessage?: string;
}

const DisableScreenshot: React.FC<DisableScreenshotProps> = ({ screenMessage = "Screenshots are prohibited!" }) => {
    const [isBlackout, setIsBlackout] = useState(false);

    useEffect(() => {
        const preventScreenshot = (e: KeyboardEvent) => {
            if (e.keyCode === 44) {  // keyCode 44 corresponds to the PrintScreen key
                e.preventDefault();
                setIsBlackout(true);
                setTimeout(() => setIsBlackout(false), 1000);
            }
        };

        const preventContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        document.addEventListener('keyup', preventScreenshot);
        document.addEventListener('contextmenu', preventContextMenu);

        return () => {
            document.removeEventListener('keyup', preventScreenshot);
            document.removeEventListener('contextmenu', preventContextMenu);
        };
    }, []);

    if (isBlackout) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'black',
                    zIndex: 9999,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '24px'
                }}
            >
                {screenMessage}
            </div>
        );
    }

    return null;
};

export default DisableScreenshot;

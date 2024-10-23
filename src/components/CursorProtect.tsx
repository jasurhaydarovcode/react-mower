import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CursorProtect = ({ children, message = "❌ Website Protected" }) => {
    const [isProtected, setIsProtected] = useState(false);

    useEffect(() => {
        const handleMouseLeave = () => setIsProtected(true);
        const handleMouseEnter = () => setIsProtected(false);
        const handleKeyDown = (e) => {
            if (e.key === 'Window' + 'g') {
                e.preventDefault();
                setIsProtected(true);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            {children}
            {isProtected && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(0, 0, 0)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '24px',
                    }}
                >
                    {message}
                </div>
            )}
        </>
    );
};

CursorProtect.propTypes = {
    children: PropTypes.node.isRequired,
    protectionMessage: PropTypes.string
};

export default CursorProtect;
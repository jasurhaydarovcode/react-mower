import { useEffect } from "react";

const CopyPasteProtection = () => {
    useEffect(() => {
        const disableEvent = (e: Event) => e.preventDefault();

        document.addEventListener("copy", disableEvent);
        document.addEventListener("cut", disableEvent);
        document.addEventListener("paste", disableEvent);
        document.addEventListener("selectstart", disableEvent);
        document.addEventListener("contextmenu", disableEvent);

        return () => {
            document.removeEventListener("copy", disableEvent);
            document.removeEventListener("cut", disableEvent);
            document.removeEventListener("paste", disableEvent);
            document.removeEventListener("selectstart", disableEvent);
            document.removeEventListener("contextmenu", disableEvent);
        };
    }, []);

    return null;
};

export default CopyPasteProtection;
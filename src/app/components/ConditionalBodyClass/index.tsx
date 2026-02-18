"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ConditionalBodyClass = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== "/links") {
            document.body.classList.add("theme-background");
        } else {
            document.body.classList.remove("theme-background");
        }
    }, [pathname]);

    return <>{children}</>;
}

export default ConditionalBodyClass;

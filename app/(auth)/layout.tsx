import type { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <main className="w-full">
            {children}
        </main>
    );
}
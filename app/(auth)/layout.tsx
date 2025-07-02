import type { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            {children}
        </main>
    );
}
"use client";
import type { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";
export default function AuthLayout({ children }: { children: ReactNode }) {
    return (<main className="w-full">
      <SessionProvider>{children}</SessionProvider>
      </main>
    );
}

'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalLayout({ children }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    // Check if we're on auth pages
    const isAuthPage = pathname === '/login' ||
        pathname === '/signup' ||
        pathname.startsWith('/auth') ||
      pathname.startsWith('/dashboard')
    ;

    return (
        <>
            {!isAuthPage && <Navbar />}
            {children}
            {!isAuthPage && <Footer />}
        </>
    );
}
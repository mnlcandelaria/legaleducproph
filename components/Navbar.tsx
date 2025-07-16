'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false); // ← track scroll state

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Program", href: "/program" },
        { name: "Announcements", href: "/announcements" },
        { name: "Instructors", href: "/instructors" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "List of Passers", href: "/passers" },
        { name: "Contact", href: "/contact" },
        { name: "Enroll Now!", href: "/login" },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-colors duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={"/images/logo.png"}
                                alt={"logo"}
                                width={55}
                                height={55}
                            />
                            <h1
                                className={`text-2xl font-bold font-playfair ${
                                    scrolled ? "text-black" : "text-white"
                                }`}
                            >
                                LegalEducProPH
                            </h1>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item, index) => {
                            const isEnroll = item.name === "Enroll Now!";
                            const textColor = scrolled ? "text-black" : "text-white";

                            return isEnroll ? (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button asChild className="bg-secondary text-white text-sm px-4 py-2">
                                        <motion.a
                                            href={item.href}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                        </motion.a>
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${textColor}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden">
                        {/* Theme Toggle Button */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navigation.length * 0.1, duration: 0.5 }}
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="ml-4"
                            >
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </motion.div>
                        */}
                        <Sheet onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className={`${
                                    scrolled ? "text-black" : "text-white"
                                }`}>
                                    <motion.div
                                        initial={false}
                                        animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                                <SheetTitle className="text-lg font-semibold mb-4">
                                    Navigation Menu
                                </SheetTitle>
                                <nav className="flex flex-col gap-4">
                                    <AnimatePresence>
                                        {navigation.map((item, index) => (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 50 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.5,
                                                    ease: "easeOut",
                                                }}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                whileHover={{ scale: 1.05, x: 10 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.name}
                                            </motion.a>
                                        ))}
                                    </AnimatePresence>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
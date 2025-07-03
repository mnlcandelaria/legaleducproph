// components/footer.tsx

"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <motion.footer
            className="bg-[#0D172A] text-white px-6 py-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Description */}
                <div>
                    <div className="flex items-center gap-2 font-bold text-xl mb-2">
                        <Image
                            src={"/images/logo.png"}
                            alt={"logo"}
                            width={46}
                            height={46}
                        />
                        <span>Legal Educ Pro PH</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Helping future attorneys pass the bar exam with confidence for over 25 years.
                    </p>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Programs</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/programs/complete-bar-review" className="hover:underline">Complete Bar Review</Link></li>
                        <li><Link href="/programs/self-paced-online" className="hover:underline">Self-Paced Online</Link></li>
                        <li><Link href="/programs/premium-tutoring" className="hover:underline">Premium Tutoring</Link></li>
                        <li><Link href="/programs/practice-exams" className="hover:underline">Practice Exams</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Resources</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/resources/study-materials" className="hover:underline">Study Materials</Link></li>
                        <li><Link href="/resources/bar-exam-dates" className="hover:underline">Bar Exam Dates</Link></li>
                        <li><Link href="/resources/state-requirements" className="hover:underline">State Requirements</Link></li>
                        <li><Link href="/resources/success-stories" className="hover:underline">Success Stories</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="/instructors" className="hover:underline">Instructors</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            <Separator className="my-8 bg-gray-700" />

            <div className="text-center text-sm text-gray-400">
                © 2025 Legal Educ Pro PH. All rights reserved.
            </div>
        </motion.footer>
    )
}

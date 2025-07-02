'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const instructors = [
    {
        name: "Sarah Mitchell, J.D.",
        title: "Constitutional Law Expert",
        description:
            "Former Supreme Court clerk with 15 years of teaching experience. Specializes in Constitutional Law and Civil Procedure.",
        school: "Harvard Law School",
        experience: "15+ Years",
    },
    {
        name: "Michael Chen, J.D.",
        title: "Evidence & Criminal Law",
        description:
            "Former prosecutor with extensive trial experience. Expert in Evidence, Criminal Law, and Criminal Procedure.",
        school: "Stanford Law School",
        experience: "12+ Years",
    },
    {
        name: "Jennifer Rodriguez, J.D.",
        title: "Contracts & Torts",
        description:
            "Corporate attorney turned educator with a passion for making complex concepts accessible to all students.",
        school: "Columbia Law School",
        experience: "10+ Years",
    },
];

export default function InstructorsSection() {
    return (
        <section className="py-16 px-6 md:px-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Meet Our Expert Instructors
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Learn from practicing attorneys and bar exam specialists with decades of combined experience
                </p>
            </div>

            <motion.div
                className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {instructors.map((instructor, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Card className="overflow-hidden rounded-2xl shadow-sm bg-white">
                            <div className="bg-gray-200 h-48 flex items-center justify-center">
                                <Image
                                    src="/images/user-placeholder.svg"
                                    alt="Instructor"
                                    width={64}
                                    height={64}
                                    className="opacity-60"
                                />
                            </div>
                            <CardContent className="p-6 space-y-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {instructor.name}
                                </h3>
                                <p className="text-sm text-amber-700 font-medium">
                                    {instructor.title}
                                </p>
                                <p className="text-sm text-gray-700">
                                    {instructor.description}
                                </p>
                                <div className="text-sm text-gray-500 pt-2 flex items-center gap-2">
                                    <span>{instructor.school}</span>
                                    <span className="mx-1">•</span>
                                    <span>{instructor.experience}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

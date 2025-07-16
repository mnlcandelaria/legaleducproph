'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { MoveDown} from "lucide-react";
import Link from "next/link";

const instructors = [
    {
        name: "Anna Maria \"ADA\" Dalena Abad",
        title: "Dean, Adamson University College of Law",
        image: "/images/abad-ana.jpg",
        description:
            "Award-winning lawyer, law dean, legal scholar, and managing partner with decades’ experience.",
        school: "University of the Philippines",
        experience: "30+ Years",
    },
    {
        name: "Judge Philip A. Aguinaldo",
        title: "Presiding Judge, RTC 207, Muntinlupa",
        image: "/images/aguinaldo-philip.jpg",
        description:
            "Respected judge, legal educator, bar reviewer, Fulbright fellow, and international law expert.",
        school: "University of Santo Tomas",
        experience: "40+ Years",
    },
    {
        name: "Judge Janice L. Andrade-Udarbe",
        title: "Presiding Judge, RTC 57, Lucena",
        image: "/images/udarbe-janice.jpg",
        description:
            "Understanding rules on evidence, admissibility, and judicial notice in proceedings.",
        school: "Law School",
        experience: "15+ Years",
    },
    {
        name: "Atty. Kristy Jane M. Balino",
        title: "Evidence & Criminal Law",
        image: "/images/balino-kristy.jpg",
        description:
            "Accomplished litigator, law professor, and AI lecturer with strong academic legal credentials.",
        school: "San Sebastian College",
        experience: "10+ Years",
    },
    {
        name: "Anna Maria \"ADA\" Dalena Abad",
        title: "Dean, Adamson University College of Law",
        image: "/images/abad-ana.jpg",
        description:
            "Award-winning lawyer, law dean, legal scholar, and managing partner with decades’ experience.",
        school: "University of the Philippines",
        experience: "30+ Years",
    },
    {
        name: "Judge Philip A. Aguinaldo",
        title: "Presiding Judge, RTC 207, Muntinlupa",
        image: "/images/aguinaldo-philip.jpg",
        description:
            "Respected judge, legal educator, bar reviewer, Fulbright fellow, and international law expert.",
        school: "University of Santo Tomas",
        experience: "40+ Years",
    },
    {
        name: "Judge Janice L. Andrade-Udarbe",
        title: "Presiding Judge, RTC 57, Lucena",
        image: "/images/udarbe-janice.jpg",
        description:
            "Understanding rules on evidence, admissibility, and judicial notice in proceedings.",
        school: "Law School",
        experience: "15+ Years",
    },
    {
        name: "Atty. Kristy Jane M. Balino",
        title: "Evidence & Criminal Law",
        image: "/images/balino-kristy.jpg",
        description:
            "Accomplished litigator, law professor, and AI lecturer with strong academic legal credentials.",
        school: "San Sebastian College",
        experience: "10+ Years",
    },
];


export default function InstructorsSection() {
    const [showAll, setShowAll] = useState(false);

    const visibleInstructors = showAll ? instructors : instructors.slice(0, 4);

    return (
        <section className="pb-10">
            <div className="relative h-[300px] w-full overflow-hidden mb-10">
                <Image
                    src={"/images/hero-1.jpg"}
                    alt={"images"}
                    fill
                    className="object-cover"
                />
                <motion.div
                    className="absolute inset-0 bg-primary/80 flex flex-col items-center text-center justify-center px-6 text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white font-playfair"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet Our Legal Educators
                    </motion.h2>

                    <motion.p
                        className="text-white mt-4 max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Learn from practicing attorneys and bar exam specialists with decades of combined experience
                    </motion.p>
                </motion.div>
            </div>
            <motion.div
                className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1400px] mx-auto"
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
                {visibleInstructors.map((instructor, i) => (
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
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <Card className="group mx-auto overflow-hidden shadow-md text-center p-0">
                            {/* Top Banner */}
                            <div className="bg-primary h-24 relative rounded-t-2xl">
                                {/* Profile Image */}
                                {/* Profile Image */}
                                <div className="absolute left-1/2 -bottom-15 transform -translate-x-1/2 z-10">
                                    <div className="w-[120px] h-[120px] rounded-full border-6 border-white group-hover:border-primary transition-colors duration-300 overflow-hidden">
                                        <Image
                                            src={instructor.image}
                                            alt={instructor.name}
                                            width={120}
                                            height={120}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <CardContent className="pt-14 pb-6">
                                <div>
                                    <h3 className="font-bold text-tertiary">{instructor.name}</h3>
                                    <p className="text-sm font-bold text-secondary">{instructor.title}</p>
                                </div>

                                <div className="text-center pt-3 pb-3">
                                    <p className="text-gray-500 text-sm">{instructor.description}</p>
                                </div>

                                {/* Stats */}
                                <div className="text-sm text-gray-500 justify-center flex items-center gap-2">
                                    <span>{instructor.school}</span>
                                    <span className="mx-0.5">•</span>
                                    <span>{instructor.experience}</span>
                                </div>

                                <div className="gap-4 pt-2 text-gray-600 text-center">
                                    <Link href="#" className="text-sm underline hover:no-underline hover:text-tertiary">See Profile</Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                ))}
            </motion.div>
            {!showAll && (
                <div className="text-center mt-10">
                    <Button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-2 rounded-full transition bg-secondary" size="lg"
                    >
                        <MoveDown /> Load More
                    </Button>
                </div>
            )}
        </section>
    );
}

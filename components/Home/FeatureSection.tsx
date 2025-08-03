// components/feature-section.tsx

"use client"

import { motion } from "framer-motion"
import { Target, Users, Server, PencilRuler } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
    {
        icon: <Target className="text-primary w-10 h-10" />,
        title: "Personalized Study Plans",
        description:
            "Tailored curriculum based on your strengths, weaknesses, and learning style for maximum efficiency.",
    },
    {
        icon: <Users className="text-primary w-10 h-10" />,
        title: "Expert Instructors",
        description:
            "Learn from experienced attorneys and bar exam specialists who know what it takes to succeed.",
    },
    {
        icon: <Server className="text-primary w-10 h-10" />,
        title: "Online Learning",
        description:
            "Access lectures and materials anytime, anywhere with our digital platform.",
    },
    {
        icon: <PencilRuler className="text-primary w-10 h-10" />,
        title: "Interactive Learning Tools",
        description:
            "Engage with quizzes and practice exams to reinforce concepts and boost retention online.",
    },
]

export default function FeatureSection() {
    return (
        <section className="bg-[#f9fcff] py-30">
            <motion.div
                className="max-w-7xl mx-auto px-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2
                    className="text-3xl text-tertiary sm:text-4xl font-bold mb-4 font-playfair"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose LegalEducProPH?
                </motion.h2>

                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto mb-20 text-lg"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Our comprehensive approach combines proven strategies, expert instruction, and personalized support
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                        >
                            <Card className="shadow-md rounded-2xl p-6 bg-white h-full">
                                <CardContent className="flex flex-col items-center space-y-4">
                                    <div className="bg-[#88d398] p-3 rounded-xl ">{feature.icon}</div>
                                    <h3 className="text-lg font-semibold font-playfair">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
    name: "Amanda Torres",
    location: "California Bar, 2024",
    quote:
    "Legal Educ Pro PH made all the difference. The personalized study plan and expert instructors helped me focus on my weak areas and pass on my first attempt.",
    },
    {
    name: "David Kim",
    location: "New York Bar, 2024",
    quote:
    "The practice exams were incredibly helpful. They prepared me for the real thing and gave me the confidence I needed on exam day.",
    },
    {
    name: "Maria Santos",
    location: "Texas Bar, 2024",
    quote:
    "Working full-time while studying was challenging, but the flexible online format made it possible. I couldn't have done it without BarExcel.",
    },
];

export default function SuccessStories() {
return (
    <section className="py-20 px-6 md:px-12 bg-primary">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">
                Success Stories
            </h2>
            <p className="mt-4 text-lg text-white">
                Hear from our students who passed the bar exam on their first try
            </p>
        </div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {testimonials.map((testimonial, idx) => (
                <motion.div
                    key={idx}
                    custom={idx}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: (i: number) => ({
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: i * 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            },
                        }),
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Card className="p-6 rounded-xl shadow-md">
                        <CardContent className="space-y-4">
                            <div className="flex gap-1 text-yellow-500">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500" />
                                    ))}
                            </div>
                            <p className="text-gray-700 text-base">&#34;{testimonial.quote}&#34;</p>
                            <div className="flex items-center gap-3 pt-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.121 17.804A7.5 7.5 0 0112 15a7.5 7.5 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    </section>
);
}

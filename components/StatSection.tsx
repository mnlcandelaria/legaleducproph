// components/stats-section.tsx

"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const stats = [
    { value: 94, suffix: "%", label: "Pass Rate" },
    { value: 15, suffix: "K+", label: "Students" },
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "States Covered" },
]

export default function StatsSection() {
    return (
        <section className="m-0 relative pb-10 sm:m-[-40px] ">
            <motion.div
                className="max-w-7xl bg-white mx-auto p-10 grid grid-cols-2 sm:grid-cols-4 text-center gap-y-10 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h3 className="text-4xl font-bold text-primary">
                            <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                        </h3>
                        <p className="text-sm mt-2 font-light text-gray-600">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

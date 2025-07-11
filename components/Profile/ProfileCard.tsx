"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileCardProps {
    key: number;
    name: string;
    title: string;
    image: string;
    delay?: number;
}

export const ProfileCard = ({ key, name, title, image, delay = 0 }: ProfileCardProps) => {
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative w-[260px] h-[340px] bg-white rounded-md overflow-hidden shadow-md group"
            >
                {/* Top Shape */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-24 bg-[#176e79] rounded-b-[50%] transition-all duration-500 group-hover:h-40"
                />

                {/* Profile Image */}
                <div className="relative z-10 flex justify-center mt-12 transition-transform duration-500 group-hover:mt-6">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                        <Image src={image} alt={name} width={96} height={96} className="object-cover" />
                    </div>
                </div>

                {/* Name and Title */}
                <div className="relative z-10 mt-4 text-center transition-all duration-500 group-hover:mt-2">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">{title}</p>
                </div>

                {/* Social Icons */}
                <div className="absolute bottom-0 left-0 w-full py-3 bg-[#176e79] flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Facebook className="text-white w-4 h-4 hover:text-gray-200 cursor-pointer" />
                    <Twitter className="text-white w-4 h-4 hover:text-gray-200 cursor-pointer" />
                    <Share2 className="text-white w-4 h-4 hover:text-gray-200 cursor-pointer" />
                    <Linkedin className="text-white w-4 h-4 hover:text-gray-200 cursor-pointer" />
                </div>
            </motion.div>
        </motion.div>
    );
};

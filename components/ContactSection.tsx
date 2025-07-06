"use client";

import {
    Mail,
    MapPin,
    Phone,
    Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
};

const fadeRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.4 },
};

const ContactSection = () => {
    return (
        <section className="bg-[#f9fcff] py-20 px-6">
            <motion.div
                className="text-center mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    Ready to Start Your Journey?
                </motion.h2>

                <motion.p
                    className="text-gray-600 mt-4 max-w-2xl mx-auto"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Get in touch with our admissions team to learn more about our programs
                </motion.p>
            </motion.div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={fadeLeft}
                >
                    <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Phone className="text-[#f59e0b] mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Phone</p>
                                <p className="text-gray-700">(555) 123-4567</p>
                                <p className="text-sm text-gray-500">Mon–Fri 8am–8pm EST</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-[#f59e0b] mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Email</p>
                                <p className="text-gray-700">info@umaklawreview.com</p>
                                <p className="text-sm text-gray-500">We respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-[#f59e0b] mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Address</p>
                                <p className="text-gray-700">
                                    123 Legal Plaza, Suite 450<br />
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 space-y-6"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={fadeRight}
                >
                    <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                    </div>

                    <Input placeholder="Email Address" />
                    <Input placeholder="Phone Number" />

                    <select
                        className="w-full border rounded-md px-4 py-2 text-sm text-gray-700"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Which state bar are you taking?
                        </option>
                        <option>New York</option>
                        <option>California</option>
                        <option>Texas</option>
                    </select>

                    <Textarea placeholder="Tell us about your goals and any questions you have..." />

                    <Button className="w-full mt-2.5 ">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Free Consultation
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const visionPoints = [
    {
        title: "सड़क और पानी (Roads & Water)",
        description: "हर घर तक पक्की सड़क और स्वच्छ पीने का पानी पहुँचाना मेरी प्राथमिकता है।"
    },
    {
        title: "बिजली और सफाई (Electricity & Hygiene)",
        description: "गांव की गलियों में सोलर लाइट्स और नियमित सफाई की व्यवस्था की जाएगी।"
    },
    {
        title: "स्कूल और शिक्षा (Education)",
        description: "प्राथमिक विद्यालय का जीर्णोद्धार और बच्चों के लिए कंप्यूटर शिक्षा की व्यवस्था।"
    },
    {
        title: "स्वास्थ्य और सुरक्षा (Health & Safety)",
        description: "गांव में एक स्वास्थ्य केंद्र (Health Center) और महिलाओं की सुरक्षा के लिए सीसीटीवी।"
    },
    {
        title: "युवा और रोजगार (Youth & Employment)",
        description: "मनरेगा के तहत रोजगार और युवाओं के लिए कौशल विकास (Skill Development) केंद्र।"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 50
        }
    }
};

export default function VisionSection() {
    return (
        <section id="vision" className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                        हमारा संकल्प (Our Vision)
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
                        विकास का <motion.span
                            animate={{ scale: [1, 1.1, 1], color: ["#FF9933", "#138808", "#FF9933"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="text-secondary inline-block"
                        >
                            पक्का वादा
                        </motion.span>
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        हम झूठे वादे नहीं, पक्का काम करेंगे। ये सिर्फ चुनावी मुद्दे नहीं, बल्कि मेरे संकल्प हैं।
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 hover:border-orange-500 transition-colors duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Call to Action Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-primary p-6 rounded-xl shadow-md flex items-center justify-center text-center text-white cursor-pointer"
                    >
                        <div>
                            <motion.h3
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                className="text-2xl font-bold font-heading mb-2"
                            >
                                आपका एक वोट
                            </motion.h3>
                            <p className="text-lg opacity-90">
                                गांव की तस्वीर बदल सकता है।
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const problems = [
    {
        problem: "कच्ची और टूटी सड़कें",
        solution: "सीसी (CC) रोड और खड़ंजा निर्माण",
        image: "/images/road_construction.png"
    },
    {
        problem: "गंदे पानी का जमाव",
        solution: "पक्की नालियों का निर्माण और सफाई",
        image: "/images/road_construction.png"
    },
    {
        problem: "राशन वितरण में धांधली",
        solution: "पारदर्शी और सही राशन वितरण",
        image: "/images/gallery_villagers.png"
    },
    {
        problem: "विधवा/वृद्धा पेंशन समस्या",
        solution: "कैंप लगाकर सबकी पेंशन बनवाना",
        image: "/images/gallery_villagers.png"
    }
];

export default function ProblemsSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">
                            समस्या और समाधान (Problems & Solutions)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                            हम जानते हैं आपकी <span className="text-primary">परेशानियाँ</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            गांव में कई समस्याएं हैं जिनका समाधान बरसों से नहीं हुआ। मेरी योजना इन समस्याओं को जड़ से खत्म करने की है।
                        </p>
                        <div className="hidden lg:block">
                            {/* Optional Decoration or Image could go here */}
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <p className="font-semibold text-orange-800">
                                    "समस्या आपकी, समाधान मेरा - यही है मेरा नारा।"
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-50 p-4 rounded-lg flex items-center shadow-sm border border-slate-100 relative group cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <AlertTriangle className="h-5 w-5 text-red-500" />
                                        <h4 className="font-bold text-slate-800">{item.problem}</h4>
                                    </div>
                                </div>

                                <div className="px-4 text-slate-400">
                                    <ArrowRight className="h-5 w-5 group-hover:text-primary transition-colors" />
                                </div>

                                <div className="flex-1 text-right">
                                    <h4 className="font-bold text-green-600">{item.solution}</h4>
                                </div>

                                {/* Popup Image on Hover */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="hidden lg:block absolute right-[105%] top-1/2 -translate-y-1/2 z-50 w-64 bg-white p-2 rounded-xl shadow-2xl border-2 border-primary/20 pointer-events-none"
                                        >
                                            <div className="relative h-40 w-full rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.problem}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="mt-2 text-center">
                                                <p className="text-xs font-bold text-primary">समाधान: {item.solution}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

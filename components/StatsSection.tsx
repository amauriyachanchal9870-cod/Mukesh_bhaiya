"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "वर्षों की समाज सेवा (Years of Service)", value: 15, suffix: "+" },
    { label: "समस्याएं सुलझाईं (Problems Solved)", value: 500, suffix: "+" },
    { label: "गांव कवर किए (Villages Covered)", value: 10, suffix: "+" },
    { label: "संतुष्ट ग्रामीण (Happy Villagers)", value: 2000, suffix: "+" },
];

const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepTime = duration / steps;
        const increment = value / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count}</span>;
};

export default function StatsSection() {
    return (
        <section className="py-12 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2">
                                <Counter value={stat.value} />{stat.suffix}
                            </h3>
                            <p className="text-sm md:text-base font-medium opacity-90">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

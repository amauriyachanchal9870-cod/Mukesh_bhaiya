"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "राम किशन (Ram Kishan)",
        role: "किसान (Farmer)",
        image: "/images/gallery_villagers.png", // Using existing image as placeholder
        quote: "मुकेश भैया ने हमारी पानी की समस्या को समझा और उसे सुलझाने का वादा किया। हमें उन पर पूरा भरोसा है।"
    },
    {
        name: "सुनीता देवी (Sunita Devi)",
        role: "गृहणी (Homemaker)",
        image: "/images/gallery_villagers.png", // Using existing image as placeholder
        quote: "वृद्धा पेंशन के लिए जो मदद उन्होंने की है, वो कोई और नहीं कर सकता। वो सच में गांव के बेटे हैं।"
    },
    {
        name: "रमेश यादव (Ramesh Yadav)",
        role: "युवा कार्यकर्ता (Youth Worker)",
        image: "/images/gallery_villagers.png", // Using existing image as placeholder
        quote: "युवाओं के लिए खेल का मैदान और library बनवाने की उनकी सोच बहुत ही अच्छी है।"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                        जन आवाज़ (Voice of People)
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
                        ग्रामीणों का <span className="text-primary">विश्वास</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary relative"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-100" />

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-slate-100">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

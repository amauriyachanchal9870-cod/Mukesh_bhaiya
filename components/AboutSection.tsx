"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/profile.jpeg"
                                alt="Mukesh Bhaiya Candidate Profile"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <p className="text-white font-medium text-lg">जनता के बीच, जनता के साथ</p>
                            </div>
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-green-50 rounded-2xl transform rotate-3"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                            प्रत्याशी परिचय (About Candidate)
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                            मैं मुकेश भैया, <span className="text-primary">आपका अपना बेटा</span>
                        </h2>

                        <div className="space-y-4 text-lg text-slate-600">
                            <p>
                                मेरा जन्म और पालन-पोषण इसी गांव की मिट्टी में हुआ है। मैंने अपने गांव की समस्याओं को बचपन से करीब से देखा है - चाहे वो टूटी सड़कें हों या पानी की समस्या।
                            </p>
                            <p>
                                <strong>शिक्षा:</strong> मैंने [University Name] से स्नातक (Graduate) किया है। शिक्षा ने मुझे समस्याओं को सुलझाने का नया नजरिया दिया है।
                            </p>
                            <p>
                                <strong>सामाजिक कार्य:</strong> पिछले 10 वर्षों से मैं गांव के सामाजिक कार्यों में सक्रिय हूँ। कोरोना काल में राशन वितरण हो या गरीबों की मदद, मैं हमेशा आपके साथ खड़ा रहा हूँ।
                            </p>
                            <p className="italic border-l-4 border-primary pl-4 py-2 bg-slate-50 rounded-r-lg">
                                "मेरा राजनीति में आने का मकसद सत्ता नहीं, सेवा है। मैं चाहता हूँ कि हमारा गांव एक 'आदर्श ग्राम' बने जहाँ हर सुविधा उपलब्ध हो।"
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-green-600">10+</p>
                                <p className="text-sm text-green-800">वर्षों की समाज सेवा</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl text-center">
                                <p className="text-3xl font-bold text-blue-600">24/7</p>
                                <p className="text-sm text-blue-800">आपकी सेवा में</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}

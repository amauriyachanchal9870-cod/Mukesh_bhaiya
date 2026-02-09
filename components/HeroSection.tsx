"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left z-10"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4 border border-green-200">
                            Gram Pradhan Chunav 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-tight mb-6">
                            गांव का बेटा, <br />
                            <span className="text-primary">गांव के लिए</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            आइए मिलकर अपने गांव को आदर्श बनाएं। <br />
                            इस बार विकास और विश्वास को चुनें।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-primary text-white text-lg px-8 py-6 rounded-full shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all">
                                मुझे वोट दें (Give Support)
                            </Button>
                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.facebook.com/share/1B1FyqEnBS/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2 border-[#1877F2] text-[#1877F2] hover:bg-blue-50">
                                        <Facebook className="h-6 w-6" />
                                    </Button>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, rotate: -10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.instagram.com/mukeshmonathakur?igsh=dW96d3Z3ZHQzdXV5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2 border-[#E4405F] text-[#E4405F] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all">
                                        <Instagram className="h-6 w-6" />
                                    </Button>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" size="icon" className="h-14 w-14 rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-green-50">
                                        <MessageCircle className="h-6 w-6" />
                                    </Button>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Container with decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mx-auto lg:mr-0 max-w-md lg:max-w-full"
                    >
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 z-0"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

                        <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-200">
                                <Image
                                    src="/images/candidate_profile.png"
                                    alt="Mukesh Bhaiya Candidate"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                    <p className="font-bold text-xl">मुकेश भैया</p>
                                    <p className="text-sm opacity-90">भावी ग्राम प्रधान प्रत्याशी</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

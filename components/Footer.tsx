"use client";

import Link from "next/link";
import { Facebook, Youtube, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">मुकेश भैया</h3>
                        <p className="text-slate-300 mb-4">
                            गांव का बेटा, गांव के लिए। विकास और विश्वास का प्रतीक।
                        </p>
                        <p className="text-sm text-slate-400">
                            यह पोर्टफोलियो गांव के विकास के संकल्प के लिए बनाई गई है।
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold font-heading mb-4">महत्वपूर्ण लिंक</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                                    परिचय (About)
                                </Link>
                            </li>
                            <li>
                                <Link href="#vision" className="text-slate-300 hover:text-white transition-colors">
                                    विकास योजना (Vision)
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="text-slate-300 hover:text-white transition-colors">
                                    तस्वीरें (Gallery)
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                                    संपर्क (Contact)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold font-heading mb-4">संपर्क करें</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary mt-1" />
                                <span className="text-slate-300">ग्राम पंचायत - नारखी (तालुका), फिरोजाबाद, उत्तर प्रदेश</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary" />
                                <span className="text-slate-300">+91 98765 43210</span>
                            </li>
                            <li className="flex space-x-4 pt-2">
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.facebook.com/share/1B1FyqEnBS/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800 p-2 rounded-full hover:bg-[#1877F2] transition-colors"
                                >
                                    <Facebook className="h-5 w-5" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://www.instagram.com/mukeshmonathakur?igsh=dW96d3Z3ZHQzdXV5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800 p-2 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all"
                                >
                                    <Instagram className="h-5 w-5" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-800 p-2 rounded-full hover:bg-[#25D366] transition-colors"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </motion.a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Mukesh Bhaiya Election Campaign. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

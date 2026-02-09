"use client";

import { Phone, MessageCircle, MapPin, Calendar, Variable } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Election Details Banner Removed */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold font-heading text-slate-900 mb-6">
                            हमसे जुड़ें (Get in Touch)
                        </h3>
                        <p className="text-lg text-slate-600 mb-8">
                            अगर आपके पास गांव के विकास के लिए कोई सुझाव है या कोई समस्या है, तो मुझसे सीधा संपर्क करें।
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/50 transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">कॉल करें</p>
                                    <p className="text-lg font-bold text-slate-900">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/50 transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">व्हाट्सएप (WhatsApp)</p>
                                    <p className="text-lg font-bold text-slate-900">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/50 transition-colors">
                                <div className="bg-green-100 p-3 rounded-full text-green-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">कार्यालय</p>
                                    <p className="text-lg font-bold text-slate-900">ग्राम पंचायत - नारखी (तालुका)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Join Support Form or CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                    >
                        <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                            समस्या साझा करें (Share Your Problem)
                        </h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium text-slate-700 mb-1">आपका नाम (Your Name)</label>
                                <input type="text" id="userName" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="अपना नाम लिखें" />
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1">मोबाइल नंबर (Mobile Number)</label>
                                <input type="tel" id="mobile" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="आपका मोबाइल नंबर" />
                            </div>
                            <div>
                                <label htmlFor="problem" className="block text-sm font-medium text-slate-700 mb-1">समस्या (Problem)</label>
                                <textarea id="problem" rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="आपकी समस्या यहाँ लिखें..."></textarea>
                            </div>
                            <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-slate-200">
                                <input type="checkbox" id="support" className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                                <label htmlFor="support" className="text-slate-700 font-medium select-none">मैं समर्थन करता हूँ (I Support)</label>
                            </div>
                            <Button className="w-full text-lg mt-2 bg-primary hover:bg-primary-dark text-white shadow-lg transform hover:scale-[1.02] transition-all">
                                भेजें (Submit)
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

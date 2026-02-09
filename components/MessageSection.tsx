"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function MessageSection() {
    return (
        <section className="py-20 bg-green-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Quote className="h-12 w-12 text-yellow-400 mx-auto mb-6 opacity-80" />

                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 leading-relaxed">
                        "मेरे प्यारे ग्रामवासियों, <br />
                        यह चुनाव सिर्फ मेरा नहीं, <span className="text-yellow-400">आपका</span> है।"
                    </h2>

                    <div className="text-lg md:text-xl text-green-100 space-y-6 leading-relaxed">
                        <p>
                            हम सब जानते हैं कि हमारे गांव में कितनी क्षमता है, लेकिन सही नेतृत्व की कमी के कारण हम पीछे रह गए।
                            मैं आपसे वादा करता हूँ कि अगर आपने मुझे मौका दिया, तो मैं आपकी आवाज बनूँगा।
                        </p>
                        <p>
                            जाति और धर्म से ऊपर उठकर, आइए 'विकास' के लिए वोट करें।
                            आपका एक वोट हमारे बच्चों के भविष्य को बेहतर बना सकता है।
                        </p>
                    </div>

                    <div className="mt-10 font-heading">
                        <p className="text-2xl font-bold text-white">मुकेश भैया</p>
                        <p className="text-green-300">ग्राम प्रधान प्रत्याशी</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

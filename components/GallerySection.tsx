"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    { src: "/images/road_construction.png", alt: "Road Construction" },
    { src: "/images/gallery_villagers.png", alt: "Villagers Discussion" },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                        तस्वीरें बोलती हैं (Photo Gallery)
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
                        जनसंपर्क और <span className="text-primary">विकास कार्य</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 italic">"हमारा काम और आपका साथ, यही है हमारी पहचान।"</p>
                </div>
            </div>
        </section>
    );
}

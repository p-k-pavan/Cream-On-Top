'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    tag: string;
    rating: number;
    quote: string;
    fullQuote: string;
    image: string;
    cakeName: string;
}

export default function Testimonials() {
    const testimonials: TestimonialItem[] = [
        {
            id: 0,
            name: "Sophie Anderson",
            role: "Bride",
            tag: "Wedding Cake",
            rating: 5,
            quote: "The wedding cake was a work of art! The lemon elderflower flavor was light and perfect.",
            fullQuote: "The wedding cake was a work of art! The lemon elderflower flavor was fresh, light, and had our guests talking for days. The detailing of the sugar flowers perfectly matched my bridal bouquet. Absolute perfection!",
            image: "/category/GETEAUK CAKE.png",
            cakeName: "Vanilla & Elderflower Tiered Cake"
        },
        {
            id: 1,
            name: "Liam Chen",
            role: "Birthday Host",
            tag: "Custom Order",
            rating: 5,
            quote: "The chocolate hazelnut cake was incredibly rich and the design matched my sketch exactly.",
            fullQuote: "Ordered a custom chocolate hazelnut cake for my partner's birthday. The design was exactly like my sketch, and the taste was exceptionally rich. It was moist, decadent, and decorated with stunning artistic piping.",
            image: "/category/BROWINES.png",
            cakeName: "Choco-Hazelnut Praline Dream"
        },
        {
            id: 2,
            name: "Elena Rodriguez",
            role: "Daily Sweet Lover",
            tag: "Daily Pastries",
            rating: 5,
            quote: "Their red velvet cupcakes are heaven. The frosting melts in your mouth.",
            fullQuote: "Their red velvet cupcakes are absolutely heaven. The cream cheese frosting is light, perfectly whipped, and melts in your mouth. I visit every week and am always greeted with the smell of freshly baked goods!",
            image: "/category/CUP CAKE.png",
            cakeName: "Signature Red Velvet Cupcakes"
        },
        {
            id: 3,
            name: "Marcus Sterling",
            role: "Event Director",
            tag: "Desserts & Platters",
            rating: 5,
            quote: "The dessert platters were the highlight of our gala. Exquisite gourmet flavors!",
            fullQuote: "The gourmet dessert platters were the highlight of our corporate gala. Every single pastry, mousse, and tartlet was crafted to absolute perfection. Exquisite flavors, stunning styling, and extremely easy coordination.",
            image: "/category/DESSERTS.png",
            cakeName: "Artisanal Dessert Platters"
        },
        {
            id: 4,
            name: "Diana Prince",
            role: "Pastry Connoisseur",
            tag: "Daily Pastries",
            rating: 5,
            quote: "Best chocolate chip croissants in Bangalore. Hands down!",
            fullQuote: "Best chocolate chip croissants in Bangalore. Hands down! The pastry layers are thin, crisp, and incredibly buttery. Combined with rich dark chocolate, it is the ultimate morning treat.",
            image: "/category/CUP CAKE.png",
            cakeName: "Pain au Chocolat & Croissants"
        },
        {
            id: 5,
            name: "Arthur Dent",
            role: "Birthday Planner",
            tag: "Custom Order",
            rating: 5,
            quote: "The custom galaxy cake was out of this world. Highly recommend!",
            fullQuote: "The custom galaxy cake was out of this world. The mirror glaze was flawless, the stars were sparkling, and the flavor combination of coconut and pineapple was outstanding! Guests loved it.",
            image: "/category/GETEAUK CAKE.png",
            cakeName: "Galaxy Coconut & Mango Cake"
        }
    ];

    const [activeId, setActiveId] = useState<number>(0);
    const activeTestimonial = testimonials[activeId];

    return (
        <section className="relative overflow-hidden bg-[#f7f4e7] py-24">
            {/* Ambient Background Glows */}
            <div className="absolute top-24 -left-48 h-96 w-96 rounded-full bg-[#95CFE5]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-24 -right-48 h-96 w-96 rounded-full bg-[#e3d1be]/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="mb-16 text-center lg:text-left">
                    <span className="text-xs font-semibold uppercase tracking-[4px] text-[#C5A880]">
                        Sweet Stories
                    </span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#151e1f] sm:text-4xl md:text-5xl">
                        Loved by Our Patrons
                    </h2>
                    <p className="mt-4 text-base text-[#2e3d40] md:text-lg max-w-2xl">
                        Every cake has a story. Here is what our lovely community has to say about their handcrafted sweet experiences.
                    </p>
                </div>

                {/* Split Interactive Layout */}
                <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
                    
                    {/* Left: The Spotlight Featured Card */}
                    <div className="w-full lg:w-5/12 flex">
                        <motion.div 
                            layout
                            className="relative flex flex-col justify-between w-full rounded-3xl bg-white p-8 shadow-lg border border-white/50 backdrop-blur-sm"
                        >
                            {/* Polaroid Image Wrapper */}
                            <div className="relative overflow-hidden rounded-2xl bg-[#EFEEE3] p-4 flex flex-col items-center shadow-inner">
                                <span className="absolute top-3 right-3 rounded-full bg-[#95CFE5]/20 px-3 py-1 text-xs font-medium text-[#2d4f59]">
                                    {activeTestimonial.tag}
                                </span>
                                
                                <div className="relative h-48 w-48 flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTestimonial.id}
                                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="h-full w-full flex items-center justify-center"
                                        >
                                            <Image
                                                src={activeTestimonial.image}
                                                alt={activeTestimonial.cakeName}
                                                width={160}
                                                height={160}
                                                className="object-contain drop-shadow-2xl"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                
                                <span className="mt-3 text-xs tracking-wider text-gray-500 uppercase font-medium">
                                    {activeTestimonial.cakeName}
                                </span>
                            </div>

                            {/* Quote Section */}
                            <div className="mt-8 flex-grow flex flex-col justify-center min-h-[140px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTestimonial.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-lg italic leading-relaxed text-[#151e1f]">
                                            &ldquo;{activeTestimonial.fullQuote}&rdquo;
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Author Info */}
                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                                <div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTestimonial.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h4 className="font-bold text-[#151e1f] text-base">
                                                {activeTestimonial.name}
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                {activeTestimonial.role}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="flex gap-0.5">
                                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-amber-400 text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Scrollable Grid of Testimonials */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-4 lg:max-h-[580px] lg:overflow-y-auto lg:pr-2 scroll-smooth [scrollbar-width:thin] [scrollbar-color:#95CFE5_transparent]">
                        {testimonials.map((item) => {
                            const isActive = item.id === activeId;

                            return (
                                <motion.div
                                    key={item.id}
                                    onMouseEnter={() => setActiveId(item.id)}
                                    onClick={() => setActiveId(item.id)}
                                    className={`relative flex flex-col justify-between cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                                        isActive 
                                            ? "bg-[#1d3338] text-white shadow-xl translate-x-2 border-l-4 border-[#95CFE5]" 
                                            : "bg-white/60 text-[#151e1f] shadow-sm hover:shadow-md hover:bg-white border-l-4 border-transparent"
                                    }`}
                                    whileHover={{ scale: isActive ? 1 : 1.01 }}
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-sm">
                                                    {item.name}
                                                </span>
                                                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                                                    isActive ? "bg-white/10 text-[#95CFE5]" : "bg-[#95CFE5]/15 text-[#2d4f59]"
                                                }`}>
                                                    {item.tag}
                                                </span>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <span key={i} className="text-amber-400 text-xs">★</span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className={`text-sm leading-relaxed ${isActive ? "text-white/80" : "text-gray-600"}`}>
                                            &ldquo;{item.quote}&rdquo;
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}

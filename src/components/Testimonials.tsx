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
            fullQuote: "The gourmet dessert platters were the highlight of our corporate gala. Every single pastry, mousse, and transient was crafted to absolute perfection. Exquisite flavors, stunning styling, and extremely easy coordination.",
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

    const [activeId, setActiveId] = useState<number>(1); // Start with index 1 active (Liam Chen)

    const handlePrev = () => {
        setActiveId((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActiveId((prev) => (prev + 1) % testimonials.length);
    };

    const prevId = (activeId - 1 + testimonials.length) % testimonials.length;
    const nextId = (activeId + 1) % testimonials.length;

    const prevItem = testimonials[prevId];
    const currentItem = testimonials[activeId];
    const nextItem = testimonials[nextId];

    return (
        <section className="relative overflow-hidden bg-[#f7f4e7] py-24">
            {/* Ambient Background Glows */}
            <div className="absolute top-24 -left-48 h-96 w-96 rounded-full bg-[#95CFE5]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-24 -right-48 h-96 w-96 rounded-full bg-[#e3d1be]/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                
                {/* Header with Title, Arrows, and Dots */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center justify-between w-full max-w-4xl px-4 gap-4">
                        {/* Left Arrow */}
                        <button 
                            onClick={handlePrev}
                            className="p-3 rounded-full hover:bg-black/5 transition-all active:scale-95 cursor-pointer flex-shrink-0"
                            aria-label="Previous Testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-[#151e1f]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#151e1f] font-sans px-2 leading-tight select-none">
                            What Our Clients Say About Us
                        </h2>

                        {/* Right Arrow */}
                        <button 
                            onClick={handleNext}
                            className="p-3 rounded-full hover:bg-black/5 transition-all active:scale-95 cursor-pointer flex-shrink-0"
                            aria-label="Next Testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-[#151e1f]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex items-center gap-3 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveId(idx)}
                                className={`rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === activeId 
                                        ? "w-3.5 h-3.5 bg-[#151e1f]" 
                                        : "w-2 h-2 bg-gray-400/70 hover:bg-gray-600"
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Cards Carousel Layout */}
                <div className="relative min-h-[460px] flex items-center justify-center overflow-visible py-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-14 w-full"
                        >
                            {/* Left Card (Mirrored Shape, Shadow Left) */}
                            <div className="hidden md:block">
                                <Card 
                                    item={prevItem} 
                                    position="left" 
                                    onClick={handlePrev} 
                                />
                            </div>

                            {/* Center Card (Normal Shape, Shadow Right, Scaled Up) */}
                            <div className="block">
                                <Card 
                                    item={currentItem} 
                                    position="center" 
                                    onClick={() => {}} 
                                />
                            </div>

                            {/* Right Card (Mirrored Shape, Shadow Right) */}
                            <div className="hidden md:block">
                                <Card 
                                    item={nextItem} 
                                    position="right" 
                                    onClick={handleNext} 
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}

interface CardProps {
    item: TestimonialItem;
    position: "left" | "center" | "right";
    onClick: () => void;
}

function Card({ item, position, onClick }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Color Constants from user uploads
    const shadowColor = "#FF008A"; // Hot pink accent
    const leftCardBg = "#FFEFF8"; // Light pink
    const centerCardBg = "white"; // Pure white
    const rightCardBg = "#FFEFF8"; // Light pink (symmetrical to Left Card)

    // Style A (Center Card) Paths
    const styleAShadowPath = "M100.511 0C69.1794 7.93582 60.4727 16.4044 55 36.0747L73.0476 378H406.536C427.274 366.931 433.637 350.44 434 299.577C423.705 197.51 411.141 139.329 392.412 36.0747C382.968 21.7603 380.915 12.2025 343.762 10.9793L100.511 0Z";
    const styleABodyPath = "M0 337.695L37.5199 55.5321C46.4988 34.2465 54.4995 24.4931 81.0431 13.5078C164.926 5.63801 232.871 3.95855 346.684 0C376.017 8.8112 393.61 13.5281 408.217 55.5321C411.7 169.345 415.367 250.574 414.971 324.938C413.772 357.978 406.418 371.127 380.452 384.222C223.097 413.091 136.987 428.655 63.0335 433C18.4371 419.114 0.327199 399.961 0 337.695Z";

    // Style B (Left & Right Cards) Paths
    const styleBShadowPath = "M33.8197 76.0574C26.8797 153.644 23.4599 195.959 21.7966 260.278C24.1834 285.263 28.724 296.059 46.7766 305.352C119.414 336.602 170.093 360.658 229.548 383.255C254.602 385.876 264.346 380.517 274.168 366.98C294.365 317.369 304.155 261.46 323.225 191.206C328.102 163.793 324.087 151.886 303.783 137.3C228.166 93.4208 117.874 32.5593 117.874 32.5593C117.874 32.5593 97.0395 19.0071 83.5624 20.0581C67.5933 22.8922 60.2289 27.3606 50.5733 37.0984C39.3974 48.6162 35.7579 57.1579 33.8197 76.0574Z";
    const styleBBodyPath = "M37.6868 77.5861C40.7256 155.423 42.7452 197.828 49.3207 261.832C54.883 286.306 60.7669 296.433 79.8597 303.342C155.897 325.046 209.237 342.423 271.092 357.232C296.277 356.627 305.255 350.066 313.265 335.384C326.953 283.598 329.512 226.896 339.442 154.78C340.773 126.968 335.267 115.672 313.265 103.803C232.658 69.9537 115.489 23.6961 115.489 23.6961C115.489 23.6961 93.0918 12.9196 79.8597 15.6855C64.3842 20.5384 57.6517 25.9119 49.3207 36.8045C39.7095 49.657 37.1921 58.5939 37.6868 77.5861Z";

    // Setup dimension and layout parameters based on position
    let viewBox = "0 0 434 433";
    let cardBg = centerCardBg;
    let containerClass = "";
    let shadowElement = null;
    let cardElement = null;
    let imgWidth = 434;
    let imgHeight = 433;
    let paddingClass = "px-9 py-10";
    let textMaxWidth = "max-w-[240px]";
    const clipPathId = `card-clip-${position}`;

    if (position === "left") {
        viewBox = "0 0 346 404";
        cardBg = leftCardBg;
        imgWidth = 346;
        imgHeight = 404;
        paddingClass = "px-7 py-8";
        textMaxWidth = "max-w-[190px]";
        containerClass = "w-[274px] h-[320px] sm:w-[290px] h-[340px] lg:w-[300px] lg:h-[350px] scale-95 md:opacity-75 hover:opacity-100 hover:scale-[0.97] z-10";
        
        shadowElement = (
            <path d={styleBShadowPath} fill={shadowColor} />
        );
        cardElement = (
            <path 
                d={styleBBodyPath} 
                fill={cardBg} 
                stroke="#151e1f" 
                strokeWidth="1.5" 
                strokeOpacity="0.1" 
            />
        );
    } else if (position === "center") {
        viewBox = "0 0 434 433";
        cardBg = centerCardBg;
        imgWidth = 434;
        imgHeight = 433;
        paddingClass = "px-9 py-10";
        textMaxWidth = "max-w-[240px]";
        containerClass = "w-[320px] h-[320px] sm:w-[340px] h-[340px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] scale-100 md:scale-105 z-20";
        
        shadowElement = (
            <path d={styleAShadowPath} fill={shadowColor} />
        );
        cardElement = (
            <path 
                d={styleABodyPath} 
                fill={cardBg} 
                stroke="#151e1f" 
                strokeWidth="1.5" 
                strokeOpacity="0.1" 
            />
        );
    } else if (position === "right") {
        viewBox = "0 0 346 404";
        cardBg = rightCardBg;
        imgWidth = 346;
        imgHeight = 404;
        paddingClass = "px-7 py-8";
        textMaxWidth = "max-w-[190px]";
        containerClass = "w-[274px] h-[320px] sm:w-[290px] h-[340px] lg:w-[320px] lg:h-[370px] scale-95 md:opacity-75 hover:opacity-100 hover:scale-[0.97] z-10";

        // Mirror Style B paths for the right card to make it symmetrical to Left
        shadowElement = (
            <g transform="scale(-1, 1) translate(-346, 0)">
                <path d={styleBShadowPath} fill={shadowColor} />
            </g>
        );
        cardElement = (
            <g transform="scale(-1, 1) translate(-346, 0)">
                <path 
                    d={styleBBodyPath} 
                    fill={cardBg} 
                    stroke="#151e1f" 
                    strokeWidth="1.5" 
                    strokeOpacity="0.1" 
                />
            </g>
        );
    }

    return (
        <div 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative cursor-pointer transition-all duration-500 ease-out select-none ${containerClass}`}
        >
            {/* SVG Card Layer */}
            <svg 
                viewBox={viewBox} 
                className="absolute inset-0 w-full h-full drop-shadow-md overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {position === "left" && (
                        <clipPath id={clipPathId}>
                            <path d={styleBBodyPath} />
                        </clipPath>
                    )}
                    {position === "center" && (
                        <clipPath id={clipPathId}>
                            <path d={styleABodyPath} />
                        </clipPath>
                    )}
                    {position === "right" && (
                        <clipPath id={clipPathId}>
                            <g transform="scale(-1, 1) translate(-346, 0)">
                                <path d={styleBBodyPath} />
                            </g>
                        </clipPath>
                    )}
                </defs>

                {/* Solid Shape Shadow behind */}
                {shadowElement}

                {/* Card Background Shape */}
                {cardElement}

                {/* Clipped Image (visible on hover only) */}
                <g clipPath={`url(#${clipPathId})`}>
                    <image 
                        href={item.image} 
                        width={imgWidth} 
                        height={imgHeight} 
                        preserveAspectRatio="xMidYMid slice"
                        style={{
                            transition: 'opacity 0.5s ease-in-out, transform 0.7s ease-out',
                            opacity: isHovered ? 1 : 0,
                            transformOrigin: 'center',
                            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                        }}
                    />
                </g>
            </svg>

            {/* Normal State: HTML Text Content overlay (fades out on hover) */}
            <div 
                className={`absolute inset-0 flex flex-col justify-between transition-all duration-500 ease-in-out ${paddingClass} ${
                    isHovered ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                }`}
            >
                {/* Header: Name and Role */}
                <div className="flex flex-col items-center text-center mt-2">
                    <h3 className="text-lg md:text-xl font-bold text-[#151e1f] tracking-tight">
                        {item.name}
                    </h3>
                    <p className="text-[11px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                        {item.role}
                    </p>
                </div>

                {/* Quote and Body */}
                <div className="flex flex-col items-center text-center mb-6 flex-grow justify-center">
                    {/* Double Quote Icon */}
                    <span className="text-3xl md:text-4xl text-[#151e1f] font-serif leading-none mb-2">
                        “
                    </span>
                    <p className={`text-xs md:text-sm text-[#2e3d40] leading-relaxed line-clamp-5 md:line-clamp-6 font-medium ${textMaxWidth}`}>
                        {item.quote}
                    </p>
                </div>
            </div>

            {/* Hover State: Double Quote Overlay (only for center active card as shown in mockup) */}
            {position === 'center' && (
                <div 
                    className={`absolute inset-x-0 top-12 flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                >
                    <span className="text-5xl text-[#151e1f] font-serif leading-none drop-shadow-sm select-none">
                        “
                    </span>
                </div>
            )}
        </div>
    );
}


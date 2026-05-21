'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Framer Motion variants
    const containerVariants: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
            },
        },
    };

    const bottomVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.4,
            },
        },
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-[#111819] pt-24 pb-12 text-[#eff1f1]">


           
            <div className="absolute bottom-46 md:bottom-27 left-6 right-6 select-none text-center pointer-events-none z-0">
                <span className="text-[10vw] font-black uppercase tracking-widest text-white/4 leading-none block font-sans">
                    CREAM ON TOP
                </span>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20"
            >
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    
                
                    <motion.div 
                        variants={itemVariants} 
                        className="w-full lg:w-4/12 flex flex-col items-center text-center lg:items-start lg:text-left"
                    >
                        <Image
                            src="/svggenie-1779104335173.svg"
                            alt="Cream On Top"
                            width={620}
                            height={620}
                            priority
                            className="w-52 -mt-14 sm:w-60 md:w-64"
                        />
                        
                        <p className="text-sm leading-relaxed text-gray-400 -mt-2 max-w-sm">
                            Where baking is an art, ingredients are premium, and every creation is iced to absolute perfection. Crafting sweet memories for all your celebrations.
                        </p>
                    </motion.div>

    
                    <div className="w-full lg:w-8/12 flex flex-col gap-8">
                        
                       
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col items-center justify-between gap-4 border-b border-white/5 pb-6 sm:flex-row"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#e3d1be]">
                                Connect With Us
                            </span>
                            <div className="flex items-center gap-4">
                                {[
                                    { href: "#", icon: <FaXTwitter className="text-sm" /> },
                                    { href: "#", icon: <FaInstagram className="text-sm" /> },
                                    { href: "#", icon: <FaYoutube className="text-sm" /> },
                                    { href: "#", icon: <FaLinkedinIn className="text-sm" /> },
                                ].map((social, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={social.href}
                                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-[#95CFE5] hover:bg-[#95CFE5]"
                                        >
                                            {social.icon}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16">
                            
                      
                            <motion.div 
                                variants={itemVariants}
                                className="rounded-3xl border border-white/6 bg-white/2 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] shadow-lg flex flex-col"
                            >
                                <h4 className="mb-4 font-semibold uppercase tracking-[2px] text-[#e3d1be]">
                                    Navigation
                                </h4>
                                <div className="flex flex-col gap-3 text-sm text-gray-400">
                                    {[
                                        { href: "/", label: "Home" },
                                        { href: "/about", label: "About Us" },
                                        { href: "/designs", label: "Designs" },
                                        { href: "/faqs", label: "FAQs" },
                                        { href: "/blog", label: "Blog" },
                                        { href: "/contact", label: "Contact" },
                                    ].map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className="rounded-3xl border border-white/6 bg-white/2 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] shadow-lg flex flex-col"
                            >
                                <h4 className="mb-4 font-semibold uppercase tracking-[2px] text-[#e3d1be]">
                                    Reach Us
                                </h4>
                                <div className="flex flex-col gap-4 text-sm text-gray-400">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-gray-600 font-semibold tracking-wider">Email</span>
                                        <a
                                            href="mailto:contact@creamontop.in"
                                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                                        >
                                            contact@creamontop.in
                                        </a>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-gray-600 font-semibold tracking-wider">Phone</span>
                                        <a
                                            href="tel:+919743008816"
                                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                                        >
                                            +91 97430 08816
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className="rounded-3xl border border-white/6 bg-white/2 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] shadow-lg flex flex-col"
                            >
                                <h4 className="mb-4 font-semibold uppercase tracking-[2px] text-[#e3d1be]">
                                    Cream On Top
                                </h4>
                                <div className="flex flex-col gap-4 text-sm text-gray-400">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase text-gray-600 font-semibold tracking-wider">Address</span>
                                        <p className="leading-relaxed text-gray-500">
                                            8th Main Road, Karesandra-Banashankari 2nd Stage, Bangalore-560070, Karnataka
                                        </p>
                                    </div>
                             
                                </div>
                            </motion.div>

                        </div>

                    </div>

                </div>

                <motion.div
                    variants={bottomVariants}
                    className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/5 pt-8 text-xs text-gray-500 md:flex-row"
                >
                    <p>
                        © {currentYear} CREAM ON TOP. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/security"
                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                        >
                            Security
                        </Link>

                        <Link
                            href="/terms"
                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                        >
                            Terms of Service
                        </Link>

                        <Link
                            href="/privacy"
                            className="transition-colors duration-300 hover:text-[#95CFE5]"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
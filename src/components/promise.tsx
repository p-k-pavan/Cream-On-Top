'use client';

import { motion, Variants } from "framer-motion";

export default function Promise() {

    const container: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item: Variants = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative overflow-hidden py-16 md:py-24">

            {/* Background Shape */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 h-100 w-100 rounded-full"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

             
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >

                    <span className="text-sm text-[#575752] uppercase tracking-[4px] ">
                        Why Choose Us
                    </span>

                    <h1 className="mt-3 text-[#181816]">
                        Crafted With Love & Perfection
                    </h1>

                    <p className="mx-auto mt-5 max-w-3xl text-[#363633]">
                        Every cake is freshly baked using premium ingredients,
                        artistic designs, and a passion for making your celebrations unforgettable.
                    </p>

                </motion.div>

                {/* Features */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10"
                >

                    {/* Card 1 */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}
                        transition={{ duration: 0.3 }}
                        className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    >

                        <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-[#95CFE5] group-hover:bg-[#95CFE5] group-hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                                <path d="M20 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
                                <path d="M17 15v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5" />
                                <path d="M14 8V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3" />
                                <circle cx="12" cy="2" r="1" className="fill-current" />
                                <path d="M4 21h16" />
                            </svg>
                        </motion.div>

                        <h3 className="text-lg font-bold uppercase text-[#181816]">
                            Custom Designs
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                            Unique cake creations designed specially for your moments.
                        </p>

                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}
                        transition={{ duration: 0.3 }}
                        className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    >

                        <motion.div
                            whileHover={{ rotate: -8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-[#95CFE5] group-hover:bg-[#95CFE5] group-hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                                <circle cx="12" cy="8" r="7" />
                                <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                                <polygon points="12,5 13.5,8 17,8.5 14.5,10.5 15.2,14 12,12.2 8.8,14 9.5,10.5 7,8.5 10.5,8" className="fill-none" />
                            </svg>
                        </motion.div>

                        <h3 className="text-lg font-bold uppercase text-[#181816]">
                            Premium Quality
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                            Made with rich flavors, premium ingredients, and expert craftsmanship.
                        </p>

                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}
                        transition={{ duration: 0.3 }}
                        className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    >

                        <motion.div
                            whileHover={{ rotate: 8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-[#95CFE5] group-hover:bg-[#95CFE5] group-hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                                <path d="M12 2v3" />
                                <path d="M9 3v2" />
                                <path d="M15 3v2" />
                                <path d="M5 13h14a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1Z" />
                                <path d="M4 13a4 4 0 0 1 8-3 4 4 0 0 1 8 3" />
                                <circle cx="12" cy="7.5" r="1" className="fill-current" />
                            </svg>
                        </motion.div>

                        <h3 className="text-lg font-bold uppercase text-[#181816]">
                            Freshly Baked
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                            Soft, delicious cakes baked fresh daily with love and care.
                        </p>

                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        variants={item}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                        }}
                        transition={{ duration: 0.3 }}
                        className="group flex flex-col items-center rounded-3xl bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    >

                        <motion.div
                            whileHover={{ rotate: -8, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EFEEE3] text-[#95CFE5] group-hover:bg-[#95CFE5] group-hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                                <path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8" />
                                <path d="M14 6h4l4 4v6a2 2 0 0 1-2 2h-2" />
                                <circle cx="7.5" cy="18.5" r="2.5" />
                                <circle cx="16.5" cy="18.5" r="2.5" />
                                <path d="M2 9h2" />
                                <path d="M1 13h4" />
                            </svg>
                        </motion.div>

                        <h3 className="text-lg font-bold uppercase text-[#181816]">
                            Reliable Delivery
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[#575752] ">
                            Fresh cakes delivered safely and on time for every celebration.
                        </p>

                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
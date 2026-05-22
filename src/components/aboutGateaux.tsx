'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutGateaux() {
    const [isShortScreen, setIsShortScreen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkHeight = () => {
            setIsShortScreen(window.innerHeight < 640);
        };
        checkHeight();
        window.addEventListener("resize", checkHeight);
        return () => window.removeEventListener("resize", checkHeight);
    }, []);

    const showShortScreenLayout = mounted && isShortScreen;

    return (
        <section className={`relative bg-linear-to-b from-[#d7f8ff] via-[#eef9fc] to-[#f7f4e7] max-w-screen overflow-x-clip ${
            showShortScreenLayout ? "py-12 h-auto" : "min-h-screen py-24 md:py-60"
        }`}>

        

            {/* Title */}
            <div className={
                showShortScreenLayout
                    ? "relative text-center mb-8 z-20"
                    : "absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-20"
            }>
                <h1 className=" text-[#151e1f] text-center">
                    About Our Gateaux
                </h1>
            </div>

            {/* Left Image - 4:3 */}
            <motion.div
                initial={{ opacity: 0, x: -80, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={
                    showShortScreenLayout
                        ? "relative mx-auto my-6 z-10 flex justify-center"
                        : "absolute bottom-16 md:bottom-28 left-0 md:left-20 z-30"
                }
            >
                <div className="relative">

                    <div className="absolute inset-0 bg-black/15 translate-x-5 translate-y-5 rounded-[36px]" />

                    <div className="relative bg-[#f8f5ef] p-4 rounded-[36px] border border-black/10 shadow-2xl">

                        <div className="border border-[#d8c3a5] rounded-[28px] p-3">

                            <Image
                                src="/about/image4.webp"
                                alt="About Gateaux"
                                width={580}
                                height={420}
                                className="w-68 sm:w-80 md:w-105 lg:w-130 
                                aspect-4/3 object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Image - 3:4 */}
            <motion.div
                initial={{ opacity: 0, x: 80, rotate: 6 }}
                whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className={
                    showShortScreenLayout
                        ? "relative mx-auto my-6 z-20 flex justify-center mt-12"
                        : "absolute right-16 md:right-64 top-1/3 md:top-3/5 -translate-y-1/2 z-20 mt-12 md:mt-0"
                }
            >
                <div className="relative">

                    {/* Bow */}
                    <div className="absolute -top-10 -right-8 z-30 rotate-20">
                        <div className="relative w-20 h-20">

                            <div className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-[#f3d3dc] border border-[#d4a6b2] -translate-x-1/2 -translate-y-1/2 z-20" />

                            <div className="absolute left-0 top-3 w-10 h-14 bg-[#f7dce4] rounded-full rotate-[-25deg] border border-[#d4a6b2]" />

                            <div className="absolute right-0 top-3 w-10 h-14 bg-[#f7dce4] rounded-full rotate 25 border border-[#d4a6b2]" />

                            <div className="absolute left-6.5 bottom-0 w-4 h-10 bg-[#f7dce4] rotate-[8deg] rounded-b-full border border-[#d4a6b2]" />

                            <div className="absolute right-6.5 bottom-0 w-4 h-10 bg-[#f7dce4] rotate-[-8deg] rounded-b-full border border-[#d4a6b2]" />
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-black/15 translate-x-5 translate-y-5 rounded-[40px]" />

                    <div className="relative bg-[#f8f5ef] p-4 rounded-[40px] border border-black/10 shadow-2xl">

                        <div className="border border-[#d8c3a5] rounded-4xl p-3">

                            <Image
                                src="/about/image2.webp"
                                alt="About Gateaux"
                                width={400}
                                height={600}
                                className="w-55 sm:w-62.5 md:w-70 lg:w-[320px] 
                                aspect-3/4 object-cover rounded-[28px]"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={
                    showShortScreenLayout
                        ? "relative text-center px-6 w-full mt-8 pb-8 z-30"
                        : "absolute -bottom-65 md:-bottom-24 left-1/2 -translate-x-1/2 z-30 text-center px-6 w-full"
                }
            >
                <div className="relative max-w-2xl mx-auto">

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-[#151e1f]/20" />
                        <div className="w-2 h-2 rounded-full bg-[#151e1f]/40" />
                        <div className="h-px w-16 bg-[#151e1f]/20" />
                    </div>

                    <p className="text-[#151e1f] text-lg sm:text-xl md:text-2xl lg:text-3xl 
                                    leading-relaxed md:leading-loose font-medium tracking-wide">
                        Our Gateaux are crafted with buttery sponge layers delicately soaked
                        in syrup and finished with silky whipped cream creating a luxurious
                        dessert experience in every bite.
                    </p>

                    <p className="mt-5 text-sm md:text-base tracking-[0.3em] uppercase text-[#151e1f]/50">
                        Handcrafted • Elegant • Premium
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
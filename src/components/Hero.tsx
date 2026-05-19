'use client';

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

     
            <Image
                src="/mobile-hero.webp"
                alt="Cream On Top Bakery"
                fill
                priority
                sizes="100vw"
                className="object-cover md:hidden"
            />

         
            <Image
                src="/hero (2).webp"
                alt="Cream On Top Bakery"
                fill
                priority
                sizes="100vw"
                className="hidden object-cover object-center md:block"
            />

     
            <div className="absolute inset-0 z-10 bg-black/35" />

       
            <div className="relative z-20 flex h-full items-center ">

                <div className="
        flex
        w-full
        max-w-6xl
        flex-col
        items-center
        text-center
        md:items-start
        md:text-left
    ">

                    {/* Logo */}
                    <div className="relative flex justify-center md:justify-start">

                        <Image
                            src="/Untitled (1).svg"
                            alt="Cream On Top"
                            width={620}
                            height={620}
                            priority
                            className="
                    h-auto
                    w-70
                    sm:w-90
                    md:w-115
                    lg:w-155
                    object-contain
                    -mt-32
                    sm:-mt-96
                    md:-mt-16
                "
                        />

                    </div>

                    {/* Text + Buttons */}
                    <div className="
            mt-100
            sm:mt-100
            md:mt-4
            flex
            flex-col
            items-center
            md:items-center
        ">

                        <p className="
                max-w-xs
                sm:max-w-lg
                md:max-w-xl
                text-sm
                sm:text-base
                md:text-xl
                font-medium
                leading-relaxed
                text-white
                text-center
                px-4 md:px-8
            ">
                            Handcrafted luxury cakes designed for weddings,
                            birthdays, and unforgettable celebrations.
                        </p>

                        {/* Buttons */}
                        <div className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                md:justify-start
                gap-4
            ">

                            <button className="
                    cursor-pointer
                    rounded-full
                    border
                    border-white
                    bg-[#95CFE5]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-[#7fc4df]
                    hover:bg-white
                    hover:text-[#7fc4df]
                    md:px-8
                    md:text-base
                ">
                                Explore Cakes
                            </button>

                            <button className="
                    cursor-pointer
                    rounded-full
                    border
                    border-[#7fc4df]
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-[#7fc4df]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-white
                    hover:bg-[#7fc4df]
                    hover:text-white
                    md:px-8
                    md:text-base
                ">
                                Custom Orders
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
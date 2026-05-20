'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const baseItems = [
    {
        title: "GAETEAUK CAKE",
        image: "/category/GETEAUK CAKE.png",
    },
    {
        title: "DESSERTS",
        image: "/category/DESSERTS.png",
    },
    {
        title: "Browines",
        image: "/category/BROWINES.png",
    },
    {
        title: "CUP CAKE",
        image: "/category/CUP CAKE.png",
    }
];

const items = [...baseItems, ...baseItems];

export default function SweetCollection() {

    const { scrollYProgress } = useScroll();


    const rotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 360]
    );

    const counterRotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -360]
    );
    const [radius, setRadius] = useState(260);

useEffect(() => {
  const updateRadius = () => {
    setRadius(window.innerWidth < 768 ? 200 : 260);
  };

  updateRadius();

  window.addEventListener("resize", updateRadius);

  return () => window.removeEventListener("resize", updateRadius);
}, []);

    return (
        <section className="relative h-[220vh] bg-linear-to-b from-[#f7f4e7] to-[#d7f8ff]">

            {/* Sticky Section */}
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

                {/* Heading */}
                <div className="absolute top-12 z-30 text-center mb-12">

                    <h1 className="
                        text-[#151e1f]
                    ">
                        Explore Our Sweet
                        <br />
                        Collection
                    </h1>

                    <p className="
                        mt-4
                        mb-16
                        text-base
                        text-[#2e3d40]
                        sm:text-lg
                        md:text-2xl
                    ">
                        Click on any category to discover our delicious creations
                    </p>

                </div>

                {/* Static Half Circle */}
                <div
                    className="
                        relative
                        mt-132
                        flex
                        h-150
                        w-150
                        items-center
                        justify-center
                        sm:h-187.5
                        sm:w-187.5
                    "
                    style={{
                        clipPath: "polygon(0% 50%, 0% 0%, 100% 0%, 100% 50%)",
                    }}
                >
                    {/* Solid blue Circle */}
                    <div className="
                        absolute
                        h-150
                        w-150
                        rounded-full
                        bg-[#ffffff]
                        sm:h-187.5
                        sm:w-187.5
                    "></div>

                    {/* Rotating Container */}
                    <motion.div
                        style={{ rotate }}
                        className="
        absolute
        h-150
        w-150   
        sm:h-187.5
        sm:w-187.5
    "
                    >
                        {items.map((item, index) => {

                            const angle = (index / items.length) * 2 * Math.PI + (Math.PI / 8);

                            const x = Math.cos(angle - Math.PI) * radius;
                            const y = Math.sin(angle - Math.PI) * radius;

                            return (
                                <motion.div
                                    key={index}
                                    className="
                    absolute
                    flex
                    flex-col
                    items-center
                    cursor-pointer
                "
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        x: "-50%",
                                        y: "-50%",
                                        rotate: counterRotate,
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                >

                                    <Link href={`/title`} >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={160}
                                            height={160}
                                            className="object-contain drop-shadow-xl w-25 h-25 md:w-40 md:h-40"
                                        />
                                    </Link>



                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Center Circle */}
                <div className="
                    absolute
                    z-20
                    mt-132
                    flex
                    h-50
                    w-50
                    items-center
                    justify-center
                    rounded-full
                    border-24
                    border-[#ffffff]
                    bg-[#151e1f]
                    sm:h-70
                    sm:w-70
                ">



                    <div className="text-center ">

                        <h2 className="
                            text-[#ffffff] text
                        ">
                            Cream
                        </h2>

                        <h3 className="
                            
                            
                            text-[#ffffff]
                            
                        ">
                            on Top
                        </h3>

                    </div>

                </div>

            </div>
        </section>
    );
}

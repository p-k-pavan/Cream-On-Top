
'use client';
import SweetCollection from "@/components/Collection";
import Hero from "@/components/Hero";
import Promise from "@/components/promise";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AboutGateaux from "@/components/aboutGateaux";
import BestSelling from "@/components/bestSelleing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="grow">
        <Hero />
        <Promise />
        <SweetCollection />
        <div className="pt-20 md:pt-12 pb-60 md:pb-20 bg-linear-to-b from-[#d7f8ff]  to-[#f7f4e7] ">
          <AboutGateaux />
        </div>
        <BestSelling />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

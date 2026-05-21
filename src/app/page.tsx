
'use client';
import SweetCollection from "@/components/Collection";
import Hero from "@/components/Hero";
import Promise from "@/components/promise";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex-grow">
        <Hero />
        <Promise />
        <SweetCollection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

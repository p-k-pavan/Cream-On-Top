
'use client';
import SweetCollection from "@/components/Collection";
import Hero from "@/components/Hero";
import Promise from "@/components/promise";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Promise />
      <SweetCollection />
    </div>
  );
}

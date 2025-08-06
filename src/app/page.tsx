'use client'
import About from "@/components/About";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useRef } from "react";

export default function Home() {

  const HomeRef = useRef<HTMLHeadingElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">
      <Header scrollToSection={scrollToSection} HomeRef={HomeRef}/>
      <Hero ref={HomeRef}/>
      <About />
      <Categories />
    </div>
  );
}

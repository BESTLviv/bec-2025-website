'use client'
import About from "@/components/About";
import Categories from "@/components/Categories";
import Bot from "@/components/Bot";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Whybec from "@/components/Whybec";
import { useRef } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const HomeRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} refs={{HomeRef, AboutRef}}/>
      <Hero ref={HomeRef}/>
      <About ref={AboutRef}/>
      <Categories />
      <Whybec />
      <Bot />
      <Footer />
    </div>
  );
}
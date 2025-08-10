'use client'
import About from "@/components/About";
import Categories from "@/components/Categories";
import Bot from "@/components/Bot";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Whybec from "@/components/Whybec";
import { useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import { useSearchParams, useRouter } from "next/navigation";

export default function Home() {
  const HomeRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (searchParams.get("scroll") === "about") {
      scrollToSection(AboutRef);

      setTimeout(() => {
        router.replace("/", { scroll: false });
      }, 500);
    }
  }, [searchParams, router]);

  return (
    <div>
      <Header scrollToSection={scrollToSection} refs={{ HomeRef, AboutRef }} />
      <Hero ref={HomeRef} />
      <About ref={AboutRef} />
      <Categories />
      <Whybec />
      <Bot />
      <Footer />
    </div>
  );
}

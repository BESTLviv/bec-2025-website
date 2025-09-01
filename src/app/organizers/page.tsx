'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import OrganizersSwiper from '@/components/OrganizersSwiper';
import Image from 'next/image';
import { useRef } from 'react';

export default function Organizers() {
  const HomeRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative">
      <Image
        fill
        src="/general/main-bg.png"
        alt="."
        className="h-full w-full absolute top-0 left-0 -z-10"
      />
      <Header scrollToSection={scrollToSection} refs={{ HomeRef, AboutRef }} />
      <div className="flex flex-col items-center justify-center gap-20 pt-35">
        <h1 className="text-center text-5xl font-semibold">ОРГАНІЗАТОРИ</h1>

        <div className="relative border-2 border-bec mt-1 max-w-[90%] sm:max-w-[80%]">
          <div className="bg-bec-transparent px-6 py-10 space-y-15 text-[18px]">
            <div className="flex lg:flex-row flex-col gap-10 sm:gap-20">
              <div className="flex flex-col gap-8 max-w-[400px]">
                <h1 className="uppercase font-semibold text-4xl">BEST Lviv</h1>
                <p>
                  <span className="font-bold">BEST LVIV</span> (Board of
                  European Students of Technology) – осередок міжнародної
                  неприбуткової громадської організації, який об’єднує студентів
                  технічних спеціальностей.{' '}
                </p>
                <p>
                  Нашою місією є{' '}
                  <span className="font-bold">розвиток студентів</span> через
                  обмін знаннями та співпраці компаній, університетів та
                  студентів Європи.
                </p>
              </div>
              <hr className="block sm:hidden w-full bg-[#F5A020]" />
              <Image
                width={300}
                height={150}
                alt="."
                src="/organizers/best-logo.svg"
                className="mx-auto my-auto w-[250px] h-[120px] md:w-[300px] md:h-[150px]"
              />
            </div>
          </div>
          <div className="hidden md:block px-38 py-1.5 border-1 border-bec bg-bec absolute -top-2 left-1/2 -translate-x-1/2 z-1"></div>
          <div className="hidden md:block px-38 py-1.5 border-1 border-bec bg-bec absolute -bottom-2 left-1/2 -translate-x-1/2 z-1"></div>
        </div>
      </div>

      <div className="max-w-[80%] mx-auto mt-20 relative">
        <div className="absolute -left-5 top-0 h-full w-1 border-1 bg-bec border-bec" />
        <p className="font-extrabold text-3xl leading-[1.1] py-1">
          КОМАНДА
          <br />
          ОРГАНІЗАТОРІВ
          <br />
          ВЕС 2025
        </p>
      </div>

      <OrganizersSwiper />

      <Footer />
    </div>
  );
}

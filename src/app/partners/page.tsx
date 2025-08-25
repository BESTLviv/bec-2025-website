'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { logos } from '@/data/data';

export default function Partners() {
  const HomeRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative">
      <Image
        fill
        src="/general/main-bg.png"
        alt="."
        className="h-full w-full absolute top-0 left-0 -z-10"
      />
      <Header scrollToSection={scrollToSection} refs={{ HomeRef, AboutRef }} />
      <div className="flex flex-col items-center justify-center h-[125vh] gap-15 pt-20">
        <h1 className="uppercase font-semibold text-3xl sm:text-4xl md:text-5xl">
          Нас підтримали
        </h1>

        <div className="flex flex-col gap-1 justify-center items-center bg-bec-transparent border border-bec p-7">
          <div className="grid grid-cols-2 gap-10 sm:gap-20 max-w-[400px] justify-items-center">
            {logos.slice(0, 2).map((logo, idx) => (
              <div
                key={idx}
                className="w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] lg:w-[130px] lg:h-[120px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
              >
                <Link href={logo.link} target="_blank">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-around items-center gap-10 sm:gap-20">
            {windowWidth >= 800 &&
              logos.slice(2, 5).map((logo, idx) => (
                <div
                  key={idx + 2}
                  className="w-[170px] h-[110px] lg:w-[210px] lg:h-[130px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            {windowWidth >= 300 &&
              windowWidth < 800 &&
              logos.slice(2, 4).map((logo, idx) => (
                <div
                  key={idx + 2}
                  className="w-[130px] h-[90px] sm:w-[150px] sm:h-[110px] lg:w-[210px] lg:h-[130px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
          </div>

          <div className="flex w-full justify-around items-center gap-10 sm:gap-20">
            {windowWidth >= 800 &&
              logos.slice(5, 8).map((logo, idx) => (
                <div
                  key={idx + 5}
                  className="w-[170px] h-[110px] lg:w-[210px] lg:h-[130px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            {windowWidth >= 300 &&
              windowWidth < 800 &&
              logos.slice(4, 6).map((logo, idx) => (
                <div
                  key={idx + 5}
                  className="w-[130px] h-[90px] sm:w-[150px] sm:h-[110px] lg:w-[210px] lg:h-[130px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-20 max-w-[400px] justify-items-center">
            {windowWidth >= 800 &&
              logos.slice(8, 10).map((logo, idx) => (
                <div
                  key={idx + 8}
                  className="w-[110px] h-[90px] lg:w-[130px] lg:h-[120px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
            {windowWidth >= 300 &&
              windowWidth < 800 &&
              logos.slice(6, 8).map((logo, idx) => (
                <div
                  key={idx + 8}
                  className="w-[130px] h-[90px] sm:w-[150px] sm:h-[110px] lg:w-[130px] lg:h-[120px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
          </div>
          <div className="flex w-full justify-around items-center gap-10 sm:gap-20">
            {windowWidth >= 300 &&
              windowWidth < 800 &&
              logos.slice(8, 10).map((logo, idx) => (
                <div
                  key={idx + 8}
                  className="w-[130px] h-[90px] sm:w-[150px] sm:h-[110px] lg:w-[130px] lg:h-[120px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer"
                >
                  <Link href={logo.link} target="_blank">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

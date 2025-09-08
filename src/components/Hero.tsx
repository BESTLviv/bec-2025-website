import { Audiowide } from 'next/font/google';
import Image from 'next/image';
import HeroButton from './ui/HeroButton';
import React from 'react';
import Link from 'next/link';

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="relative w-full h-screen overflow-hidden" ref={ref}>
      <Image
        fill
        alt="hero background"
        src="/hero/hero-bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-100"
      />

      <div className="container mx-auto px-4 h-full pt-35 sm:pt-30 md:pt-50">
        <div className="z-10 max-w-[1000px] space-y-3">
          <p
            className={`text-[38px] sm:text-[70px] lg:text-[80px] uppercase font-bold tracking-wide leading-[1.0] ${awide.className}`}
          >
            BEST Engineering Competition
          </p>
          <div className="flex gap-2 items-center ">
            <Image
              width={45}
              height={30}
              alt="hero background"
              src="/hero/calendar.svg"
              className="w-[30px] lg:w-[45px] flex items-center justify-center"
            />
            <p className="text-[26px] sm:text-3xl lg:text-4xl text-bec font-semibold tracking-wider pb-1 lg:pb-2">
              24–28 жовтня
            </p>
          </div>
          <p className="text-2xl sm:text-[28px] lg:text-3xl max-w-[900px]">
            Інженери не чекають на майбутнє — вони його будують
          </p>
          <div className="flex-col justify-center items-center md:flex-row flex gap-2 md:gap-12 mt-2 md:mt-20 lg:mt-10">
            <Link href="#">
              <HeroButton text="ЗАРЕЄСТРУВАТИСЯ" />
            </Link>
            <Link href="/becomepartner">
              <HeroButton text="СТАТИ ПАРТНЕРОМ" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

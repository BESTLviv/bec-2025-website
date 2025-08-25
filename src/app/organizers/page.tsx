'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { organizersArr } from '@/data/data';

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

        <div className="relative border-2 border-bec mt-1 max-w-[80%]">
          <div className="bg-bec-transparent px-6 py-10 space-y-15 text-[18px]">
            <div className="flex gap-20">
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
              <Image
                width={300}
                height={150}
                alt="."
                src="/organizers/best-logo.svg"
              />
            </div>
          </div>
          <div className="px-38 py-1.5 border-1 border-bec bg-bec absolute -top-2 left-1/2 -translate-x-1/2 z-1"></div>
          <div className="px-38 py-1.5 border-1 border-bec bg-bec absolute -bottom-2 left-1/2 -translate-x-1/2 z-1"></div>
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

      <div className="relative w-full h-[500px] flex items-center justify-center pb-20 px-30">
        <Swiper
          spaceBetween={200}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          watchOverflow={true} // щоб не ламалось коли менше слайдів
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className=""
        >
          {organizersArr.map(organizer => (
            <SwiperSlide
              key={organizer.key}
              className="
                mt-10 max-w-[300px] max-h-[680px] flex flex-col items-center justify-center text-center h-full pt-2
              "
            >
              <Image
                width={300}
                height={417}
                alt="."
                src={organizer.src}
                className="
                w-[300px] h-[417px] mx-auto
                [.swiper-slide-prev_&]:h-[350px] [.swiper-slide-prev_&]:w-[250px]
                [.swiper-slide-next_&]:h-[350px] [.swiper-slide-next_&]:w-[250px]
                [.swiper-slide-prev_&]:mt-[65px] [.swiper-slide-next_&]:mt-[65px]
                [_.swiper-slide-active_&]:drop-shadow-[0_0_25px_var(--color-bec-glow)] 
                "
              />
              <div
                className="
                flex flex-col items-center justify-center p-3 text-center z-10 border-2 
                border-bec slider-bg h-[142px] 
                [_.swiper-slide-prev_&]:h-[100px] 
                [_.swiper-slide-next_&]:h-[100px] 
              "
              >
                <h1
                  className="
                  font-bold text-2xl 
                  [_.swiper-slide-prev_&]:hidden 
                  [_.swiper-slide-next_&]:hidden
                "
                >
                  {organizer.name}
                </h1>
                <div
                  className="
                  w-50 h-0.5 bg-bec mx-auto my-2 
                  [_.swiper-slide-prev_&]:hidden 
                  [_.swiper-slide-next_&]:hidden
                "
                />
                <h1 className="font-bold text-[22px]">{organizer.position}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Image
          fill
          src="/organizers/bec-big-logo.svg"
          alt="."
          className="absolute top-0 left-0 -z-10 w-[400px] h-[400px] opacity-70"
        />
      </div>

      <Footer />
    </div>
  );
}

'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Image from 'next/image';
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Organizers (){

  const organizersArr = [
    {name: "Тарас Тарновецький", position: "Content Responsible (TD)", src: "/organizers/taras.png", key: '1' },
    {name: "Соломія Ногаль", position: "Corporate Relations Responsible", src: "/organizers/sol-cr.png", key: '2' },
    {name: "Дмитро Мартинюк", position: "Corporate Relations Responsible", src: "/organizers/tomas.png", key: '3' },
    {name: "Максим Палій", position: "HR Responsible", src: "/organizers/max.png", key: '4' },
    {name: "Назар Дʼяченко", position: "Logistics Responsible", src: "/organizers/nazar.png", key: '5' },
    {name: "Соломія Данилишин", position: "Content Responsible (ID)", src: "/organizers/sol-id.png", key: '6' },
    {name: "Софія Курдибан", position: "PR Responsible ", src: "/organizers/sofia.png", key: '7' },
    {name: "Владислав Присяжнюк", position: "IT Responsible", src: "/organizers/vlad.png", key: '8' },
    {name: "Руслан Явір", position: "Mentor", src: "/organizers/ruslan.png", key: '9' },
    {name: "Христина Паращук", position: "DS Responsible", src: "/organizers/kris.png", key: '10' },
    {name: "Денис Браздецький", position: "Main Organizer", src: "/organizers/denys.png", key: '11' },
  ]

  const HomeRef = useRef<HTMLHeadingElement>(null);
  const AboutRef = useRef<HTMLHeadingElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='relative'>
      <Image 
        fill
        src="/general/main-bg.png"
        alt='.'
        className='h-full w-full absolute top-0 left-0 -z-10'
      />
      <Header scrollToSection={scrollToSection} refs={{HomeRef, AboutRef}}/>
      <div className="flex flex-col items-center justify-center gap-20 pt-35">

        <h1 className='text-center text-5xl font-semibold'>ОРГАНІЗАТОРИ</h1>

        <div className="relative border-2 border-bec mt-1 max-w-[80%]">
          <div className="bg-bec-transparent px-6 py-10 space-y-15 text-[18px]">
            <div className="flex gap-20">
              <div className="flex flex-col gap-8 max-w-[400px]">
                <h1 className='uppercase font-semibold text-4xl'>BEST Lviv</h1>
                <p><span className='font-bold'>BEST LVIV</span> (Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. </p>
                <p>Нашою місією є <span className='font-bold'>розвиток студентів</span> через обмін знаннями та співпраці компаній, університетів та студентів Європи.</p>
              </div>
              <Image
                width={300}
                height={150}
                alt='.'
                src="/organizers/best-logo.svg"
              />  
            </div>              
          </div>
          <div className="px-38 py-1.5 border-1 border-bec bg-bec absolute -top-2 left-1/2 -translate-x-1/2 z-1"></div>
          <div className="px-38 py-1.5 border-1 border-bec bg-bec absolute -bottom-2 left-1/2 -translate-x-1/2 z-1"></div>
        </div>


      </div>

      <div className="max-w-[80%] mx-auto mt-20 relative">
        <div className="absolute -left-5 top-0 h-full w-1 border-1 bg-bec border-bec"/>
        <p className='font-extrabold text-3xl leading-[1.1] py-1'>КОМАНДА<br/>ОРГАНІЗАТОРІВ<br/>ВЕС 2025</p>
      </div>

      <div className="w-full h-[500px] flex items-center justify-center pb-20 px-30">
        <Swiper
          spaceBetween={200}
          slidesPerView={3}
          loop={true}
          centeredSlides={true} // або false, якщо не треба центр
          watchOverflow={true} // щоб не ламалось, коли менше слайдів
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 } // чітко 3 на великих екранах
          }}
        >
          {organizersArr.map((organizer) => (
            <SwiperSlide key={organizer.key} className="max-w-[400px] max-h-[580px] flex flex-col items-center justify-center text-center h-full">
              <Image
                width={370}
                height={430}
                alt='.'
                src={organizer.src}
                className='slider-glow'
              />
              <div className="p-3 text-center z-10 border-2 border-bec slider-bg">
                <h1 className='font-bold text-2xl'>{organizer.name}</h1>
                <div className="w-50 h-0.5 bg-bec mx-auto my-2"></div>
                <h1 className='font-bold text-2xl'>{organizer.position}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />

    </div>
  )
}

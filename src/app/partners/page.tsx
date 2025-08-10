'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react'

const logos = [
  {src: "/sponsors/openlab.png", alt: "openlab"},
  {src: "/sponsors/bestshot.png", alt: "openlab"},
  {src: "/sponsors/fujikura.png", alt: "fujikura"},
  {src: "/sponsors/renesas.png", alt: "orenesas"},
  {src: "/sponsors/globalologic.png", alt: "globalologic"},
  {src: "/sponsors/hator.png", alt: "hator"},
  {src: "/sponsors/kernel.png", alt: "kernel"},
  {src: "/sponsors/kness.png", alt: "kness"},
  {src: "/sponsors/startup.png", alt: "startup"},
  {src: "/sponsors/gorich.png", alt: "gorich"},
]

export default function Partners (){
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
      <div className="flex flex-col items-center justify-center h-[125vh] gap-15 pt-20">

        <h1 className='uppercase font-semibold text-5xl'>Нас підтримали</h1>

        <div className="flex flex-col gap-1 justify-center items-center bg-bec-transparent border border-bec p-7">
          <div className="grid grid-cols-2 gap-20 max-w-[400px] justify-items-center">
            {logos.slice(0, 2).map((logo, idx) => (
              <div key={idx} className="w-[130px] h-[120px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer">
                <Link href='#' target='_blank'>
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-around items-center gap-20">
            {logos.slice(2, 5).map((logo, idx) => (
              <div key={idx + 2} className="w-[230px] h-[150px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer">
                <Link href='#' target='_blank'>
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-around items-center gap-20">
            {logos.slice(5, 8).map((logo, idx) => (
              <div key={idx + 5} className="w-[230px] h-[150px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer">
                <Link href='#' target='_blank'>
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-20 max-w-[400px] justify-items-center">
            {logos.slice(8, 10).map((logo, idx) => (
              <div key={idx + 8} className="w-[130px] h-[150px] relative transition-all duration-300 hover:scale-110 ease-in-out cursor-pointer">
                <Link href='#' target='_blank'>
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react'

export default function Organizers (){
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
      <div className="flex flex-col items-center justify-center gap-20 mt-20">
        <h1 className='text-center text-5xl font-semibold'>ОРГАНІЗАТОРИ</h1>
        
      </div>
      <Footer />
    </div>
  )
}

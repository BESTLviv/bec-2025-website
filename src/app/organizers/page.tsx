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
      <div className="flex flex-col items-center justify-center h-[70vh] gap-20 mt-20">
        <h1 className='text-center text-5xl font-semibold'>ЗВ'ЯЖІТЬСЯ З НАМИ</h1>
        <div className="flex gap-20">
          <Image 
            width={280}
            height={280}
            alt='.'
            src="/becomepartner/bec-logo.svg"
          />

          <div className="h-full w-0.5 border-2 bg-bec border-bec"/>

          <div className="flex flex-col">
            <h1 className='font-bold text-[42px]'>Денис Браздецький</h1>
            <h2 className='font-light text-3xl mt-2 mb-5'>Головний організатор</h2>
            <div className="h-0.5 w-full border bg-bec-white border-bec-white mb-5"/>
            <div className="flex gap-3 mb-5 text-2xl items-center">
              <Image
                width={40}
                height={40}
                alt='.'
                src="/becomepartner/mail.svg"
              />
              <Link href='mailto:denys.brazdetskyi@best-eu.org' className='hover:underline'>denys.brazdetskyi@best-eu.org</Link>
            </div>
            <div className="flex gap-3 text-2xl items-center">
              <Image
                width={40}
                height={40}
                alt='.'
                src="/becomepartner/phone.svg"
              />
              <Link href='tel:+380664493594' className='hover:underline'>+380 66 449 3594</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

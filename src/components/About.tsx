import Image from 'next/image'
import React from 'react'
import Slider from './Slider'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className='relative mb-50' ref={ref}>
      <div className='pt-25 flex flex-col justify-center w-full items-center'>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-bec-white font-semibold relative p-10 max-w-[400px]">
            ПРО ІВЕНТ
            <Image
              width={20}
              height={20}
              src="/about/top-el.svg"
              alt='.'
              className='w-full absolute top-7.5 left-0'
            />
          </h2>
          <div className="relative text-2xl">
            <div className="absolute -left-5 top-0 h-full w-1 border-1 bg-bec border-bec"/>
            <div className="p-4 bg-bec-transparent border-1 border-bec max-w-3xl">
              <p>
                <span className='text-bec font-semibold'>BEC</span> – змагання, які мають на меті дати можливість молодим інженерам продемонструвати 
                свої знання, командну роботу, практичні та теоретичні навички для розв'язання задач, які є реальними викликами сучасності. 
              </p>
              <p className='mt-5'>
                Учасники зможуть проявити себе у двох категоріях: <span className='text-bec font-semibold'>Team Design</span> (TD) 
                та <span className='text-bec font-semibold'>Innovative Design</span> (ID).
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-bec-white font-semibold relative p-10 max-w-[400px]">
            НАША ЦІЛЬ
            <Image
              width={20}
              height={20}
              src="/about/top-el.svg"
              alt='.'
              className='w-full absolute top-7.5 left-0'
            />
          </h2>
          <div className="relative text-2xl">
            <div className="absolute -left-5 top-0 h-full w-1 border-1 bg-bec border-bec"/>
            <div className="p-4 bg-bec-transparent border-1 border-bec max-w-3xl">
              <p>
                Сформувати спільноту компетентних і вмотивованих студентів-інженерів, готових розв'язувати нестандартні задачі.
              </p>
            </div>
          </div>
        </div>

        <Slider />
        
      </div>
      <Image
        fill
        src="/general/main-bg.png"
        alt='.'
        className='w-full absolute top-0 left-0 -z-10'
      />
    </section>
  )
});

export default About

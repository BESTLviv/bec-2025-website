import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='relative'>
      <div className='pt-25 flex flex-col justify-center w-full items-center'>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl text-bec-white font-semibold relative p-10">
            ПРО ІВЕНТ
            <Image
              width={20}
              height={20}
              src="/about/top-el.svg"
              alt='.'
              className='w-full absolute top-7.5 left-0'
            />
          </h2>
          <div className="">
            
          </div>
        </div>
      </div>
      <Image
        fill
        src="/general/main-bg.png"
        alt='.'
        className='w-full absolute top-0 left-0 -z-10'
      />
    </section>
  )
}

export default About
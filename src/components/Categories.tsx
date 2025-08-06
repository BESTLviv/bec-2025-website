import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <section className=''>
      <div className="relative flex items-center justify-center flex-col space-y-2">
        <h2 className='font-semibold text-3xl'>Тема цьогорічних змагань:</h2>
        <h1 className='font-semibold text-4xl uppercase'>повоєнне відновлення</h1>
        <Image 
          width={20}
          height={20}
          src="/categories/topic.svg"
          alt='.'
          className='w-full absolute top-0 left-0 -z-1'
        />
      </div>
      <div className="mt-30">
        <h1 className=''>КАТЕГОРІЇ</h1>
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

export default Categories
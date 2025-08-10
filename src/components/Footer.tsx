import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-bec-bg'>
      <nav className='py-4 flex justify-between items-center mx-15'>
        <h2 className='font-semibold text-3xl'>2025</h2>
        <Image 
          src='/footer/best_logo.svg'
          alt='.'
          width={100}
          height={100}
          className='ml-20'
        />
        <div className="flex gap-3">
          <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.instagram.com/best_lviv/" target='_blank'>
            <Image 
              src='/footer/inst.svg'
              alt='.'
              width={40}
              height={40}
            />
          </Link>
          <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://t.me/bestlviv" target='_blank'>
            <Image 
              src='/footer/telegram.svg'
              alt='.'
              width={35}
              height={35}
            />
          </Link>
          <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.linkedin.com/company/bestlviv/posts/?feedView=all" target='_blank'>
            <Image 
              src='/footer/linkedin.svg'
              alt='.'
              width={40}
              height={40}
            />
          </Link>
          <Link className='flex items-center transition-all duration-200 ease-in-out hover:scale-110' href="https://www.facebook.com/BEST.Lviv/?locale=uk_UA" target='_blank'>
            <Image 
              src='/footer/facebook.svg'
              alt='.'
              width={20}
              height={30}
            />
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
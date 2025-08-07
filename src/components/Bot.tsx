import Image from 'next/image'
import React from 'react'

const Bot = () => {
  return (
    <section className='mt-40'>
      <h1 className='uppercase text-center text-5xl font-semibold'>BEST Engineering BOT</h1>
      <div className="mt-30 text-center relative">
        <p className='text-[22px] tracking-wider'>
          У Telegram-боті ти зможеш <span className="font-semibold">зареєструватися на змагання.</span><br/>
          А також не забувай, що тобі потрібна <span className="font-semibold">команда з 4 людей.</span>
        </p>
        <p className='text-[22px] mt-4 tracking-wider'>
          Тож якщо не маєш своєї переможної четвірки – <span className="font-semibold">бот<br/> допоможе знайти її!</span>
        </p>
        <Image
          width={20}
          height={20}
          src="/bot/title.svg"
          alt='.'
          className='w-full absolute -bottom-37 left-0 -z-1'
        />
      </div>
    </section>
  )
}

export default Bot
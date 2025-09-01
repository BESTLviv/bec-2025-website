import Image from 'next/image';
import React from 'react';
import AnimatedCircle from './ui/AnimatedCircle';

const Bot = () => {
  return (
    <section className="pt-40 h-[1240px] relative">
      <h1 className="uppercase text-center text-4xl px-2 md:text-[52px] font-semibold">
        BEST Engineering BOT
      </h1>
      <div className="mt-20 3xl:mt-30 text-center relative px-2">
        <p className="text-[22px] tracking-wider">
          У Telegram-боті ти зможеш{' '}
          <span className="font-bold">зареєструватися на змагання.</span>
          <br />А також не забувай, що тобі потрібна{' '}
          <span className="font-semibold">команда з 4 людей.</span>
        </p>
        <p className="text-[22px] mt-4 tracking-wider">
          Тож якщо не маєш своєї переможної четвірки –{' '}
          <span className="font-semibold">
            бот
            <br /> допоможе знайти її!
          </span>
        </p>
        <Image
          width={20}
          height={20}
          src="/bot/title.svg"
          alt="."
          className="hidden xl:block w-full absolute -bottom-30 xl:-bottom-37 2xl:-bottom-37 3xl:-top-38 left-0 -z-1"
        />
        <Image
          width={20}
          height={20}
          src="/bot/title-1.svg"
          alt="."
          className="hidden md:block xl:hidden w-full absolute -bottom-20 sm:-bottom-40 md:-bottom-60 lg:-bottom-80 left-0 -z-1"
        />
      </div>
      <div className="flex items-center mt-40 relative justify-center">
        <div className="absolute top-10 left-15 px-10 py-3">
          <h1 className="font-bold text-[18px]">
            Натискай на логотип,
            <br /> щоб приєднатись
          </h1>
          <Image
            width={50}
            height={50}
            src="/bot/tooltip.svg"
            alt="."
            className="absolute w-full top-2 -left-7"
          />
        </div>
        <div className="absolute top-50 sm:top-70 md:top-50 lg:top-10 left-1/3.5">
          <AnimatedCircle />
        </div>
      </div>

      <Image
        fill
        src="/general/bg-3.png"
        alt="."
        className="object-cover -z-11 h-[110vh] opacity-70"
      />
    </section>
  );
};

export default Bot;

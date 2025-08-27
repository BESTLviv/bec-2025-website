import Image from 'next/image';
import React from 'react';

interface HeaderButtonProps {
  text: string;
}

const HeroButton = ({ text }: HeaderButtonProps) => {
  return (
    <button className="relative group cursor-pointer w-[300px] lg:w-[350px] pt-12 flex items-center justify-center">
      <Image
        width={570}
        height={50}
        src="/hero/hero-btn.svg"
        alt="button background"
        className="absolute top-6 lg:top-3 left-0 transition-opacity duration-300 ease-in-out opacity-100 "
      />
      <span className="relative z-8 transition-transform duration-300 ease-in-out group-hover:scale-102 text-2xl">
        {text}
      </span>
    </button>
  );
};

export default HeroButton;

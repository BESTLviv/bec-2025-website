import Image from 'next/image';
import React from 'react';

interface HeaderButtonProps {
  text: string;
}

const HeaderButton = ({ text }: HeaderButtonProps) => {
  return (
    <button className="relative group cursor-pointer p-4 flex items-center justify-center text-base">
      <Image
        width={170}
        height={50}
        src="/header/btn.svg"
        alt="button background"
        className="absolute top-2.5 left-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
      />
      <Image
        width={160}
        height={50}
        src="/header/btn-hover.svg"
        alt="button background hover"
        className="absolute top-2.5 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
      />
      <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-102">
        {text}
      </span>
    </button>
  );
};

export default HeaderButton;

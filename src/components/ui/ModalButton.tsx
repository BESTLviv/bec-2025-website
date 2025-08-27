import Image from 'next/image';
import React from 'react';

interface HeaderButtonProps {
  text: string;
}

const ModalButton = ({ text }: HeaderButtonProps) => {
  return (
    <button className="relative group cursor-pointer p-4 xl:p-4 flex items-center justify-center">
      <Image
        width={220}
        height={50}
        src="/general/modal-btn.svg"
        alt="button background"
        className="absolute top-3 left-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
      />
      <Image
        width={220}
        height={50}
        src="/general/modal-btn-hover.svg"
        alt="button background hover"
        className="absolute top-3 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-102"
      />
      <span className="p-2 uppercase 2xl:text-[18px] text-[14px] relative z-10 font-semibold transition-transform duration-300 ease-in-out group-hover:scale-102">
        {text}
      </span>
    </button>
  );
};

export default ModalButton;

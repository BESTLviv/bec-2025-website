import React from 'react';

interface HeaderButtonProps {
  text: string;
}

const HeaderButton = ({ text }: HeaderButtonProps) => {
  return (
    <button
      className="relative text-white py-2 px-6 text-base font-medium bg-transparent overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      <span className="relative z-10">{text}</span>
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 200 50"
        style={{ display: 'block' }}
      >
        <path
          d="M0,10 L0,40 L10,50 L190,50 L200,40 L200,10 L190,0 L10,0 Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
};

export default HeaderButton;

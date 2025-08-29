import Image from 'next/image';
import React from 'react';
import ModalWindow from './ui/ModalWindow';

import { studentsAdditional, partnersAdditional } from '@/data/data';
import Link from 'next/link';
import ModalButton from './ui/ModalButton';

const Whybec = () => {
  const [openTooltip, setOpenTooltip] = React.useState<
    'student' | 'partner' | null
  >(null);

  return (
    <div className="gap-10 xl:gap-0 flex justify-around mt-30 xl:mt-20 pb-10 px-3 md:mx-25 z-9 flex-wrap">
      <div className="flex flex-col max-w-[350px] md:max-w-[480px]">
        <h1 className="text-2xl md:text-[32px]">
          ЧОМУ ПОТРІБНО ОБРАТИ{' '}
          <span className="font-semibold italic text-bec">BEC</span>, ЯКЩО ВИ -{' '}
          <span className="font-semibold text-bec">КОМПАНІЯ</span>
        </h1>
        <div className="relative border-2 border-bec mt-5">
          <div className="bg-bec-transparent p-4 space-y-15 text-[18px]">
            <p>
              Ставши партнером, Ви отримаєте доступ до талановитих студентів,
              зміцните свій бренд і позиції на ринку та разом з нами
              формуватимете майбутнє галузі інженерії.
            </p>
            <div
              className="flex gap-1 cursor-pointer mr-80"
              onClick={() => setOpenTooltip('student')}
            >
              <p className="text-bec">Детальніше</p>
              <Image
                src="/general/details.svg"
                width={22}
                height={22}
                alt="."
              />
            </div>
          </div>
          <div className="px-22 py-1.5 border-1 border-bec bg-bec max-w-[100px] absolute -top-2 left-1/3"></div>
        </div>
        {openTooltip === 'student' && (
          <ModalWindow onClose={() => setOpenTooltip(null)}>
            <div className="bg-[#181003] text-becwhite text-sm border-3 border-bec p-6 w-full shadow-lg relative z-10">
              <button
                onClick={() => setOpenTooltip(null)}
                className="absolute -top-1 right-1 540px:top-1 540px:right-3 text-white text-4xl cursor-pointer font-extralight hover:scale-125 transition-all ease-in"
                aria-label="Close tooltip"
              >
                ×
              </button>
              {studentsAdditional.map(item => (
                <div key={item.src} className="mb-2">
                  <h2 className="text-xl text-bec font-bold mb-3 flex gap-2 items-center">
                    <Image
                      width={24}
                      height={24}
                      src={item.src}
                      alt={item.title}
                    />
                    {item.title}
                  </h2>
                  <p className="text-xs md:text-[16px]">{item.text}</p>
                  <hr
                    className={`mt-2 bg-[#676565] 
                      ${
                        item.title === 'Твоя ідея – майбутній стартап'
                          ? 'hidden'
                          : ''
                      }
                    `}
                  />
                </div>
              ))}
              <Link href="#" className="w-full flex justify-center">
                <ModalButton text="Зареєструватись" />
              </Link>
            </div>
          </ModalWindow>
        )}
      </div>

      <div className="hidden xl:block h-[346px] w-0.5 border bg-bec border-bec" />

      <div className="flex flex-col max-w-[350px] md:max-w-[480px]">
        <h1 className="text-2xl md:text-[32px]">
          ЧОМУ ПОТРІБНО ОБРАТИ{' '}
          <span className="font-semibold italic text-bec">BEC</span>, ЯКЩО ТИ -{' '}
          <span className="font-semibold text-bec">СТУДЕНТ</span>
        </h1>
        <div className="relative border-2 border-bec mt-5">
          <div className="bg-bec-transparent p-4 space-y-15 text-[18px]">
            <p>
              Інженерні змагання – це можливість втілити ідеї, попрацювати в
              команді над реальними технічними викликами, завести корисні
              знайомства та зробити впевнений крок у професійну сферу.
            </p>
            <div
              className="flex gap-1 cursor-pointer mr-80"
              onClick={() => setOpenTooltip('partner')}
            >
              <p className="text-bec">Детальніше</p>
              <Image
                src="/general/details.svg"
                width={22}
                height={22}
                alt="."
              />
            </div>
          </div>
          <div className="px-22 py-1.5 border-1 border-bec bg-bec max-w-[100px] absolute -top-2 left-1/3"></div>
        </div>
        {openTooltip === 'partner' && (
          <ModalWindow onClose={() => setOpenTooltip(null)}>
            <div className="bg-[#181003] text-becwhite text-sm border-3 border-bec p-6 w-full shadow-lg relative z-10">
              <button
                onClick={() => setOpenTooltip(null)}
                className="absolute -top-1 right-1 540px:top-1 540px:right-3 text-white text-4xl cursor-pointer font-extralight hover:scale-125 transition-all ease-in"
                aria-label="Close tooltip"
              >
                ×
              </button>
              {partnersAdditional.map(item => (
                <div key={item.src} className="mb-2">
                  <h2 className="text-xl text-bec font-bold mb-3 flex gap-2 items-center">
                    <Image
                      width={24}
                      height={24}
                      src={item.src}
                      alt={item.title}
                    />
                    {item.title}
                  </h2>
                  <p className="text-xs md:text-[16px]">{item.text}</p>
                  <hr
                    className={`mt-2 bg-[#676565] 
                      ${
                        item.title === 'Твоя ідея – майбутній стартап'
                          ? 'hidden'
                          : ''
                      }
                    `}
                  />
                </div>
              ))}
              <Link
                href="/becomepartner/"
                className="w-full flex justify-center"
              >
                <ModalButton text="Стати Партнером" />
              </Link>
            </div>
          </ModalWindow>
        )}
      </div>
    </div>
  );
};

export default Whybec;

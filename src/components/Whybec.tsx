import Image from 'next/image'
import React from 'react'

const Whybec = () => {
  return (
    <div className='flex justify-around pt-20 pb-10 mx-25'>

      <div className="flex flex-col max-w-[480px]">
        <h1 className='text-[32px]'>
          ЧОМУ ПОТРІБНО ОБРАТИ <span className='font-semibold italic text-bec'>BEC</span>,
          ЯКЩО ВИ - <span className='font-semibold text-bec'>КОМПАНІЯ</span>
        </h1>
        <div className="relative border-2 border-bec mt-5">
          <div className="bg-bec-transparent p-4 space-y-15 text-[18px]">
            <p>
              Ставши партнером, Ви отримаєте доступ до талановитих студентів, зміцните свій бренд і позиції 
              на ринку та разом з нами формуватимете майбутнє галузі інженерії.
            </p>
            <div 
              className='flex gap-1 cursor-pointer mr-80'
              // onClick={}
            >
              <p className='text-bec'>Детальніше</p>
              <Image
                src="/general/details.svg"
                width={22}
                height={22}
                alt='.'
              />
            </div>
          </div>
          <div className="px-22 py-1.5 border-1 border-bec bg-bec max-w-[100px] absolute -top-2 left-1/3"></div>
        </div>
      </div>

      <div className="h-[346px] w-0.5 border bg-bec border-bec"/>

      <div className="flex flex-col max-w-[480px]">
        <h1 className='text-[32px]'>
          ЧОМУ ПОТРІБНО ОБРАТИ <span className='font-semibold italic text-bec'>BEC</span>,
          ЯКЩО ТИ - <span className='font-semibold text-bec'>СТУДЕНТ</span>
        </h1>
        <div className="relative border-2 border-bec mt-5">
          <div className="bg-bec-transparent p-4 space-y-15 text-[18px]">
            <p>
              Інженерні змагання – це можливість втілити ідеї, попрацювати в команді над реальними 
              технічними викликами, завести корисні знайомства та зробити впевнений крок у професійну сферу.
            </p>
            <div 
              className='flex gap-1 cursor-pointer mr-80'
              // onClick={}
            >
              <p className='text-bec'>Детальніше</p>
              <Image
                src="/general/details.svg"
                width={22}
                height={22}
                alt='.'
              />
            </div>
          </div>
          <div className="px-22 py-1.5 border-1 border-bec bg-bec max-w-[100px] absolute -top-2 left-1/3"></div>
        </div>
      </div>

    </div>
  )
}

export default Whybec
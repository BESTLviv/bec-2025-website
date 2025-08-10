import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <section className='py-10 relative z-10'>
      <div className="relative flex items-center justify-center flex-col space-y-2">
        <h2 className='font-semibold text-2xl'>Тема цьогорічних змагань:</h2>
        <h1 className='font-semibold text-3xl uppercase text-bec'>повоєнне відновлення</h1>
        <Image 
          width={20}
          height={20}
          src="/categories/topic.svg"
          alt='.'
          className='w-full absolute -top-28 left-0 -z-1'
        />
      </div>
      <div className="mt-50 flex flex-col items-center">
        <h1 className='text-5xl mb-10 font-semibold'>КАТЕГОРІЇ</h1>
        <div className="flex gap-20 flex-wrap justify-center">
          <div className="flex flex-col max-w-[520px] gap-7">
            <h1 className='text-bec-bg text-[32px] relative px-0 font-bold text-center'>
              Team Design
              <Image
                fill
                src="/categories/category-left.svg"
                alt='.'
                className='w-full absolute top-0 left-0 -z-10'
              />
            </h1>
            <div className="relative border border-bec p-[10px]">
              <div className="bg-bec-transparent p-4 space-y-12 text-[18px]">
                <p>
                  Практична інженерна категорія, у якій команди студентів розв’язують реальні задачі у сфері embedded-систем, 
                  IoT, електроніки та механіки, створюючи робочі прототипи пристроїв.
                </p>
                <p>
                  <span className='font-semibold'>Приклад:</span> Розробити функціональну модель тральника для пошуку та розмінування морських мін, який може 
                  керуватися в ручному та автоматичному режимі.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-[520px] gap-7">
            <h1 className="text-bec-bg text-[32px] relative px-0 font-bold text-center">
              Innovative Design
              <Image
                fill
                src="/categories/category-right.svg"
                alt="."
                className="w-full absolute top-0 left-0 -z-10"
              />
            </h1>
            <div className="relative border border-bec p-[10px]">
              <div className="bg-bec-transparent p-4 space-y-5 text-[18px]">
                <p>
                  Концептуальна категорія для креативних інженерних ідей: команди пропонують нові чи вдосконалені розв'язання
                  актуальних проблем. Учасники демонструють інноваційний підхід, його переваги та реалістичність втілення через
                  креслення чи 3D-моделі.
                </p>
                <p>
                  <span className="font-semibold">Приклад:</span> Розробити концепцію дрона, який сканує руйнування будівель
                  для подальшого аналізу та планування відбудови
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[520px] gap-7 mt-20">
          <h1 className='text-bec-bg text-[32px] relative px-0 font-bold text-center'>
            Взаємодія між категоріями
            <Image
              fill
              src="/categories/interaction.svg"
              alt='.'
              className='w-full absolute top-0 left-0 -z-10'
            />
          </h1>
          <div className="relative border border-bec p-[10px]">
            <div className="bg-bec-transparent p-4 space-y-5 text-[18px]">
              <p>
                В один із днів проведення змагань команди категорії <span className='font-semibold'>Innovative Design</span> аналізують задану проблему та придумують 
                концепти її розв’язання. А вже на наступний день учасники <span className='font-semibold'>Team Design</span> створюють робочі прототипи на основі цих рішень.
              </p>
              <p>
                І цілком можливо, що саме ці ідеї й прототипи стануть основою для стартапів, які змінять майбутнє!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image 
        fill
        src='/general/bg-2.png'
        alt='.'
        className='object-cover -z-11'
      />

    </section>
  )
}

export default Categories

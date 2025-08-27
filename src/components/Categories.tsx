import Image from 'next/image';
import React from 'react';
import Whybec from './Whybec';
import { motion } from 'framer-motion';

// simple fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const Categories = () => {
  return (
    <section className="py-10 relative">
      <div className="relative flex items-center justify-center flex-col space-y-2 z-9">
        <h2 className="font-semibold text-base md:text-xl lg:text-2xl">
          Тема цьогорічних змагань:
        </h2>
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl uppercase text-bec">
          повоєнне відновлення
        </h1>
        <Image
          width={20}
          height={20}
          src="/categories/topic.svg"
          alt="."
          className="w-full absolute hidden sm:block xl:-top-24 2xl:-top-28 left-0 -z-1"
        />
        <Image
          width={20}
          height={20}
          src="/categories/topic-phone.svg"
          alt="."
          className="w-[380px] absolute sm:hidden xl:-top-24 2xl:-top-28 left-1/2 -translate-x-1/2 -z-1"
        />
      </div>

      <div className="mt-20 md:mt-50 flex flex-col items-center z-9">
        <h1 className="text-5xl mb-10 font-semibold">КАТЕГОРІЇ</h1>

        <motion.div
          className="flex gap-20 flex-wrap justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-col max-w-[520px] gap-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="text-bec-bg text-[32px] relative px-0 font-bold text-center">
              Team Design
              <Image
                fill
                src="/categories/category-left.svg"
                alt="."
                className="w-full absolute top-0 left-0 -z-10"
              />
            </h1>
            <div className="relative border border-bec p-[10px]">
              <div className="bg-bec-transparent p-4 space-y-12 text-[18px]">
                <p>
                  Практична інженерна категорія, у якій команди студентів
                  розв’язують реальні задачі у сфері embedded-систем, IoT,
                  електроніки та механіки, створюючи робочі прототипи пристроїв.
                </p>
                <p>
                  <span className="font-semibold">Приклад:</span> Розробити
                  функціональну модель тральника для пошуку та розмінування
                  морських мін, який може керуватися в ручному та автоматичному
                  режимі.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col max-w-[520px] gap-7"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
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
                  Концептуальна категорія для креативних інженерних ідей:
                  команди пропонують нові чи вдосконалені розв&apos;язання
                  актуальних проблем. Учасники демонструють інноваційний підхід,
                  його переваги та реалістичність втілення через креслення чи
                  3D-моделі.
                </p>
                <p>
                  <span className="font-semibold">Приклад:</span> Розробити
                  концепцію дрона, який сканує руйнування будівель для
                  подальшого аналізу та планування відбудови
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col max-w-[520px] gap-7 mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-bec-bg text-[32px] relative px-0 font-bold text-center">
            Взаємодія між категоріями
            <Image
              fill
              src="/categories/interaction.svg"
              alt="."
              className="w-full absolute top-0 left-0 -z-10"
            />
          </h1>
          <div className="relative border border-bec p-[10px]">
            <div className="bg-bec-transparent p-4 space-y-5 text-[18px]">
              <p>
                В один із днів проведення змагань команди категорії{' '}
                <span className="font-semibold">Innovative Design</span>{' '}
                аналізують задану проблему та придумують концепти її
                розв’язання. А вже на наступний день учасники{' '}
                <span className="font-semibold">Team Design</span> створюють
                робочі прототипи на основі цих рішень.
              </p>
              <p>
                І цілком можливо, що саме ці ідеї й прототипи стануть основою
                для стартапів, які змінять майбутнє!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Whybec />
      <Image
        fill
        src="/general/bg-2.png"
        alt="."
        className="object-cover -z-11 opacity-70"
      />
    </section>
  );
};

export default Categories;

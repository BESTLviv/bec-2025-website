import { Audiowide } from 'next/font/google';
import Image from 'next/image'

const awide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        fill
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="hero background"
        src="/hero/hero-bg.svg"
      />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="z-10 max-w-[1000px] space-y-6">
          <p
            className={`text-[80px] uppercase font-bold tracking-wide leading-[1.3] ${awide.className}`}
          >
            BEST Engineering Competition
          </p>
          <div className="flex gap-2 items-center ">
            <Image 
              width={45}
              height={30}
              className="flex items-center justify-center"
              alt="hero background"
              src="/hero/calendar.svg"
            />
            <p className="text-4xl text-bec font-semibold tracking-wider pb-2">
              24–28 жовтня
            </p>
          </div>
          <p className='text-4xl max-w-[900px]'>
            Інженери не чекають на майбутнє — вони його будують
          </p>
        </div>
      </div>
    </section>

  )
}

export default Hero
import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedCircle() {
  return (
    <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] relative flex items-center justify-center">
      <Image
        width={360}
        height={360}
        alt="."
        src="/animate/not_anim.svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlow "
      />
      <div className="w-[220px] h-[220px] md:w-[360px] md:h-[360px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlow">
        <Image fill alt="." src="/animate/anim1.png" />
      </div>
      <Link href="https://t.me/bec2025b_bot"
            target="_blank">
        <Image
          width={150}
          height={150}
          alt="."
          src="/animate/hover.svg"
          className="w-[110px] h-[110px] md:w-[150px] md:h-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9 cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
        />
      </Link>
      <Image
        width={465}
        height={465}
        alt="."
        src="/animate/anim2.svg"
        className="w-[280px] h-[280px] sm:w-[465px] sm:h-[465px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlower "
      />
      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinReverseSlow ">
        <Image fill alt="." src="/animate/anim3.png" />
      </div>
    </div>
  );
}

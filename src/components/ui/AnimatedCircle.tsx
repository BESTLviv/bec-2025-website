import Image from "next/image";
import Link from "next/link";

export default function AnimatedCircle() {
  return (
    <div className="w-[600px] h-[600px] relative flex items-center justify-center">
      <Image
        width={360}
        height={360}
        alt="."
        src='/animate/not_anim.svg'
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlow "
      />
      <div className="w-[360px] h-[360px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlow">
        <Image
          fill
          alt="."
          src='/animate/anim1.png'
        />
      </div>
      <Link href="#">
        <Image
          width={150}
          height={150}
          alt="."
          src='/animate/hover.svg'
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
        />
      </Link>
      <Image
        width={465}
        height={465}
        alt="."
        src='/animate/anim2.svg'
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinSlower "
      />
      <div className="w-[600px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinReverseSlow ">
        <Image
          fill
          alt="."
          src='/animate/anim3.png'
        />
      </div>
    </div>
  );
}

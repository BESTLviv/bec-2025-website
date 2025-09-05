import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { organizersArr } from '@/data/data';
import Image from 'next/image';

const OrganizersSwiperSm = () => {
  return (
    <div className="relative w-[300px] h-[500px] flex items-center justify-center pb-20 mx-auto">
      <button
        className="swiper-button-nextt absolute -left-10 top-1/2 z-8 -translate-y-1/2 w-12 h-12 rounded-full shadow flex items-center justify-center hover:scale-115 transition-all duration-150 ease cursor-pointer text-white"
        aria-label="Previous"
      >
        <Image
          width={50}
          height={50}
          src="/organizers/left-arrow.svg"
          alt="."
        />
      </button>
      <button
        className="swiper-button-prevv absolute -right-10 top-1/2 z-8 -translate-y-1/2 w-12 h-12 rounded-full shadow flex items-center justify-center hover:scale-115 transition-all duration-150 ease cursor-pointer"
        aria-label="Next"
      >
        <Image
          width={50}
          height={50}
          src="/organizers/right-arrow.svg"
          alt="."
        />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        watchOverflow={true}
        navigation={{
          nextEl: '.swiper-button-nextt',
          prevEl: '.swiper-button-prevv',
        }}
        className="mx-auto"
      >
        {organizersArr.map(organizer => (
          <SwiperSlide
            key={organizer.key}
            className="
              flex flex-col items-center justify-center text-center h-full pt-8
            "
          >
            <Image
              width={300}
              height={417}
              alt="."
              src={organizer.src}
              className="
              w-[210px] h-[300px] mx-auto
              drop-shadow-[0_0_25px_var(--color-bec-glow)] 
              "
            />
            <div
              className="flex flex-col items-center justify-center p-1 text-center z-10 border-2  border-bec slider-bg h-[122px]
            "
            >
              <h1
                className="font-bold text-[22px] sm:text-[20px] 
              "
              >
                {organizer.name}
              </h1>
              <div
                className="w-40 h-0.5 bg-bec mx-auto my-2 
              "
              />
              <h1 className="font-bold text-[20px] sm:text-[20px]">
                {organizer.position}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        fill
        src="/organizers/bec-big-logo.svg"
        alt="."
        className="absolute top-0 left-0 -z-10 w-[400px] h-[400px] opacity-60"
      />
    </div>
  );
};

export default OrganizersSwiperSm;

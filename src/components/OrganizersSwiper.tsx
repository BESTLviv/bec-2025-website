import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { organizersArr } from '@/data/data';
import Image from 'next/image';

const OrganizersSwiper = () => {
  return (
    <div className="relative w-[270px] sm:w-[340px] lg:w-[1000px] xl:w-[1100px] h-[700px] flex items-center justify-center pb-20 mx-auto">
      <button
        className="swiper-button-prevv absolute -left-10 sm:-left-20 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full shadow flex items-center justify-center hover:scale-115 transition-all duration-150 ease cursor-pointer text-white"
        aria-label="Previous"
      >
        <Image
          width={70}
          height={70}
          src="/organizers/left-arrow.svg"
          alt="."
        />
      </button>
      <button
        className="swiper-button-nextt absolute -right-10 sm:-right-20 top-1/2 z-20 -translate-y-1/2 w-12 h-12 rounded-full shadow flex items-center justify-center hover:scale-115 transition-all duration-150 ease cursor-pointer"
        aria-label="Next"
      >
        <Image
          width={70}
          height={70}
          src="/organizers/right-arrow.svg"
          alt="."
        />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={200}
        loop={true}
        centeredSlides={true}
        watchOverflow={true}
        navigation={{
          nextEl: '.swiper-button-nextt',
          prevEl: '.swiper-button-prevv',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="mx-auto"
      >
        {organizersArr.map(organizer => (
          <SwiperSlide
            key={organizer.key}
            className="
              mt-10 ml-9 sm:ml-8 lg:ml-0 max-w-[220px] sm:max-w-[300px] max-h-[680px] flex flex-col items-center justify-center text-center h-full pt-2
            "
          >
            <Image
              width={300}
              height={417}
              alt="."
              src={organizer.src}
              className="
              w-[240px] sm:w-[290px] h-[320px] sm:h-[357px] mx-auto
              [.swiper-slide-prev_&]:h-[335px] [.swiper-slide-prev_&]:w-[250px]
              [.swiper-slide-next_&]:h-[335px] [.swiper-slide-next_&]:w-[250px]
              [.swiper-slide-prev_&]:mt-[45px] [.swiper-slide-next_&]:mt-[45px]
              [_.swiper-slide-active_&]:drop-shadow-[0_0_25px_var(--color-bec-glow)] 
              "
            />
            <div
              className="
              flex flex-col items-center justify-center p-3 text-center z-10 border-2 
              border-bec slider-bg h-[142px] 
              [_.swiper-slide-prev_&]:h-[100px] 
              [_.swiper-slide-next_&]:h-[100px] 
            "
            >
              <h1
                className="
                font-bold text-[22px] sm:text-[20px] 
                [_.swiper-slide-prev_&]:hidden 
                [_.swiper-slide-next_&]:hidden
              "
              >
                {organizer.name}
              </h1>
              <div
                className="
                w-50 h-0.5 bg-bec mx-auto my-2 
                sm:[_.swiper-slide-prev_&]:hidden 
                sm:[_.swiper-slide-next_&]:hidden
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

export default OrganizersSwiper;

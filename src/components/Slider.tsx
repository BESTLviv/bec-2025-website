'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const Slider = () => {
  const photosDict = [
    { src: '/slider/el-1.jpg', alt: 'slide1' },
    { src: '/slider/el-2.jpg', alt: 'slide2' },
    { src: '/slider/el-3.jpg', alt: 'slide3' },
    { src: '/slider/el-4.jpg', alt: 'slide4' },
    { src: '/slider/el-5.jpg', alt: 'slide5' },
  ];
  const photosDict2 = [
    { src: '/slider/el-6.jpg', alt: 'slide6' },
    { src: '/slider/el-7.jpg', alt: 'slide7' },
    { src: '/slider/el-8.jpg', alt: 'slide8' },
    { src: '/slider/el-9.jpg', alt: 'slide9' },
    { src: '/slider/el-10.jpg', alt: 'slide10' },
  ];

  return (
    <div className="mt-20 w-full">
      <div className="h-3 w-full -mt-1 relative z-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-bec via-black to-bec bg-[length:200%_100%]" />
      </div>
      <div className="w-full px-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          centeredSlides={false}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          grabCursor={true}
          className="my-5"
        >
          {photosDict.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="w-[350px] md:w-[250px] lg:w-[320px] xl:w-[455px] h-[220px] md:h-[180px] lg:h-[250px] xl:h-[300px] flex items-center justify-center mx-auto">
                <Image
                  className="object-cover"
                  width={415}
                  height={280}
                  src={photo.src}
                  alt={photo.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-3 w-full -mt-1 relative z-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-bec via-black to-bec bg-[length:200%_100%]" />
      </div>
      <div className="w-full">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          centeredSlides={false}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
          grabCursor={true}
          className="my-5"
        >
          {photosDict2.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="w-[350px] md:w-[250px] lg:w-[320px] xl:w-[455px] h-[220px] md:h-[180px] lg:h-[250px] xl:h-[300px] flex items-center justify-center mx-auto">
                <Image
                  className="object-cover"
                  width={415}
                  height={280}
                  src={photo.src}
                  alt={photo.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-3 w-full -mt-1 relative z-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-bec via-black to-bec bg-[length:200%_100%]" />
      </div>
    </div>
  );
};

export default Slider;

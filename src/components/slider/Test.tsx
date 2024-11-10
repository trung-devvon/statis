
'use client'
import React from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ImageCarousel = () => {
  const swiperRef = React.useRef<any>(null);

  const slides = [1, 2, 3, 4, 5];

  return (
    <div className="relative w-[600px] mx-auto">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        className="w-full h-full py-5"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((index) => (
          <SwiperSlide key={index} className="transition-opacity duration-300">
            <Card className="h-64 flex items-center justify-center bg-gray-100">
              <p className="text-2xl text-gray-500">Slide {index}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <style jsx global>{`
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
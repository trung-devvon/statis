'use client'
import React from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



const StackedCarousel = () => {
  const swiperRef = React.useRef<any>(null);

  const slides = [1, 2, 3, 4, 5];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        className="w-full h-[500px]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((index) => (
          <SwiperSlide key={index}>
            <div className="transform transition-all duration-300 pt-4">
              <Card className="h-[400px] flex items-center justify-center bg-gray-100">
                <p className="text-3xl text-gray-500">Slide {index}</p>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>


    </div>
  );
};

export default StackedCarousel;
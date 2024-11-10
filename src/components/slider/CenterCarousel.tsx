'use client'
import React from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { cn } from "@/lib/utils";


interface CarouselProps {
  slides: Array<any>;
  renderSlide?: (slide: any, index: number) => React.ReactNode;
  containerClass?: string;
  slidesPerView?: number;
  spaceBetween?: number;
}

const EnhancedCarousel = ({ 
  slides,
  renderSlide,
  containerClass,
  slidesPerView = 3,
  spaceBetween = -500
}: CarouselProps) => {
  const swiperRef = React.useRef<any>(null);
  const carouselId = React.useId().replace(/:/g, '');
  const carouselClass = `carousel-${carouselId}`;

  // Responsive slidesPerView
  const getSlidesPerView = (windowWidth: number) => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return slidesPerView;
  };

  const getSpaceBetween = (windowWidth: number) => {
    if (windowWidth < 640) return 16;
    if (windowWidth < 1024) return -200;
    return spaceBetween;
  };

  const defaultRenderSlide = (slide: any, index: number) => (
    <Card className="bg-white rounded-lg overflow-hidden">
      content {index}
    </Card>
  );

  return (
    <div className={cn(
      "relative w-full px-4 md:px-8 lg:px-16",
      containerClass, 
      carouselClass
    )}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        spaceBetween={spaceBetween}
        className="w-full py-4 md:py-6 lg:py-8"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: true
          },
          640: {
            slidesPerView: 2,
            spaceBetween: -200,
            centeredSlides: true
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            centeredSlides: true
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="transition-all duration-300">
            {renderSlide ? renderSlide(slide, index) : defaultRenderSlide(slide, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      <button 
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button 
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      <style jsx global>{`
        .${carouselClass} {
          width: 100%;
        }
        
        .${carouselClass} .swiper-wrapper {
          perspective: 800px;
        }
        
        .${carouselClass} .swiper-slide {
          transition: all 300ms ease;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .${carouselClass} .swiper-slide {
            width: 80%;
          }
        }
        
        .${carouselClass} .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.8);
          filter: blur(4px);
        }
        
        @media (max-width: 640px) {
          .${carouselClass} .swiper-slide:not(.swiper-slide-active) {
            transform: scale(0.95);
            filter: blur(2px);
          }
        }
        
        .${carouselClass} .swiper-slide-prev {
          z-index: 1;
        }
        
        .${carouselClass} .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 2;
        }
        
        .${carouselClass} .swiper-slide-next {
          z-index: 1;
        }
        
        .${carouselClass} .swiper-slide.swiper-slide-active .card {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default EnhancedCarousel;
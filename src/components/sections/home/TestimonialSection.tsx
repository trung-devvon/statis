"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    quote:
      "Working with this team transformed our approach to data analysis. Their insights were invaluable in driving our business forward.",
    name: "John Doe",
    position: "CEO, Tech Solutions",
    image: "/tesmonial/person1.jpeg",
  },
  {
    quote:
      "The team's expertise and dedication helped us achieve remarkable results in record time.",
    name: "Jane Smith",
    position: "CTO, Innovation Labs",
    image: "/tesmonial/person2.jpg",
  },
  {
    quote:
      "Their innovative solutions and strategic thinking made a significant impact on our growth.",
    name: "Mike Johnson",
    position: "Director, Digital Ventures",
    image: "/tesmonial/person3.jpg",
  },
];
const TestimonialSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Navigation buttons với responsive position */}
        <div className="hidden md:flex justify-between absolute w-full left-0 top-1/2 -translate-y-1/2 z-10 px-4">
          <button 
            id="prev-testimonial"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button 
            id="next-testimonial"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: "#prev-testimonial",
            nextEl: "#next-testimonial",
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
          }}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center px-4 md:px-8 py-6">
                <blockquote className="text-lg md:text-xl lg:text-2xl text-center mb-6 md:mb-8 font-medium text-gray-800">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="font-semibold text-base md:text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm md:text-base">{testimonial.position}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          opacity: 1;
          margin: 0 4px;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #000000;
        }

        .testimonial-swiper {
          padding: 20px 0;
        }

        @media (min-width: 768px) {
          .testimonial-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .testimonial-swiper {
            padding: 40px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;

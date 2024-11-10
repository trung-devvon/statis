'use client'
import React from 'react'
import CenterCarousel from "@/components/slider/CenterCarousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const slides = [
    {
      image: "/carousel/chart1.png",
      title: "Weekly market cap of all cryptocurrencies",
      description: "It is estimated that the cumulative market cap of cryptocurrencies increased in early 2023 after the downfall in November 2022...",
      badge: "Currencies"
    },
    {
      image: "/carousel/chart5.png",
      title: "Social Media Growth Statistics",
      description: "Analysis of user engagement and growth patterns across major social media platforms...",
      badge: "Social Media"
    },
    {
      image: "/carousel/chart-2.png",
      title: "Electric Vehicle Market Trends",
      description: "Global electric vehicle adoption rates and market penetration analysis for Q3 2024...",
      badge: "Automotive"
    },
    {
      image: "/carousel/chart-3.png",
      title: "Electric Vehicle Market Trends",
      description: "Global electric vehicle adoption rates and market penetration analysis for Q3 2024...",
      badge: "Automotive"
    },
    {
      image: "/carousel/chart-4.png",
      title: "Electric Vehicle Market Trends",
      description: "Global electric vehicle adoption rates and market penetration analysis for Q3 2024...",
      badge: "Automotive"
    },
  ];
    

const BenefitSection = () => {
    const verticalLayout = (slide: typeof slides[0], index: number) => (
        <Card className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 h-[500px]">
          <div className="relative h-1/2 w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain w-full"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">
                {slide.badge}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col h-1/2">
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">
              {slide.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {slide.description}
            </p>
            <button className="mt-auto text-blue-600 hover:text-blue-700 text-sm font-medium">
              Read more →
            </button>
          </div>
        </Card>
      );

  return (
    <div className="space-y-12 w-full">
      <div className='w-full'>
        <h3 className='text-primary text-center font-semibold text-2xl'>Trending statistics</h3>
        <p className="text-[45px] font-[200] mb-6 text-center">Get facts and insights on topics that matter</p>
        <CenterCarousel
          slides={slides}
          renderSlide={verticalLayout}
          spaceBetween={-50}
        />
      </div>
    </div>
  )
}

export default BenefitSection
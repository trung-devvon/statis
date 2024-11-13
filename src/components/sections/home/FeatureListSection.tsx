import { Button } from "@/components/ui/button";
import { FiBox } from "react-icons/fi";
import { IoChevronForwardSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { features, imageBrands } from "@/utils/constants/home";

const FeatureListSection = () => {
  return (
    <div className="bg-grid w-full py-10 md:py-20">
      <h2 className="text-gray-600 text-center text-2xl md:text-3xl font-bold">
        We Offer Only Our Best
      </h2>
      <p className="text-gray-500 w-full md:w-3/4 lg:w-2/4 mx-auto my-6 md:my-10 text-center">
        We are committed to excellence in everything we produce, ensuring that
        every solution we offer meets the highest standards of quality,
        reliability, and impact.
      </p>
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-2">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="flex flex-col bg-white border border-blue-main w-2/3 sm:w-4/5 md:w:1/2 lg:w-2/3 xl:w-[30%] 2xl:w-[30%] rounded-lg p-5 min-h-[320px]"
              key={item.title}
            >
              <span className="bg-blue-main size-[42px] rounded-full flex items-center justify-center">
                <Icon size={28} color="white" />
              </span>
              <h3 className="text-lg font-semibold my-5">{item.title}</h3>
              <p className="text-black-18 text-base">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-center text-3xl font-bold my-20 mx-auto w-1/2">
        <span>More than 5,000+ companies trusted</span>{" "}
        <span className="text-blue-main">StatisHub</span>{" "}
        <span className="text-yellow-main">Solutions</span>
      </h3>
      <div className="bg-yellow-main w-full flex flex-wrap gap-20 justify-center items-center py-5">
        {imageBrands.map((item) => (
          <div key={item} className="w-28 h-20">
            <Image
              src={item}
              width={100}
              height={80}
              className="size-full object-contain"
              alt="brands"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureListSection;

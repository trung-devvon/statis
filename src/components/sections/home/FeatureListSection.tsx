import { Button } from "@/components/ui/button";
import { FiBox } from "react-icons/fi";
import { IoChevronForwardSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";

const FeatureListSection = () => {
  return (
    <div className="px-[64px] my-20 flex flex-col gap-10 py-20 bg-white">
      <div className="flex gap-8 my-20 md:flex-wrap sm:flex-wrap flex-wrap">
        <div className="flex-1">
          <h2
            style={{
              marginBlockStart: 0,
              marginBlockEnd: 0,
            }}
            className="text-[40px] font-bold leading-tight md:text-[40px] sm:text-[40px]"
          >
            Discover Our Comprehensive Data Solutions Tailored for Your Business
            Needs
          </h2>
        </div>
        <div className="flex-1 py-2">
          <div className="desc flex flex-col gap-6">
            <span className="font-normal text-[18px]">
              Our services empower businesses with actionable insights derived
              from robust data analysis. We specialize in industry analysis,
              business data management, and import-export data analytics.
              Leverage our expertise to drive informed decision-making and
              enhance your competitive edge.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-3">
        <div className="flex-1 my-10 flex flex-col gap-6">
          <FiBox size={28} />
          <h3 className="text-2xl font-bold">
            Unlock the Power of Data for Strategic Business Growth
          </h3>
          <span className="text-xs">
            Transform your data into a strategic asset.
          </span>
          <Link className="flex items-center gap-2" href="#">
            <span>Learn more</span>
            <IoChevronForwardSharp />
          </Link>
        </div>
        <div className="flex-1 my-10 flex flex-col gap-6">
          <FiBox size={28} />
          <h3 className="text-2xl font-bold">
          Tailored Solutions for Import-Export Data Analysis and Insights
          </h3>
          <span className="text-xs">
          Gain clarity and insight into your trade data.
          </span>
          <Link className="flex items-center gap-2" href="#">
            <span>Discover</span>
            <IoChevronForwardSharp />
          </Link>
        </div>
        <div className="flex-1 my-10 flex flex-col gap-6">
          <FiBox size={28} />
          <h3 className="text-2xl font-bold">
          Comprehensive Industry Analysis to Stay Ahead of the Competition
          </h3>
          <span className="text-xs">
          Stay informed with our detailed industry reports and insights.
          </span>
          <Link className="flex items-center gap-2" href="#">
            <span>Get Started</span>
            <IoChevronForwardSharp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureListSection;

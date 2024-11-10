import { Button } from "@/components/ui/button";
import React from "react";

const HeroHeaderSection = () => {
  return (
    <div className="px-[64px] flex gap-8 my-20 md:flex-wrap sm:flex-wrap flex-wrap">
      <div className="flex-1">
        <h1 style={{
            marginBlockStart: 0,
            marginBlockEnd: 0
        }} className="text-[40px] font-bold leading-tight md:text-[40px] lg:text-[56px] sm:text-[40px]">
          Unlock Your Business Potential with Data Insights
        </h1>
      </div>
      <div className="flex-1 py-2">
        <div className="desc flex flex-col gap-6">
          <span className="font-normal text-[18px]">
            Transform your decision-making process with our comprehensive data
            solutions. We empower businesses to thrive by providing actionable
            insights tailored to your needs.
          </span>
          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button variant='outline'>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeaderSection;

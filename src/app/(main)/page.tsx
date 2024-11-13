// import { Button } from "@/components/ui/button";

import Backtotop from "@/components/common/Backtotop";
import BenefitSection from "@/components/sections/home/BenefitSection";
import CtaSection from "@/components/sections/home/CtaSection";
import FeatureListSection from "@/components/sections/home/FeatureListSection";
import Header102Section from "@/components/sections/home/Header102Section";
import HeroHeaderSection from "@/components/sections/home/HeroHeaderSection";
import OurSolutionsSection from "@/components/sections/home/OurSolutionsSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";

import StackedCarousel from "@/components/slider/StackedCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <HeroHeaderSection />
      <OurSolutionsSection />
      <div className="mx-auto my-8 px-[64px]">
        <BenefitSection />
      </div>
      {/* <div className="w-3/4 mx-auto my-8">
        <StackedCarousel />
      </div> */}
      <FeatureListSection />
      {/* <Header102Section /> */}
      <TestimonialSection />
      <CtaSection />
      <Backtotop />
    </div>
  );
}

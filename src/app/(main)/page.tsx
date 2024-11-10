// import { Button } from "@/components/ui/button";

import BenefitSection from "@/components/sections/home/BenefitSection";
import CtaSection from "@/components/sections/home/CtaSection";
import FeatureListSection from "@/components/sections/home/FeatureListSection";
import Header102Section from "@/components/sections/home/Header102Section";
import HeroHeaderSection from "@/components/sections/home/HeroHeaderSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";

import StackedCarousel from "@/components/slider/StackedCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <HeroHeaderSection />
      <div className="flex my-40 px-[64px]">
        <Image
          src={"/image.png"}
          className="w-full rounded-lg"
          width={828}
          height={311}
          alt="test"
        />
      </div>
      <div className="mx-auto my-8 px-[64px]">
        <BenefitSection />
      </div>
      <div className="w-3/4 mx-auto my-8">
        <StackedCarousel />
      </div>
      <FeatureListSection />
      <Header102Section />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}

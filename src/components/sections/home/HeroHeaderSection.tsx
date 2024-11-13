"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroHeaderSection = () => {
  return (
    <div className="px-[64px] flex gap-8 md:flex-wrap sm:flex-wrap flex-wrap bg-black-18 min-h-[800px] relative overflow-hidden">
      <div className="absolute w-1/2 h-3/4 top-0 left-0 z-10">
        <Image
          src={"/assets/caroLine1.svg"}
          className="size-full object-cover"
          width={500}
          height={500}
          alt="test"
        />
      </div>
      <div className="absolute w-4/5 h-1/2 bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center" style={{ aspectRatio: '1 / 1' }}>
        <Image
          draggable="false"
          src="/assets/charthero.png"
          width={1000}
          height={1000}
          style={{
            userSelect: "none",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          className="size-full"
          alt="test"
        />
      </div>
      <div className="content absolute top-1/2 md:top-1/3 lg:top-1/3 sm:top-1/2 -translate-y-1/2 left-[64px] z-20">
        <h1 className="text-[32px] md:text-[48px] lg:text-[48px] text-white flex gap-2 items-center flex-wrap">
          <p className="font-bold">StatisHub :</p>
          <p> Business Information Provider</p>
        </h1>
        <p className="text-desc-gray my-10 w-2/3">
          Comprehensive data solutions for informed, data-driven business
          decisions
        </p>
        <Button size={"lg"} className="text-white bg-blue-main rounded-full">
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default HeroHeaderSection;

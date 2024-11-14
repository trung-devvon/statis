import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions, titleSolutions } from "@/utils/constants/home";
import Image from "next/image";

import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const OurSolutionsSection = () => {
  return (
    <div className="bg-box w-full py-10 md:py-20 px-4 md:px-16 lg:px-[64px]">
      <h2 className="text-gray-600 text-center text-2xl md:text-3xl font-bold">
        We Offer Only Our Best
      </h2>
      <p className="text-gray-500 w-full md:w-3/4 lg:w-2/4 mx-auto my-6 md:my-10 text-center">
        We are committed to excellence in everything we produce, ensuring that
        every solution we offer meets the highest standards of quality,
        reliability, and impact.
      </p>

      <Tabs defaultValue={titleSolutions[0]} className="w-full">
        <div className="overflow-x-auto pb-4 mb-2">
          <TabsList className="flex flex-nowrap justify-start md:justify-center md:flex-nowrap gap-2 h-16 bg-transparent min-w-max md:min-w-0 scrollbar-main">
            {titleSolutions.map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="rounded-full bg-gray-50 py-2 px-4 text-black-19 font-medium data-[state=active]:text-white data-[state=active]:bg-blue-main whitespace-nowrap text-sm md:text-base"
              >
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {solutions.map((item) => (
          <TabsContent
            key={item.tab}
            value={item.tab}
            className="mt-8 motion-preset-expand aspect-auto"
          >
            <div className="flex flex-col p-10 shadow-1 rounded-xl bg-white">
              <div className="flex gap-20">
                <div className="w-1/2 bg-gray-100">
                  <Image
                    className="size-full object-cover rounded-md shadow-md"
                    loading="lazy"
                    width={400}
                    height={500}
                    src={item.image}
                    alt={item.tab}
                  />
                </div>
                <div className="w-1/2">
                  <div className="flex gap-4 items-center">
                    <span className="bg-blue-main size-[42px] rounded-full flex items-center justify-center">
                      <TfiWorld size={28} color="white" />
                    </span>
                    <span className="text-[18px] text-black-19 capitalize">
                      {item.tab}
                    </span>
                  </div>
                  <h3 className="font-bold text-4xl text-black-19 my-5">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                  <div className="flex flex-wrap my-10 gap-5">
                {item.contents.map((p) => (
                  <div key={p} className="rounded-full flex items-center gap-3">
                    <span className="flex items-center justify-center size-[28px] bg-yellow-main text-black-18 rounded-full">
                      <FaCheck />
                    </span>
                    <span className="text-black-18">{p}</span>
                  </div>
                ))}
              </div>
                  <Button
                    size={"lg"}
                    className="bg-black-19 text-white flex items-center mx-auto my-5 rounded-full"
                  >
                    <span>Discovery</span>
                    <IoIosArrowRoundForward />
                  </Button>
                </div>
              </div>
              
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default OurSolutionsSection;

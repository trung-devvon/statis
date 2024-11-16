import {
  informations,
  solutionHeros,
  stats,
} from "@/utils/constants/solutions";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div
      style={{
        backgroundImage: 'url("/assets/bg-service1.png")',
      }}
      className="bg-no-repeat bg-cover min-h-[600px] w-full py-20"
    >
      <div className="flex justify-between items-center w-full px-[64px]">
          <h1 className="title-1 font-bold my-20 text-white">
            <span>The</span>
            <span className="text-blue-main uppercase px-3">Company</span>
            <span>
              Behind <br /> the
            </span>
            <span className="text-yellow-main px-3 uppercase">Success</span>
          </h1>
          <p className="text-white text-base">
            <span className="text-blue-main">Statishub</span> is a global data
            and business intelligence <br /> platform with an extensive
            collection of reports,
            <br /> and insights on over 10 million businesses from 230
            <br /> countries in 200 industries.
          </p>
        </div>
      </div>
      <div className="res-list-3 w-4/5 mx-auto space-item-3 -mt-60">
        {solutionHeros.map((item) => (
          <div
            key={item.title}
            className="flex h-72 lg:h-96 md:h-96  xl:h-96 flex-col bg-blue-second res-item shadow-2 border rounded-2xl overflow-hidden"
          >
            <div className="w-full h-4/5 overflow-hidden">
              <Image
                src={item.image}
                className="object-cover w-full"
                alt={item.title}
                width={400}
                height={500}
              />
            </div>
            <div className="w-full h-1/5 text-white px-5">
              <h3 className="flex justify-between items-center text-md xl:text-lg font-bold my-5">
                <span>{item.title}</span>
                <span className="size-7 flex-center rounded-full bg-white shadow-md">
                  <MdArrowOutward className="text-blue-second" />
                </span>
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* section stats */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center flex-wrap md:flex-wrap lg:flex-nowrap justify-center gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col my-4 items-center justify-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5"
            >
              <h2 className="text-xl font-bold mb-2">{stat.value}</h2>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* information */}
      <div className="bg-yellow-second pt-10 pb-[200px] relative">
        <div className="my-20">
          <h2 className="text-3xl font-bold text-center text-pink-1">
            We PROVIDE fully <span className="text-blue-main">INFORMATION</span> that YOU need
          </h2>
          <p className="my-5 text-blue-tertiary text-center w-1/2 mx-auto">
            StatisHub offers a suite of solutions designed to meet the unique
            needs of businesses in finance, manufacturing, trade, and beyond.
            Our data solutions are crafted to enhance decision-making, reduce
            risks, and unlock new opportunities across industries.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <div className="flex flex-col w-2/3 mx-auto">
              <p className="text-blue-tertiary">{informations.desc}</p> <br />
              <ul className="list-disc">
                {informations.subDesc.map((item, index) => (
                  <li key={index}>
                    <span className="text-blue-tertiary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-2/3 mx-auto">
              <Image
                className="w-full object-cover rounded-2xl"
                src={"/solutions/2.png"}
                alt="information"
                width={250}
                height={250}
              />
            </div>

          </div>
          <div className="size-[200px] absolute bottom-0 right-0">
              <Image
                className="w-full object-cover rounded-2xl"
                src={"/assets/caroLine2.png"}
                alt="caro"
                width={250}
                height={250}
              />
              </div>
        </div>
      </div>
    </div>
  );
}

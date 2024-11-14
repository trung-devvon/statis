import React from "react";

export default function page() {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/bg-service1.png")',
      }}
      className="bg-no-repeat bg-cover min-h-[600px] w-full"
    >
      <div className="flex justify-between items-center w-full px-[64px] my-20">
        <h1 className="title-1 font-bold my-20 text-white">
          <span>The</span>
          <span className="text-blue-main uppercase px-3">Company</span>
          <span>
            Behind <br /> the
          </span>
          <span className="text-yellow-main px-3 uppercase">Success</span>
        </h1>
        <p className="text-white text-base">
          <span className="text-blue-main">Statishub</span> is a global data and business intelligence <br /> platform with an
          extensive collection of reports,<br /> and insights on over 10 million
          businesses from 230<br /> countries in 200 industries.
        </p>
      </div>
    </div>
  );
}

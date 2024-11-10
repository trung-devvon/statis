import React from "react";

const Header102Section = () => {
  return (
    <div className="px-[64px] flex gap-8 my-20 md:flex-wrap sm:flex-wrap flex-wrap">
      <div className="flex-1">
        <h2
          style={{
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
          className="text-[40px] font-bold leading-tight md:text-[40px] lg:text-[56px] sm:text-[40px]"
        >
          Transforming Business Insights
        </h2>
      </div>
      <div className="flex-1 py-2">
        <div className="desc flex flex-col gap-6">
          <span className="font-normal text-[18px]">
            With over 1,000 satisfied clients, our innovative solutions have
            driven a 30% increase in efficiency across various industries. Join
            us in shaping the future of data-driven decision-making.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header102Section;

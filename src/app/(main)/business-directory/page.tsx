import React from "react";
import Image from "next/image";
import Search from "./search";

export default function page() {
  return (
    <div className="flex flex-col h-[1220px]">
      <Search />
    </div>
  );
}

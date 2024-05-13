import React from "react";
import Slider from "./Slider";

export default async function Hero() {
  return (
    <section className="hero h-screen min-h-[830px] relative">
      <span className="absolute top-28 md:top-32 lg:top-44  z-20 left-4 md:left-8 lg:left-10 uppercase text-xs md:text-sm bg-[#2425267e] py-2 px-4 w-fit rounded-full">
        últimos estrenos
      </span>
      <Slider />
      <button className="absolute z-20 bottom-4 left-[calc(50%-50px)] lg:left-[calc(50%-65px)] flex items-center gap-1 py-2 lg:px-4 px-3">
        <span className="capitalize ml-auto md:text-lg lg:text-xl">
          explorar
        </span>
        <span className="icon-[mdi--arrow-down-thin] h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"></span>
      </button>
    </section>
  );
}

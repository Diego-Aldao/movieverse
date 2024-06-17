import React from "react";
import Slider from "./Slider";
import MainTag from "@/components/tags/MainTag";
import SecondaryButton from "@/components/buttons/SecondaryButton";

export default async function Hero() {
  return (
    <section className="hero h-screen min-h-[830px] relative">
      <MainTag customStyles="absolute top-28 md:top-32 lg:top-44 py-2 z-20 left-4 md:left-8 lg:left-10 uppercase cursor-default">
        últimos estrenos
      </MainTag>
      <Slider />
      <SecondaryButton
        destino="#tendencias"
        nombre="explorar"
        icon="icon-[mdi--arrow-down-thin]"
        customIconStyles="h-5 w-5 md:h-6 md:w-6"
        customStyles="absolute z-20 bottom-4 left-0 right-0 mx-auto w-fit flex items-center gap-1 "
      />
    </section>
  );
}

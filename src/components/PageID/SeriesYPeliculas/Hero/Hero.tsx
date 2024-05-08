import React, { ReactNode } from "react";

interface Props {
  descripcion: string;
  imagenesHero: ReactNode;
  children: ReactNode;
}

export default function Hero({ descripcion, imagenesHero, children }: Props) {
  return (
    <section
      className={`hero w-full relative  ${
        descripcion ? "min-h-[700px]" : "min-h-[400px]"
      } after:bg-gradient-to-t after:from-main-black after:from-30% after:to-transparent after:w-full after:h-full after:top-0 after:left-0 after:absolute md:h-[500px] lg:h-[600px] xl: md:after:from-0% md:min-h-[0px]`}
    >
      {imagenesHero}

      <div className="flex flex-col w-full gap-4 max-w-7xl mx-auto px-4 md:px-8 lg:px-10 2xl:px-0 z-[2] absolute top-[50%] md:relative md:top-0 left-0 md:pt-36 lg:pt-48">
        {children}
        <div className="max-w-[600px] lg:max-w-[700px] md:max-w-[550px] flex flex-col gap-2">
          <p className="lg:text-lg relative line-clamp-6">{descripcion}</p>
        </div>
      </div>
    </section>
  );
}

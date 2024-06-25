import React, { ReactNode } from "react";

interface Props {
  descripcion: string;
  imagenesHero: ReactNode;
  children: ReactNode;
}

export default function Hero({ descripcion, imagenesHero, children }: Props) {
  return (
    <section
      className={`hero w-full relative overflow-hidden  ${
        descripcion ? "min-h-[700px]" : "min-h-[400px]"
      } after:bg-gradient-to-t after:from-main-black after:from-30% after:to-transparent after:w-full after:h-full after:top-0 after:left-0 after:absolute md:h-[600px] lg:h-[700px] md:after:from-0% md:min-h-[0px] flex items-end`}
    >
      {imagenesHero}

      <div className="flex flex-col w-full gap-4 max-w-7xl mx-auto px-4 md:px-8 lg:px-10 2xl:px-0 z-[2] pb-10 lg:pb-20">
        {children}

        <p className="lg:text-lg relative text-sm md:text-base line-clamp-6 max-w-[550px] md:max-w-[650px] lg:max-w-[830px] 2xl:max-w-[890px]">
          {descripcion}
        </p>
      </div>
    </section>
  );
}

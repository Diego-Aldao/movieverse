import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SectionHero({ children }: Props) {
  return (
    <section className="hero h-[100vh] min-h-[700px] lg:min-h-[800px] relative">
      <span className="absolute top-28 z-20 left-4 md:left-8 lg:left-10 uppercase text-xs md:text-sm bg-[#2425267e] py-2 px-4 w-fit rounded-full">
        últimos estrenos
      </span>
      {children}
    </section>
  );
}

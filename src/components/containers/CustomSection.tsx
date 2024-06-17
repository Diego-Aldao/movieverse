import React from "react";

interface Props {
  titulo: string;
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  titleCustomSizes?: string;
  noInlinePadding?: boolean;
}

export default function CustomSection({
  titulo,
  children,
  headerChildren,
  titleCustomSizes,
  noInlinePadding,
}: Props) {
  return (
    <section
      className={`flex flex-col gap-8 max-w-7xl mx-auto w-full relative my-20 ${
        noInlinePadding ? "" : "px-4 md:px-8 lg:px-10 2xl:px-0"
      }`}
    >
      <header className="flex flex-col gap-4 md:gap-8">
        <h2
          className={`uppercase font-medium  flex items-center justify-between gap-12 ${
            titleCustomSizes
              ? titleCustomSizes
              : "text-xl sm:text-2xl lg:text-5xl md:text-4xl"
          }`}
        >
          {titulo}
          <span className="bg-main-white w-full h-[1px] inline-block flex-1"></span>
        </h2>
        {headerChildren}
      </header>
      {children}
    </section>
  );
}

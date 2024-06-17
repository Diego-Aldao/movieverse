import React from "react";

interface Props {
  titulo: string;
  children: React.ReactNode;
  focusedTitle?: boolean;
}

export default function CustomMain({ titulo, children, focusedTitle }: Props) {
  return (
    <main className="px-4 md:px-8 lg:px-10 mt-24 pb-10 lg:mt-48 2xl:px-0 max-w-7xl mx-auto flex flex-col gap-12 min-h-screen overflow-hidden relative w-full">
      <header
        className={`flex flex-col ${
          focusedTitle ? "items-center" : "gap-4 md:gap-8"
        }`}
      >
        <h1
          className={`uppercase font-medium text-2xl lg:text-5xl md:text-4xl flex items-center justify-between gap-12 ${
            focusedTitle &&
            "sm:text-3xl 2xl:text-6xl overflow-hidden text-center py-4 md:py-10"
          }`}
        >
          {titulo}
          <span
            className={`bg-main-white w-full h-[1px] flex-1 ${
              focusedTitle ? "hidden" : "inline-block"
            }`}
          ></span>
        </h1>
      </header>
      {children}
    </main>
  );
}

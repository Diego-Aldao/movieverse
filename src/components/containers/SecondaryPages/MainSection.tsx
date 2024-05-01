import React, { ReactNode } from "react";

interface Props {
  titulo: string;
  children: ReactNode;
}

export default function MainSection({ titulo, children }: Props) {
  return (
    <main className="px-4 md:px-8 lg:px-10 mt-24 pb-10 lg:mt-48 2xl:px-0 max-w-7xl mx-auto flex flex-col gap-10">
      <header className="flex flex-col gap-4 md:gap-8">
        <h2 className="uppercase font-medium text-2xl lg:text-5xl md:text-4xl flex items-center justify-between gap-12">
          {titulo}
          <span className="bg-main-white w-full h-[1px] inline-block flex-1"></span>
        </h2>
      </header>
      {children}
    </main>
  );
}

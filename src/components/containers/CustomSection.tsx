import React from "react";

interface Props {
  titulo: string;
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  titleCustomStyles?: string;
}

export default function CustomSection({
  titulo,
  children,
  headerChildren,
  titleCustomStyles,
}: Props) {
  return (
    <section className="px-4 md:px-8 lg:px-10 py-12 2xl:px-0">
      <div className="series-content max-w-7xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4 md:gap-8">
          <h2
            className={`uppercase font-medium text-2xl lg:text-5xl md:text-4xl flex items-center justify-between gap-12 ${titleCustomStyles}`}
          >
            {titulo}
            <span className="bg-main-white w-full h-[1px] inline-block flex-1"></span>
          </h2>
          {headerChildren}
        </header>
        {children}
      </div>
    </section>
  );
}

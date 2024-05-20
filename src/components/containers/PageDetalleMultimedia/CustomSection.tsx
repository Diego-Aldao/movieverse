import React, { ReactNode } from "react";

interface Props {
  titulo: string;
  children: ReactNode;
  customStyles?: string;
  headerChildren?: ReactNode;
  asideSection?: boolean;
}

export default function CustomSection({
  titulo,
  children,
  customStyles,
  headerChildren,
  asideSection,
}: Props) {
  return (
    <div className={`flex flex-col gap-8 min-w-full w-full ${customStyles}`}>
      <header className="flex flex-col gap-2">
        <h2
          className={`uppercase font-semibold ${
            asideSection
              ? "text-lg lg:text-xl"
              : "text-xl md:text-2xl lg:text-3xl"
          }`}
        >
          {titulo}
        </h2>
        {headerChildren}
      </header>
      {children}
    </div>
  );
}

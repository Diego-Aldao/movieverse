import React, { ReactNode } from "react";

interface Props {
  titulo: string;
  children: ReactNode;
  customStyles?: string;
  headerChildren?: ReactNode;
}

export default function CustomSection({
  titulo,
  children,
  customStyles,
  headerChildren,
}: Props) {
  return (
    <div className={`flex flex-col gap-8 min-w-full w-full ${customStyles}`}>
      <header className="flex flex-col gap-2">
        <h2 className="text-xl uppercase md:text-2xl lg:text-3xl font-semibold">
          {titulo}
        </h2>
        {headerChildren}
      </header>
      {children}
    </div>
  );
}

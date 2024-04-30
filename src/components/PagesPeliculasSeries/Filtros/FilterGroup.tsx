import React, { ReactNode } from "react";

interface Props {
  filtroVisible: boolean;
  children: ReactNode;
  customStyles: string;
}

export default function FilterGroup({
  filtroVisible,
  children,
  customStyles,
}: Props) {
  return (
    <div
      className={`bg-secondary-black z-[3] w-full sm:absolute top-12 left-0 transition-all rounded-sm  ${
        filtroVisible
          ? "visible opacity-100 h-fit p-2 py-4 sm:p-4 sm:py-6"
          : "invisible opacity-0 h-0 p-0"
      } ${customStyles}`}
    >
      {children}
    </div>
  );
}

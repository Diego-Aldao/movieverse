import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  nombreFiltro: string;
  customStyles: string;
  dropdownVisible: boolean;
  setDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterDropdown({
  children,
  nombreFiltro,
  customStyles,
  dropdownVisible,
  setDropdownVisible,
}: Props) {
  const toggleDropdown = () => {
    setDropdownVisible((dropdownVisible) => !dropdownVisible);
  };

  return (
    <div className="filtrar flex flex-col gap-2">
      <button
        onClick={toggleDropdown}
        className={`header gap-2 flex min-w-[200px] items-center justify-between p-2 bg-secondary-black rounded-sm border transition-colors ${
          dropdownVisible ? "border-main-color" : "border-transparent"
        }`}
      >
        <span className="capitalize">{nombreFiltro}</span>
        <span
          className={`icon-[mdi--chevron-down] transition-[transform,colors] w-6 h-6 ${
            dropdownVisible
              ? "rotate-180 text-main-color"
              : "rotate-0 text-main-white"
          }`}
        ></span>
      </button>
      <div
        className={`bg-secondary-black z-[3] w-full sm:absolute left-0 transition-all rounded-sm  ${
          dropdownVisible
            ? "visible opacity-100 h-fit p-2 py-4 sm:p-4 sm:py-6"
            : "invisible opacity-0 h-0 p-0"
        } ${customStyles}`}
      >
        {children}
      </div>
    </div>
  );
}

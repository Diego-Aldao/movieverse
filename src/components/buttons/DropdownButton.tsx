import React from "react";

interface Props {
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdown: boolean;
  nombre: string;
}

export default function DropdownButton({
  setDropdown,
  dropdown,
  nombre,
}: Props) {
  return (
    <div
      onClick={() => {
        setDropdown((prevState) => !prevState);
      }}
      className={`header gap-2 flex min-w-[200px] items-center justify-between p-2 bg-secondary-black rounded-sm border transition-colors ${
        dropdown ? "border-main-color" : "border-transparent"
      }`}
    >
      <span className="capitalize">{nombre}</span>
      <span
        className={`icon-[mdi--chevron-down] transition-[transform,colors] w-6 h-6 ${
          dropdown ? "rotate-180 text-main-color" : "rotate-0 text-main-white"
        }`}
      ></span>
    </div>
  );
}

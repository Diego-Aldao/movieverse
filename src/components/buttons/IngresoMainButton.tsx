import React from "react";

interface Props {
  children: React.ReactNode;
  transparent?: boolean;
  handleClick?: () => void;
  customStyles?: string;
}

export default function IngresoMainButton({
  children,
  transparent,
  handleClick,
  customStyles,
}: Props) {
  return (
    <button
      onClick={handleClick}
      className={`w-full rounded-full flex items-center first-letter:uppercase justify-center gap-4 py-4 font-semibold text-sm ${
        transparent
          ? "border border-opacity-15 border-main-black"
          : "bg-main-black text-main-white"
      } ${customStyles}`}
    >
      {children}
    </button>
  );
}

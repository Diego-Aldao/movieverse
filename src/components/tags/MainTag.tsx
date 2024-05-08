import React, { ReactNode } from "react";

interface Props {
  customStyles?: string;
  children: ReactNode;
}

export default function MainTag({ children, customStyles }: Props) {
  return (
    <span
      className={`capitalize px-3 py-1 text-xs bg-[#2425267e] border-main-white border-opacity-10 border rounded-full md:px-4 md:text-sm ${customStyles}`}
    >
      {children}
    </span>
  );
}

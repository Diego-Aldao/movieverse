import React, { ReactNode } from "react";

interface Props {
  customStyles?: string;
  children: ReactNode;
}

export default function MainTag({ children, customStyles }: Props) {
  return (
    <span
      className={`first-letter:uppercase px-3 py-1 text-xs bg-main-black/35 backdrop-blur-sm rounded-full md:px-4 md:text-sm h-fit w-fit ${customStyles}`}
    >
      {children}
    </span>
  );
}

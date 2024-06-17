import Link from "next/link";
import React from "react";
interface Props {
  destino: string;
  nombre: string;
  icon?: string;
  customIconStyles?: string;
  customStyles?: string;
}
export default function SecondaryButton({
  destino,
  nombre,
  icon,
  customIconStyles,
  customStyles,
}: Props) {
  return (
    <Link
      href={destino}
      className={`py-2 px-4 shadow-sm shadow-transparent flex items-center gap-2 text-nowrap rounded-full hover:shadow-main-black/35 border border-transparent hover:border-main-white/10 transition-shadow  backdrop-blur-sm  ${customStyles}`}
    >
      <span className="first-letter:uppercase">{nombre}</span>
      {icon && <span className={`${icon} ${customIconStyles}`}></span>}
    </Link>
  );
}

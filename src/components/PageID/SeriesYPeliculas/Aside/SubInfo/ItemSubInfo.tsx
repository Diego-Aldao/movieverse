import React from "react";

interface Props {
  nombre: string;
  valor: string | number;
}

export default function ItemSubInfo({ nombre, valor }: Props) {
  return (
    <li className="flex flex-col gap-1">
      <span className="capitalize">{nombre}</span>
      <span className="capitalize text-sm text-secondary-white">{valor}</span>
    </li>
  );
}

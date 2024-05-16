import Link from "next/link";
import React from "react";

type ItemLista = {
  id: number;
  nombre: string;
  link: string;
};

interface Props {
  titulo: string;
  listado: ItemLista[];
}

export default function ListadoFooter({ titulo, listado }: Props) {
  return (
    <div className="navegacion flex flex-col gap-2 flex-1">
      <span className="uppercase text-xs font-semibold lg:text-sm text-secondary-white">
        {titulo}
      </span>
      <ul className="pl-2 flex flex-col gap-2">
        {listado.map(({ nombre, id, link }) => (
          <li className="capitalize lg:text-lg" key={id}>
            <Link href={link}>{nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

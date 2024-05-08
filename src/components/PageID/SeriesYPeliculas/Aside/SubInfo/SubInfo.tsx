import React from "react";

interface Props {
  tituloOriginal: string;
  estado: string;
  idiomaOriginal: string;
  presupuesto?: number;
  ingresos?: number;
  tipoDeSerie?: string;
  esSerie?: boolean;
}

export default function SubInfo({
  tituloOriginal,
  estado,
  idiomaOriginal,
  presupuesto,
  ingresos,
  tipoDeSerie,
  esSerie,
}: Props) {
  let presupuestoFormateado;
  let ingresosFormateado;

  if (!esSerie) {
    presupuestoFormateado = presupuesto
      ? `$ ${new Intl.NumberFormat("es-AR").format(presupuesto)}`
      : "-";

    ingresosFormateado = ingresos
      ? `$ ${new Intl.NumberFormat("es-AR").format(ingresos)}`
      : "-";
  }

  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });

  const idiomaOriginalFormateado = nombreLenguajes.of(idiomaOriginal);

  const arrayInfo = [
    {
      id: 1,
      nombre: "título original",
      valor: tituloOriginal,
    },
    {
      id: 2,
      nombre: "estado",
      valor: estado,
    },
    {
      id: 3,
      nombre: "idioma original",
      valor: idiomaOriginalFormateado,
    },
    {
      id: 4,
      nombre: "presupuesto",
      valor: presupuestoFormateado,
    },
    {
      id: 5,
      nombre: "ingresos",
      valor: ingresosFormateado,
    },
    {
      id: 6,
      nombre: "tipo de serie",
      valor: tipoDeSerie,
    },
  ];

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {arrayInfo.map((objeto) => (
        <>
          {objeto.valor && (
            <li className="flex flex-col gap-1" key={objeto.id}>
              <span className="capitalize">{objeto.nombre}</span>
              <span className="capitalize text-sm text-secondary-white">
                {objeto.valor}
              </span>
            </li>
          )}
        </>
      ))}
    </ul>
  );
}

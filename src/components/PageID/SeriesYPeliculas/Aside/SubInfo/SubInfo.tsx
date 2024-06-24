import {
  estadosPeliculas,
  estadosSeries,
  tipoDeSerie as generosSeries,
} from "@/utils/traducciones";
import React from "react";
import ItemSubInfo from "./ItemSubInfo";

interface Props {
  tituloOriginal: string;
  estado: string;
  idiomaOriginal: string;
  presupuesto?: number;
  ingresos?: number;
  tipoDeSerie?: string;
  esSerie?: boolean;
}

interface PropsSerie {
  tituloOriginal: string;
  estado: string;
  idiomaOriginal: string;
  tipoDeSerie: string;
}

interface PropsPelicula {
  tituloOriginal: string;
  estado: string;
  idiomaOriginal: string;
  presupuesto?: number;
  ingresos?: number;
}

interface SubInfo {
  id: number;
  nombre: string;
  valor: string | number;
}

function SubInfoSerie({
  tituloOriginal,
  estado,
  idiomaOriginal,
  tipoDeSerie,
}: PropsSerie) {
  const arrayInfoSeries: SubInfo[] = [
    {
      id: 1,
      nombre: "título original",
      valor: tituloOriginal,
    },
    {
      id: 2,
      nombre: "estado",
      valor: estadosSeries[estado],
    },
    {
      id: 3,
      nombre: "idioma original",
      valor: idiomaOriginal,
    },
    {
      id: 4,
      nombre: "tipo de serie",
      valor: generosSeries[tipoDeSerie],
    },
  ];

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {arrayInfoSeries.map((objeto) => (
        <React.Fragment key={objeto.id}>
          {objeto.valor && (
            <ItemSubInfo nombre={objeto.nombre} valor={objeto.valor} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

function SubInfoPeliculas({
  tituloOriginal,
  estado,
  idiomaOriginal,
  presupuesto,
  ingresos,
}: PropsPelicula) {
  let presupuestoFormateado = presupuesto
    ? `$ ${new Intl.NumberFormat("es-AR").format(presupuesto)}`
    : "-";

  let ingresosFormateado = ingresos
    ? `$ ${new Intl.NumberFormat("es-AR").format(ingresos)}`
    : "-";

  const arrayInfoPeliculas: SubInfo[] = [
    {
      id: 1,
      nombre: "título original",
      valor: tituloOriginal,
    },
    {
      id: 2,
      nombre: "estado",
      valor: estadosPeliculas[estado],
    },
    {
      id: 3,
      nombre: "idioma original",
      valor: idiomaOriginal,
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
  ];
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
      {arrayInfoPeliculas.map((objeto) => (
        <React.Fragment key={objeto.id}>
          {objeto.valor && (
            <ItemSubInfo nombre={objeto.nombre} valor={objeto.valor} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
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
  const nombreLenguajes = new Intl.DisplayNames(["es"], { type: "language" });

  const idiomaOriginalFormateado = nombreLenguajes.of(idiomaOriginal);

  return (
    <>
      {esSerie ? (
        <SubInfoSerie
          tituloOriginal={tituloOriginal}
          estado={estado}
          idiomaOriginal={idiomaOriginalFormateado || ""}
          tipoDeSerie={tipoDeSerie || ""}
        />
      ) : (
        <SubInfoPeliculas
          tituloOriginal={tituloOriginal}
          estado={estado}
          idiomaOriginal={idiomaOriginalFormateado || ""}
          presupuesto={presupuesto}
          ingresos={ingresos}
        />
      )}
    </>
  );
}

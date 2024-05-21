import { Busqueda } from "@/types/fetchTypes";

interface ResultadosAgrupados {
  [key: string]: Busqueda[];
}

export function getResultadosAgrupados(resultadosBusqueda: Busqueda[]) {
  const resultadosAgrupados: ResultadosAgrupados = resultadosBusqueda.reduce(
    (acc: ResultadosAgrupados, obj: Busqueda) => {
      if (!acc[obj.media_type]) {
        acc[obj.media_type] = [];
      }
      acc[obj.media_type].push(obj);
      return acc;
    },
    {} as ResultadosAgrupados
  );
  return resultadosAgrupados;
}

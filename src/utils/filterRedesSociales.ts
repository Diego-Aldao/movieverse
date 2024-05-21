import { RedesSociales } from "@/types/localTypes";

export default function getRedesSociales(objetoRedes: RedesSociales) {
  return Object.entries(objetoRedes)
    .filter(([clave, valor]) => valor !== null && clave !== "id") // Filtrar las redes sociales con valores no nulos y con key "id"
    .map(([clave, valor]) => ({
      [clave.replace("_id", "")]: valor as string,
    }));
}

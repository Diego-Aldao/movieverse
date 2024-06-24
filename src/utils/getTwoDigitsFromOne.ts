export default function getTwoDigitsFromOne(numero: number): number {
  let numeroStr = numero.toString();

  // Si la longitud de la cadena es menor que 2, agregar un cero delante
  if (numeroStr.length < 2) {
    numeroStr = numeroStr.padStart(2, "0");
  }
  return Number(numeroStr);
}

export default function getMonthPlusSix() {
  const fechaActual = new Date();
  const fechaFinal = new Date(fechaActual.setMonth(fechaActual.getMonth() + 6))
    .toISOString()
    .split("T")[0];
  return fechaFinal;
}

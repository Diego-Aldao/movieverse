export default function getYearFromDate(fecha: string) {
  const añoFormateado = new Date(fecha).toLocaleDateString("es-AR", {
    year: "numeric",
  });

  return añoFormateado;
}

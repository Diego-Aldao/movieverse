export const numberToFixed = (numero: number | undefined) => {
  if (!numero) return;
  const numeroFixed = (Math.round(numero * 10) / 10).toFixed(1);
  return Number(numeroFixed);
};

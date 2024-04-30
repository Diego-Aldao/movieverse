export const objectToString = (objeto: any, join: string) => {
  return Object.entries(objeto)
    .map(([key, value]) => `${key}=${value}`)
    .join(join);
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export default async function fetchData<T>(url: string) {
  const respuesta = await fetch(url, options);
  const data: T = await respuesta.json();
  return data;
}

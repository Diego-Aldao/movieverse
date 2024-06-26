const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export default async function fetchData<T>(url: string) {
  const response = await fetch(url, options);
  const data: T = await response.json();
  return data;
}

import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};

export default function FetchDataClient<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (response) {
        const data: T = await response.json();
        setData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading };
}

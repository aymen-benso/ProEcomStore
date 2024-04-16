import { useState, useEffect } from "react";

const useFetch = (url : String) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url as string)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

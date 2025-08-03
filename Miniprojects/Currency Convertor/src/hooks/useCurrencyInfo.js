import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null);     // optional

  useEffect(() => {
    let abortController = new AbortController();
    setLoading(true);
    setError(null);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      { signal: abortController.signal }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err);
          setLoading(false);
        }
      });

    return () => abortController.abort();
  }, [currency]);

  return data; 
}

export default useCurrencyInfo;

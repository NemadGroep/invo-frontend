import { useState, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_API_URL

export function useMetadata(pollInterval = 5000) {
  const [data,    setData]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchData = async () => {
    try {
      const res  = await fetch(`${apiUrl}/metadata`);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, pollInterval);
    return () => clearInterval(id);
  }, [pollInterval]);

  return { data, loading, error };
}

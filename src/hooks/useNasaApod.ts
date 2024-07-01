import { useState, useEffect } from 'react';

interface NasaApodData {
  url: string;
  title: string;
  explanation: string;
  media_type: string; // Add media_type to the interface
}

export default function useNasaApod(date: string) {
  const [data, setData] = useState<NasaApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;

      const localKey = `NASA-${date}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey) || '');
        setData(apiData);
        setLoading(false);
        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    }
    fetchAPIData();
  }, [date]);

  return { data, loading, error };
}
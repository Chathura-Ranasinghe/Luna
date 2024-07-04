import { useState, useEffect } from 'react';
import axios from 'axios';

interface NasaApodData {
  url: string;
  title: string;
  explanation: string;
  media_type: string;
}

interface ErrorData {
  message: string;
  code?: string;
}

export default function useNasaApod(date: string) {
  const [data, setData] = useState<NasaApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorData | null>(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}&thumbs=true`;

      const localKey = `NASA-${date}`;
      const cachedData = localStorage.getItem(localKey);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(url);
        const apiData = res.data;
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError({ message: err.message, code: err.response?.status.toString() });
        } else {
          setError({ message: 'An unknown error occurred' });
        }
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, [date]);

  return { data, loading, error };
}

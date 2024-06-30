import { useState, useEffect } from 'react';
import axios from 'axios';

interface NasaApodData {
  url: string;
  title: string;
  explanation: string;
  media_type: string;
  thumbnail_url?: string; // Add thumbnail_url to the interface
}

export default function useNasaApod(date: string) {
  const [data, setData] = useState<NasaApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}&thumbs=true`;

      const localKey = `NASA-${date}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey) || '');
        setData(apiData);
        setLoading(false);
        return;
      }

      localStorage.clear();

      try {
        const res = await axios.get(url);
        const apiData = res.data;
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        setLoading(false);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
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

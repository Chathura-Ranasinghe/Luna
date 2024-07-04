import { useState, useEffect } from 'react';
import axios from 'axios';

interface NeoWsData {
  id: string;
  name: string;
  close_approach_data: {
    close_approach_date: string;
    relative_velocity: {
      kilometers_per_hour: string;
    };
    miss_distance: {
      kilometers: string;
    };
  }[];
}

interface ErrorData {
  message: string;
  code?: string;
}

export default function useNasaNeoWs() {
  const [data, setData] = useState<NeoWsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorData | null>(null);

  useEffect(() => {
    async function fetchNeoWsData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=${NASA_KEY}`;

      const localKey = `NeoWs-${new Date().toISOString().split('T')[0]}`;
      const cachedData = localStorage.getItem(localKey);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(url);
        const apiData = res.data.near_earth_objects[new Date().toISOString().split('T')[0]];
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError({ message: err.message, code: err.response?.status?.toString() });
        } else {
          setError({ message: 'An unknown error occurred' });
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNeoWsData();
  }, []);

  return { data, loading, error };
}

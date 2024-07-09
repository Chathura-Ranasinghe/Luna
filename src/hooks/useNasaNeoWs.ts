import { useState, useEffect } from 'react';
import axios from 'axios';

interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full: string;
  relative_velocity: {
    kilometers_per_hour: string;
  };
  miss_distance: {
    kilometers: string;
  };
}

interface EstimatedDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface NeoWsData {
  id: string;
  name: string;
  is_potentially_hazardous_asteroid: boolean;
  estimated_diameter: {
    kilometers: EstimatedDiameter;
  };
  close_approach_data: CloseApproachData[];
}

interface ErrorData {
  message: string;
  code?: string;
}

export default function useNasaNeoWs(date: string) {
  const [data, setData] = useState<NeoWsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorData | null>(null);

  useEffect(() => {
    async function fetchNeoWsData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&detailed=true&api_key=${NASA_KEY}`;

      const localKey = `NeoWs-${date}`;
      const cachedData = localStorage.getItem(localKey);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(url);
        const apiData = res.data.near_earth_objects[date];
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
  }, [date]);

  return { data, loading, error };
}

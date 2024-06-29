import { useState } from 'react';
import Cover from './Cover';
import CoverDescription from './CoverDescription';
import useNasaApod from '@/hooks/useNasaApod';

export default function Home() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const { data, loading, error } = useNasaApod(date);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="h-screen">
      <Cover imageUrl={data?.url ?? ''} mediaType={data?.media_type ?? 'image'} />
      <div className="flex h-full justify-center items-center">
        <h1>Hi there</h1>
      </div>
      <CoverDescription data={data} date={date} setDate={setDate} />
    </section>
  );
}

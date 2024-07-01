import { useState, useEffect } from 'react';
import useNasaApod from '@/hooks/useNasaApod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import NotFoundPage from '@/pages/NotFoundPage';

export default function APOD() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [inputDate, setInputDate] = useState<string>(date);
  const [isValidDate, setIsValidDate] = useState<boolean>(true);
  const { data, loading, error } = useNasaApod(date);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setInputDate(newDate);
    validateDate(newDate);
  };

  const validateDate = (date: string) => {
    const minDate = new Date('1994-06-16').toISOString().split('T')[0];
    const maxDate = new Date().toISOString().split('T')[0];
    setIsValidDate(date >= minDate && date <= maxDate);
  };

  const handleFetchImage = () => {
    if (isValidDate) {
      setDate(inputDate);
    }
  };

  const displayDate = (date: string) => {
    const today = new Date().toISOString().split('T')[0];
    return date === today ? "Today" : date;
  };

  useEffect(() => {
    validateDate(inputDate);
  }, [inputDate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <NotFoundPage errorMsg={error}/>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <section className="h-full p-6 sm:p-8 bg-muted">
      <div className='flex flex-col gap-8 h-full'>
        <div className='grid sm:flex gap-4 justify-between'>
          <h1 className='text-3xl font-bold'>NASA Photo of the Day</h1>
          <div className='flex'>
            <Input 
              type="date" 
              value={inputDate} 
              onChange={handleDateChange} 
              min="1995-06-16"
              max={new Date().toISOString().split('T')[0]}
              className='bg-background/50 w-32'
            />
            <Button 
              onClick={handleFetchImage} 
              disabled={!isValidDate}
              className='rounded-none rounded-r-md'
            >
              <Search className='h-4 w-4'/>
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:grid grid-cols-2 gap-4">
          <div className="relative h-full sm:h-[540px]">
            <div className="absolute inset-0 blur-3xl overflow-hidden">
              {data.media_type === 'image' ? (
                <img
                  src={data.url}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <iframe
                    src={data.url}
                    title={data.title}
                    className="w-full aspect-video"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            {data.media_type === 'image' ? (
              <img
                src={data.url}
                alt={data.title}
                className="relative w-full h-full object-contain"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <iframe
                  src={data.url}
                  title={data.title}
                  className="relative w-full aspect-video"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <div className='flex flex-col h-[540px] gap-4 justify-between'>
            <div>
              <h1 className='border-muted-foreground text-2xl font-bold'>{data.title}</h1>
              <p className='text-lg text-muted-foreground'>{displayDate(date)}</p>
            </div>
            <div className='overflow-y-scroll no-scrollbar h-full border-muted-foreground bg-background/50 p-4 rounded-md shadow-md'>
              <p className='text-justify text-lg'>{data.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// APOD.tsx
import { useState, useEffect, useCallback } from 'react';
import useNasaApod from '@/hooks/useNasaApod';
import ApodThumbnails from '@/components/APODPage/ApodThumbnails';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Telescope } from 'lucide-react';
import NotFound from '@/components/Interact/NotFound';
import {useApodValidateDate} from '@/hooks/useValidateDate';
import Loading from '@/components/Interact/Loading';

export default function APOD() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [inputDate, setInputDate] = useState<string>(date);
  const { isValidDate, validateDate } = useApodValidateDate();
  const { data, loading, error } = useNasaApod(date);

  const handleDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setInputDate(newDate);
    validateDate(newDate);
  }, [validateDate]);

  const handleFetchImage = useCallback(() => {
    if (isValidDate) {
      setDate(inputDate);
    }
  }, [isValidDate, inputDate]);

  const handleThumbnailClick = useCallback((selectedDate: string) => {
    setDate(selectedDate);
    setInputDate(selectedDate);
  }, []);

  const displayDate = useCallback((date: string) => {
    const today = new Date().toISOString().split('T')[0];
    return date === today ? "Today" : date;
  }, []);

  useEffect(() => {
    validateDate(inputDate);
  }, [inputDate, validateDate]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <NotFound errorMsg={error.message} errorCode={error.code} />;
  }

  if (!data) {
    return <div className='w-full flex h-24 items-center justify-center bg-muted'>No data available</div>;
  }

  return (
    <section className="h-full p-6 sm:p-8 pb-24 sm:pb-24 bg-muted">
      <div className='flex flex-col gap-8 sm:gap-16 h-full'>
        <div className='grid justify-between md:flex gap-4 md:gap-0 items-end'>
          <h1 className='capitalize text-6xl sm:text-8xl font-bold text-muted-foreground/10'>Discover the cosmos!</h1>        
          <div className='flex flex-col max-w-48 md:w-auto gap-1'>
            <div className='flex items-center text-muted-foreground gap-2'>
              <p className='text-sm'>Explore</p>
              <Search className='h-3 w-3'/>
            </div>
            <div className='flex mb-4'>
              <Input 
                type="date" 
                value={inputDate} 
                onChange={handleDateChange} 
                min="1900-01-01" 
                // max={new Date().toISOString().split('T')[0]} 
                className='bg-background/50 border-none rounded-none shadow-md focus-visible:ring-0'
              />
              <Button 
                onClick={handleFetchImage} 
                disabled={!isValidDate}
                className='rounded-none shadow-md'
              >
                <Telescope className='h-4 w-4 fill-background'/>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid grid-cols-2 gap-4">
          <div className="flex w-full h-full justify-center sm:h-[540px]">
            {data.media_type === 'image' ? (
              <img
                src={data.url}
                alt={data.title}
                className="h-full object-contain shadow-md"
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
          <div className='flex flex-col h-[540px] gap-4 justify-between'>
            <div className='pl-4'>
              <h1 className='border-muted-foreground text-2xl font-bold'>{data.title}</h1>
              <p className='text-lg text-muted-foreground font-semibold'>{displayDate(date)}</p>
            </div>
            <div className='overflow-y-scroll no-scrollbar h-full bg-background/50 hover:bg-background transition-colors p-4 shadow-md'>
              <p className='text-justify font-sans'>{data.explanation}</p>
            </div>
          </div>
        </div>
        <ApodThumbnails onThumbnailClick={handleThumbnailClick} />
      </div>
    </section>
  );
}

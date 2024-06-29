import { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Info, Search, Telescope } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NasaApodData {
  url: string;
  title: string;
  explanation: string;
  media_type: string;
  thumbnail_url?: string; 
}

interface CoverDescriptionProps {
  data: NasaApodData | null;
  date: string;
  setDate: (date: string) => void;
}

export default function CoverDescription({ data, date, setDate }: CoverDescriptionProps) {
  const [inputDate, setInputDate] = useState(date);
  const today = new Date().toISOString().split('T')[0];
  const minDate = '2015-01-01'; // Minimum date to be 2015-01-01

  if (!data) {
    return null;
  }

  const isDateValid = (inputDate: string): boolean => {
    const selectedDate = new Date(inputDate);
    const minDateObj = new Date(minDate);
    const todayObj = new Date(today);
    return selectedDate >= minDateObj && selectedDate <= todayObj;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDate(inputDate);
  };

  return (
    <div className="absolute bottom-0 w-full select-none pt-20 z-10 bg-gradient-to-t from-background">
      <div className="flex flex-col sm:flex-row items-center p-6 sm:p-8 justify-between">
        <div className="mb-4 sm:mb-0 sm:mr-4">
        <h1 className="text-lg font-semibold">Nasa photo of the day</h1>
        <hr className="border-primary border-t-1 w-full mb-2" />
        <div className="flex items-center justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-medium">{data.title}</h2>
            <Sheet>
              <SheetTrigger>
                <Info className='h-5 w-5 mt-1'/>
              </SheetTrigger>
              <SheetContent side="right" className='w-full'>
                <SheetHeader className='h-full'>
                  <SheetTitle>{data.title}</SheetTitle>
                  <div className='h-full overflow-y-auto no-scrollba'>
                    <SheetDescription >
                      {data.media_type === 'image' ? (
                      <img src={data.url} alt={data.title} className="max-w-full h-full mb-3" />
                      ) : (
                        <iframe
                          src={data.url}
                          title={data.title}
                          className="w-full h-auto mb-3"
                          allowFullScreen
                        />
                      )}
                      <p className='text-justify text-base'>{data.explanation}</p>
                    </SheetDescription>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className='text-center sm:text-start'>
          <div className='flex mb-1 items-center gap-2 justify-center sm:justify-start'>
            <Search className='h-4 w-4'/>
            <h2 className='font-normal'>Explore the universe</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <Input 
              type="date" 
              value={inputDate} 
              max={today}
              min={minDate}
              onChange={(e) => setInputDate(e.target.value)} 
              className='rounded-none border-none rounded-l-lg focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 cursor-text'
            />
            <Button 
              type="submit"
              className='rounded-none rounded-r-lg' 
              disabled={!isDateValid(inputDate)}
            >
              <Telescope />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}


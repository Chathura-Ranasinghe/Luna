import { FC, useCallback } from 'react';
import useNasaApodRange from '@/hooks/useNasaApodRange';
import NotFoundPage from '@/pages/NotFoundPage';
import Loading from '../../pages/LoadingPage';

interface ApodThumbnailsProps {
  onThumbnailClick: (date: string) => void;
}

const ApodThumbnails: FC<ApodThumbnailsProps> = ({ onThumbnailClick }) => {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  const startDate = lastWeek.toISOString().split('T')[0];
  const endDate = today.toISOString().split('T')[0];
  const { data: lastWeekData, loading: lastWeekLoading, error: lastWeekError } = useNasaApodRange(startDate, endDate);

  const handleThumbnailClick = useCallback((selectedDate: string) => {
    onThumbnailClick(selectedDate);
  }, [onThumbnailClick]);

  if (lastWeekLoading) {
    return <Loading/>;
  }

  if (lastWeekError) {
    return <NotFoundPage errorMsg={lastWeekError.message} errorCode={lastWeekError.code} />;
  }

  const sortedData = [...lastWeekData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='grid md:flex md:justify-between gap-6 md:gap-0 md:flex-row-reverse'>
      <h1 className='capitalize text-6xl sm:text-7xl font-bold text-muted-foreground/10 text-end'>Last Seven Days</h1>
      <div className='sm:flex w-full sm:flex-wrap gap-4 grid grid-cols-2 grid-flow-row justify-end md:justify-start'>
        {sortedData.map(apod => (
          <div
            key={apod.date}
            className='relative w-full sm:w-36 h-32 cursor-pointer group'
            onClick={() => handleThumbnailClick(apod.date)}
          >
            {apod.media_type === 'image' ? (
              <img src={apod.url} alt={apod.title} className='object-cover w-full h-full' />
            ) : (
              <img src={apod.thumbnail_url} alt={apod.title} className='object-cover w-full h-full' />
            )}
            <div className='absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='text-center p-2'>{apod.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApodThumbnails;

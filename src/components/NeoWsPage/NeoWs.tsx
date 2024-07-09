import { useState, useCallback, useEffect } from 'react';
import useNeoWs from '@/hooks/useNasaNeoWs';
import Loading from '@/components/Interact/Loading';
import NotFound from '@/components/Interact/NotFound';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {useNeoWsValidateDate} from '@/hooks/useValidateDate';
import { Info, Telescope , Shield, Search } from 'lucide-react';

//import astro from '@/assets/images/astro.gif';
import { compareSize } from '@/consts/compareSize';
import { compareSpeed } from '@/consts/compareSpeed';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function NeoWs() {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [inputDate, setInputDate] = useState<string>(date);
  const { isValidDate, validateDate } = useNeoWsValidateDate();
  const { data, loading, error } = useNeoWs(date);

  const handleDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setInputDate(newDate);
    validateDate(newDate);
  }, [validateDate]);

  const handleFetchData = useCallback(() => {
    if (isValidDate) {
      setDate(inputDate);
    }
  }, [isValidDate, inputDate]);

  const isToday = (dateString: string) => {
    const today = new Date().toISOString().split('T')[0];
    return dateString === today;
  };

  useEffect(() => {
    validateDate(inputDate);
  }, [inputDate, validateDate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NotFound errorMsg={error.message} errorCode={error.code} />;
  }

  return (
    <section className="h-full p-6 sm:p-8 pb-24 sm:pb-24 bg-muted">
      <div className='flex flex-col gap-8 sm:gap-16 h-full'>
        <div className='grid justify-between md:flex gap-4 md:gap-0 items-end'>
          <div className='flex flex-col gap-3'>
            <h1 className='capitalize text-6xl sm:text-8xl font-bold text-muted-foreground/10'>Objects Near Earth's Orbit</h1>
            <h2 className='capitalize text-5xl sm:text-7xl font-bold text-muted-foreground'>On {isToday(date) ? 'Today' : new Date(date).toLocaleDateString()}</h2>
          </div>
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
                onClick={handleFetchData} 
                disabled={!isValidDate}
                className='rounded-none shadow-md'
              >
                <Telescope className='h-4 w-4 fill-background'/>
              </Button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {data.length > 0 ? (
            data.map((asteroid) => {
              const estimatedDiameter = asteroid.estimated_diameter.kilometers;
              const averageSizeMeters = (((estimatedDiameter.estimated_diameter_min + estimatedDiameter.estimated_diameter_max) / 2) * 1000).toFixed(2);
              const missDistanceKm = parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers);
              const Velocity = parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2);
              const missDistanceAu = (missDistanceKm / 149597870.7).toFixed(6);
              
              const closeApproachTimeUTC = asteroid.close_approach_data[0].close_approach_date_full.split(' ')[1];
              const closeApproachDateUTC = new Date(`${asteroid.close_approach_data[0].close_approach_date}T${closeApproachTimeUTC}Z`);
              const closeApproachTimeLocal = closeApproachDateUTC.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
              
              const { compareSizeimage, compareSizelabel } = compareSize(parseFloat((((estimatedDiameter.estimated_diameter_min + estimatedDiameter.estimated_diameter_max) / 2) * 1000).toFixed(0)));
              const { compareSpeedimage, compareSpeedlabel } = compareSpeed(parseFloat(Velocity));

              return (
                <Card className='flex flex-wrap bg-background/20 border-none rounded-none shadow-md justify-between hover:bg-background/50 transition-colors' key={asteroid.id}>
                  <div>
                    <CardHeader>
                      <CardTitle className='font-bold'>{asteroid.name}</CardTitle>
                      <CardDescription className='flex gap-3 w-64 text-base'>
                        {asteroid.is_potentially_hazardous_asteroid ? (
                          <>
                            Potentially hazardous <Shield stroke='0' className='h-5 w-5 fill-red-700'/>
                          </>
                        ) : (
                          <>
                            Not hazardous <Shield stroke='0' className='h-5 w-5 fill-green-700'/>
                          </>
                        )}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='flex text-sm md:text-base flex-col gap-1'>
                      <span>Average Diameter: {averageSizeMeters} m</span>
                      <span>Approach Time (Local): {closeApproachTimeLocal}</span>
                      <span>Velocity: {Velocity} km/h</span>
                      <span>Miss Distance: {parseFloat(missDistanceAu).toFixed(4)} AU</span>
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>                   
                        <span className='flex text-sm items-center text-muted-foreground gap-3 cursor-pointer'>Expanded information 
                         <Info className='h-4 w-4'/>
                        </span>
                      </DialogTrigger>
                        <DialogContent  >
                          <DialogHeader className='text-start gap-4'>
                            <DialogTitle>{asteroid.name}</DialogTitle>
                            <DialogDescription>
                              <span className='flex flex-col mb-2'>
                                <span>Estimated Diameter min: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} km</span>
                                <span>Estimated Diameter max: {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</span>
                                <span>Close Approach Time (UTC): {asteroid.close_approach_data[0].close_approach_date_full.split(' ')[1]}</span>
                                <span>Miss Distance (km): {(asteroid.close_approach_data[0].miss_distance.kilometers)} km</span>
                              </span>
                              <a
                                href={`https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${asteroid.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline mt-2"
                              >
                                More Information
                              </a>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </div>     
                  <div className='flex w-full sm:w-auto text-sm md:text-base items-center m-6'>
                    <div className='flex gap-4'>
                      <div className='flex flex-col max-w-40 gap-3'>
                          <img
                            src={compareSizeimage}
                            alt={compareSizelabel}
                            className="w-full sm:w-auto h-auto object-contain select-none dark:brightness-[0.6] dark:grayscale"
                            draggable="false"
                          />
                          <span className='text-center'>{compareSizelabel}</span>                   
                        </div>
                        <div className='flex flex-col max-w-40 gap-3'>
                          <img
                            src={compareSpeedimage}
                            alt={compareSpeedlabel}
                            className="w-full sm:w-auto h-auto object-contain select-none dark:brightness-[0.6] dark:grayscale"
                            draggable="false"
                          />
                          <span className='text-center'>{compareSpeedlabel}</span>                   
                        </div>
                      </div>
                  </div>
                </Card>
              );
            })
          ) : (
            <Card className='flex h-full items-center justify-center'>
              <p>No asteroids are making a close approach to Earth on this date.</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

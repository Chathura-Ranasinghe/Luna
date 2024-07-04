import useNeoWs from '@/hooks/useNasaNeoWs';
import Loading from '@/pages/LoadingPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function NeoWs() {
  const { data, loading, error } = useNeoWs();

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <NotFoundPage errorMsg={error.message} errorCode={error.code} />;
  }

  return (
    <section className="h-full p-6 sm:p-8 sm:py-24 bg-muted">
      <div className='flex flex-col gap-8 sm:gap-16 h-full'>
        <h1 className='text-2xl font-bold'>Asteroids Approaching Earth Today</h1>
        <div className='flex flex-col gap-4'>
          {data.length > 0 ? (
            data.map((asteroid) => (
              <div key={asteroid.id} className='p-4 border rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold'>{asteroid.name}</h2>
                <p><strong>Close Approach Date:</strong> {asteroid.close_approach_data[0].close_approach_date}</p>
                <p><strong>Velocity:</strong> {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
                <p><strong>Miss Distance:</strong> {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
              </div>
            ))
          ) : (
            <p>No asteroids are making a close approach to Earth today.</p>
          )}
        </div>
      </div>
    </section>
  );
}

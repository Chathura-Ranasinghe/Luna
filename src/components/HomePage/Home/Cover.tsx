import cover from '../../../assets/images/galaxy.jpg';

export default function Cover() {
  return (
    <div>
      <img 
      src={cover} 
      alt="cover" 
      className='object-cover h-full w-full'
      />
    </div>
  );
}

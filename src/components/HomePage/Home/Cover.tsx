import cover from '../../../assets/images/galaxy.jpg';

export default function Cover() {
  return (
    <div>
        <img 
        src={cover} 
        alt="cover" 
        className='fixed top-0 left-0 -z-10 object-cover h-screen w-full'
        />
    </div>
  );
}

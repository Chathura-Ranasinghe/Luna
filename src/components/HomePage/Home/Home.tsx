import Cover from './Cover';
import CoverDescription from './CoverDescription';

export default function Home() {
  return (
    <section className="h-screen">
      <div className='fixed top-0 left-0 -z-10 w-full'>
        <Cover/>
      </div>
      <div className='flex h-full justify-center items-center'>
        <h1>
          Hi there
        </h1>
      </div>
      <CoverDescription/>
    </section>
  );
}

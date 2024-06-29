import Cover from './Cover';
import Footer from './HomeFooter';

export default function Home() {
  return (
    <section className="h-screen">
      <Cover/>
      <div className='flex h-full justify-center items-center'>
        <h1>
          Hi there
        </h1>
      </div>
      <Footer/>
    </section>
  );
}

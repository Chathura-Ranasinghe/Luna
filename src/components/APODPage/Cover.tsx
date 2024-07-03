import {  useEffect } from 'react';
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/magicui/grid-pattern";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//import CoverImg from "@/assets/images/wallOne.jpg"

export default function Cover() {

    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

  return (
    <section className="relative h-96">
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-muted ..."></div>
        {/* <img
        src={CoverImg}
        alt="cover"
        className="fixed -z-10 h-full w-full object-cover dark:brightness-[0.6]"
        /> */}
        <div className='flex h-full p-6 pt-20 sm:p-8 sm:pt-20'>
            <div className="relative flex h-full w-full items-center p-20 justify-center overflow-hidden rounded-lg">
                <motion.h1
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -200 }
                    }}
                    transition={{ duration: 0.5 }}
                    className='text-5xl sm:text-6xl font-black uppercase'
                >
                    <span className='text-red-600'>NASA</span> Astronomy Photo of the Day
                </motion.h1>  
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={"4 2"}
                    className={cn(
                    "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
        </div>
    </section>
    
  )
}

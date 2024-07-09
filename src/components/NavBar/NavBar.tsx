import { Menu, Rocket } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../ui/DarkMode/mode-toggle';
import { useEffect, useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const getNavLinkClass = (isActive: boolean) =>
    isActive
      ? "text-base font-bold text-red-700 transition ease-in-out duration-300"
      : "text-base font-semibold text-foreground/80 hover:text-red-700 transition ease-in-out duration-300";

  return (
      <motion.header 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { y: 0 },
         hidden: {  y: -20 }
       }}
       transition={{ duration: 0.5 }}
      className="fixed w-full top-0 flex h-20 px-6 py-3 sm:px-8 z-20">
        <motion.nav
          variants={{
            visible: {opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "-120%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky flex w-full h-full px-4 items-center bg-muted/80 dark:bg-muted/60 backdrop-blur-md justify-between shadow-md"
        >
          <div className="flex items-center w-[130px]">
            <div className="flex w-full text-3xl items-center gap-3 font-bold select-none">
              <Rocket stroke='0' size={30} className='flex fill-foreground'/>
              <Link to='./' className='flex gap-1'>
                LUNA<span className="text-red-700">.</span>
              </Link>
            </div>
          </div>
          <div className='gap-4 md:gap-6 hidden items-center sm:flex'>
            <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
            <NavLink to="/apod" className={({ isActive }) => getNavLinkClass(isActive)}>APOD</NavLink>
            <NavLink to="/neows" className={({ isActive }) => getNavLinkClass(isActive)}>NeoWs</NavLink>
          </div>
          <div className='flex items-center justify-end w-[130px] gap-3'>
            <div>
              <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>About</NavLink>
            </div>
            <ModeToggle />
            <div className='flex sm:hidden'>
            <Sheet>
              <SheetTrigger ><Menu /></SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className='gap-4'>
                  <SheetTitle>
                  <div className="flex w-full text-3xl items-center gap-3 font-bold cursor-pointer">
                    <Rocket stroke='0' size={30} className='flex fill-foreground'/>
                    <span className='flex gap-1'>
                      LUNA<span className="text-red-700">.</span>
                    </span>
                  </div>
                  </SheetTitle>
                  <SheetDescription className='flex flex-col items-start h-full gap-2'>
                    <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
                    <NavLink to="/apod" className={({ isActive }) => getNavLinkClass(isActive)}>APOD</NavLink>
                    <NavLink to="/neows" className={({ isActive }) => getNavLinkClass(isActive)}>NeoWs</NavLink>
                    <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>About</NavLink>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </motion.nav>
      </motion.header>
  );
}

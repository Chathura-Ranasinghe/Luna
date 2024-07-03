import { Menu, Rocket } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
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
      ? "text-base font-bold text-foregrounde  transition ease-in-out duration-300"
      : "text-base font-medium text-muted-foreground hover:text-foreground transition ease-in-out duration-300";

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
          className="sticky flex w-full h-full px-4 items-center bg-muted/70 backdrop-blur-md justify-between shadow-md"
        >
          <div className="flex items-center w-[120px]">
            <span className="flex text-3xl items-center gap-3 font-bold cursor-pointer">
              <Rocket size={30} />
              LUNA
            </span>
          </div>
          <div className='gap-3 hidden sm:flex'>
            <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
            <NavLink to="/APODPage" className={({ isActive }) => getNavLinkClass(isActive)}>APOD</NavLink>
            <NavLink to="/NeoWs" className={({ isActive }) => getNavLinkClass(isActive)}>NeoWs</NavLink>
          </div>
          <div className='flex items-center justify-end w-[120px] gap-3'>
            <div>
              <NavLink to="/About" className={({ isActive }) => getNavLinkClass(isActive)}>About</NavLink>
            </div>
            <ModeToggle />
            <div className='flex sm:hidden'>
            <Sheet>
              <SheetTrigger ><Menu /></SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className='gap-4'>
                  <SheetTitle>
                    <span className="flex text-3xl items-center gap-3 font-bold cursor-pointer">
                      <Rocket size={30} />
                      LUNA
                    </span>
                  </SheetTitle>
                  <SheetDescription className='flex text-foreground flex-col items-start h-full gap-2'>
                    <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>Home</NavLink>
                    <NavLink to="/APODPage" className={({ isActive }) => getNavLinkClass(isActive)}>APOD</NavLink>
                    <NavLink to="/NeoWs" className={({ isActive }) => getNavLinkClass(isActive)}>NeoWs</NavLink>
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

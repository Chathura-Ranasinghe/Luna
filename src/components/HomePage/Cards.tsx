import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";
import BoxReveal from "@/components/ui/magicui/box-reveal";

import apodImg from '@/assets/images/collage3.gif';
import NeoWs from '@/assets/images/collage2.gif';

import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import GridPattern from "../ui/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Cards() {
  return (
    <section id="slider"  className="h-full bg-muted">
      <div className="flex flex-col h-full w-full p-6 pt-20 sm:p-8 sm:pt-20 gap-8 sm:gap-16 pb-24 sm:pb-24">
        <h1 className='capitalize text-6xl sm:text-8xl font-bold text-muted-foreground/10'>What we offer</h1>
        <div className="flex flex-col items-center justify-center gap-8">

          <Card className='flex-col w-full flex md:flex-row border-none rounded-none shadow-md bg-background/50 hover:bg-background transition-colors gap-3 sm:gap-6'>
            <div className="md:min-w-[420px] h-60 md:h-96">
              <img
                src={apodImg}
                alt=""
                className="h-full w-full object-cover dark:brightness-[0.8]"
                draggable="false"
              />
            </div>
            <div className="flex w-full justify-center items-center p-6 relative overflow-hidden">
              <div className="flex flex-col">
                <div className="flex flex-col max-w-[520px] text-base">
                  <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                    <span className="text-xl font-bold text-red-700 uppercase">NASA<span className="text-xl text-muted-foreground/50"> Astronomy Picture of the Day</span></span>
                  </BoxReveal>
                  <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                    <p className="mb-6 mt-2 text-justify">
                    Discover daily breathtaking images and fascinating facts about our universe, courtesy of NASA. Dive into the wonders of space, from stunning galaxies to close-up views of planets. Enjoy your cosmic journey!
                    </p>
                  </BoxReveal>
                  <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                    <Link to='/apod' className="flex flex-row gap-3 ">
                      <span  className="border-b border-muted-foreground font-semibold">APOD</span>
                      <SquareArrowOutUpRight className="hover:scale-110 transition-transform text-red-700"/>
                    </Link>
                  </BoxReveal> 
                </div> 
              </div>
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
          </Card>

          <Card className='flex-col-reverse w-full flex md:flex-row border-none rounded-none shadow-md bg-background/50 hover:bg-background transition-colors gap-3 sm:gap-6'>
            <div className="flex w-full justify-center items-center p-6 relative overflow-hidden">
              <div className="flex flex-col max-w-[520px] text-base">
                <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                  <span className="text-xl font-bold text-red-700 uppercase">NASA<span className="text-xl text-muted-foreground/50"> Near Earth Object Web Service</span></span>
                </BoxReveal>
                <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                  <p className="mb-6 mt-2 text-justify">
                    Explore real-time data, learn about potential impacts, and understand the measures taken to protect our planet. Join us in discovering and tracking these fascinating celestial objects!
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                  <Link to='/neows' className="flex flex-row gap-3 ">
                    <span  className="border-b border-muted-foreground font-semibold">NeoWs</span>
                    <SquareArrowOutUpRight className="hover:scale-110 transition-transform text-red-700"/>
                  </Link>
                </BoxReveal> 
              </div>
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
            <div className="md:min-w-[420px] h-60 md:h-96">
              <img
                src={NeoWs}
                alt=""
                className="h-full w-full object-cover dark:brightness-[0.8]"
                draggable="false"
              />
            </div>
          </Card>

          <Card className='flex w-full h-32 justify-center items-center text-muted-foreground/5 hover:text-muted-foreground/20 md:flex-row border-none rounded-none shadow-md bg-background/50 hover:bg-background transition-colors gap-3 sm:gap-8'>
            <CardHeader className="flex">
              <a 
              className="flex flex-row justify-center items-center text-3xl sm:text-5xl font-bold gap-3 uppercase" 
              href="https://youtu.be/dQw4w9WgXcQ?si=57Di_XIKGEr2wk_S" target="_">
                Up Comming
              <SquareArrowOutUpRight strokeWidth={2} className=" sm:h-10 sm:w-10"/></a>
            </CardHeader>
          </Card>

        </div>
      </div>
    </section>
  );
}


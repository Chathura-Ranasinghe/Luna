import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/magicui/grid-pattern";
// import TypingAnimation from "@/components/ui/magicui/typing-animation";
import BoxReveal from "@/components/ui/magicui/box-reveal";

//import sky from "@/assets/images/earthpov.jpg";
import moon from "@/assets/images/moon.gif";
import { ArrowDownRight } from "lucide-react";

export default function HomeCover() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const target = event.currentTarget;
    const id = target.getAttribute('href')?.replace('#', '');
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-[url('@/assets/images/earthpov2.jpg')] dark:bg-[url('@/assets/images/earthpov.jpg')] bg-cover bg-center filter dark:brightness-[0.6] "></div>
      <div className="absolute bottom-0 left-0 h-56 w-full z-10 bg-gradient-to-t from-muted ..."></div>
      {/* <img
        src={sky}
        alt=""
        className="absolute top-0 left-0 object-cover w-full h-full dark:brightness-[0.6]"
      /> */}
      <div className="flex h-full w-full items-center justify-center p-6 pt-20 sm:p-8 sm:pt-20">
        <div className="grid h-full w-full grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-5 sm:p-20">
            <div className="flex flex-col max-w-80 gap-4 z-10 ">
              <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                <p className="flex text-6xl sm:text-7xl md:text-8xl font-black uppercase gap-1">
                  Luna<span className="text-red-700">.</span>
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                <p className="flex text-sm sm:text-base md:text-lg font-bold bg-foreground/90 backdrop-blur-lg text-background px-2 w-full sm:w-64 md:w-full">
                  Welcome to Your Cosmic Portal
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                <p className="text-sm md:text-base font-medium ">
                  Explore the Boundless Mysteries of Space, Observe Distant Galaxies, and Learn About the Wonders of the Universe Right from the Comfort of Your Home.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
                <span className="flex">
                  <a href="#slider" onClick={handleScroll} className="flex items-center gap-2 text-sm font-semibold bg-foreground/80 text-background py-2 px-3 backdrop-blur-md hover:bg-foreground transition-colors cursor-pointer">
                    Explore<ArrowDownRight className="h-4 w-4 " />
                  </a>
                </span>
              </BoxReveal>
            </div>
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
            />
          </div>
          <div className="flex h-full items-center justify-center">
            <img
              src={moon}
              alt="Image"
              className="h-full object-contain select-none dark:brightness-[0.6] dark:grayscale z-10"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

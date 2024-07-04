import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/magicui/grid-pattern";
import TypingAnimation from "../ui/magicui/typing-animation";

//import CoverImg from "@/assets/images/wallOne.jpg"

interface CoverProps {
  text: string;
}

export default function Cover({ text }: CoverProps) {
  return (
    <section className="relative h-96">
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-muted ..."></div>
        {/* <img
        src={CoverImg}
        alt="cover"
        className="fixed -z-10 h-full w-full object-cover dark:brightness-[0.6]"
        /> */}
        <div className='flex h-full p-6 pt-20 sm:p-8 sm:pt-20'>
            <div className="relative flex h-full w-full items-center p-10 justify-center overflow-hidden rounded-lg">
                <TypingAnimation
                  className='text-5xl md:text-6xl font-mono font-semibold text-left capitalize'
                  text={text}
                />
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

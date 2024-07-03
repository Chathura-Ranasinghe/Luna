import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/magicui/grid-pattern";
import TypingAnimation from "@/components/ui/magicui/typing-animation";

import signupimage from '@/assets/images/moon.gif';

export default function Cover() {
  return (
    <section className="h-screen">
      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-muted ..."></div>
      <div className="flex h-full w-full items-center justify-center p-6 sm:p-8">
        <div className="flex h-full flex-col sm:grid grid-cols-2 gap-4">
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-20">
            <TypingAnimation 
              className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter"
              text="Grid Pattern fgdfgdg fdgdfgfdg gdfgdfg dgdgdfg" />
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
              src={signupimage}
              alt="Image"
              className="h-full object-contain select-none dark:brightness-[0.6] dark:grayscale"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Menu, Rocket  } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button";
import { ModeToggle } from '../ui/DarkMode/mode-toggle';

export default function NavBar() {

  return (
    <div className="fixed top-0 left-0 w-full select-none z-10">
      <header className="flex h-20 px-6 py-3 sm:px-8">
        <nav className="flex w-full h-full px-4 items-center bg-muted/80 justify-between rounded-lg shadow-md">
           <div className="flex items-center w-[120px]">
              <span 
                className="flex text-3xl items-center gap-3 font-bold cursor-pointer" 
                ><Rocket size={30} />
                LUNA
              </span>
            </div>
            <div className='gap-3 hidden sm:flex'>
              <Button variant='ghost'>Home</Button>
              <Button variant='ghost'>Home</Button>
              <Button variant='ghost'>Home</Button>
              <Button variant='ghost'>Home</Button>
            </div>
            <div className='flex items-center justify-end  w-[120px] gap-3'>
              <Button variant='ghost' className='hidden sm:flex'>Join</Button>
              <ModeToggle/>
              <Sheet>
              <SheetTrigger className='flex sm:hidden'><Menu /></SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <span 
                      className="flex text-3xl items-center gap-3 font-bold cursor-pointer" 
                      ><Rocket size={30} />
                      LUNA
                    </span>
                  </SheetTitle>
                  <SheetDescription>
                    <div className='flex flex-col'>
                      <Button variant='ghost'>Home</Button>
                      <Button variant='ghost'>Home</Button>
                      <Button variant='ghost'>Home</Button>
                      <Button variant='ghost'>Home</Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            </div>
        </nav>
      </header>
  </div>
  );
}

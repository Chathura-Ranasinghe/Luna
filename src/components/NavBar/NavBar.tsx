import { Rocket  } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { ModeToggle } from '../ui/DarkMode/mode-toggle';

export default function NavBar() {

  return (
    <div className="fixed top-0 left-0 w-full select-none z-10">
      <header className="flex h-14 sm:h-16 items-center px-6 sm:px-8">
        <nav className="flex w-full h-full items-center justify-between text-lg font-medium">
           <div className="items-center">
              <span 
                className="flex text-3xl items-center gap-2 font-bold cursor-pointer" 
                ><Rocket size={30} />
                LUNA
              </span>
            </div>
            <div>
                <Button>Home</Button>
            </div>
            <div>
                <ModeToggle/>
            </div>
        </nav>
      </header>
    </div>
  );
}

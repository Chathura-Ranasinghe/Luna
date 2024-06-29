import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

import { Info } from 'lucide-react';
import Cover from "./Cover";

  
export default function CoverDescription() {
    return (
        <div className="absolute bottom-0 w-full select-none pt-20 z-10 bg-gradient-to-t from-background ...">
            <div className="items-center p-6 sm:p-8">
                <h1>Nasa photo of the day</h1>
                <div className="flex text-3xl">
                    <h2>Title</h2>
                    <Sheet>
                        <SheetTrigger><Info /></SheetTrigger>
                        <SheetContent side={"right"}>
                            <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                <Cover/>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
  
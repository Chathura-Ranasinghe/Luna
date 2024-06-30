interface NotFoundPageProps {
    errorMsg: string;
  }

  import Error from "@/assets/images/error2.png"
  
  export default function NotFoundPage({ errorMsg }: NotFoundPageProps) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-3 bg-background">
      <img 
          src={Error} 
          alt="Error" 
          className="cover h-48 md:h-54 object-cover"
        />
        <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-700">Error</h1>
            <div className="text-sm ml-4 pl-4 leading-[30px] border-l border-foreground">
            <h2>{errorMsg}</h2>
            </div>
        </div>
      </div>
    );
  }
  
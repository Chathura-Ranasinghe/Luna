import Error from "@/assets/images/error2.png";

interface NotFoundPageProps {
  errorMsg: string;
  errorCode?: string;
}

export default function NotFoundPage({ errorMsg, errorCode }: NotFoundPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[540px] gap-3 bg-muted p-6 sm:p-8">
      <img 
        src={Error} 
        alt="Error" 
        className="cover h-48 md:h-54 object-cover"
      />
      <div className="grid sm:flex items-center text-center">
        <h1 className="text-2xl font-bold text-red-700">Error</h1>
        <div className="text-sm ml-0 sm:ml-4 pl-0 sm:pl-4 leading-[30px] sm:border-l border-foreground">
          <h2 className="font-bold text-base">{errorMsg}</h2>
        </div>
      </div>
      {errorCode === '404' && (
        <p className="text-center px-3 py-1 bg-background/50">
          This occurs because of NASA API maintenance, please try again later.
        </p>
      )}
    </div>
  );
}

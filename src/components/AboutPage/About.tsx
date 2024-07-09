import cover from "@/assets/images/cover.jpg";
import BoxReveal from "../ui/magicui/box-reveal";

export default function About() {
    return (
      <section className="h-[92vh] bg-muted">
        <div className="relative h-3/5">
            <img
                src={cover}
                alt="aboutImg"
                className="relative w-full h-full top-0 left-0 object-cover dark:brightness-[0.6] bg-center"
            />
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 pt-20">
                <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-extrabold text-white">About This Page.</h1>
            </div>
        </div>
        <div className="flex h-2/5  justify-center items-center">
          <div className="flex flex-col md:flex-row w-full h-full justify-center items-center p-6 sm:p-8 gap-6 capitalize">
            <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
              <p className="text-sm sm:text-lg w-full md:max-w-[512px] text-justify font-semibold border-b border-r-0 md:border-r md:border-b-0 pb-6 md:pb-0 md:pr-6 border-foreground">
              <span className="text-red-700 text-xl sm:text-2xl font-extrabold">This</span> website was created during my free time to provide the most up-to-date and accurate information about space by integrating with NASA's API. Our goal is to make space knowledge accessible and engaging for everyone. Whether you're a space enthusiast, a student, or simply curious about the cosmos, you'll find a wealth of information here.            
              </p>
            </BoxReveal>
            <div className="flex w-full md:w-auto">
            <BoxReveal boxColor={"#A3A3A3"} duration={0.5}>
              <div className="flex py-0 md:py-6">
                <p className="flex text-2xl sm:text-4xl max-w-[412px] md:text-6xl text-muted-foreground font-black">
                Thank you for visiting
                </p>
              </div>
            </BoxReveal>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
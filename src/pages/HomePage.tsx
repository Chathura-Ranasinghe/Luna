import Cover from "../components/HomePage/Cover";
import Slider from "@/components/Slider/Slider";
import NasaNews from "@/components/NasaNews/NasaNews";

export default function HomePage() {
  return (
    <>
      <main>
        <Cover/>
        <Slider/>
        <NasaNews/>
      </main>
    </>
  )
}

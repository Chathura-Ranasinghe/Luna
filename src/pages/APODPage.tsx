import APOD from "@/components/APODPage/APOD";
import Cover from "../components/Cover/Cover";

export default function APODPage() {
  return (
    <>
      <main>
        <Cover text="NASA Astronomy Photo of the Day." />
        <APOD/>
      </main>
    </>
  )
}

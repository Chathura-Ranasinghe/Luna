import NotFound from "@/components/Interact/NotFound";

export default function NotFoundPage() {
  return (
    <>
      <main>
        <NotFound errorMsg={"Oops! The page you're looking for doesn't exist."}/>
      </main>
    </>
  )
}

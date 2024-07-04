export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-screen w-full items-center justify-center bg-muted z-20">
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading...
    </div>
  )
}

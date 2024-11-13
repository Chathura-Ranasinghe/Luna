import loading from '@/assets/images/earth.gif'

export default function Loading() {
  return (
    <div className="fixed flex flex-col top-0 left-0 h-screen w-full items-center justify-center bg-muted z-20">
        <img
          src={loading}
          alt='loading'
          className='h-36 w-36 dark:grayscale '
        />
        <span className='font-bold text-xl'>Loading...</span>
    </div>
  )
}

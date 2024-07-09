import loading from '@/assets/images/loading.gif'

export default function Loading() {
  return (
    <div className="fixed flex top-0 left-0 h-screen w-full items-center justify-center bg-muted z-20">
        <img
          src={loading}
          alt='loading'
          className='h-40 w-40'
        />
        <span className='absolute font-bold'>Loading...</span>
    </div>
  )
}

interface CoverProps {
  imageUrl: string;
  mediaType: string;
  thumbnail_url?: string; 
}

export default function Cover({ imageUrl, mediaType }: CoverProps) {
  return (
    <div>
      {mediaType === 'image' ? (
        <img 
          src={imageUrl} 
          alt="cover" 
          className='fixed top-0 left-0 -z-10 object-cover h-screen w-full'
        />
      ) : (
        <iframe
          src={imageUrl}
          title="NASA video"
          className='fixed top-0 left-0 -z-10 object-cover h-screen w-full'
          allowFullScreen
        />
      )}
    </div>
  );
}

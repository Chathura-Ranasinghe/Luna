interface CoverProps {
  imageUrl: string;
  mediaType: string;
  thumbnailUrl?: string;
}

export default function Cover({ imageUrl, mediaType, thumbnailUrl }: CoverProps) {
  let displayUrl = imageUrl;

  if (mediaType === 'video' && thumbnailUrl) {
    const videoId = thumbnailUrl.split('/').slice(-2, -1)[0];
    displayUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  return (
    <div>
      <img 
        src={displayUrl} 
        alt="cover" 
        className=" top-0 left-0 -z-10 object-cover h-screen w-full dark:brightness-[0.]"
      />
    </div>
  );
}

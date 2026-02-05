// components/VideoPlayer.tsx
'use client';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({
  videoId,
  title = "Meeting Point Ministry Video",
  className = "",
}: VideoPlayerProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video ${className}`}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autoplay=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
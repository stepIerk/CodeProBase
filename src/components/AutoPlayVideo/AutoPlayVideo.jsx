import { useEffect, useRef } from "react";
import "./AutoPlayVideo.css";

export default function AutoPlayVideo({ src, poster }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="autoplay-video-wrapper" ref={containerRef}>
      <video
        ref={videoRef}
        className="autoplay-video"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}
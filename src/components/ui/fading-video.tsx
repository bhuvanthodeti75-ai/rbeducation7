import React, { useEffect, useRef } from 'react';

export const FadingVideo = ({ 
  src, 
  className = "absolute inset-0 w-full h-full object-cover pointer-events-none",
  targetOpacity = 1
}: { 
  src: string, 
  className?: string,
  targetOpacity?: number
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const animateFade = (targetOpacity: number, duration: number, callback?: () => void) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const startOpacity = parseFloat(video.style.opacity) || 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = (startOpacity + (targetOpacity - startOpacity) * progress).toString();

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleTimeUpdate = () => {
      if (!video || isNaN(video.duration)) return;
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        animateFade(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        animateFade(1, 500);
      }, 100);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateFade(targetOpacity, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      className={className}
      style={{ opacity: 0 }}
      src={src}
    />
  );
};

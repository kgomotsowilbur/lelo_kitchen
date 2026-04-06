"use client"

import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

export function LazyImage({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
          {...props}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse" />
      )}
    </div>
  );
}

export function LazyVideo({ src, className, poster, ...props }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: '300px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {inView ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="w-full h-full object-cover"
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-secondary" />
      )}
    </div>
  );
}
import React, { useEffect, useRef, useState } from 'react';

export const BlurText = ({ 
  text, 
  className = "", 
  delay = 0,
  as: Component = "div",
  style = {}
}: { 
  text: string, 
  className?: string, 
  delay?: number,
  as?: React.ElementType,
  style?: React.CSSProperties
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={`flex flex-wrap items-center justify-center ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em] transition-all duration-[1200ms]"
          style={{
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: `${delay + i * 0.08}s`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'filter, opacity, transform'
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

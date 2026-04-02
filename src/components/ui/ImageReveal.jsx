import React, { useEffect, useRef } from 'react';
import { revealImage } from '../../utils/animations';

const ImageReveal = ({ src, alt, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      revealImage(containerRef.current);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden grayscale hover:grayscale-0 brightness-100 hover:brightness-[1.1] transition-all duration-700 ${className}`}
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
        loading="lazy"
      />
    </div>
  );
};

export default ImageReveal;

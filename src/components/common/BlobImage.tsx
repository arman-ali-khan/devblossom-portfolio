import React from 'react';
import { cn } from '@/lib/utils';

interface BlobImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  isPulsing?: boolean;
}

const BlobImage: React.FC<BlobImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '',
  isPulsing = false 
}) => {
  return (
    <div className={cn(
      "relative w-full max-w-sm mx-auto", 
      className
    )}>
      {/* Blob background elements */}
      <div className="absolute -z-10 w-full h-full bg-primary/20 animate-blob"></div>
      <div className="absolute -z-10 w-full h-full bg-accent/40 animate-blob animation-delay-2"></div>
      <div className="absolute -z-10 w-full h-full bg-primary/30 animate-blob animation-delay-4"></div>
      
      {/* Image container */}
      <div className={cn(
        "relative z-10 overflow-hidden rounded-xl backdrop-blur-sm glass",
        isPulsing && "animate-pulse-slow"
      )}>
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            "w-full h-full object-cover", 
            imgClassName
          )} 
        />
      </div>
    </div>
  );
};

export default BlobImage;
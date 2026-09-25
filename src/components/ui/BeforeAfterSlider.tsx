"use client";

import { useState, useRef, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import Image, { StaticImageData } from "next/image";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: StaticImageData | string;
  afterImage: StaticImageData | string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] max-h-[70vh] overflow-hidden rounded-2xl select-none group cursor-ew-resize bg-muted"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background (Before) Image */}
      <Image
        src={beforeImage}
        alt={beforeLabel}
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* Foreground (After) Image */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
          <GripVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-md text-white px-3 py-1 text-sm rounded-md font-medium shadow-md transition-opacity">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 z-30 bg-black/60 backdrop-blur-md text-white px-3 py-1 text-sm rounded-md font-medium shadow-md transition-opacity">
        {afterLabel}
      </div>
    </div>
  );
}

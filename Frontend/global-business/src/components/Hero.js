"use client";
import { useState } from 'react';
import Image from 'next/image'

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  return (
<Image
      src="/slide1.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
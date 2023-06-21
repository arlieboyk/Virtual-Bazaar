'use client'
import React from 'react'
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="embla my-12" ref={emblaRef}>
    <div className="embla__container">
        <div className="embla__slide"><Image src={'/carousel/1.png'} alt='carousel-1' height={800} width={800} /></div>
        <div className="embla__slide"><Image src={'/carousel/1.png'} alt='carousel-1' height={800} width={800} /></div>
        <div className="embla__slide"><Image src={'/carousel/1.png'} alt='carousel-1' height={800} width={800} /></div>
        {/* <div className="embla__slide"><Image src={'/carousel/2.png'} alt='carousel-1' height={800} width={800} /></div> */}
        {/* <div className="embla__slide"><Image src={'/carousel/3.png'} alt='carousel-1' height={800} width={800} /></div> */}
    </div>

   
  </div>
  )
}

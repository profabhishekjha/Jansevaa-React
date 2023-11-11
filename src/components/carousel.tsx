import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  images: string[]
  customClasses?: string
}

const BannerCarousel: React.FC<PropType> = ({ images, customClasses }: PropType) => {
  const options: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = images.length
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const imageByIndex = (index: number): string => images[index % images.length]

  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  //   const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
  //     const { autoplay } = emblaApi.plugins()
  //     if (!autoplay) return
  //     if (autoplay.options.stopOnInteraction === false) autoplay.stop()
  //   }, [])

  return (
    <div className={`embla relative ${customClasses}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container banner-embla__container flex cursor-grab touch-pan-y active:cursor-grabbing">
          {slides.map((index) => (
            <div className="banner-embla__slide " key={index}>
              <img
                width={1000}
                height={800}
                className="banner-embla__slide__img block w-full   object-cover"
                src={imageByIndex(index)}
                alt="Carousel Images"
              />
              {/* <img
                className=" w-full h-[70vh] object-cover aspect-video"
                src={imageByIndex(index)}
                alt="dkljasjkl;df"
              /> */}
            </div>
          ))}
        </div>
      </div>

      {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
    </div>
  )
}

export default BannerCarousel

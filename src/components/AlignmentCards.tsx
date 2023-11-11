import './style.css'

type AlignmentCardsType = {
  heading: string
  cardtext?: string
  images: string
  isImageLeft?: boolean
}

const AlignmentCards = ({ heading, cardtext, images, isImageLeft }: AlignmentCardsType) => {
  return (
    <div
      className={`relative  m-[5vw] flex items-center justify-between gap-5 max-xl:flex-col max-xl:gap-4 max-xl:text-center ${
        isImageLeft ? 'flex-row-reverse' : ''
      }`}>
      {/* Display the image with conditional classes */}
      <div className="group relative h-fit w-fit overflow-hidden rounded-md">
        <img
          className="transform rounded-md transition-transform duration-700 hover:scale-110 "
          src={images}
          alt="wellness"
          width={400}
          height={440}
        />
        <span className="hover-h1 absolute -bottom-20 left-0 font-semibold text-white transition-transform duration-700 group-hover:bottom-10  group-hover:transform ">
          {cardtext}
        </span>
      </div>

      {/* Text container */}
      <div className="w-2/3 max-xl:w-full ">
        <h1 className="text-start text-xl font-semibold max-xl:text-center max-md:text-base ">
          {heading}
        </h1>
      </div>
    </div>
  )
}

export default AlignmentCards

/* AlignmentCards component */

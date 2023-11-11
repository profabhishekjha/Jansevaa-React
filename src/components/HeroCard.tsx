type HerocardType = {
  heading: string
  description: string
  images: string
  blob?: string
  customClasses?: string
}

const Herocard = ({ heading, description, images, customClasses, blob }: HerocardType) => {
  return (
    <div>
      <div className=" flex w-[280px]  gap-6 text-start">
        <div className="relative">
          <img
            src={images}
            alt="wellness"
            className={`${customClasses} z-10`}
            width={80}
            height={80}
          />
          <img src={blob} alt="blob" className={`absolute inset-0 -z-10 h-24 w-24`} width={80} height={80} />
        </div>
        <div className="">
          <h1 className="max-md:text-md text-lg font-semibold uppercase">{heading}</h1>
          <p className="max-md:text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Herocard

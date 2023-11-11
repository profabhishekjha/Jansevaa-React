import { Skeleton } from '@/components/ui/skeleton'

type EventCardProps = {
  isLoading: boolean
  image: string
  title: string
  organizer: string
  date: string
  location: string
  description: string
}
const EventCard = ({
  isLoading,
  image,
  title,
  organizer,
  date,
  location,
  description
}: EventCardProps) => {
  return (
    <>
      {isLoading ? (
        <Skeleton className="h-[270px] rounded-md" />
      ) : (
        <img className="h-[270px] rounded-md object-cover" src={image} alt="EventCardImageTest" />
      )}

      <div className="flex items-center justify-center">
        {isLoading ? (
          <Skeleton className="h-[25px] w-[270px] rounded-full" />
        ) : (
          <span className="text-xl font-bold">{title}</span>
        )}
      </div>

      {/* Organizer */}
      <div className="">
        {isLoading ? (
          <Skeleton className="h-[20px] w-[300px] rounded-full" />
        ) : (
          <>
            <span className="text-lg font-bold">Organizer: </span>
            <span className="text-base font-bold max-sm:font-normal">{organizer}</span>
          </>
        )}
      </div>

      <div className="flex gap-10">
        {isLoading ? (
          <Skeleton className="h-[20px] rounded-full" />
        ) : (
          <>
            <span className="text-lg font-semibold">
              Date: <span className="text-base max-sm:font-normal">{date}</span>
            </span>
            <span className="text-lg font-semibold">
              Location: <span className="text-base max-sm:font-normal">{location}</span>
            </span>
          </>
        )}
      </div>
      {/* Description */}
      <div className="">
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-[17px] w-full rounded-full" />
            <Skeleton className="h-[17px] w-full rounded-full" />
            <Skeleton className="h-[17px] w-full rounded-full" />
            <Skeleton className="h-[17px] w-full rounded-full" />
            <Skeleton className="h-[17px] w-full rounded-full" />
            <Skeleton className="h-[17px] w-full rounded-full" />
          </div>
        ) : (
          <>
            <span className="text-lg font-semibold">Description: </span>
            <span className="text-base font-semibold max-sm:font-normal">{description}</span>
          </>
        )}
      </div>
    </>
  )
}

export default EventCard

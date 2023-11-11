import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader
} from '@/components/ui/table'
import EventCard from './components/EventCard'
const Events = () => {
  const [isLoading, setIsLoading] = useState(true)
  const EventCardDummyData = {
    image: './EventCardTest.avif',
    title: 'Bhoomi Pujan of Delhi branch',
    organizer: 'Chairmen & Founder - Mr. Amit Grewal',
    date: '23-12-2023',
    location: 'Chhawala',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
  }
  return (
    <div className="flex justify-between gap-5 px-20 py-40 max-lg:flex-col max-lg:px-0  max-md:gap-10 max-md:py-24">
      <div className=" max-sm:mb-20">
        <div className="item-center flex w-full justify-center pb-10">
          <span className="text-xl font-bold">List of all our Events</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="text-lg font-bold max-sm:text-sm">Date</TableHead>
              <TableHead className="text-lg font-bold max-sm:text-sm">Event</TableHead>
              <TableHead className="text-lg font-bold max-sm:text-sm">Organizer</TableHead>
              <TableHead className="text-lg font-bold max-sm:text-sm">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRowComp
              date="23-12-2023"
              title="Bhoomi Pujan of Delhi branch"
              organizer="Mr. Amit Grewal"
              status="Upcoming"
              setIsLoading={setIsLoading}
            />
            <TableRowComp
              date="23-12-2023"
              title="Bhoomi Pujan of Delhi branch"
              organizer="Amit Grewal"
              status="Completed"
              setIsLoading={setIsLoading}
            />
            <TableRowComp
              date="23-12-2023"
              title="Bhoomi Pujan of Delhi branch"
              organizer="Amit Grewal"
              status="Upcoming"
              setIsLoading={setIsLoading}
            />
            <TableRowComp
              date="23-12-2023"
              title="Bhoomi Pujan of Delhi branch"
              organizer="Amit Grewal"
              status="Upcoming"
              setIsLoading={setIsLoading}
            />
            <TableRowComp
              date="23-12-2023"
              title="Bhoomi Pujan of Delhi branch"
              organizer="Amit Grewal"
              status="Upcoming"
              setIsLoading={setIsLoading}
            />
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center">
        <div className="flex h-fit w-[450px] flex-col justify-center  gap-2 max-sm:mx-2 max-sm:w-full">
          <EventCard
            isLoading={isLoading}
            image={EventCardDummyData.image}
            title={EventCardDummyData.title}
            organizer={EventCardDummyData.organizer}
            date={EventCardDummyData.date}
            location={EventCardDummyData.location}
            description={EventCardDummyData.description}
          />
        </div>
      </div>
    </div>
  )
}

export default Events

// -----------------------------------------------------------------
interface TableRowCompType {
  date: string
  title: string
  organizer: string
  status: 'Upcoming' | 'Completed'
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export const TableRowComp = ({
  date,
  title,
  organizer,
  status,
  setIsLoading
}: TableRowCompType) => {
  return (
    <>
      <TableRow>
        <TableCell className="text-lg font-semibold max-sm:text-sm max-sm:font-normal">
          {date}
        </TableCell>
        <TableCell
          onClick={() => setIsLoading((prev) => !prev)}
          className="cursor-pointer text-lg font-semibold hover:text-blue-600 hover:underline hover:underline-offset-4 max-sm:text-sm max-sm:font-normal">
          {title}
        </TableCell>
        <TableCell className="text-lg font-semibold max-sm:text-sm max-sm:font-normal">
          {organizer}
        </TableCell>
        <TableCell
          className={`
          text-lg font-semibold max-sm:text-sm max-sm:font-normal ${
            status === 'Upcoming' ? 'text-green-600' : 'text-red-600'
          }`}>
          {status}
        </TableCell>
      </TableRow>
    </>
  )
}

/* Events Page */

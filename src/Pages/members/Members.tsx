import Dropdown from '@/components/Dropdown'
import { useState, useEffect } from 'react'
import { MemberDetails, MemberTable } from './components/MembersComp'

// type State = {
//   state: string;
//   districts: string[];
// };

const Members = () => {
  //  Loading Logic for the Branch tables
  // const [branchLoading, setBranchLoading] = useState(true);
  const [memberLoading, setMemberLoading] = useState(true)

  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null)
  // Push the selected BranchId to the backend and get the members data table from there

  const [selectMember, setSelectMember] = useState<number>(0)

  // Push the selected MemberId to the backend and get the member data from there
  const NationalMemberDummyData = [
    { id: 1, post: 'President', member: 'Mr. Amit Grewal' },
    { id: 2, post: 'Vice President', member: 'Ms. Emily Johnson' },
    { id: 3, post: 'Secretary', member: 'Mr. David Smith' },
    { id: 4, post: 'Treasurer', member: 'Ms. Sarah Patel' },
    { id: 5, post: 'Board Member', member: 'Mr. Carlos Rodriguez' }
  ]

  const StateMemberDummyData = [
    { id: 1, post: 'State Director', member: 'Mr. Mark Williams' },
    { id: 2, post: 'State Program Manager', member: 'Ms. Jessica Lee' },
    {
      id: 3,
      post: 'State Fundraising Coordinator',
      member: 'Mr. Robert Johnson'
    },
    { id: 4, post: 'State Communications Officer', member: 'Ms. Emily Davis' },
    { id: 5, post: 'State Volunteer Coordinator', member: 'Mr. Daniel Smith' }
  ]

  const DistrictMemberDummyData = [
    { id: 1, post: 'District Director', member: 'Ms. Laura Adams' },
    { id: 2, post: 'District Program Manager', member: 'Mr. James Wilson' },
    {
      id: 3,
      post: 'District Fundraising Coordinator',
      member: 'Ms. Rachel Brown'
    },
    {
      id: 4,
      post: 'District Communications Officer',
      member: 'Mr. Christopher Turner'
    },
    {
      id: 5,
      post: 'District Volunteer Coordinator',
      member: 'Ms. Maria Garcia'
    }
  ]

  const BranchMemberDummyData = [
    { id: 1, post: 'Branch Manager', member: 'John Smith' },
    { id: 2, post: 'Volunteer Coordinator', member: 'Emily Johnson' },
    { id: 3, post: 'Branch Manager', member: 'David Jones' },
    { id: 4, post: 'Volunteer Coordinator', member: 'Sarah Patel' },
    { id: 5, post: 'Branch Manager', member: 'Lisa Martinez' },
    { id: 6, post: 'Volunteer Coordinator', member: 'Michael Davis' },
    { id: 7, post: 'Branch Manager', member: 'Laura Adams' },
    { id: 8, post: 'Volunteer Coordinator', member: 'James Wilson' },
    { id: 9, post: 'Branch Manager', member: 'Rachel Brown' },
    { id: 10, post: 'Volunteer Coordinator', member: 'Christopher Turner' }
  ]

  const MemberDetailsDummyData = {
    id: 1,
    image: './EventCardTest.avif',
    memberName: 'Mr. Amit Grewal',
    memberPost: 'President',
    memberPhone: '1234567890',
    memberEmail: 'jdfjadkl@gmail.com',
    memberDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus, quibusdam voluptate, natus, voluptatum quas reprehenderit quae cumque facilis quos. Quisquam, voluptate voluptatum. Natus, voluptates. Quisquam, voluptate voluptatum. Natus, voluptates.'
  }

  useEffect(() => {
    if (selectMember) {
      setMemberLoading(false)
    } else if (!selectMember) {
      setMemberLoading(true)
    }
  }, [selectMember])

  const [getNational, setGetNational] = useState(true)
  const [getState, setGetState] = useState(false)
  const [getDistrict, setGetDistrict] = useState(false)
  const [getBranch, setGetBranch] = useState(false)
  return (
    <main className="mx-10 mb-10 h-full min-h-screen pt-[100px] max-md:mx-2">
      <>
        <div className="mt-10 flex items-center justify-center gap-5 max-lg:flex-col max-md:mt-0">
          <button
            onClick={() => {
              setGetNational(true), setGetState(false), setGetDistrict(false), setGetBranch(false)
            }}
            className="rounded-lg border px-4 py-1 text-lg font-bold">
            National Members
          </button>
          <Dropdown
            setGetNational={setGetNational}
            setGetState={setGetState}
            setGetDistrict={setGetDistrict}
            setGetBranch={setGetBranch}
            selectedBranchId={selectedBranchId}
            setSelectedBranchId={setSelectedBranchId}
          />
        </div>
        <div className="my-10 w-full border" />
        <div className="flex  justify-around gap-10 max-lg:flex-col">
          <div className="mt-10 h-fit rounded-lg border">
            {getNational && (
              <MemberTable
                isLoading={false}
                selectMember={selectMember}
                setSelectMember={setSelectMember}
                memberData={NationalMemberDummyData}
              />
            )}
            {getState && (
              <MemberTable
                isLoading={false}
                selectMember={selectMember}
                setSelectMember={setSelectMember}
                memberData={StateMemberDummyData}
              />
            )}
            {getDistrict && (
              <MemberTable
                isLoading={false}
                selectMember={selectMember}
                setSelectMember={setSelectMember}
                memberData={DistrictMemberDummyData}
              />
            )}
            {getBranch && (
              <MemberTable
                isLoading={false}
                selectMember={selectMember}
                setSelectMember={setSelectMember}
                memberData={BranchMemberDummyData}
              />
            )}
          </div>
          <div className="mt-10 flex h-fit justify-center rounded-lg">
            <MemberDetails
              isLoading={memberLoading}
              selectMember={selectMember}
              setSelectMember={setSelectMember}
              memberDetailsData={MemberDetailsDummyData}
            />
          </div>
        </div>
      </>
    </main>
  )
}

export default Members

/* Members page */

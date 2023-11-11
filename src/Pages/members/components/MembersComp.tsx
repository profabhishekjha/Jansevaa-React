import { Skeleton } from '@/components/ui/skeleton'

import {
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader
} from '@/components/ui/table'

//  -----------------------------------------------------------

// interface BranchTableProps {
//   isLoading: boolean
//   selectBranch: number | null
//   setSelectBranch: React.Dispatch<React.SetStateAction<number | null>>
//   branchData: { id: number; branchName: string }[]
// }
// export const BranchTable: React.FC<BranchTableProps> = ({
//   isLoading,
//   selectBranch,
//   setSelectBranch,
//   branchData
// }) => {
//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-center text-lg font-bold">Branch</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="cursor-pointer">
//           {branchData.map((branch) => (
//             <>
//               <BranchTableRow
//                 isLoading={isLoading}
//                 selectBranch={selectBranch}
//                 setSelectBranch={setSelectBranch}
//                 branchId={branch.id}
//                 branch={branch.branchName}
//               />
//             </>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   )
// }

//  -----------------------------------------------------------

// type BranchTableRowProps = {
//   isLoading: boolean
//   branch: string
//   selectBranch: number | null
//   branchId: number
//   setSelectBranch: React.Dispatch<React.SetStateAction<number | null>>
// }
// export const BranchTableRow = ({
//   isLoading,
//   branch,
//   branchId,
//   selectBranch,
//   setSelectBranch
// }: BranchTableRowProps) => {
//   return (
//     <>
//       <TableRow>
//         <TableCell
//           onClick={() => setSelectBranch(branchId)}
//           className={`text-center font-bold ${
//             selectBranch === branchId && 'text-blue-600'
//           } text-lg`}>
//           {isLoading ? (
//             <div className="flex items-center justify-center">
//               <Skeleton className="h-[25px] w-[150px] rounded-full" />
//             </div>
//           ) : (
//             branch
//           )}
//         </TableCell>
//       </TableRow>
//     </>
//   )
// }

//  -----------------------------------------------------------
interface MemberTableProps {
  isLoading: boolean
  selectMember: number
  setSelectMember: React.Dispatch<React.SetStateAction<number>>
  memberData: { id: number; post: string; member: string }[]
}
export const MemberTable = ({
  isLoading,
  selectMember,
  setSelectMember,
  memberData
}: MemberTableProps) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg  font-bold">Post</TableHead>
            <TableHead className="text-lg  font-bold">Member Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="cursor-pointer">
          {memberData.map((member) => (
            <>
              <MembersTableRow
                key={member.id}
                isLoading={isLoading}
                selectMember={selectMember}
                setSelectMember={setSelectMember}
                memberId={member.id}
                post={member.post}
                member={member.member}
              />
            </>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

//  -----------------------------------------------------------

type MembersTableRowProps = {
  isLoading: boolean
  selectMember: number
  setSelectMember: React.Dispatch<React.SetStateAction<number>>
  memberId: number
  post: string
  member: string
}
export const MembersTableRow = ({
  isLoading,
  selectMember,
  setSelectMember,
  memberId,
  post,
  member
}: MembersTableRowProps) => {
  return (
    <>
      <TableRow
        key={memberId}
        onClick={() => setSelectMember(memberId)}
        className={`${selectMember === memberId && 'text-blue-600'}`}>
        <TableCell className="text-lg  font-bold">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="h-[25px] w-[150px] rounded-full" />
            </div>
          ) : (
            post
          )}
        </TableCell>
        <TableCell className={`text-lg  font-bold`}>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Skeleton className="h-[25px] w-[150px] rounded-full" />
            </div>
          ) : (
            member
          )}
        </TableCell>
      </TableRow>
    </>
  )
}

//  -----------------------------------------------------------

interface MemberDetailsProps {
  isLoading: boolean
  selectMember: number
  setSelectMember: React.Dispatch<React.SetStateAction<number>>
  memberDetailsData: {
    id: number
    image: string
    memberName: string
    memberPost: string
    memberPhone: string
    memberEmail: string
    memberDescription: string
  }
}

export const MemberDetails = ({
  isLoading,
  // selectMember,
  // setSelectMember,
  memberDetailsData
}: MemberDetailsProps) => {
  return (
    <>
      <div className=" flex w-[450px] flex-col items-center gap-5 rounded-lg border p-2 max-sm:w-full">
        {/* Images */}
        {isLoading ? (
          <Skeleton className="h-[270px] w-full rounded-md" />
        ) : (
          <img
            className="h-[270px] w-full rounded-md object-cover"
            src={memberDetailsData.image}
            alt="MemberDetailsImage"
          />
        )}

        {/* Title */}
        <div className="">
          {isLoading ? (
            <>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-[25px]  rounded-full" />
                <Skeleton className="h-[25px] w-[250px] rounded-full" />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 text-xl font-bold">
                {memberDetailsData.memberPost} {memberDetailsData.memberName}
              </div>
            </>
          )}
        </div>

        {/* Date and Location */}
        <div className=" flex w-full flex-col gap-3">
          {isLoading ? (
            <>
              <Skeleton className="h-[25px]  rounded-full" />
              <Skeleton className="h-[25px]  rounded-full" />
            </>
          ) : (
            <>
              <span className="text-lg font-semibold">
                Phone no: {memberDetailsData.memberPhone}
              </span>
              <span className="text-lg font-semibold">Email: {memberDetailsData.memberEmail}</span>
            </>
          )}
        </div>
        {/* Description */}
        {isLoading ? (
          <>
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-[25px] rounded-full" />
              <Skeleton className="h-[20px] rounded-full" />
              <Skeleton className="h-[20px] rounded-full" />
              <Skeleton className="h-[20px] rounded-full" />
            </div>
          </>
        ) : (
          memberDetailsData.memberDescription
        )}
      </div>
    </>
  )
}

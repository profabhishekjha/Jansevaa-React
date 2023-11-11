import React, { useState } from 'react'
import FatherForm from './FatherForm'
import MotherForm from './MotherForm'
import AddressComp from './AddressComp'
import StudentFormComp from './StudentFormComp'
// Remember : The IDProof also have multiple options like Aadhar, PAN, etc.

export const StudentForm = () => {
  // export const StudentForm = () => {
  const [selectStudentFormOptions, setSelectStudentFormOptions] = useState<
    'Father' | 'Mother' | 'Address' | 'Student' | 'Payment'
  >('Father')

  const [parentsFormData, setParentsFormData] = useState<ParentsFormDataType>({
    father_full_name: '',
    father_phone_no: '',
    father_blood_group: '',
    father_email: '',

    mother_full_name: '',
    mother_phone_no: '',
    mother_blood_group: '',
    mother_email: '',

    branch_id: 0,
    street: '',
    state: '',
    city: '',
    district: '',
    area: '',
    pincode: '',
    country: 'India',

    father_aadhar_front: '',
    father_aadhar_back: '',
    father_voter_front: '',
    father_voter_back: '',
    father_optional_front: '',
    father_optional_back: '',

    mother_aadhar_front: '',
    mother_aadhar_back: '',
    mother_voter_front: '',
    mother_voter_back: '',
    mother_optional_front: '',
    mother_optional_back: ''
  })

  const handleIdImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const selectedFile = e.target.files ? e.target.files[0] : ''
    if (selectedFile) {
      const fileName = selectedFile.name
      setParentsFormData({ ...parentsFormData, [name]: fileName })
    }
  }

  // Branch Id fetching from AddressForm component
  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null)
  // Handle change function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (selectedBranchId) {
      setParentsFormData({ ...parentsFormData, branch_id: selectedBranchId })
    }
    setParentsFormData({ ...parentsFormData, [name]: value })
  }

  const initialStudentFormState: studentFormDataType = {
    first_name: '',
    middle_name: '',
    last_name: '',
    phone_no: '',
    email: '',
    subject: '',
    blood_group: 'Select One',
    DOB: '',
    sex: 'Select One',
    password: '',
    parent_id: '',

    profile_image: '',
    aadhar_front: '',
    aadhar_back: '',
    school_id: ''
  }
  const [student, setStudent] = useState(initialStudentFormState)

  const [studentArray, setStudentArray] = useState<(typeof student)[]>([])

  const handleChangeStudent = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleStudentIdImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const selectedFile = e.target.files ? e.target.files[0] : ''
    setStudent({ ...student, [name]: selectedFile })
    if (selectedFile) {
      const fileName = selectedFile.name
      setStudent({ ...student, [name]: fileName })
    }
  }

  const HandleAddStudent = () => {
    if (
      student.first_name &&
      student.last_name &&
      student.blood_group &&
      student.DOB &&
      student.sex
    ) {
      const confirmation = confirm(
        `You can't undo this action and edit the details afterwords.\nDo you want to continue?`
      )
      if (confirmation) {
        setStudentArray([...studentArray, student])
        setStudent(initialStudentFormState)
      } else {
        alert('You can review the input fields and click "Add Student" when ready.')
      }
    } else alert('Please fill all the required fields.')
  }

  React.useEffect(() => {
    console.log(studentArray)
  }, [studentArray])

  const sendStudentParentsFormData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('Parents From Data: ', parentsFormData)
    console.log('Students From Data: ', studentArray)
  }
  return (
    <form method="POST">
      {/* Student Form */}
      <div className="flex h-full w-full flex-col">
        <span className="text-center text-2xl font-bold">Parents & Student Form</span>
        <div className="mt-5 w-full border" />
        <div className="flex">
          {/* Left Sidebar buttons for student Form */}
          <div className="flex w-fit flex-col items-start border-r pt-5 max-md:w-1/4 ">
            <button
              onClick={() => setSelectStudentFormOptions('Father')}
              type="button"
              className={` p-5 text-start text-lg font-bold max-md:px-2 ${
                selectStudentFormOptions === 'Father' && 'text-blue-600'
              }`}>{`Father's Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions('Mother')}
              type="button"
              className={` border-t p-5 text-start text-lg font-bold max-md:px-2 ${
                selectStudentFormOptions === 'Mother' && 'text-blue-600'
              }`}>{`Mother's Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions('Address')}
              type="button"
              className={` border-t p-5 text-start text-lg font-bold max-md:px-2 ${
                selectStudentFormOptions === 'Address' && 'text-blue-600'
              }`}>{`Address Details`}</button>
            <>
              <div className="relative border-b border-t">
                <button
                  onClick={() => setSelectStudentFormOptions('Student')}
                  type="button"
                  className={`p-5 text-start text-lg font-bold max-md:px-2 ${
                    selectStudentFormOptions === 'Student' && 'text-blue-600'
                  }`}>{`Student Details`}</button>
                <span className="absolute right-2 top-0 text-base font-bold text-green-500">
                  {'{'}
                  {studentArray.length}
                  {'}'}
                </span>
              </div>
            </>

            <button
              onClick={() => setSelectStudentFormOptions('Payment')}
              type="button"
              className={` p-5 text-start  text-lg font-bold max-md:px-2 ${
                selectStudentFormOptions === 'Payment' && 'text-blue-600'
              }`}>{`Payment`}</button>
          </div>

          {/* Right Side Form */}
          <div className="flex-1">
            {selectStudentFormOptions === 'Father' && (
              <FatherForm
                parentsFormData={parentsFormData}
                handleChange={handleChange}
                next_prev_btn={setSelectStudentFormOptions}
                handleIdImagesChange={handleIdImagesChange}
              />
            )}
            {selectStudentFormOptions === 'Mother' && (
              <MotherForm
                parentsFormData={parentsFormData}
                handleChange={handleChange}
                next_prev_btn={setSelectStudentFormOptions}
                handleIdImagesChange={handleIdImagesChange}
              />
            )}
            {selectStudentFormOptions === 'Address' && (
              <AddressComp
                parentsFormData={parentsFormData}
                handleChange={handleChange}
                selectedBranchId={selectedBranchId}
                setSelectedBranchId={setSelectedBranchId}
                next_prev_btn={setSelectStudentFormOptions}
              />
            )}
            {selectStudentFormOptions === 'Student' && (
              <>
                <StudentFormComp
                  studentFormData={student}
                  handleChangeStudent={handleChangeStudent}
                  next_prev_btn={setSelectStudentFormOptions}
                  handleIdImagesChange={handleStudentIdImagesChange}
                />
                <div className="mt-10 flex justify-center">
                  <button
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white active:bg-blue-700"
                    onClick={HandleAddStudent}
                    type="button">
                    + Add student
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={(e) => sendStudentParentsFormData(e)}
          className="rounded-full bg-blue-600 px-10 py-2 text-white">
          Submit
        </button>
      </div>
    </form>
  )
}

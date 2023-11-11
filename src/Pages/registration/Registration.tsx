import { useState } from 'react'
import { StudentForm } from './components/StudentForm'
import TeacherForm from './components/TeacherForm'
import VolunteerForm from './components/VolunteerForm'
import BeneficiaryForm from './components/BeneficiaryForm'

const Registration = () => {
  const [selectFormType, setSelectFormType] = useState<
    'Teacher' | 'Student' | 'Volunteer' | 'Beneficiary' | null
  >(null)
  return (
    <main className="flex min-h-screen justify-center pt-[15vh]">
      <div className="w-[90%] max-md:w-[95%]">
        <div className="flex justify-between gap-10 max-sm:flex-wrap">
          <button
            type="button"
            className={`w-fit rounded-full border px-4 py-1 text-lg font-bold ${
              selectFormType === 'Teacher' && 'text-blue-600'
            }`}
            onClick={() => setSelectFormType('Teacher')}>
            Teacher
          </button>
          <button
            type="button"
            className={`w-fit rounded-full border px-4 py-1 text-lg font-bold ${
              selectFormType === 'Student' && 'text-blue-600'
            }`}
            onClick={() => setSelectFormType('Student')}>
            Student
          </button>
          <button
            type="button"
            className={`w-fit rounded-full border px-4 py-1 text-lg font-bold ${
              selectFormType === 'Volunteer' && 'text-blue-600'
            }`}
            onClick={() => setSelectFormType('Volunteer')}>
            Volunteer
          </button>
          <button
            type="button"
            className={`w-fit rounded-full border px-4 py-1 text-lg font-bold ${
              selectFormType === 'Beneficiary' && 'text-blue-600'
            }`}
            onClick={() => setSelectFormType('Beneficiary')}>
            Beneficiary
          </button>
        </div>
        <div className="mb-10  mt-10 rounded-3xl border p-5 max-md:px-0 ">
          {selectFormType === 'Student' && <StudentForm />}
          {selectFormType === 'Teacher' && <TeacherForm />}
          {selectFormType === 'Volunteer' && <VolunteerForm />}
          {selectFormType === 'Beneficiary' && <BeneficiaryForm />}
        </div>
      </div>
      {/* Form */}
    </main>
  )
}

export default Registration

/* Registration page */

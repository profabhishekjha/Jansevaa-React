import React from 'react'
type StudentFormCompType = {
  studentFormData: studentFormDataType
  handleChangeStudent: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void

  next_prev_btn: React.Dispatch<
    React.SetStateAction<'Father' | 'Mother' | 'Address' | 'Student' | 'Payment'>
  >

  handleIdImagesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const StudentFormComp = ({
  studentFormData,
  handleChangeStudent,
  next_prev_btn,
  handleIdImagesChange
}: StudentFormCompType) => {
  
  return (
    <>
      <div className="flex flex-col gap-5 py-5 pl-10 max-md:p-2 ">
        {/* Name / email-pass / DOB-Blood-Sex */}
        <div className="grid w-full grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="FirstName">
              FirstName <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="First Name"
              className="w-full rounded border p-2"
              type="text"
              name="first_name"
              id="FirstName"
              value={studentFormData.first_name}
              onChange={handleChangeStudent}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="MiddleName">
              MiddleName
            </label>
            <input
              placeholder="Middle Name"
              className="w-full rounded border p-2"
              type="text"
              name="middle_name"
              id="MiddleName"
              value={studentFormData.middle_name}
              onChange={handleChangeStudent}
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium" htmlFor="LastName">
              LastName <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Last Name"
              className="w-full rounded border p-2"
              type="text"
              name="last_name"
              id="LastName"
              value={studentFormData.last_name}
              onChange={handleChangeStudent}
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Email">
              Email
            </label>
            <input
              placeholder="Email"
              className="w-full rounded border p-2"
              type="email"
              name="email"
              id="Email"
              value={studentFormData.email}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Phone number */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Phone">
              Phone No:
            </label>
            <input
              placeholder="000-000-0000"
              className="w-full rounded border p-2"
              type="number"
              name="phone_no"
              id="Phone"
              value={studentFormData.phone_no}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Profile Photo */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Profile">
              Profile Photo <span className="font-bold text-red-400">*</span>
            </label>
            <div className="flex items-center">
              <input
                className="w-full rounded border p-2"
                type="file"
                accept=".jpg,.jpeg"
                name="profile_image"
                onChange={handleIdImagesChange}
              />
            </div>
          </div>

          <div className="w-full max-md:hidden" />
          <div className="w-full max-md:hidden" />
          <div className="w-full max-lg:hidden" />

          {/* DOB */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="DOB">
              Date of Birth <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="date"
              className="w-full rounded border p-2"
              name="DOB"
              id="DOB"
              required
              value={studentFormData.DOB}
              onChange={handleChangeStudent}
            />
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Blood">
              Blood Group <span className="font-bold text-red-400">*</span>
            </label>
            <select
              className="w-full rounded border p-2"
              name="blood_group"
              id="Blood"
              required
              value={studentFormData.blood_group}
              onChange={handleChangeStudent}>
              <option value="Select One">Select One</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Sex Group */}
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Sex">
              Sex Group <span className="font-bold text-red-400">*</span>
            </label>
            <select
              className="w-full rounded border p-2"
              name="sex"
              id="Sex"
              required
              defaultValue={'Select One'}
              value={studentFormData.sex}
              onChange={handleChangeStudent}>
              <option value="Select One">Select One</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <div className="mt-5 w-full border" />

        {/* Aadhar Id Proof */}
        <div className="flex w-full items-center rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
          <span className="w-1/3 text-xl font-bold">
            Aadhar Card <span className="font-bold text-red-400">*</span>
          </span>
          <div className="grid flex-1 grid-cols-2 gap-5 max-lg:grid-cols-1">
            <div className="mb-4">
              <label className="block font-medium" htmlFor="AadharFront">
                Front <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded border p-2"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="aadhar_front"
                  onChange={handleIdImagesChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium" htmlFor="AadharBack">
                Back <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded border p-2"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="aadhar_back"
                  onChange={handleIdImagesChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* School Id Proof */}
        <div className="flex w-full items-center rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
          <span className="w-1/3 text-xl font-bold">
            School Card <span className="font-bold text-red-400">*</span>
          </span>
          <div className="grid flex-1 grid-cols-2 gap-5 max-lg:grid-cols-1">
            <div className="mb-4">
              <label className="block font-medium" htmlFor="SchoolFront">
                Front <span className="font-bold text-red-400">*</span>
              </label>
              <div className="flex items-center">
                <input
                  className="w-full rounded border p-2"
                  type="file"
                  accept=".jpg,.jpeg"
                  name="school_id"
                  onChange={handleIdImagesChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Address')}
            type="button">
            Prev
          </button>
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Payment')}
            type="button">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default StudentFormComp

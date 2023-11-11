import React, { useState } from 'react'
import Dropdown from '@/components/Dropdown'

const TeacherForm = () => {
  const [teacherFormData, setTeacherFormData] = useState({
    type: 'Teacher',
    first_name: '',
    middle_name: '',
    last_name: '',
    phone_no: '',
    email: '',
    password: '',
    DOB: '',
    sex: '',
    blood_group: '',
    profile_image: '',
    aadhar_front: '',
    aadhar_back: '',
    voter_front: '',
    voter_back: '',
    pan_card: '',
    optional_front: '',
    optional_back: '',
    fees: '',
    subject: '',
    branch_id: 0,
    street: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    area: '',
    district: ''
  })

  const [selectedIdProof, setSelectedIdProof] = useState('Select One')

  const handleIdProofChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedIdProof(event.target.value)
  }

  const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const selectedFile = e.target.files ? e.target.files[0] : ''
    if (selectedFile) {
      const fileName = selectedFile.name
      setTeacherFormData({ ...teacherFormData, [name]: fileName })
    }
  }

  // Data sending to backend
  const sendTeacherData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('From Data: ', teacherFormData)
  }

  // Handle change function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (selectedBranchId) {
      setTeacherFormData({ ...teacherFormData, branch_id: selectedBranchId })
    }
    const { name, value } = e.target
    setTeacherFormData({ ...teacherFormData, [name]: value })
  }

  return (
    <>
      <form method="POST">
        <div className="flex h-full w-full flex-col">
          <span className="text-center text-2xl font-bold">Teacher Form</span>
          <div className="mt-5 w-full border" />
          <div className="flex flex-col gap-5 p-10 max-md:p-2 ">
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
                  value={teacherFormData.first_name}
                  onChange={handleChange}
                  required
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
                  value={teacherFormData.middle_name}
                  onChange={handleChange}
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
                  value={teacherFormData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Email">
                  Email <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  placeholder="Email"
                  className="w-full rounded border p-2"
                  type="email"
                  name="email"
                  id="Email"
                  value={teacherFormData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Password">
                  Password <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  placeholder="Password"
                  className="w-full rounded border p-2"
                  type="password"
                  name="password"
                  id="Password"
                  value={teacherFormData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone number */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Phone">
                  Phone No: <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  placeholder="000-000-0000"
                  className="w-full rounded border p-2"
                  type="number"
                  name="phone_no"
                  id="Phone"
                  value={teacherFormData.phone_no}
                  onChange={handleChange}
                  required
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
                    id="Profile"
                    name='profile_image'
                    accept=".jpg,.jpeg"
                    onChange={handleImageChange}
                    required
                  />
                </div>
              </div>

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
                  value={teacherFormData.DOB}
                  onChange={handleChange}
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
                  value={teacherFormData.blood_group}
                  onChange={handleChange}>
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
                  value={teacherFormData.sex}
                  onChange={handleChange}>
                  <option value="Select One">Select One</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Branch */}
            <div className="mb-4">
              <span className="block font-medium">
                Choose Branch <span className="font-bold text-red-400">*</span>
              </span>
              <Dropdown
                selectedBranchId={selectedBranchId}
                setSelectedBranchId={setSelectedBranchId}
              />
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
                      id="AadharFront"
                      accept=".jpg,.jpeg"
                      name="aadhar_front"
                      onChange={handleImageChange}
                      required
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
                      id="AadharBack"
                      accept=".jpg,.jpeg"
                      name="aadhar_back"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Voter Id Proof */}
            <div className="flex w-full items-center rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
              <span className="w-1/3 text-xl font-bold">
                Voter Card <span className="font-bold text-red-400">*</span>
              </span>
              <div className="grid flex-1 grid-cols-2 gap-5 max-lg:grid-cols-1">
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="VoterFront">
                    Front <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="w-full rounded border p-2"
                      type="file"
                      id="VoterFront"
                      accept=".jpg,.jpeg"
                      name="voter_front"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="VoterBack">
                    Back <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="w-full rounded border p-2"
                      type="file"
                      id="VoterBack"
                      accept=".jpg,.jpeg"
                      name="voter_back"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pan Id Proof */}
            <div className="flex w-full items-center rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
              <span className="w-1/3 text-xl font-bold">
                Pan Card <span className="font-bold text-red-400">*</span>
              </span>
              <div className="grid flex-1 grid-cols-2 gap-5 max-lg:grid-cols-1">
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="PanFront">
                    Front <span className="font-bold text-red-400">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      className="w-full rounded border p-2"
                      type="file"
                      accept=".jpg,.jpeg"
                      name="pan_card"
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                </div>
                {/* Empty Div */}
                <div className="mx-lg:hidden w-full" />
              </div>
            </div>

            {/* Optional Id Proof */}
            <div className="flex w-full items-center gap-5 rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
              <select
                className="w-1/3 rounded border p-2 text-xl font-bold max-md:w-fit"
                name="IdProof"
                id="IdProof"
                value={selectedIdProof}
                onChange={handleIdProofChange}>
                <option value="Select One">Select One</option>
                <option value="Driving License">Driving License</option>
                <option value="Passport">Passport</option>
              </select>
              {selectedIdProof === 'Driving License' ? (
                <div className="grid flex-1 grid-cols-2 gap-5 max-lg:grid-cols-1">
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="Password">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
                        id="optional_front"
                        accept=".jpg,.jpeg"
                        name="optional_front"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="Password">
                      Back <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
                        id="optional_back"
                        accept=".jpg,.jpeg"
                        name="optional_back"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              ) : selectedIdProof === 'Select One' ? (
                '(optional)'
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="Password">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
                        id="optional_front2"
                        accept=".jpg,.jpeg"
                        name="optional_front"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5 w-full border" />

            {/* Address */}
            <div className="mt-5 flex flex-col gap-5">
              <span className="w-32 text-xl font-bold">{`Your Address:`}</span>
              <div className="grid w-full grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
                {/* Street */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="street">
                    Address <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="House no:, Block no:, Street no:, etc. "
                    className="w-full rounded border p-2"
                    type="text"
                    name="street"
                    id="street"
                    value={teacherFormData.street}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* State */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="state">
                    State <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="state"
                    className="w-full rounded border p-2"
                    type="text"
                    name="state"
                    id="state"
                    value={teacherFormData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* district */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="district">
                    District <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="district"
                    className="w-full rounded border p-2"
                    type="text"
                    name="district"
                    id="district"
                    value={teacherFormData.district}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* City */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="city">
                    City <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="city"
                    className="w-full rounded border p-2"
                    type="text"
                    name="city"
                    id="city"
                    value={teacherFormData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* area */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="area">
                    Area <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="area"
                    className="w-full rounded border p-2"
                    type="text"
                    name="area"
                    id="area"
                    value={teacherFormData.area}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* pincode */}
                <div className="mb-4">
                  <label className="block font-medium" htmlFor="pincode">
                    Pincode <span className="font-bold text-red-400">*</span>
                  </label>
                  <input
                    placeholder="pincode"
                    className="w-full rounded border p-2"
                    type="number"
                    name="pincode"
                    id="pincode"
                    value={teacherFormData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex gap-10"></div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={(e) => sendTeacherData(e)}
              className="rounded-full bg-blue-600 px-10 py-2 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default TeacherForm

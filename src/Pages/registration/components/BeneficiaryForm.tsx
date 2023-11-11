import React, { useState } from 'react'
import Dropdown from '@/components/Dropdown'

const BeneficiaryForm = () => {
  const [BeneficiaryFormData, setBeneficiaryFormData] = useState({
    type: 'Beneficiary',
    first_name: '',
    middle_name: '',
    last_name: '',
    phone_no: 0,
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
    branch_id: null,
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

  // handleImage
  // const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const selectedFile = e.target.files ? e.target.files[0] : ''
    if (selectedFile) {
      const fileName = selectedFile.name
      setBeneficiaryFormData({ ...BeneficiaryFormData, [name]: fileName })
    }
  }

  // Data sending to backend
  const sendBeneficiaryData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('From Data: ', BeneficiaryFormData)
  }
  // Handle change function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBeneficiaryFormData({ ...BeneficiaryFormData, [name]: value })
  }

  return (
    <>
      <form method="POST">
        <div className="flex h-full w-full flex-col">
          <span className="w-full text-center  text-2xl font-bold">Beneficiary Form</span>
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
                  value={BeneficiaryFormData.first_name}
                  required
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.middle_name}
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
                  value={BeneficiaryFormData.last_name}
                  required
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.email}
                  required
                  onChange={handleChange}
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
                  value={BeneficiaryFormData.password}
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Phone number */}
              <div className="mb-4">
                <label className="block font-medium" htmlFor="Phone">
                  Phone No: <span className="font-bold text-red-400">*</span>
                </label>
                <input
                  placeholder="Phone No:"
                  className="w-full rounded border p-2"
                  type="text"
                  name="phone_no"
                  id="Phone"
                  value={BeneficiaryFormData.phone_no}
                  required
                  onChange={handleChange}
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
                    required
                    name="profile_image"
                    onChange={handleImageChange}
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
                  value={BeneficiaryFormData.DOB}
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
                  value={BeneficiaryFormData.blood_group}
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
                  value={BeneficiaryFormData.sex}
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
              <label className="block font-medium" htmlFor="Branch">
                Choose Branch <span className="font-bold text-red-400">*</span>
              </label>
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
                      accept=".jpg,.jpeg"
                      required
                      name="aadhar_front"
                      onChange={handleImageChange}
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
                      required
                      name="aadhar_back"
                      onChange={handleImageChange}
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
                      accept=".jpg,.jpeg"
                      required
                      name="voter_front"
                      onChange={handleImageChange}
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
                      accept=".jpg,.jpeg"
                      required
                      name="voter_back"
                      onChange={handleImageChange}
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
                      required
                      name="pan_card"
                      onChange={handleImageChange}
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
                    <label className="block font-medium" htmlFor="optional_front">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
                        accept=".jpg,.jpeg"
                        name="optional_front"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block font-medium" htmlFor="optional_back">
                      Back <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
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
                    <label className="block font-medium" htmlFor="optional_front">
                      Front <span className="font-bold text-red-400">*</span>
                    </label>
                    <div className="flex items-center">
                      <input
                        className="w-full rounded border p-2"
                        type="file"
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
                    value={BeneficiaryFormData.street}
                    required
                    onChange={handleChange}
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
                    value={BeneficiaryFormData.state}
                    required
                    onChange={handleChange}
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
                    value={BeneficiaryFormData.district}
                    required
                    onChange={handleChange}
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
                    value={BeneficiaryFormData.city}
                    required
                    onChange={handleChange}
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
                    value={BeneficiaryFormData.area}
                    required
                    onChange={handleChange}
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
                    value={BeneficiaryFormData.pincode}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex gap-10"></div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              onClick={(e) => sendBeneficiaryData(e)}
              className="rounded-full bg-blue-600 px-10 py-2 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default BeneficiaryForm

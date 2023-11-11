import React, { useState } from 'react'

type MotherFormTypes = {
  parentsFormData: ParentsFormDataType
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  next_prev_btn: React.Dispatch<
    React.SetStateAction<'Father' | 'Mother' | 'Address' | 'Student' | 'Payment'>
  >
  handleIdImagesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MotherForm = ({
  parentsFormData,
  handleChange,
  next_prev_btn,
  handleIdImagesChange
}: MotherFormTypes) => {
  // Optional Id Proof selection logic
  const [selectedIdProof, setSelectedIdProof] = useState('Select One')
  const handleIdProofChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedIdProof(event.target.value)
  }

  return (
    <>
      <div className="flex flex-col gap-5 py-5 pl-10 max-md:p-2 ">
        {/* Name / email-pass / DOB-Blood-Sex */}
        <div className="grid w-full grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="mb-4">
            <label className="block font-medium" htmlFor="Full Name">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              placeholder="Full Name"
              className="w-full rounded border p-2"
              type="text"
              name="mother_full_name"
              id="Full Name"
              value={parentsFormData.mother_full_name}
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
              placeholder="000-000-0000"
              className="w-full rounded border p-2"
              type="number"
              name="mother_phone_no"
              id="Phone"
              value={parentsFormData.mother_phone_no}
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
              placeholder="example@gamil.com"
              className="w-full rounded border p-2"
              type="email"
              name="mother_email"
              id="Email"
              value={parentsFormData.mother_email}
              required
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
              name="mother_blood_group"
              id="Blood"
              required
              value={parentsFormData.mother_blood_group}
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

          <div className="w-full max-md:hidden" />
          <div className="w-full max-lg:hidden" />
        </div>

        {/* Aadhar Id Proof */}
        <div className="flex w-full flex-col">
          <div className="flex  w-full items-center rounded-lg p-2 max-lg:border max-md:flex-col max-md:items-start">
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
                    name="mother_aadhar_front"
                    required
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
                    name="mother_aadhar_back"
                    required
                    onChange={handleIdImagesChange}
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
                    name="mother_voter_front"
                    required
                    onChange={handleIdImagesChange}
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
                    name="mother_voter_back"
                    required
                    onChange={handleIdImagesChange}
                  />
                </div>
              </div>
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
              <option value="Pan ">Pan card</option>
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
                      accept=".jpg,.jpeg"
                      name="mother_optional_front"
                      onChange={handleIdImagesChange}
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
                      accept=".jpg,.jpeg"
                      name="mother_optional_back"
                      onChange={handleIdImagesChange}
                    />
                  </div>
                </div>
              </div>
            ) : selectedIdProof === 'Select One' ? (
              '(optional)'
            ) : selectedIdProof === 'Pan' ? (
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
                        name="mother_optional_front"
                        onChange={handleIdImagesChange}
                      />
                    </div>
                  </div>
                  {/* Empty Div */}
                  <div className="mx-lg:hidden w-full" />
                </div>
              </div>
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
                      accept=".jpg,.jpeg"
                      name="mother_optional_front"
                      onChange={handleIdImagesChange}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Next Button */}
        <div className="flex justify-between">
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Father')}
            type="button">
            Prev
          </button>
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Address')}
            type="button">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default MotherForm

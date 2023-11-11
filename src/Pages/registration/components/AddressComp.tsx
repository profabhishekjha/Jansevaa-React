import Dropdown from '@/components/Dropdown'
import React from 'react'

interface AddressCompType {
  parentsFormData: ParentsFormDataType
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedBranchId: number | null
  setSelectedBranchId: React.Dispatch<React.SetStateAction<number | null>>
  next_prev_btn: React.Dispatch<
    React.SetStateAction<'Father' | 'Mother' | 'Address' | 'Student' | 'Payment'>
  >
}
const AddressComp = ({
  selectedBranchId,
  setSelectedBranchId,
  parentsFormData,
  handleChange,
  next_prev_btn
}: AddressCompType) => {
  return (
    <>
      {/* Address */}
      <div className="flex flex-col gap-5 py-5 pl-10 max-md:p-2">
        {/* Branch */}
        <div className="mb-4">
          <label className="block font-medium" htmlFor="Branch">
            Choose Branch <span className="font-bold text-red-400">*</span>
          </label>
          <Dropdown selectedBranchId={selectedBranchId} setSelectedBranchId={setSelectedBranchId} />
        </div>
        <div className="w-full border" />
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
              value={parentsFormData.street}
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
              value={parentsFormData.state}
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
              value={parentsFormData.district}
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
              value={parentsFormData.city}
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
              value={parentsFormData.area}
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
              id="city"
              value={parentsFormData.pincode}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Next Button */}
        <div className="flex justify-between">
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Mother')}
            type="button">
            Prev
          </button>
          <button
            className="float-right rounded-lg border bg-blue-500 px-4 py-2 text-white"
            onClick={() => next_prev_btn('Student')}
            type="button">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default AddressComp

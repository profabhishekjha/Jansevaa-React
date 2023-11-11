import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
/* import React, { useState } from "react"; */
const Report = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [reportFormData, setReportFormData] = useState({
    fullName: '',
    phone_no: '',
    userEmail: '',
    textArea: ''
  })
  const handleSubmit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setReportFormData({ ...reportFormData, [name]: value })
  }

  // Data sending to backend
  const sendReportData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('From Data: ', reportFormData)
  }

  useEffect(() => {
    if (
      reportFormData.fullName != '' &&
      reportFormData.phone_no != '' &&
      reportFormData.userEmail != '' &&
      reportFormData.textArea != ''
    ) {
      setIsDisabled(false)
    }
  }, [
    reportFormData.fullName,
    reportFormData.phone_no,
    reportFormData.userEmail,
    reportFormData.textArea
  ])

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <form className="mt-[8vh] flex justify-center">
        <div className="grid grid-cols-1 gap-4 rounded bg-white p-4 shadow-md max-md:w-96 sm:w-2/3 sm:gap-6 sm:p-6">
          <h2 className="mb-4 text-2xl font-semibold sm:text-4xl">Raise an Issue</h2>
          {/* Full Name Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="string"
              id="full_name"
              name="fullName"
              className="w-full rounded border p-2"
              placeholder="Mukesh"
              value={reportFormData.fullName}
              required
              onChange={handleSubmit}
            />
          </div>
          {/* Phone Number Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="phone_no" className="block font-medium">
              Phone Number <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="number"
              id="phone_no"
              name="phone_no"
              className="w-full rounded border p-2"
              placeholder="000-000-0000"
              required
              value={reportFormData.phone_no}
              onChange={handleSubmit}
            />
          </div>
          {/* Email Field */}
          <div className="mb-2 sm:mb-4">
            <label htmlFor="email" className="block font-medium">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="userEmail"
              className="w-full rounded border p-2"
              placeholder="JohnDoe@gmail.com"
              value={reportFormData.userEmail}
              required
              onChange={handleSubmit}
            />
          </div>
          {/* TextArea */}
          <div className="mb-2 sm:mb-4">
            <label
              htmlFor="message"
              className="text-md mb-2 block font-medium text-gray-900 dark:text-white">
              Write Your Complaint
            </label>
            <textarea
              id="message"
              name="textArea"
              rows={5}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Describe your complaint within 250 words"
              value={reportFormData.textArea}
              required
              onChange={handleSubmit}
            />
          </div>
          <div>
            <Button
              type="submit"
              className="mt-3 w-full rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              onClick={sendReportData}
              disabled={isDisabled}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Report

import React, { useState } from 'react'
// type ImageUploadFormProps = {
//   formType: 'Father' | 'Mother' | 'Student' | 'Teacher' | 'Volunteer'
//   cardType: 'Aadhar' | 'Voter' | 'SchoolId' | 'Pan' | 'Passport' | 'Driving' | 'Profile'
//   PositionType: 'Front' | 'Back'
// }


// const ImageUploadForm = ({ formType, cardType, PositionType }: ImageUploadFormProps) => {
const ImageUploadForm = () => {
  // const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined)
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0]
    if (imageFile) {
      setPreviewUrl(URL.createObjectURL(imageFile))
    }
  }

  return (
    <>
      <div className="flex items-center">
        <input
          className="w-full rounded border p-2"
          type="file"
          accept=".jpg,.jpeg"
          onChange={handleImageChange}
        />
        {previewUrl && (
          <img src={previewUrl} alt="Preview" width={1000} height={1000} className="-ml-16 w-12" />
        )}
      </div>
    </>
  )
}

export default ImageUploadForm

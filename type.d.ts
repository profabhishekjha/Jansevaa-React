type ParentsFormDataType = {
  father_full_name: string
  father_phone_no: string
  father_blood_group: string
  father_email: string

  mother_full_name: string
  mother_phone_no: string
  mother_blood_group: string
  mother_email: string

  branch_id: number
  street: string
  state: string
  city: string
  district: string
  area: string
  pincode: string
  country: string

  father_aadhar_front?: File | string
  father_aadhar_back?: File | string
  father_voter_front?: File | string
  father_voter_back?: File | string
  father_optional_front?: File | string
  father_optional_back?: File | string

  mother_aadhar_front?: File | string
  mother_aadhar_back?: File | string
  mother_voter_front?: File | string
  mother_voter_back?: File | string
  mother_optional_front?: File | string
  mother_optional_back?: File | string
}

type studentFormDataType = {
  first_name: string
  middle_name: string
  last_name: string
  phone_no: ''
  email: string
  subject: string
  blood_group: string

  DOB: string
  sex: string
  password: string
  parent_id: string


  profile_image?: File | string
  aadhar_front?: File | string
  aadhar_back?: File | string
  school_id?: File | string
}

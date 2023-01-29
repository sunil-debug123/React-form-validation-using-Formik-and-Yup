import * as yup from 'yup';


export const validationSchema =  yup.object({
  firstName: yup.string('Enter First Name Here').required('First Name Is required'),
  lastName: yup.string('Enter Last Name Here').required('Last Name Is required'),
  email: yup.string('Enter Email Here').email('Invalid Email').required('Email Is required'),
  rollNo: yup.string().required('Please Enter your Roll No'),
  section: yup.string().required('Select the class section'),
});

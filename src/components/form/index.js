import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from "react";
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import { validationSchema } from '../../schemas/validation-schema';

const formIntialValues = {
    firstName : '',
    lastName : '',
    rollNo : '',
    email : '',
    section: ''
}

export default function Form({onFormSubmit}) {
   const formik = useFormik({
    initialValues: formIntialValues,
    validationSchema: validationSchema,
    onSubmit : (values, actions) => {
      if(onFormSubmit)
      {
        onFormSubmit(values)
      }
      actions.resetForm();
    }
   })

  return (
    <div className='App'>
      <form method='post' onSubmit={formik?.handleSubmit}>
        <TextField
         style={{ width: "400px", margin: "12px" }}
          type="text"
          label="First Name"
          variant="outlined"
          name='firstName'
          onChange={formik?.handleChange}
          error={formik.touched.firstName && formik?.errors?.firstName}
          value={formik?.values?.firstName}
          helperText={formik.touched.firstName && formik?.errors?.firstName}
        />
        <br />
        <TextField
           style={{ width: "400px", margin: "12px" }}
          type="text"
          label="Last Name"
          variant="outlined"
          name='lastName'
          onChange={formik?.handleChange}
          error={formik.touched.lastName && formik?.errors?.lastName}
          value={formik?.values?.lastName}
          helperText={formik.touched.lastName && formik?.errors?.lastName}
        />
        <br />
        <TextField
           style={{ width: "400px", margin: "12px" }}
          type="text"
          label="Roll No"
          variant="outlined"
          name='rollNo'
          onChange={formik?.handleChange}
          error={formik.touched.rollNo && formik?.errors?.rollNo}
          value={formik?.values?.rollNo}
          helperText={formik.touched.rollNo && formik?.errors?.rollNo}
        />
        <br />
        <TextField
          style={{ width: "400px", margin: "12px" }}
          type="email"
          label="E-Mail"
          variant="outlined"
          name='email'
          onChange={formik?.handleChange}
          value={formik?.values?.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik?.errors?.email}
        />
        <br />
        <TextField
         style={{ width: "400px", margin: "12px" }}
          id="select name"
          select
          label="Section"
          name='section'
          onChange={formik?.handleChange}
          value={formik?.values?.section}
          error={formik.touched.section && formik?.errors?.section}
          helperText={formik.touched.section && formik?.errors?.section}
        >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
        </TextField>
        <br />
        <Button type='submit' style={{ padding: "12px", width: '200px', fontWeight: 'bold' }} variant="contained" color="primary" size='large'>
          save
        </Button>
      </form>
    </div>
  );
}

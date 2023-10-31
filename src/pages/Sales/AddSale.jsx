import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';






const AddSale = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = React.useState('2022-04-17');

  const handleFormSubmit = (values) => {
    console.log(values);
  };


  const initialValues = {
    fullName: "",
    email: "",
    contact: "",
    contact2: "",
    organization: "",
    address: "",

  };

  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  // validation
  const checkoutSchema = yup.object().shape({
    fullName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
      contact2: yup
      .string()
      .matches(phoneRegExp, "Phone number 2 is not valid")
      .required("required"),
    address: yup.string().required("required"),
    organization: yup.string().required("required"),
    
  });


  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px">
      <Header title="ADD SALE " subtitle="Register a New Sale" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
           
           
           

              <TextField
                fullWidth
                type="text"
                label="Registration Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                type="text"
                label="Renewal Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact2}
                name="contact2"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact2 && errors.contact2}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                type="text"
                label="Sale Serial Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.organization}
                name="organization"
                error={!!touched.organization && !!errors.organization}
                helperText={touched.organization && errors.organization}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                type="text"
                label="Select Client"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

                <TextField
                fullWidth
                type="text"
                label="Select Hosting Provider"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

                <TextField
                fullWidth
                type="text"
                label="Select Sale Satatus"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

                <TextField
                fullWidth
                type="text"
                label="Select Service Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

                <TextField
                fullWidth
                type="text"
                label="Select Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

                <TextField
                fullWidth
                type="text"
                label="Select Storage Space"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                type="text"
                label="Domain Name Cost"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                type="text"
                label="Hosting Cost"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                type="text"
                label="Total Cost"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                type="text"
                label="Balance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                type="text"
                label="Select Payment Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

<TextField
                fullWidth
                type="text"
                label="Sale Recorded By"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />
              
              <TextField
                fullWidth
                type="text"
                label="Business Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />

            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">
              <Button type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#6ce4fe" }} color="secondary" variant="contained">
                Add New Client
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



export default AddSale;
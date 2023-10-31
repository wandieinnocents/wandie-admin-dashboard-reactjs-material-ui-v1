import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';







const AddSale = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [value, setValue] = React.useState('2022-04-17');

  const [client, setClient] = React.useState('');

  // date
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = (dateNow.getUTCMonth() + 1).toString().padStart(2, '0'); // padStart ensures the month is 2 digits
  const date = dateNow.getUTCDate().toString().padStart(2, '0'); // padStart ensures the date is 2 digits
  const currentDate = `${year}-${month}-${date}`;
  // end date picker

  const handleChangeClient = (event) => {
    setClient(event.target.value);
  };

  
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
    <Box mt="30px" pb="60px" pr="60px" pl="60px" >

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
           
           
           

              {/* Registration date */}
              <TextField
                id="date"
                label="Registration Date"
                type="date"
                name="registration_date"
                defaultValue={currentDate}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Renewal date */}
              <TextField
                  id="date"
                  label="Renewal Date"
                  type="date"
                  name="registration_date"
                  defaultValue={currentDate}
                  InputLabelProps={{
                    shrink: true
                  }}
                  sx={{ gridColumn: "span 2" }}
                />

              {/* Sale serial number */}
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


              {/* Client */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Client</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Client"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Client one</MenuItem>
                  <MenuItem value={20}>Client 2</MenuItem>
                  <MenuItem value={30}>Client 3</MenuItem>
                </Select>
              </FormControl>

              {/* Hosting provider */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Hosting provider</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Hosting provider"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Asura hosting</MenuItem>
                  <MenuItem value={20}>Namecheap</MenuItem>
                </Select>
              </FormControl>

                {/* sale status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Sale Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Sale Status"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Pending</MenuItem>
                  <MenuItem value={20}>Complete</MenuItem>
                </Select>
              </FormControl>

               {/* service status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Service Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Service Status"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Inactive</MenuItem>
                </Select>
              </FormControl>

               {/* product name */}
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

              {/* Storage space */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Storage Space</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Storage Space"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>5 GB</MenuItem>
                  <MenuItem value={20}>10 GB</MenuItem>
                  <MenuItem value={20}>20 GB</MenuItem>
                </Select>
              </FormControl>

              {/* domain name cost */}
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

              {/* hosting cost */}
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

              {/* total cost */}
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

              {/* balance */}
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

              {/* payment status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Payment Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Payment Status"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Partial Payment</MenuItem>
                  <MenuItem value={20}>Full Payment</MenuItem>
                  <MenuItem value={20}>Pending</MenuItem>
                </Select>
              </FormControl>

              {/* sale recorded by */}
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


              {/* business address */}
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

             {/* description */}
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
                Add New Sale
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



export default AddSale;
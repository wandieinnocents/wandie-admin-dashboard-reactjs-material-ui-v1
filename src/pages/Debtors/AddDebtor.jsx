import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddDebtor = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
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
      <Header title="ADD REMINDER " subtitle="Onboard a New User Client" />

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

              {/* date of debt */}
              <TextField
                id="date"
                label="Date of debt"
                type="date"
                name="registration_date"
                defaultValue={currentDate}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />

               {/* date of payment */}
               <TextField
                id="date"
                label="Date of payment"
                type="date"
                name="registration_date"
                defaultValue={currentDate}
                InputLabelProps={{
                  shrink: true
                }}
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
              
              <TextField
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                type="text"
                label="Contact Number 1"
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
                label="Contact Number 2"
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
                label="Organization"
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
                label="Address"
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
                label="Domain Name"
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
                label="Hosting Space"
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
                label="Hosting Space"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

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

              {/* total to pay */}
              <TextField
                fullWidth
                type="text"
                label="Loan Amount total"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Amount paid */}
              <TextField
                fullWidth
                type="text"
                label="Amount Paid"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />

               {/* Balance */}
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



              {/* Debtor status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Debt Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Debt Status"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Paid</MenuItem>
                  <MenuItem value={20}>Paying</MenuItem>
                  <MenuItem value={30}>Pending</MenuItem>
                </Select>
              </FormControl>
              
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
                Add New Client
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



export default AddDebtor;
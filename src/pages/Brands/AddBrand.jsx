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



const AddBrand = () => {
  const [value, setValue] = React.useState('2022-04-17');
  const [client, setClient] = React.useState('');


  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

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

   // date
   const dateNow = new Date();
   const year = dateNow.getFullYear();
   const month = (dateNow.getUTCMonth() + 1).toString().padStart(2, '0'); // padStart ensures the month is 2 digits
   const date = dateNow.getUTCDate().toString().padStart(2, '0'); // padStart ensures the date is 2 digits
   const currentDate = `${year}-${month}-${date}`;
   // end date picker

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
      
      <Box>
      <Header title="Add Expense" subtitle="Welcome to your expenses" />

      {/* FORM */}
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

            {/*  date */}
            <TextField
                id="date"
                label="Expense Date"
                type="date"
                name="expense_date"
                defaultValue={currentDate}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />



              <TextField
                fullWidth
                type="text"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 2" }}
              />
              
             {/* Expense Category */}
             <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Expense Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Expense Category"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Client one</MenuItem>
                  <MenuItem value={20}>Client 2</MenuItem>
                  <MenuItem value={30}>Client 3</MenuItem>
                </Select>
              </FormControl>

               {/* Payment Method */}
             <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Payment Method</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={client}
                  label="Select Payment Method"
                  onChange={handleChangeClient}
                >
                  <MenuItem value={10}>Client one</MenuItem>
                  <MenuItem value={20}>Client 2</MenuItem>
                  <MenuItem value={30}>Client 3</MenuItem>
                </Select>
              </FormControl>

              

              

                <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Description Of Expense"
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
                Add Expense
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddBrand;

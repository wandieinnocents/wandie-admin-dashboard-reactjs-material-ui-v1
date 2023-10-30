import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SendIcon from '@mui/icons-material/Send';


const AddProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    product_category_name: "",
    description: "",
    

  };

  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  // validation
  const checkoutSchema = yup.object().shape({
    product_category_name: yup.string().required("required"),
    description: yup.string().required("required"),
    
  });



  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <Header title="Add Product Categories" subtitle="Welcome to your ProductCategories" />

      {/* FORM */}
      <Box >
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
                // style={{ width:"100%" }}
                type="text"
                label="Category Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.product_category_name}
                name="product_category_name"
                error={!!touched.product_category_name && !!errors.product_category_name}
                helperText={touched.product_category_name && errors.product_category_name}
                sx={{ gridColumn: "span 4" }}
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
                Add Product Category
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddProductCategory;

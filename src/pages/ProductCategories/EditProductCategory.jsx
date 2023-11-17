import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import axios from 'axios'


const EditProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  // states for data submission
    const [id, setId] = useState(useParams().id);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // pick existing data to form as form value
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
      .then(function (response) {
          // handle database fields to set form values
          let category = response.data.data
          setName(category.name);
          setDescription(category.description);
      })
      // trigger sweet alerts on error
      .catch(function (error) {
          Swal.fire({
               icon: 'error',
              title: 'An Error Occured!',
              showConfirmButton: false,
              timer: 1500
          })
      })
        
  }, [])

 // handle data update to api
 const updateData = () => {
  setIsSaving(true);
  axios.put(`http://127.0.0.1:8000/api/v1/product_categories/${id}`, {
      // database fields to update
      name: name,
      description: description
  })
  // trigger sweet alerts on success
  .then(function (response) {
      Swal.fire({
          icon: 'success',
          title: 'Product Category Updated successfully!',
          showConfirmButton: false,
          timer: 1500
      })
      setIsSaving(false);
  })
  // trigger sweet alerts on error
  .catch(function (error) {
      Swal.fire({
           icon: 'error',
          title: 'An Error Occured!',
          showConfirmButton: false,
          timer: 1500
      })
      setIsSaving(false)
  });
}





  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <Header title="Edit Product Category" 
       buttonTitle={"All product Categories"}
       buttonURL={`/view_product_categories/`}
        />
      {/* FORM */}
      <Box >
        
          <form >
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
                // onBlur={handleBlur}
                onChange={(event)=>{setName(event.target.value)}}
                value={name}
                name="name"
                // id="name"
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Description"
                // onBlur={handleBlur}
                onChange={(event)=>{setDescription(event.target.value)}}
                value={description}
                name="description"
                // id="description"
                // error={!!touched.description && !!errors.description}
                // helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">

              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Edit  Category
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditProductCategory;

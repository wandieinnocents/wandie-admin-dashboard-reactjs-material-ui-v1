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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const EditParentProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [id, setId] = useState(useParams().id);
    const [parent_product_category_name, setParentProductCategoryName] = useState('');
    const [parent_product_category_description, setParentProductCategoryDescription] = useState('');
    const [parent_product_category_status, setParentProductCategoryStatus] = useState('');
    
    const [isSaving, setIsSaving] = useState(false);

     // handle drop down change
     const handleChangeParentCategoryStatus = (event) => {
      setParentProductCategoryStatus(event.target.value);
    };
  



    // states for data submission
      // const [name, setName] = useState('');
      // const [description, setDescription] = useState('');
      // const [isSaving, setIsSaving] = useState(false);
  
      // pick existing data to form as form value
      useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/parent_product_categories/${id}`)
        .then(function (response) {
            // handle database fields to set form values
            let parent_category = response.data.data
            setParentProductCategoryName(parent_category.parent_product_category_name);
            setParentProductCategoryDescription(parent_category.parent_product_category_description);
            setParentProductCategoryStatus(parent_category.parent_product_category_status);
        })
        // trigger sweet alerts on error
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'Error picking existing data!',
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [])
  
   // handle data update to api
   const updateData = () => {
    setIsSaving(true);
    axios.put(`http://127.0.0.1:8000/api/v1/parent_product_categories/${id}`, {
        // database fields to update
        parent_product_category_name: parent_product_category_name,
        parent_product_category_description: parent_product_category_description,
        parent_product_category_status: parent_product_category_status,
    })
    // trigger sweet alerts on success
    .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'Parent Product Category Updated successfully!',
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
      <Header title="Add Parent Product Category" 
       buttonTitle={"All Parent product Categories"}
       buttonURL={`/view_parent_product_categories/`}
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
                label="Parent Category Name *"
                // onBlur={handleBlur}
                onChange={(event)=>{setParentProductCategoryName(event.target.value)}}
                value={parent_product_category_name}
                name="parent_product_category_name"
                // id="name"
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />

              {/* status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parent_product_category_status}
                  label="Select Status"
                  onChange={handleChangeParentCategoryStatus}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
              </FormControl>
              
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Description"
                // onBlur={handleBlur}
                onChange={(event)=>{setParentProductCategoryDescription(event.target.value)}}
                value={parent_product_category_description}
                name="parent_product_category_description"
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
                Edit Parent Category
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditParentProductCategory;

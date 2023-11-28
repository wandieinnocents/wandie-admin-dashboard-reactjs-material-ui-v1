import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderEdit from "../../components/Headers/HeaderEdit";

import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";


// stack 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const AddBrand = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [id, setId] = useState(useParams().id);
    const [brand_name, setBrandName] = useState('');
    const [brand_description, setBrandDescription] = useState('');
    const [brand_status, setBrandStatus] = useState('');
    const [brand_image, setBrandImage] = useState(null);
    const [brand_register_date, setBrandRegisterDate] = useState('');


    const [isSaving, setIsSaving] = useState(false);

    // handle drop down change
    const handleChangeBrandStatus = (event) => {
      setBrandStatus(event.target.value);
    };

   
    // brand image change
      const handleFileChange = (event) => {
      setBrandImage(event.target.files[0]);
    };

    // handle date input
  const handleBrandDateChange = (event) => {
    setBrandRegisterDate(event.target.value);
  };


  // pick existing data to form as form value
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/brands/${id}`)
    .then(function (response) {
        // handle database fields to set form values
        let brand = response.data.data
        setBrandName(brand.brand_name);
        setBrandStatus(brand.brand_status);
        setBrandDescription(brand.brand_description);
        setBrandRegisterDate(brand.brand_register_date);
        setBrandImage(brand.brand_image);
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

  
    // handle data saving to api
    const updateData = () => {
      
      setIsSaving(true);
      axios.post(`http://127.0.0.1:8000/api/v1/brands/${id}`, {
          // database fields
          brand_name: brand_name,
          brand_description: brand_description,
          brand_status: brand_status,
          brand_image:brand_image,
          brand_register_date:brand_register_date,
        }, {
          // headers
          headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            // other headers...
          }})
        // trigger sweet alerts on success
        .then(function (response) {
          Swal.fire({
              icon: 'success',
              title: 'Brand updated successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          // success response
          console.log("Success updating data",response.data )
        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          console.log("Error updating data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderEdit 
       title="Update Brand" 
      //  view 
       buttonTitle={"All Brands"}
       buttonURL={`/view_brands/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"Add Brand"}
       buttonURLAdd={`/add_brand`}



        />

      {/* FORM */}
      
      <Box style={{ marginTop:'20px' }}>
        
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
                label="Brand  Name *"
                // onBlur={handleBlur}
                onChange={(event)=>{setBrandName(event.target.value)}}
                value={brand_name}
                name="brand_name"
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
                  value={brand_status}
                  label="Select Status"
                  onChange={handleChangeBrandStatus}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
              </FormControl>

              {/* date */}
               {/*  date */}
            <TextField
                id="date"
                label="Brand Register Date"
                type="date"
                name="brand_register_date"
                value={brand_register_date}
                // defaultValue={currentDate}
                onChange={handleBrandDateChange}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />

              {/* brand image */}
             
            
            {/* image */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} >
                    {/* preview */}
                    { brand_image ? (<img src={brand_image} alt="" style={{resizeMode: 'cover',width: '15%',}}/>) : (
                      <img src={DefaultImage} alt="Default Placeholder" style={{resizeMode: 'cover',width: '15%',}} />
                    )}

                    <input  id="demo-simple-select"  style={{ marginTop:'15px' }} type="file" onChange={handleFileChange} />
                    </Stack>
               </FormControl>
                                  
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Description"
                // onBlur={handleBlur}
                onChange={(event)=>{setBrandDescription(event.target.value)}}
                value={brand_description}
                name="brand_description"
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
                Update Brand
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddBrand;

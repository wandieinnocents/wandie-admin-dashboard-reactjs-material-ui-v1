import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderEdit from "../../components/Headers/HeaderEdit";

// icons
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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


const EditProduct = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [id, setId] = useState(useParams().id);
    const [supplier_name, setSupplierName] = useState('');
    const [supplier_email, setSupplierEmail] = useState('');
    const [supplier_phone, setSupplierPhone] = useState('');
    const [supplier_address, setSupplierAddress] = useState('');
    const [supplier_city, setSupplierCity] = useState('');
    const [supplier_country, setSupplierCountry] = useState('');
    const [supplier_organization, setSupplierOrganization] = useState('');
    const [supplier_status, setSupplierStatus] = useState('');
    const [supplier_description, setSupplierDescription] = useState('');
    const [supplier_website_url, setSupplierWebsiteUrl] = useState('');
    const [supplier_register_date, setSupplierRegisterDate] = useState('');
    const [supplier_image, setSupplierImage] = useState(null);






    const [isSaving, setIsSaving] = useState(false);

 // handle drop down change
 const handleChangeSupplierStatus = (event) => {
  setSupplierStatus(event.target.value);
};

// Supplier image change
  const handleFileChange = (event) => {
  setSupplierImage(event.target.files[0]);
};

// handle date input
const handleSupplierRegisterDataChange = (event) => {
setSupplierRegisterDate(event.target.value);
};

  // pick existing data to form as form value
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/suppliers/${id}`)
    .then(function (response) {
        // handle database fields to set form values
        let supplier = response.data.data
        setSupplierName(supplier.supplier_name) 
        setSupplierRegisterDate(supplier.supplier_register_date) 
        setSupplierEmail(supplier.supplier_email) 
        setSupplierPhone(supplier.supplier_phone) 
        setSupplierAddress(supplier.supplier_address) 
        setSupplierCity(supplier.supplier_city) 
        setSupplierCountry(supplier.supplier_phone) 
        setSupplierOrganization(supplier.supplier_organization) 
        setSupplierImage(supplier.supplier_image) 
        setSupplierStatus(supplier.supplier_status) 
        setSupplierDescription(supplier.supplier_description) 
        setSupplierWebsiteUrl(supplier.supplier_website_url) 
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
      axios.post(`http://127.0.0.1:8000/api/v1/suppliers/${id}`, {
          // database fields
          supplier_name: supplier_name,
          supplier_register_date: supplier_register_date,
          supplier_email: supplier_email,
          supplier_phone:supplier_phone,
          supplier_address:supplier_address,
          supplier_city:supplier_city,
          supplier_country:supplier_country,
          supplier_organization:supplier_organization,
          supplier_image:supplier_image,
          supplier_status:supplier_status,
          supplier_description:supplier_description,
          supplier_website_url:supplier_website_url,

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
              title: 'Supplier updated successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          // success response
          console.log("Success updating Supplier data",response.data )
        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          console.log("Error updating Supplier data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box mt="30px">
      <HeaderEdit 
       title="Update Suppliers" 
      //  view 
       buttonTitle={"All Suppliers"}
       buttonURL={`/view_suppliers/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"Add Supplier"}
       buttonURLAdd={`/add_supplier`}



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

            {/* supplier name */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier Name *"
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierName(event.target.value)}}
                value={supplier_name}
                name="supplier_name"
                sx={{ gridColumn: "span 2" }}
              />


              {/* date */}
              <TextField
                id="date"
                label="Supplier Register Date"
                type="date"
                name="supplier_register_date"
                value={supplier_register_date}
                // defaultValue={currentDate}
                onChange={handleSupplierRegisterDataChange}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />


              {/* status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={supplier_status}
                  label="Select Status"
                  onChange={handleChangeSupplierStatus}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
              </FormControl>

              {/* supplier email */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier  Email "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierEmail(event.target.value)}}
                value={supplier_email}
                name="supplier_email"
                sx={{ gridColumn: "span 2" }}
              />

               {/* supplier phone */}
               <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier Phone  *"
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierPhone(event.target.value)}}
                value={supplier_phone}
                name="supplier_phone"
                sx={{ gridColumn: "span 2" }}
              />

               {/* supplier address */}
               <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier Address "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierAddress(event.target.value)}}
                value={supplier_address}
                name="supplier_address"
                sx={{ gridColumn: "span 2" }}
              />


               {/* supplier city */}
               <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier City "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierCity(event.target.value)}}
                value={supplier_city}
                name="supplier_city"
                sx={{ gridColumn: "span 2" }}
              />

               {/* supplier country */}
               <TextField
                fullWidth
                type="text"
                label="Supplier Country "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierCountry(event.target.value)}}
                value={supplier_country}
                name="supplier_country"
                sx={{ gridColumn: "span 2" }}
              />

               {/* supplier organization */}
               <TextField
                fullWidth
                type="text"
                label="Supplier Organization "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierOrganization(event.target.value)}}
                value={supplier_organization}
                name="supplier_organization"
                sx={{ gridColumn: "span 4" }}
              />

               {/* supplier website  */}
               <TextField
                fullWidth
                type="text"
                label="Supplier Website Address "
                // onBlur={handleBlur}
                onChange={(event)=>{setSupplierWebsiteUrl(event.target.value)}}
                value={supplier_website_url}
                name="supplier_website_url"
                sx={{ gridColumn: "span 2" }}
              />


               
                {/* supplier image */}
                <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} >
                    {/* preview */}
                    { supplier_image ? (<img src={supplier_image} alt="" style={{resizeMode: 'cover',width: '15%',}}/>) : (
                      <img src={DefaultImage} alt="Default Placeholder" style={{resizeMode: 'cover',width: '15%',}} />
                    )}

                    <Button variant="raised" component="label" color="primary">
                    <CloudUploadIcon  style={{ marginRight:"20px" }}/> Photo 
                      <input 
                      style={{ marginLeft:"30px" }}
                      id="demo-simple-select"
                      // value={product_category_image}
                        type="file"
                        // hidden
                        onChange={handleFileChange}
                      />

                </Button>
                    </Stack>
               </FormControl>
              
              
              <TextField
                fullWidth
                type="text"
                multiline
                rows={5}
                label="Description"
                onChange={(event)=>{setSupplierDescription(event.target.value)}}
                value={supplier_description}
                name="supplier_description"
                sx={{ gridColumn: "span 4" }}
              />

            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">
              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Update Supplier
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditProduct;

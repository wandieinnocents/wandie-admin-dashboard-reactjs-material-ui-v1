import React, {useState} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderAddData from "../../components/Headers/HeaderAddData";
// icons
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Swal from 'sweetalert2'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const AddProduct = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");


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
    
    // brand image change
      const handleFileChange = (event) => {
      setSupplierImage(event.target.files[0]);
    };

    // handle date input
  const handleSupplierRegisterDataChange = (event) => {
    setSupplierRegisterDate(event.target.value);
  };

  
    // handle data saving to api
    const submitData = () => {
      
      setIsSaving(true);
      axios.post('http://127.0.0.1:8000/api/v1/suppliers/create', {
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
              title: 'Supplier saved successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          setSupplierName('') 
          setSupplierRegisterDate('') 
          setSupplierEmail('') 
          setSupplierPhone('') 
          setSupplierAddress('') 
          setSupplierCity('') 
          setSupplierCountry('') 
          setSupplierOrganization('') 
          setSupplierImage('') 
          setSupplierStatus('') 
          setSupplierDescription('') 
          setSupplierWebsiteUrl('') 

          // success response
          console.log("Success submitting data",response.data )
        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          console.log("Error submitting supplier data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderAddData title="Add Product" 
       buttonTitle={"All Products"}
       buttonURL={`/view_products/`}
        />
      {/* FORM */}
      
      <Box mt="30px">
        
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


               {/* supplier city  */}
               <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Supplier City"
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
              <div sx={{ gridColumn: "span 6" }}>

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

              </div>
              
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
              onClick={submitData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Add Product
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddProduct;

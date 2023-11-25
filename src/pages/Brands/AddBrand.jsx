import React, {useState} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderAddData from "../../components/HeaderAddData";
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const AddBrand = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
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


  
    // handle data saving to api
    const submitData = () => {
      
      setIsSaving(true);
      axios.post('http://127.0.0.1:8000/api/v1/brands/create', {
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
              title: 'Brand saved successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          setBrandName('') 
          setBrandDescription('')
          setBrandStatus('')
          setBrandRegisterDate('')

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
          console.log("Error submitting data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderAddData title="Add Brand" 
       buttonTitle={"All Brands"}
       buttonURL={`/view_brands/`}
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
              <div sx={{ gridColumn: "span 6" }}>
                <input 
                    id="demo-simple-select"
                    
                    // value={product_category_image}
                    type="file"
                    onChange={handleFileChange}
                    // helperText=<span style={{ color:'red' }}> {productCategoryImageError} </span>

                    />
              </div>
              
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
              onClick={submitData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Add Brand
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

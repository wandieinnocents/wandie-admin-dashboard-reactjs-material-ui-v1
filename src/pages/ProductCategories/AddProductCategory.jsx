import React, {useState, useEffect} from 'react'
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
import FormHelperText from '@mui/material/FormHelperText';




const AddProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [isSaving, setIsSaving] = useState(false);
    // const [error, setError] = useState(false);

    // const [parent_product_category_id, setParentProductCategoryId] = useState('');
    const [parent_product_category_id, setParentProductCategoryIdData] = useState([]);
    const [parent_product_category_id_value, setParentProductCategoryIdValue] = useState(null);
     // error handling
     const [parentProductCategoryIdError, setParentProductCategoryIdError] = useState('');

    // product_category name state
    const [product_category_name, setProductCategoryName] = useState('');
    // error handling
    const [productCategoryNameError, setProductCategoryNameError] = useState('');

    // product_category_status
    const [product_category_status, setProductCategoryStatus] = useState('');
    // error handling
    const [productCategoryStatusError, setProductCategoryStatusError] = useState('');


    // product category description
    const [product_category_description, setProductCategoryDescription] = useState('');
    const [productCategoryDescriptionError, setProductCategoryDescriptionError] = useState('');


    // image upload
    const [product_category_image, setProductCategoryImageFile] = useState(null);
  

    // handle change
    const handleFileChange = (event) => {
      setProductCategoryImageFile(event.target.files[0]);
    };
  


    // handle drop down change parent product category id
    const handleChangeProductCategoryId = (event) => {
      // setParentProductCategoryIdData(event.target.value);
      setParentProductCategoryIdValue(event.target.value);
    };

    // handle drop down change
    const handleChangeCategoryStatus = (event) => {
      setProductCategoryStatus(event.target.value);
    };


    // drop down parent category id data api data fetch and insert in drop down picker
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/parent_product_categories')
      .then(response => {
        // pick from data array (data.data)
        const data = response.data.data;
        setParentProductCategoryIdData(data);
        console.log("Drop down parent category  data", data);
      })
      .catch(error => {
        console.error('Error fetching parent category data:', error);
      });
  }, []);
  


  

    // handle data saving to api
    const submitData = () => {
      
      setIsSaving(true);
      axios.post('http://127.0.0.1:8000/api/v1/product_categories/create', {
          // database fields
          parent_product_category_id: parent_product_category_id_value,
          product_category_name: product_category_name,
          product_category_description: product_category_description,
          product_category_status: product_category_status,
          product_category_image: product_category_image,

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
              title: 'Product Category saved successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          setParentProductCategoryIdValue('')
          setProductCategoryName('') 
          setProductCategoryDescription('')
          setProductCategoryStatus('')

          // response
          console.log("Submit Success Data", response.data)
          


        })
        // trigger sweet alerts on failure
        .catch(function (error) {

          // validate inputs inline form
          // validateInputs();

          Swal.fire({
              icon: 'error',
              // title: 'Error, Missing Data !',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })

          setIsSaving(false)
          console.log("Error Data", error.response.data)
        });
  }

  // end of  handle data saving to api

  // validation
  const validateInputs = () => {
    let isValid = true;
  
    // Validate product_category_name
    if (product_category_name.trim() === '') {
      setProductCategoryNameError('Product category name  is required');
      isValid = false;
    } else {
      setProductCategoryNameError('');
    }

    // Validate product_category_status
    // if (product_category_status.trim() === '') {
    //   setProductCategoryStatusError('Product category status  is required');
    //   isValid = false;
    // } else {
    //   setProductCategoryStatusError('');
    // }

    // Validate product_category_description
    if (product_category_description.trim() === '') {
      setProductCategoryDescriptionError('Product category description  is required');
      isValid = false;
    } else {
      setProductCategoryDescriptionError('');
    }

     




   
    // Add more validation for other input fields
  
    return isValid;
  };




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <Header title="Add Product Category" 
       buttonTitle={"All Product Categories"}
       buttonURL={`/view_product_categories/`}
        />
      {/* FORM */}
      
      <Box >
        
          <form >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(12, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
              }}
            >


              {/* parent category id */}
              <FormControl  fullWidth sx={{ gridColumn: "span 6" }}>
                <InputLabel id="demo-simple-select-label">Select Parent Category *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parent_product_category_id_value}
                  label="Select Parent Category *"
                  onChange={handleChangeProductCategoryId}
                  helperText=<span style={{ color:'red' }}> {parentProductCategoryIdError} </span>
                >
                <FormHelperText>{parentProductCategoryIdError}</FormHelperText>

                   {parent_product_category_id?.map((item) => (


                  <MenuItem key={item.id} value={item.id} >{item.parent_product_category_name}</MenuItem>
                 

                  ))}

                </Select>
              </FormControl>

              {/* product category name */}
              <TextField
                fullWidth
                type="text"
                label="Category Name *"
                onChange={(event)=>{setProductCategoryName(event.target.value)}}
                value={product_category_name}
                name="product_category_name"
                sx={{ gridColumn: "span 6" }}
                // helperText={productCategoryNameError}
                // helperText=<span style={{ color:'red' }}> {productCategoryNameError} </span>

              />
            
              {/* product category status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 6" }}>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product_category_status}
                  label="Select Status"
                  onChange={handleChangeCategoryStatus}
                
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
                
              </FormControl>
              

               {/* product category image */}
               {/* <InputLabel id="demo-simple-select-label">Select Image</InputLabel> */}
               <div sx={{ gridColumn: "span 6" }}>
                <input 
                    id="demo-simple-select"
                    
                    // value={product_category_image}
                    type="file"
                    onChange={handleFileChange}
                    // helperText=<span style={{ color:'red' }}> {productCategoryImageError} </span>

                    />
              </div>

              {/* product category description */}
              <TextField
                fullWidth
                type="text"
                multiline
                rows={5}
                label="Product Category Description"
                onChange={(event)=>{setProductCategoryDescription(event.target.value)}}
                value={product_category_description}
                name="parent_product_category_description"
                sx={{ gridColumn: "span 12" }}
                // helperText=<span style={{ color:'red' }}> {productCategoryDescriptionError} </span>

              />
              
            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">

              <Button 
              disabled={isSaving}
              onClick={submitData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Add Category
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddProductCategory;

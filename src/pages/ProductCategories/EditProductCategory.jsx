import React, {useState, useEffect} from 'react'
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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';


// stack 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EditProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [id, setId] = useState(useParams().id);
    // states for data submission
    const [isSaving, setIsSaving] = useState(false);

    // const [parent_product_category_id, setParentProductCategoryId] = useState('');
    const [parent_product_category_id, setParentProductCategoryIdData] = useState([]);
    const [parent_product_category_id_value, setParentProductCategoryIdValue] = useState(null);



    const [product_category_name, setProductCategoryName] = useState('');
    const [product_category_status, setProductCategoryStatus] = useState('');
    const [product_category_description, setProductCategoryDescription] = useState('');

    // image upload
    const [product_category_image, setProductCategoryImageFile] = useState(null);

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
        console.error('Status:', error.response.status);
        console.error('Response Data:', error.response.data);
      });
  }, []);
  

      // pick existing data to form as form value
      useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
        .then(function (response) {
            // handle database fields to set form values
            let category = response.data.data
            setParentProductCategoryIdValue(category.parent_product_category_id_value);
            setProductCategoryName(category.product_category_name);
            setProductCategoryDescription(category.product_category_description);
            setProductCategoryStatus(category.product_category_status);
            setProductCategoryImageFile(category.product_category_image);

            // console log data for editing
            console.log("Data for editing", response.data.data);

        })
        // trigger sweet alerts on error
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [])
  

  
    // handle data saving to api
    const updateData = () => {
      
      setIsSaving(true);
      axios.post(`http://127.0.0.1:8000/api/v1/product_categories/${id}`, {
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
              title: 'Product Category Updated successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);

          // response
          console.log("Submit Success Data", response.data)
          


        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          setIsSaving(false)
          console.log("Error Data", error.response.data)
        });
  }

  // end of  handle data saving to api



  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderEdit 
       title="Update Product Category" 
      //  view 
       buttonTitle={"All Product Categories"}
       buttonURL={`/view_product_categories/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"Add Product Category"}
       buttonURLAdd={`/add_product_category`}



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
                <InputLabel id="demo-simple-select-label">Select Parent Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parent_product_category_id_value}
                  label="Select Parent Category"
                  onChange={handleChangeProductCategoryId}
                >

                   {parent_product_category_id?.map((item) => (


                  <MenuItem key={item.id} value={item.id} >{item.parent_product_category_name}</MenuItem>
                 

                  ))}

                </Select>
              </FormControl>

              {/* product category name */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Category Name *"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductCategoryName(event.target.value)}}
                value={product_category_name}
                name="parent_product_category_name"
                // id="name"
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 6" }}
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
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
              </FormControl>
              
              {/* image */}
              <FormControl  fullWidth sx={{ gridColumn: "span 6" }}>

                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                    >

                      {/* preview */}
                      <img src={product_category_image} alt="" 
                        style={{
                          resizeMode: 'cover',
                          // height: 200,
                            width: '20%',
                          }} />


                      <input 
                      id="demo-simple-select"
                      // value={brand_image}
                      style={{ marginTop:'15px' }}
                      type="file"
                      onChange={handleFileChange}
                      />
                      </Stack>
              </FormControl> 






              {/* product category description */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Product Category Description"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductCategoryDescription(event.target.value)}}
                value={product_category_description}
                name="parent_product_category_description"
                // id="description"
                // error={!!touched.description && !!errors.description}
                // helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 12" }}
              />
              
            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">

              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Update Category
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

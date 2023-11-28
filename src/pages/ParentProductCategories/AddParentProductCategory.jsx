import React, {useState} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderAddData from "../../components/Headers/HeaderAddData";
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const AddParentProductCategory = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [parent_product_category_name, setParentProductCategoryName] = useState('');
    const [parent_product_category_description, setParentProductCategoryDescription] = useState('');
    const [parent_product_category_status, setParentProductCategoryStatus] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // handle drop down change
    const handleChangeParentCategoryStatus = (event) => {
      setParentProductCategoryStatus(event.target.value);
    };
  


    // handle data saving to api
    const submitData = () => {
      
      setIsSaving(true);
      axios.post('http://127.0.0.1:8000/api/v1/parent_product_categories/create', {
          // database fields
          parent_product_category_name: parent_product_category_name,
          parent_product_category_description: parent_product_category_description,
          parent_product_category_status: parent_product_category_status,
        })
        // trigger sweet alerts on success
        .then(function (response) {
          Swal.fire({
              icon: 'success',
              title: 'Parent Category saved successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          setParentProductCategoryName('') 
          setParentProductCategoryDescription('')
          setParentProductCategoryStatus('')
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
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderAddData title="Add Parent Category" 
       buttonTitle={"All Parent Categories"}
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
              onClick={submitData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Add Parent Category
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddParentProductCategory;

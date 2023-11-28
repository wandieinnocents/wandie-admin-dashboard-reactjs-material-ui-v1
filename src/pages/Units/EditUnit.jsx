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


const EditUnit = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [id, setId] = useState(useParams().id);
    // unit
    const [unit_name, setUnitName] = useState('');
  // address
    const [unit_description, setUnitDescription] = useState('');



    const [isSaving, setIsSaving] = useState(false);


  // pick existing data to form as form value
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/units/${id}`)
    .then(function (response) {
        // handle database fields to set form values
        let unit = response.data.data
        setUnitName(unit.unit_name);
        setUnitDescription(unit.unit_description);
    })
    // trigger sweet alerts on error
    .catch(function (error) {
        Swal.fire({
             icon: 'error',
            title: 'Error picking existing Unit data!',
            showConfirmButton: false,
            timer: 1500
        })
    })
      
}, [])

  
    // handle data saving to api
    const updateData = () => {
      
      setIsSaving(true);
      axios.post(`http://127.0.0.1:8000/api/v1/units/${id}`, {
          // database fields
          unit_name: unit_name,
          unit_description: unit_description,

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
              title: 'Unit updated successfully!',
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
       title="Update Unit" 
      //  view 
       buttonTitle={"All UNITS"}
       buttonURL={`/view_units/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"ADD UNIT"}
       buttonURLAdd={`/add_unit`}



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
                label="Unit  Name *"
                onChange={(event)=>{setUnitName(event.target.value)}}
                value={unit_name}
                name="unit_name"
                sx={{ gridColumn: "span 4" }}
              />

              
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Unit Description"
                // onBlur={handleBlur}
                onChange={(event)=>{setUnitDescription(event.target.value)}}
                value={unit_description}
                name="unit_description"
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">

              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Update Unit
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditUnit;

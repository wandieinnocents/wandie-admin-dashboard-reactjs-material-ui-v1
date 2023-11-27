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


const EditBranch = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    const [id, setId] = useState(useParams().id);
    // states for data submission
    // branch name
    const [branch_name, setBranchName] = useState('');
  // address
    const [branch_address, setBranchAddress] = useState('');



    const [isSaving, setIsSaving] = useState(false);


  // pick existing data to form as form value
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/branches/${id}`)
    .then(function (response) {
        // handle database fields to set form values
        let branch = response.data.data
        setBranchName(branch.branch_name);
        setBranchAddress(branch.branch_address);
    })
    // trigger sweet alerts on error
    .catch(function (error) {
        Swal.fire({
             icon: 'error',
            title: 'Error picking existing branch data!',
            showConfirmButton: false,
            timer: 1500
        })
    })
      
}, [])

  
    // handle data saving to api
    const updateData = () => {
      
      setIsSaving(true);
      axios.post(`http://127.0.0.1:8000/api/v1/branches/${id}`, {
          // database fields
          branch_name: branch_name,
          branch_address: branch_address,

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
       title="Update Branch" 
      //  view 
       buttonTitle={"All BRANCHES"}
       buttonURL={`/view_branches/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"Add BRANCH"}
       buttonURLAdd={`/add_branch`}



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
                label="Branch  Name *"
                onChange={(event)=>{setBranchName(event.target.value)}}
                value={branch_name}
                name="branch_name"
                sx={{ gridColumn: "span 4" }}
              />

              
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                multiline
                rows={5}
                label="Address"
                // onBlur={handleBlur}
                onChange={(event)=>{setBranchAddress(event.target.value)}}
                value={branch_address}
                name="branch_address"
                sx={{ gridColumn: "span 4" }}
              />
              
            </Box>

            {/* submit button */}
            <Box display="flex" justifyContent="start" mt="30px">

              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Update Branch
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditBranch;

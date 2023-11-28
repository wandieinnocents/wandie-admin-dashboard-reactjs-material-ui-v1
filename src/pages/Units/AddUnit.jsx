import React, {useState} from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderAddData from "../../components/Headers/HeaderAddData";
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import axios from 'axios'


const AddUnit = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

    // states for data submission
    // unit name
    const [unit_name, setUnitName] = useState('');
  // description
    const [unit_description, setUnitDescription] = useState('');

    const [isSaving, setIsSaving] = useState(false);

  
    // handle data saving to api
    const submitData = () => {
      
      setIsSaving(true);
      axios.post('http://127.0.0.1:8000/api/v1/units/create', {
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
              title: 'Unit saved successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          setUnitName('') 
          setUnitDescription('')

          // success response
          console.log("Success submitting Unit data",response.data )
        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          console.log("Error submitting Unit data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box>
      <HeaderAddData title="Add Unit" 
       buttonTitle={"All Units"}
       buttonURL={`/view_units/`}
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
              onClick={submitData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Add Unit
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default AddUnit;

import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HeaderShowSingleData from '../../components/Headers/HeaderShowSingleData';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import axios from 'axios'
// progress bar
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";



export default function ShowUnit() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [unit, setUnit] = useState(null);

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/units/${id}`)
        .then(function (response) {
          setUnit(response.data.data)
          console.log("Single Branch item Data", response.data.data)
        })
        // console log error on failure
        .catch(function (error) {
          console.log(error);
        })
    }, [id])

 


  return (


    <Box m="30px">
      
    <Box>
    <HeaderShowSingleData title="Unit Details"
    // add
       buttonTitleEdit={"EDIT UNIT"}
       buttonURLEdit={`/edit_unit/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD UNIT"}
       buttonURLAdd={`/add_unit/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {unit ? (
    <Box sx={{ width: '100%', paddingLeft:"20px",paddingRight:"20px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      columns={{ xs: 1, sm: 3, md: 12 }}>
        <Grid item xs={3}>
          {/* <Item>1</Item> */}
        </Grid>
        <Grid item xs={6}>
        <Card >
      <CardActionArea>
       
        <CardContent>
        

         
           <Typography gutterBottom variant="h4" component="div">Unit Name</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { unit.unit_name ? (
            <Typography  color="text.secondary">{unit.unit_name }</Typography>
            ) : (<Chip label='No unit Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

          {/* unit description */}
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div">Unit Description</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { unit.unit_description ? (
            <Typography  color="text.secondary">{unit.unit_description }</Typography>
            ) : (<Chip label='No unit Description ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }






        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
          {/* <Item>2</Item> */}
        </Grid>
      
      </Grid>
    </Box>



     ) : ( <> 
          <center>
          <Typography style={{ marginTop:'200px', fontSize:'20px' }}>Data is Empty / Loading...</Typography>
          <CircularProgress color="success" style={{ marginTop:'30px', fontSize:'20px' }} />
          </center>

          </> )}
    
    </Box>
  </Box>

   
  );
}

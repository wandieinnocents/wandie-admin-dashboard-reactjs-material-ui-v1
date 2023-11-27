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



export default function ShowBranch() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [branch, setBranch] = useState(null);

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/branches/${id}`)
        .then(function (response) {
          setBranch(response.data.data)
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
    <HeaderShowSingleData title="Branch Details"
    // add
       buttonTitleEdit={"EDIT BRANCH"}
       buttonURLEdit={`/edit_branch/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD BRANCH"}
       buttonURLAdd={`/add_branch/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {branch ? (
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
        

            {/* branch code */}
            <Typography gutterBottom variant="h4" component="div">
              Branch Code
            </Typography>
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

            { branch.branch_code ? (
            <Typography  color="text.secondary">{branch.branch_code }</Typography>
            ) : (<Chip label='No branch Code Assigned ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }
          
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div">Branch Name</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { branch.branch_name ? (
            <Typography  color="text.secondary">{branch.branch_name }</Typography>
            ) : (<Chip label='No branch Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

          {/* branch description */}
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div">Branch Address</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { branch.branch_address ? (
            <Typography  color="text.secondary">{branch.branch_address }</Typography>
            ) : (<Chip label='No Branch Description ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
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

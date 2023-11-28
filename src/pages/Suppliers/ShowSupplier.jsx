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



export default function ShowSupplier() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [supplier, setSupplier] = useState(null);

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/suppliers/${id}`)
        .then(function (response) {
          setSupplier(response.data.data)
          console.log("Single item Data", response.data.data)
        })
        // console log error on failure
        .catch(function (error) {
          console.log(error);
        })
    }, [id])

 


  return (


    <Box m="30px">
      
    <Box>
    <HeaderShowSingleData title="Supplier Details"
    // add
       buttonTitleEdit={"EDIT SUPPLIER"}
       buttonURLEdit={`/edit_supplier/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD SUPPLIER"}
       buttonURLAdd={`/add_supplier/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {supplier ? (
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
        <Typography gutterBottom variant="h4" component="div">
           Photo
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          { supplier.supplier_image ? (<img src={supplier.supplier_image} alt="" style={{resizeMode: 'cover',width: '100%',}}/>) : (
              <img src={DefaultImage} alt="Default Placeholder" style={{resizeMode: 'cover',width: '100%',}} />
            )}

            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />
            

            {/* supplier code */}
            <Typography gutterBottom variant="h4" component="div">
              supplier Code
            </Typography>
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

            { supplier.supplier_code ? (
            <Typography  color="text.secondary">{supplier.supplier_code }</Typography>
            ) : (<Chip label='No supplier Code Assigned ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }
          
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div">supplier Name</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { supplier.supplier_name ? (
            <Typography  color="text.secondary">{supplier.supplier_name }</Typography>
            ) : (<Chip label='No supplier Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

          {/* supplier date */}
          <Typography gutterBottom variant="h4" component="div">Created Date</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          { supplier.supplier_register_date ? (
            <Typography  color="text.secondary">{supplier.supplier_register_date }</Typography>
            ) : (<Chip label='No supplier Registered Date ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }
          
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />


          <Typography gutterBottom variant="h4" component="div"> supplier Status</Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { supplier.supplier_status ? (
            <Chip label={supplier.supplier_status || 'No Status Chosen'} style={{ backgroundColor:'green', color:'#FFFFFF' }} />
            ) : (<Chip label={supplier.supplier_status || 'No Status Chosen'} style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

        
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div"> supplier Description </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { supplier.supplier_description ? (
            <Typography  color="text.secondary">{supplier.supplier_description }</Typography>
            ) : (<Chip label='No supplier Description ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
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

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



export default function ShowBrand() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [brand, setBrand] = useState(null);


    // const [productCategory, setProductCategory] = useState({
    //             parent_product_category_id:'', 
    //             product_category_name:'',
    //             product_category_description:'',
    //             product_category_status:'',
    //             product_category_image:'',
    //           });
 

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/brands/${id}`)
        .then(function (response) {
          setBrand(response.data.data)
          console.log("Single item Data", response.data.data)
        })
        // console log error on failure
        .catch(function (error) {
          console.log(error);
        })
    }, [id])

    // useEffect(() => {
    //   const fetchProductDetails = async () => {
    //     try {
    //       const response = await fetch(`http://127.0.0.1:8000/api/v1/product_categories/${id}`);
    //       const data = await response.data.data;
    //       setProductCategory(data);
    //       console.log("Single item Data", response.data.data)

    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchProductDetails();
    // }, [id]);

  



  return (


    <Box m="30px">
      
    <Box>
    <HeaderShowSingleData title="Brand Details"
    // add
       buttonTitleEdit={"EDIT BRAND"}
       buttonURLEdit={`/edit_brand/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD BRAND"}
       buttonURLAdd={`/add_brand/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {brand ? (
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

          { brand.brand_image ? (<img src={brand.brand_image} alt="" style={{resizeMode: 'cover',width: '100%',}}/>) : (
              <img src={DefaultImage} alt="Default Placeholder" style={{resizeMode: 'cover',width: '100%',}} />
            )}

            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />
            

            {/* brand code */}
            <Typography gutterBottom variant="h4" component="div">
              Brand Code
            </Typography>
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

            { brand.brand_code ? (
            <Typography  color="text.secondary">{brand.brand_code }</Typography>
            ) : (<Chip label='No Brand Code Assigned ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }
          
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div">Brand Name</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { brand.brand_status ? (
            <Typography  color="text.secondary">{brand.brand_name }</Typography>
            ) : (<Chip label='No Brand Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

          {/* brand date */}
          <Typography gutterBottom variant="h4" component="div">Created Date</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          { brand.brand_status ? (
            <Typography  color="text.secondary">{brand.brand_register_date }</Typography>
            ) : (<Chip label='No Brand Registered Date ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }
          
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />


          <Typography gutterBottom variant="h4" component="div"> Brand Status</Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { brand.brand_status ? (
            <Chip label={brand.brand_status || 'No Status Chosen'} style={{ backgroundColor:'green', color:'#FFFFFF' }} />
            ) : (<Chip label={brand.brand_status || 'No Status Chosen'} style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

        
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div"> Brand Description </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { brand.brand_description ? (
            <Typography  color="text.secondary">{brand.brand_description }</Typography>
            ) : (<Chip label='No Brand Description ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
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

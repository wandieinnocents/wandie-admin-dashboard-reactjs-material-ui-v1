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



export default function ShowProductCategory() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [product_category, setProductCategory] = useState(null);

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
        .then(function (response) {
          setProductCategory(response.data.data)
          console.log("Single Product Category Item Data", response.data.data)
        })
        // console log error on failure
        .catch(function (error) {
          console.log(error);
        })
    }, [id])

 


  return (


    <Box m="30px">
      
    <Box>
    <HeaderShowSingleData title="Product Category Details"
    // add
       buttonTitleEdit={"EDIT PRODUCT CATEGORY"}
       buttonURLEdit={`/edit_product_category/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD PRODUCT CATEGORY"}
       buttonURLAdd={`/add_product_category/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {product_category ? (
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

          { product_category.product_category_image ? (<img src={product_category.product_category_image} alt="" style={{resizeMode: 'cover',width: '100%',}}/>) : (
              <img src={DefaultImage} alt="Default Placeholder" style={{resizeMode: 'cover',width: '100%',}} />
            )}

            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />
            

            {/* product_category code */}
            <Typography gutterBottom variant="h4" component="div">
             Product Category Code
            </Typography>
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

            { product_category.product_category_code ? (
            <Typography  color="text.secondary">{product_category.product_category_code }</Typography>
            ) : (<Chip label='No product_category Code Assigned ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

            <Typography gutterBottom variant="h4" component="div"> Parent  Category Name</Typography>

            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

            { product_category.product_category_name ? (
            <Typography  color="text.secondary">{product_category.parent_product_category.parent_product_category_name }</Typography>
            ) : (<Chip label='No product_category Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
            }
          
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

           <Typography gutterBottom variant="h4" component="div"> Product Category Name</Typography>

          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { product_category.product_category_name ? (
            <Typography  color="text.secondary">{product_category.product_category_name }</Typography>
            ) : (<Chip label='No product_category Name ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />

         
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />


          <Typography gutterBottom variant="h4" component="div"> Product Category Status</Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { product_category.product_category_status ? (
            <Chip label={product_category.product_category_status || 'No Status Chosen'} style={{ backgroundColor:'green', color:'#FFFFFF' }} />
            ) : (<Chip label={product_category.product_category_status || 'No Status Chosen'} style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
          }

        
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div"> Product Category Description </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          { product_category.product_category_description ? (
            <Typography  color="text.secondary">{product_category.product_category_description }</Typography>
            ) : (<Chip label='No  Description ' style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
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

import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Header from '../../components/Header';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import axios from 'axios'
// progress bar
import CircularProgress from '@mui/material/CircularProgress';



export default function ShowProductCategory() {
    // states
    // const [id, setId] = useState(useParams().id)
    const { id } = useParams();
    const [productCategory, setProductCategory] = useState(null);


    // const [productCategory, setProductCategory] = useState({
    //             parent_product_category_id:'', 
    //             product_category_name:'',
    //             product_category_description:'',
    //             product_category_status:'',
    //             product_category_image:'',
    //           });
 

    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
        .then(function (response) {
          setProductCategory(response.data.data)
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
    <Header title="Category Details" 
       buttonTitle={"ADD PRODUCT CATEGORY"}
       buttonURL={`/add_product_category/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

    {productCategory ? (
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

          <img src={productCategory.product_category_image} alt="Image" 
             style={{
              resizeMode: 'cover',
              // height: 200,
              width: '100%',
            }} 


            />
          
            {/* divider */}
            <Divider style={{ marginBottom:"10px",marginTop:"10px" }}  />


          <Typography gutterBottom variant="h4" component="div">
            Parent Category Name
          </Typography>
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
          {/* nested category fetch */}
           {productCategory.parent_product_category.parent_product_category_name}
          </Typography>
          
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div">
            Category Name
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {productCategory.product_category_name}
          </Typography>

          <Typography gutterBottom variant="h4" component="div">
            Category Status
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {productCategory.product_category_status}
          </Typography>

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div">
            Category Description
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {productCategory.product_category_description}
          </Typography>

         




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

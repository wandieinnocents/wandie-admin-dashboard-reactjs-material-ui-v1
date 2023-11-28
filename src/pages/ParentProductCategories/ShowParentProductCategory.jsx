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
import Chip from '@mui/material/Chip';



export default function ShowParentProductCategory() {
    // states
    const [id, setId] = useState(useParams().id)
    const [parentProductCategory, setparentProductCategory] =
     useState(
      {
        parent_product_category_code:'', 
        parent_product_category_name:'',
        parent_product_category_description:'',
        parent_product_category_status:'',
       }
      )
 
    // retrieve single data by id
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/parent_product_categories/${id}`)
        .then(function (response) {
          setparentProductCategory(response.data.data)
          console.log(response.data.data)
        })
        // console log error on failure
        .catch(function (error) {
          console.log(error);
        })
    }, [])


  return (


    <Box m="30px">
      
    <Box>
    <HeaderShowSingleData title="Parent Category Details"
    // add
       buttonTitleEdit={"EDIT PARENT CATEGORY"}
       buttonURLEdit={`/edit_parent_product_category/${id}`}

      //  EDIT
      buttonTitleAdd={"ADD PARENT CATEGORY"}
       buttonURLAdd={`/add_parent_product_category/`}
        />
    <Divider style={{ marginBottom:"30px" }} />

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
            Parent Category Code
          </Typography>
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {parentProductCategory.parent_product_category_code}
          </Typography>
          
           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div">
          Parent Category Name
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {parentProductCategory.parent_product_category_name}
          </Typography>

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />

          <Typography gutterBottom variant="h4" component="div">
          Parent Category Status
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           
           <Chip label={parentProductCategory.parent_product_category_status} style={{ backgroundColor:'green', color:'#FFFFFF' }} />
           
          </Typography>

           {/* divider */}
           <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />


          <Typography gutterBottom variant="h4" component="div">
          Parent Category Description
          </Typography>
         
          {/* divider */}
          <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
          
          <Typography  color="text.secondary">
           {parentProductCategory.parent_product_category_description}
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
    
    </Box>
  </Box>

   
  );
}

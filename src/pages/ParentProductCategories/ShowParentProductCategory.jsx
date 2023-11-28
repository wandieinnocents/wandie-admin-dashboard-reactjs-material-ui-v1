import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HeaderShowSingleData from "../../components/Headers/HeaderShowSingleData";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
// progress bar
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";

export default function ShowParentProductCategory() {
  // states
  // const [id, setId] = useState(useParams().id)
  const { id } = useParams();
  const [parent_product_category, setParentProductCategory] = useState(null);

  // retrieve single data by id
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/parent_product_categories/${id}`)
      .then(function (response) {
        setParentProductCategory(response.data.data);
        console.log("Single Parent Category Data", response.data.data);
      })
      // console log error on failure
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);


  

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

        <Divider style={{ marginBottom: "30px" }} />

        {parent_product_category ? (
          <Box
            sx={{ width: "100%", paddingLeft: "20px", paddingRight: "20px" }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 1, sm: 3, md: 12 }}
            >
              <Grid item xs={3}>
                {/* <Item>1</Item> */}
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                      Parent Category Name
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {parent_product_category.parent_product_category_name ? (
                        <Typography color="text.secondary">
                          {parent_product_category.parent_product_category_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No parent_product_category Name "
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}



                         {/* divider */}
                        <Divider style={{ marginBottom:"10px",marginTop:"10px" }} />
                        
                        {/* statis */}
                        { parent_product_category.parent_product_category_status ? (
                          <Chip label={parent_product_category.parent_product_category_status || 'No Status Chosen'} style={{ backgroundColor:'green', color:'#FFFFFF' }} />
                          ) : (<Chip label={parent_product_category.parent_product_category_status || 'No Status Chosen'} style={{ backgroundColor:'red', color:'#FFFFFF' }} /> )
                        }

                      {/* parent_product_category description */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      

                      <Typography gutterBottom variant="h4" component="div">
                        Parent Category Description
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {parent_product_category.parent_product_category_description ? (
                        <Typography color="text.secondary">
                          {parent_product_category.parent_product_category_description}
                        </Typography>
                      ) : (
                        <Chip
                          label="No  Description "
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}



                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={3}>
                {/* <Item>2</Item> */}
              </Grid>
            </Grid>
          </Box>
        ) : (
          <>
            <center>
              <Typography style={{ marginTop: "200px", fontSize: "20px" }}>
                Data is Empty / Loading...
              </Typography>
              <CircularProgress
                color="success"
                style={{ marginTop: "30px", fontSize: "20px" }}
              />
            </center>
          </>
        )}
      </Box>
    </Box>
  );
}

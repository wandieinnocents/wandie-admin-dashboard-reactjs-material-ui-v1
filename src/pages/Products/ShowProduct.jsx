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
// icons
import SendIcon from "@mui/icons-material/Send";

// progress bar
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";

export default function ShowProduct() {
  // states
  // const [id, setId] = useState(useParams().id)
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // retrieve single data by id
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/products/${id}`)
      .then(function (response) {
        setProduct(response.data.data);
        console.log("Single Product item Data", response.data.data);
      })
      // console log error on failure
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <Box m="40px">
      <Box>
        <HeaderShowSingleData
          title="Product Details"
          // add
          buttonTitleEdit={"EDIT PRODUCT"}
          buttonURLEdit={`/edit_product/${id}`}
          //  EDIT
          buttonTitleAdd={"ADD PRODUCT"}
          buttonURLAdd={`/add_product/`}
        />
        <Divider style={{ marginBottom: "30px" }} />

        {/* NEW USER INTERFACE */}

        {/* Check if data exists, else display data is empty / loading  */}

        {product ? (
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              columns={{ xs: 1, sm: 3, md: 12 }}
              style={{ marginBottom: "50px" }}
            >
              {/* left column */}
              <Grid item xs={4}>

                {/* TOP SECTION LEFT */}

                <Card>
                  <CardActionArea>
                    <CardContent
                      style={{ backgroundColor: "#0faa50", color: "#FFFFFF" }}
                    >
                      {/* divider */}
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {product.product_image ? (
                          <img
                            src={product.product_image}
                            alt=""
                            style={{
                              resizeMode: "cover",
                              cursor: "pointer",
                              borderRadius: "50%",
                              border: "2px solid #dee1f7",
                              padding: "10px",
                            }}
                            width="100px"
                            height="100px"
                            // src={`https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png`}
                          />
                        ) : (
                          <img
                            width="100px"
                            height="100px"
                            src={DefaultImage}
                            alt="Default Placeholder"
                            style={{
                              resizeMode: "cover",
                              cursor: "pointer",
                              borderRadius: "50%",
                              border: "2px solid #dee1f7",
                              padding: "10px",
                            }}
                          />
                        )}
                      </Box>

                      {/* product name */}
                      {product.product_name ? (
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          {product.product_name}
                        </Typography>
                      ) : (
                        <center>
                        <Chip
                          label="No product Name "
                          style={{ backgroundColor: "red", color: "#FFFFFF", marginTop: "10px", marginBottom:'10px' }}
                        />
                        </center>
                      )}

                      {/* product email */}
                      {product.product_code ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          {product.product_code}
                        </Typography>
                      ) : (
                        <center>
                          <Chip
                            label="No product Code "
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                              
                            }}
                          />
                        </center>
                      )}

         

                    </CardContent>
                  </CardActionArea>
                </Card>





                {/* LOWER SECTION LEFT */}
                <Card style={{ marginTop:'30px'  }}>
                  <CardActionArea>
                    <CardContent
                      style={{ backgroundColor: "#2587da", color: "#FFFFFF", }}
                    >
                      {/* divider */}
                     
                      {/* <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      /> */}

                      {/* product code */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Product Branch
                        </Typography>

                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {product.branch.branch_name ? (
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            {product.branch.branch_name}
                          </Typography>
                        ) : (
                          <Chip
                            label="No  Branch "
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        )}
                      </center>

                      {/* divider */}
                      <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      />

                      {/* registered date */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Registered Date
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {product.product_created_date ? (
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            {product.product_created_date}
                          </Typography>
                        ) : (
                          <Chip
                            label="No Registered Date "
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        )}
                      </center>

                      {/* divider */}
                      <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      />
                      {/* website */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Expiry Date
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {product.product_expiry_date ? (
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            {product.product_expiry_date}
                          </Typography>
                        ) : (
                          <Chip
                            label="No Expiry Date"
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        )}
                      </center>

                      {/* divider */}
                      <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      />
                      {/* status */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Product Stock
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {product.product_stock_quantity ? (
                          <Chip
                            label={product.product_stock_quantity}
                            style={{
                              backgroundColor: "#0faa50",
                              color: "#FFFFFF",
                            }}
                          />
                        ) : (
                          <Chip
                            label="No Stock"
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        )}
                      </center>

                        {/* divider */}
                        <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      />
                      {/* status */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Product Status
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {product.product_status ? (
                          <Chip
                            label={product.product_status}
                            style={{
                              backgroundColor: "#0faa50",
                              color: "#FFFFFF",
                            }}
                          />
                        ) : (
                          <Chip
                            label="No Status"
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        )}
                      </center>



                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              {/* Right column */}
              <Grid item xs={8}>
                <Card>
                  <CardActionArea>
                    <CardContent>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* parent category */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Product Parent Category
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.parent_product_category.parent_product_category_name ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.parent_product_category.parent_product_category_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Parent Category "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* Product Category */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Product Category
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.product_category.product_category_name ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.product_category.product_category_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Product Category "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* product brand */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Brand
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.brand.brand_name ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.brand.brand_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Brand "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* Supplier */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Supplier
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.supplier.supplier_name ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.supplier.supplier_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* Unit */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Product Unit
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.unit.unit_name ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.unit.unit_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Unit "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}


                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* Cost price */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Product Cost Price
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.product_cost_price ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.product_cost_price}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Cost Price "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}


                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* Unit */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Product Selling Price
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {product.product_selling_price ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {product.product_selling_price}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Selling Price "
                          style={{
                            backgroundColor: "red",
                            color: "#FFFFFF",
                          }}
                        />
                      )}




                    </CardContent>
                  </CardActionArea>
                </Card>
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

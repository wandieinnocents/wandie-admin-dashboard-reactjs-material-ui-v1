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

export default function ShowSupplier() {
  // states
  // const [id, setId] = useState(useParams().id)
  const { id } = useParams();
  const [supplier, setSupplier] = useState(null);

  // retrieve single data by id
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/suppliers/${id}`)
      .then(function (response) {
        setSupplier(response.data.data);
        console.log("Single item Data", response.data.data);
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
          title="Supplier Details"
          // add
          buttonTitleEdit={"EDIT SUPPLIER"}
          buttonURLEdit={`/edit_supplier/${id}`}
          //  EDIT
          buttonTitleAdd={"ADD SUPPLIER"}
          buttonURLAdd={`/add_supplier/`}
        />
        <Divider style={{ marginBottom: "30px" }} />

        {/* NEW USER INTERFACE */}

        {/* Check if data exists, else display data is empty / loading  */}

        {supplier ? (
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
                        {supplier.supplier_image ? (
                          <img
                            src={supplier.supplier_image}
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

                      {/* supplier name */}
                      {supplier.supplier_name ? (
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
                          {supplier.supplier_name}
                        </Typography>
                      ) : (
                        <center>
                        <Chip
                          label="No Supplier Name "
                          style={{ backgroundColor: "red", color: "#FFFFFF", marginTop: "10px", marginBottom:'10px' }}
                        />
                        </center>
                      )}

                      {/* supplier email */}
                      {supplier.supplier_email ? (
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
                          {supplier.supplier_email}
                        </Typography>
                      ) : (
                        <center>
                          <Chip
                            label="No Supplier Email "
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                            }}
                          />
                        </center>
                      )}

                      {/* supplier phone */}
                      {supplier.supplier_phone ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                            marginBottom: "20px",
                          }}
                        >
                          {supplier.supplier_phone}
                        </Typography>
                      ) : (
                        <center>
                          <Chip
                            label="No Supplier Phone "
                            style={{
                              backgroundColor: "red",
                              color: "#FFFFFF",
                              marginTop:'10px'
                            }}
                          />
                        </center>
                      )}

                      {/* <Divider
                        style={{
                          marginBottom: "10px",
                          marginTop: "10px",
                          backgroundColor: "#d3d3d3",
                        }}
                      /> */}

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

                      {/* supplier code */}
                      <center>
                        <Typography
                          style={{ fontWeight: 600 }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          Supplier Code
                        </Typography>

                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {supplier.supplier_code ? (
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
                            {supplier.supplier_code}
                          </Typography>
                        ) : (
                          <Chip
                            label="No Supplier Code "
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

                        {supplier.supplier_register_date ? (
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
                            {supplier.supplier_register_date}
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
                          Website
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {supplier.supplier_website_url ? (
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
                            {supplier.supplier_website_url}
                          </Typography>
                        ) : (
                          <Chip
                            label="No Website"
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
                          Supplier Status
                        </Typography>
                        {/* divider */}
                        <Divider
                          style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "#d3d3d3",
                          }}
                        />

                        {supplier.supplier_status ? (
                          <Chip
                            label={supplier.supplier_status}
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

                      {/* supplier address */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Supplier Address
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_address ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {supplier.supplier_address}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier Address "
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

                      {/* city */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Supplier City
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_city ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {supplier.supplier_city}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier City "
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

                      {/* supplier country */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Supplier Country
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_country ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {supplier.supplier_country}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier Country "
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

                      {/* supplier country */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Supplier Organization
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_organization ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {supplier.supplier_organization}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier Organization "
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

                      {/* supplier country */}
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        About the Supplier
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_description ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          {supplier.supplier_description}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Supplier Description "
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

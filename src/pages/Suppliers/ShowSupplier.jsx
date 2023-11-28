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
              <Card>
                <CardActionArea>
                  <CardContent>
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
                          style={{ resizeMode: "cover",cursor: "pointer", borderRadius: "50%", border: '2px solid #dee1f7',  padding: '10px' }}
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
                          style={{ resizeMode: "cover",cursor: "pointer", borderRadius: "50%", border: '2px solid #dee1f7',  padding: '10px' }}
                        />
                      )}


                     
                    </Box>

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
                      Wenareeba Inncoent
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      innocent@gmail.com
                    </Typography>

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
                      0706382817
                    </Typography>

                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />

                    {/* supplier code */}
                    <Typography gutterBottom variant="h5" component="div">
                      Supplier Code
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">CODE</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />

                    {/* date */}
                    <Typography gutterBottom variant="h5" component="div">
                      Registerd Date
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">CODE</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    {/* website */}
                    <Typography gutterBottom variant="h5" component="div">
                      Website
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">website url</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />

                    <Typography gutterBottom variant="h5" component="div">
                      Supplier Status
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />

                    <Chip
                      label="No Status Chosen"
                      style={{ backgroundColor: "green", color: "#FFFFFF" }}
                    />
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

                    {/* address */}
                    <Typography gutterBottom variant="h4" component="div">
                      Address
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">address</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    {/* city */}
                    <Typography gutterBottom variant="h4" component="div">
                      City
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">City</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    {/* Country */}
                    <Typography gutterBottom variant="h4" component="div">
                      Country
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">Country</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    {/* Organization */}
                    <Typography gutterBottom variant="h4" component="div">
                      Organization
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">Organization</Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    {/* Description */}
                    <Typography gutterBottom variant="h4" component="div">
                      Description
                    </Typography>

                    {/* divider */}
                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                    <Typography color="text.secondary">Description</Typography>
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

        {/* OLD USER INTERFACE */}

        {supplier ? (
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
                        Supplier Photo
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_image ? (
                        <img
                          src={supplier.supplier_image}
                          alt=""
                          style={{ resizeMode: "cover", width: "100%" }}
                        />
                      ) : (
                        <img
                          src={DefaultImage}
                          alt="Default Placeholder"
                          style={{ resizeMode: "cover", width: "100%" }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* supplier code */}
                      <Typography gutterBottom variant="h4" component="div">
                        Supplier Code
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_code ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_code}
                        </Typography>
                      ) : (
                        <Chip
                          label="No supplier Code Assigned "
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      <Typography gutterBottom variant="h4" component="div">
                        Supplier Name
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_name ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_name}
                        </Typography>
                      ) : (
                        <Chip
                          label="No supplier Name "
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {/* supplier date */}
                      <Typography gutterBottom variant="h4" component="div">
                        Registered Date
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_register_date ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_register_date}
                        </Typography>
                      ) : (
                        <Chip
                          label="No Registered Date "
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Status
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_status ? (
                        <Chip
                          label={supplier.supplier_status || "No Status Chosen"}
                          style={{ backgroundColor: "green", color: "#FFFFFF" }}
                        />
                      ) : (
                        <Chip
                          label={supplier.supplier_status || "No Status Chosen"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* email */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Email
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_email ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_email}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* phone */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Phone
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_phone ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_phone}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* Address */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Address
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_address ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_address}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* City */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier City
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_city ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_city}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* Country */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Country
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_country ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_country}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* Organization */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Organization
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_organization ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_organization}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* Website  */}
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        Supplier Website{" "}
                      </Typography>
                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_website_url ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_website_url}
                        </Typography>
                      ) : (
                        <Chip
                          label={"No Supplier Email"}
                          style={{ backgroundColor: "red", color: "#FFFFFF" }}
                        />
                      )}

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      <Typography gutterBottom variant="h4" component="div">
                        {" "}
                        supplier Description{" "}
                      </Typography>

                      {/* divider */}
                      <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      />

                      {supplier.supplier_description ? (
                        <Typography color="text.secondary">
                          {supplier.supplier_description}
                        </Typography>
                      ) : (
                        <Chip
                          label="No supplier Description "
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

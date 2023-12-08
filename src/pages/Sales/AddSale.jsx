import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Button,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";

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
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

// BOTTOM NAV
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// progress bar
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Swal from "sweetalert2";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";

// const Demo = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddSale() {
  // states
  // const [id, setId] = useState(useParams().id)
  // const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  // search
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // bottom nav
  const [bottomNavValue, setBottomNavValue] = React.useState("recents");

  // del

  // retrieve single data by id

  const fetchProducts = async () => {
    // setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/v1/products`)
      .then(function (response) {
        setProducts(response.data.data);
        console.log("List Products data", response.data.data);
        // setIsLoading(false);
      })
      // console log error on failure
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console log when app loads
  useEffect(() => {
    console.log(products);
  }, [products]);

  const addProductToCart = async (product) => {
    // check if the adding product exist
    let findProductInCart = await cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount:
              cartItem.product_selling_price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
      // toast notification after adding to cart
      // toast(`Added ${newItem.product_name} to cart`)
      toast(`👋 Added ${newItem.product_name} to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.product_selling_price,
      };
      setCart([...cart, addingProduct]);
      // toast notification after adding to cart
      // toast(`Added ${product.product_name} to cart`)
      toast(`👋 Added ${product.product_name} to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const removeProduct = async (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  // const componentRef = useRef();

  // const handleReactToPrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  // const handlePrint = () => {
  //   handleReactToPrint();
  // }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((icart) => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  // search functionality
  useEffect(() => {
    // Filter products based on searchQuery
    const filtered = products.filter(
      (product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      // product.product_sell.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // toastify
  const notify = () => toast("Wow so easy!");


  return (
    <Box m="40px">
      <Box>
        <HeaderShowSingleData
          title="POST"
          // add
          buttonTitleEdit={"POS"}
          buttonURLEdit={`/edit_product/`}
          //  EDIT
          buttonTitleAdd={"ADD product"}
          buttonURLAdd={`/add_product/`}
        />
        <Divider style={{ marginBottom: "30px" }} />

        {/* NEW USER INTERFACE */}

        {/* Check if data exists, else display data is empty / loading  */}

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 1, sm: 3, md: 12 }}
            // style={{ marginBottom: "50px" }}
          >
            {/* left column */}
            <Grid
              item
              xs={5}
              style={{
                marginBottom: "50px",
                height: "700px",
                overflow: "scroll",
                padding: "30px",
                backgroundColor: "#e9f3fe",
              }}
            >
              {/* search input */}

              <TextField
                label="Search Products..."
                fullWidth
                value={searchQuery}
                onChange={handleSearch}
                style={{ backgroundColor: "#ffffff" }}
                // variant="filled"
              />

              {/* START OF LIST */}

              <List dense={dense}>
                {/* List item */}
                {filteredProducts?.map((product, key) => (
                  <>
                    <ListItem
                      secondaryAction={
                        <Button
                          // disabled={isSaving}
                          onClick={() => addProductToCart(product)}
                          type="submit"
                          size="large"
                          endIcon={<AddCircleIcon />}
                          style={{
                            backgroundColor: "#2587da",
                            color: "#ffffff",
                          }}
                          variant="contained"
                        >
                          Add
                        </Button>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <ShoppingCartCheckoutIcon />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={product.product_name}
                        secondary={secondary ? "Secondary text" : null}
                      />

                      <ListItemText
                        primary={product.product_selling_price}
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>

                    <Divider
                      style={{ marginBottom: "10px", marginTop: "10px" }}
                    />
                  </>
                ))}
                {/* End List item */}
              </List>

              {/* END OF LIST */}
            </Grid>

            {/* right column */}
            <Grid
              item
              xs={7}
              style={{
                marginBottom: "50px",
                height: "700px",
                overflow: "scroll",
                padding: "30px",
                backgroundColor: "#e9f3fe",
              }}
            >
              {/* TOP SECTION LEFT */}

              <Paper
                elevation={2}
                style={{ backgroundColor: "#0faa50", padding: "1rem 0px" }}
              >
                <MuiTable>
                  <TableHead
                    style={{ backgroundColor: "#0faa50", color: "#ffffff" }}
                  >
                    <TableRow>
                      <TableCell style={{ color: "#ffffff" }}>#</TableCell>
                      <TableCell style={{ color: "#ffffff" }}>Name</TableCell>
                      <TableCell style={{ color: "#ffffff" }}>Price</TableCell>
                      <TableCell style={{ color: "#ffffff" }}>Qty</TableCell>
                      <TableCell style={{ color: "#ffffff" }}>Total</TableCell>
                      <TableCell style={{ color: "#ffffff" }}>Action</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {/* { cart ? cart.map((cartProduct, key) => <tr key={key}> */}
                    {cart.map((cartProduct, index) => (
                      <TableRow
                        key={index}
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <TableCell>{"#" + " " + cartProduct.id}</TableCell>
                        <TableCell>{cartProduct.product_name}</TableCell>
                        <TableCell>
                          {cartProduct.product_selling_price}
                        </TableCell>
                        <TableCell>{cartProduct.quantity}</TableCell>
                        <TableCell>{cartProduct.totalAmount}</TableCell>
                        <TableCell>
                          <DeleteOutlinedIcon
                            style={{ color: "red" }}
                            onClick={() => removeProduct(cartProduct)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </MuiTable>
              </Paper>

              {/* Summary data */}

              {/* style={{ backgroundColor: "#0faa50", color: "#FFFFFF" }} */}
              <List
                dense={dense}
                style={{
                  marginTop: "20px",
                  borderRadius: "40px",
                  backgroundColor: "#0faa50",
                }}
              >
                {/* List item */}

                <>
                  <ListItem
                    secondaryAction={
                      <Button
                        // disabled={isSaving}
                        // onClick={() => addProductToCart(product)}
                        type="submit"
                        size="large"
                        endIcon={<TaskAltIcon />}
                        style={{
                          backgroundColor: "#2587da",
                          borderRadius: "40px",
                          color: "#ffffff",
                        }}
                        variant="contained"
                      >
                        {"UGX" + " " + totalAmount}
                      </Button>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar style={{ backgroundColor: "#ffffff" }}>
                        <ShoppingCartCheckoutIcon
                          style={{ color: "#2587da" }}
                        />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary="GRAND TOTAL"
                      style={{ color: "#ffffff" }}
                      // secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>

                  {/* <Divider
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      /> */}
                </>

                {/* End List item */}
              </List>

              {/* End of summary */}
            </Grid>
            {/* bottom navigation */}
            <BottomNavigation
              style={{
                marginTop: "20px",
                paddingRight: "300px",
                paddingBottom: "20px",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              sx={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                height: "90px",
              }}
              // value={bottomNavValue}
              // onChange={handleChangeBottomNav}
            >
              {/* <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
              /> */}
              {/* button */}
              <Button
                // disabled={isSaving}
                // onClick={() => addProductToCart(product)}
                // 
                type="submit"
                size="large"
                endIcon={<AddCircleIcon />}
                style={{ backgroundColor: "#2587da", color: "#ffffff" }}
                variant="contained"
              >
                Add Supplier
              </Button>

              {/* button */}
              <Button
                // disabled={isSaving}
                // onClick={() => addProductToCart(product)}
                type="submit"
                size="large"
                endIcon={<AddCircleIcon />}
                style={{
                  backgroundColor: "#2587da",
                  color: "#ffffff",
                  marginLeft: "20px",
                }}
                variant="contained"
              >
                GRAND TOTAL - {"UGX" + " " + totalAmount}
              </Button>

              {/* button */}
              <Button
                // disabled={isSaving}
                // onClick={() => addProductToCart(product)}
                type="submit"
                size="large"
                endIcon={<AddCircleIcon />}
                style={{
                  backgroundColor: "#2587da",
                  color: "#ffffff",
                  marginLeft: "20px",
                }}
                variant="contained"
              >
                Add Supplier
              </Button>
            </BottomNavigation>
            {/* end  of bottom navigation */}
          </Grid>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderEdit from "../../components/Headers/HeaderEdit";

// icons
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Swal from 'sweetalert2'
import axios from 'axios'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

// default image if no photo in db
import DefaultImage from "../../images/no_photo.jpeg";


// stack 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const EditProduct = () => {

  const isNonMobile = useMediaQuery("(min-width:600px)");

  
    // states for data submission
    const [id, setId] = useState(useParams().id);

    // "supplier_id"
    const [supplier_id, setSupplierIdData] = useState([]);
    const [supplier_id_value, setSupplierIdValue] = useState(null);

    // "branch_id"
    const [branch_id, setBranchIdData] = useState([]);
    const [branch_id_value, setBranchIdValue] = useState(null);

    // "brand_id" 
    const [brand_id, setProductBrandIdData] = useState([]);
    const [brand_id_value, setProductBrandIdValue] = useState(null);

    // "parent_product_category_id" 
    const [parent_product_category_id, setParentProductCategoryIdData] = useState([]);
    const [parent_product_category_id_value, setParentProductCategoryIdValue] = useState(null);

    // "product_category_id" 
    const [product_category_id, setProductCategoryIdData] = useState([]);
    const [product_category_id_value, setProductCategoryIdValue] = useState(null);

    // "unit_id" 
    const [unit_id, setUnitIdData] = useState([]);

    const [unit_id_value, setUnitIdValue] = useState(null);

    // product_created_date 
    const [product_created_date, setProductCreatedDate] = useState('');

    // product_expiry_date
    const [product_expiry_date, setProductExpiryDate] = useState('');

    // product_name
    const [product_name, setProductName] = useState('');

    // product_stock_quantity
    const [product_stock_quantity, setProductStockQuantity] = useState('');

    // product_cost_price
    const [product_cost_price, setProductCostPrice] = useState('');

    // product_selling_price
    const [product_selling_price, setProductSellingPrice] = useState('');

    // "product_status" 
    const [product_status, setProductStatus] = useState('');

    // product_description
    const [product_description, setProductDescription] = useState('');

    // product_image
    const [product_image, setProductImage] = useState(null);

    const [isSaving, setIsSaving] = useState(false);

    // handle drop down change
    const handleChangeProductStatus = (event) => {
      setProductStatus(event.target.value);
    };
    
    // brand image change
      const handleFileChange = (event) => {
        setProductImage(event.target.files[0]);
    };

    // handle date input
  const handleProductRegisterDateChange = (event) => {
    setProductCreatedDate(event.target.value);
  };

      // handle date input
  const handleProductExpiryDateChange = (event) => {
    setProductExpiryDate(event.target.value);
  };



  // handle drop down change parent product category id
  const handleChangeParentProductCategoryId = (event) => {
    setParentProductCategoryIdValue(event.target.value);
  };


  // handle drop down change  product category id
  const handleChangeProductCategoryId = (event) => {
    setProductCategoryIdValue(event.target.value);
  };

  // handle drop down change brand id
  const handleChangeProductBrandId = (event) => {
  setProductBrandIdValue(event.target.value);
  };

  // handle drop down change supplier id
  const handleChangeSupplierId = (event) => {
  setSupplierIdValue(event.target.value);
  };

  // handle drop down change supplier id
  const handleChangeUnitId = (event) => {
  setUnitIdValue(event.target.value);
  };


    // handle drop down change supplier id
    const handleChangeBranchtId = (event) => {
      setBranchIdValue(event.target.value);
  };


      // drop down branches id data api data fetch and insert in drop down picker
      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/branches')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setBranchIdData(data);
            console.log("Drop down branches id  data", data);
          })
          .catch(error => {
            console.error('Error fetching branches id data:', error);
          });
      }, []);
    
        // drop down parent category id data api data fetch and insert in drop down picker
        useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/parent_product_categories')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setParentProductCategoryIdData(data);
            console.log("Drop down parent category id  data", data);
          })
          .catch(error => {
            console.error('Error fetching parent category id data:', error);
          });
      }, []);
      
    
    
        // drop down product category id data api data fetch and insert in drop down picker
        useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/product_categories')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setProductCategoryIdData(data);
            console.log("Drop down product category id  data", data);
          })
          .catch(error => {
            console.error('Error fetching product category id data:', error);
          });
      }, []);
    
      
          // drop down brand id data api data fetch and insert in drop down picker
          useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/brands')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setProductBrandIdData(data);
            console.log("Drop down Brand id  data", data);
          })
          .catch(error => {
            console.error('Error fetching Brand id data:', error);
          });
      }, []);
    
    
          // drop down supplier  id data api data fetch and insert in drop down picker
          useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/suppliers')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setSupplierIdData(data);
            console.log("Drop down supplier id  data", data);
          })
          .catch(error => {
            console.error('Error fetching supplier id data:', error);
          });
      }, []);
    
    
        // drop down supplier  id data api data fetch and insert in drop down picker
        useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/units')
          .then(response => {
            // pick from data array (data.data)
            const data = response.data.data;
            setUnitIdData(data);
            console.log("Drop down Unit id  data", data);
          })
          .catch(error => {
            console.error('Error fetching Unit id data:', error);
          });
      }, []);
      


  // pick existing data to form as form value
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`)
    .then(function (response) {
        // handle database fields to set form values
        let product = response.data.data

        setSupplierIdValue(product.supplier_id_value) 
        setBranchIdValue(product.branch_id_value) 
        setProductBrandIdValue(product.brand_id_value) 
        setParentProductCategoryIdValue(product.parent_product_category_id_value) 
        setProductCategoryIdValue(product.product_category_id_value) 
        setUnitIdValue(product.unit_id_value) 
        setProductCreatedDate(product.product_created_date) 
        setProductExpiryDate(product.product_expiry_date) 
        setProductName(product.product_name) 
        setProductStockQuantity(product.product_stock_quantity) 
        setProductCostPrice(product.product_cost_price) 
        setProductSellingPrice(product.product_selling_price) 
        setProductStatus(product.product_status) 
        setProductDescription(product.product_description) 
        setProductImage(product.product_image) 
    })
    // trigger sweet alerts on error
    .catch(function (error) {
        Swal.fire({
             icon: 'error',
            title: 'Error picking existing product data!',
            showConfirmButton: false,
            timer: 1500
        })
    })
      
}, [])

  
    // handle data saving to api
    const updateData = () => {
      
      setIsSaving(true);
      axios.post(`http://127.0.0.1:8000/api/v1/products/${id}`, {
          // database fields
          supplier_id : supplier_id_value,
          brand_id : brand_id_value,
          branch_id : branch_id_value,
          parent_product_category_id : parent_product_category_id_value,
          product_category_id : product_category_id_value,
          unit_id : unit_id_value,
  
          product_created_date : product_created_date,
          product_expiry_date : product_expiry_date,
          product_name : product_name ,
          product_stock_quantity : product_stock_quantity,
          product_cost_price : product_cost_price,
          product_selling_price : product_selling_price,
          product_status : product_status,
          product_description : product_description,
          product_image : product_image,

        }, {
          // headers
          headers: {
            // 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            // other headers...
          }})
        // trigger sweet alerts on success
        .then(function (response) {
          Swal.fire({
              icon: 'success',
              title: 'Product  updated successfully!',
              showConfirmButton: false,
              timer: 1500
          })
          setIsSaving(false);
          // success response
          console.log("Success updating Product  data",response.data )
        })
        // trigger sweet alerts on failure
        .catch(function (error) {


          Swal.fire({
              icon: 'error',
              title: error.response.data.message,
              showConfirmButton: false,
              timer: 1700
          })
          console.log("Error updating Product data",error.response.data )
          setIsSaving(false)
        });
  }

  // end of  handle data saving to api




  return (
    <Box mt="30px" mb="60px" mr="60px" ml="60px" >
      
      <Box mt="30px">
      <HeaderEdit 
       title="Update Product" 
      //  view 
       buttonTitle={"All Products"}
       buttonURL={`/view_products/`}

      //  edit brand
      //  buttonTitleEdit={"Edit Brand"}
      //  buttonURLEdit={`/edit_brand/${id}`}

       //  add brand
       buttonTitleAdd={"Add Product"}
       buttonURLAdd={`/add_product`}



        />

      {/* FORM */}
      
      <Box style={{ marginTop:'20px' }}>
        
      <form >
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >

            {/* product name */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Product Name *"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductName(event.target.value)}}
                value={product_name}
                name="product_name"
                sx={{ gridColumn: "span 2" }}
              />


                {/* parent category id */}
                <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label-branch">Select Branch *</InputLabel>
                <Select
                  labelId="demo-simple-select-label-branch"
                  id="demo-simple-select-branch"
                  value={branch_id_value}
                  label="Select Branch *"
                  onChange={handleChangeBranchtId}
                >
                   {branch_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.branch_name}</MenuItem> ))}

                </Select>
              </FormControl>



                {/* parent category id */}
                <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Parent Category *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={parent_product_category_id_value}
                  label="Select Parent Category *"
                  onChange={handleChangeParentProductCategoryId}
                >
                   {parent_product_category_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.parent_product_category_name}</MenuItem> ))}

                </Select>
              </FormControl>


               {/* product category id  */}
                <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label-category">Select Product Category *</InputLabel>
                <Select
                  labelId="demo-simple-select-label-category"
                  id="demo-simple-select-category"
                  value={product_category_id_value}
                  label="Select Product Category *"
                  onChange={handleChangeProductCategoryId}
                >
                   {product_category_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.product_category_name}</MenuItem> ))}

                </Select>
              </FormControl>


               {/* brand  */}
               <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label-brand">Select Product Brand *</InputLabel>
                <Select
                  labelId="demo-simple-select-label-brand"
                  id="demo-simple-select-brand"
                  value={brand_id_value}
                  label="Select Product Brand *"
                  onChange={handleChangeProductBrandId}
                >
                   {brand_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.brand_name}</MenuItem> ))}

                </Select>
              </FormControl>



              {/* supplier  */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label-brand">Select Product Supplier *</InputLabel>
                <Select
                  labelId="demo-simple-select-label-supplier"
                  id="demo-simple-select-supplier"
                  value={supplier_id_value}
                  label="Select Product Supplier *"
                  onChange={handleChangeSupplierId}
                >
                   {supplier_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.supplier_name}</MenuItem> ))}

                </Select>
              </FormControl>


               {/* supplier  */}
               <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label-brand">Select Product Unit *</InputLabel>
                <Select
                  labelId="demo-simple-select-label-unit"
                  id="demo-simple-select-unit"
                  value={unit_id_value}
                  label="Select Product Unit *"
                  onChange={handleChangeUnitId}
                >
                   {unit_id?.map((item) => (
                  <MenuItem key={item.id} value={item.id} >{item.unit_name}</MenuItem> ))}

                </Select>
              </FormControl>


              {/* created date */}
              <TextField
                id="date"
                label="Product Register Date"
                type="date"
                name="product_created_date"
                value={product_created_date}
                // defaultValue={currentDate}
                onChange={handleProductRegisterDateChange}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />


              {/* expiry date */}
              <TextField
                id="date"
                label="Product Expiry Date"
                type="date"
                name="product_expiry_date"
                value={product_expiry_date}
                // defaultValue={currentDate}
                onChange={handleProductExpiryDateChange}
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ gridColumn: "span 2" }}
              />


              {/* status */}
              <FormControl  fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel id="demo-simple-select-label">Select Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product_status}
                  label="Select Status"
                  onChange={handleChangeProductStatus}
                >
                  <MenuItem value={1}>Active</MenuItem>
                  <MenuItem value={2}>Disabled</MenuItem>
                </Select>
              </FormControl>

              {/* stock quantity */}
              <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Product Stock Quantity"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductStockQuantity(event.target.value)}}
                value={product_stock_quantity}
                name="product_stock_quantity"
                sx={{ gridColumn: "span 2" }}
              />


               {/* cost price */}
               <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Cost Price  *"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductCostPrice(event.target.value)}}
                value={product_cost_price}
                name="product_cost_price"
                sx={{ gridColumn: "span 2" }}
              />

                {/* selling price */}
                <TextField
                fullWidth
                // style={{ width:"100%" }}
                type="text"
                label="Selling Price  *"
                // onBlur={handleBlur}
                onChange={(event)=>{setProductSellingPrice(event.target.value)}}
                value={product_selling_price}
                name="product_selling_price"
                sx={{ gridColumn: "span 2" }}
              />



              {/* product image */}
              <div sx={{ gridColumn: "span 6" }}>

              <Button variant="raised" component="label" color="primary">
                  <CloudUploadIcon  style={{ marginRight:"20px" }}/> Photo 
                    <input 
                    style={{ marginLeft:"30px" }}
                     id="demo-simple-select"
                    // value={product_category_image}
                      type="file"
                      // hidden
                      onChange={handleFileChange}
                     />

                </Button>

              </div>
              
              <TextField
                fullWidth
                type="text"
                multiline
                rows={5}
                label="Product Description"
                onChange={(event)=>{setProductDescription(event.target.value)}}
                value={product_description}
                name="product_description"
                sx={{ gridColumn: "span 4" }}
              />

            </Box>


            {/* submit button */}

            <Box display="flex" justifyContent="start" mt="30px">
              <Button 
              disabled={isSaving}
              onClick={updateData} 
              type="submit" size="large" endIcon={<SendIcon />} style={{ backgroundColor:"#2587da", color:"#ffffff" }}  variant="contained">
                Update Product
              </Button>
            </Box>
          </form>
        
     
      </Box>

      {/* END OF FORM */}
      </Box>
    </Box>
  );
}

export default EditProduct;

import React, {useState, useEffect } from 'react'
import HeaderViewTableData from '../../components/Headers/HeaderViewTableData';

import {  Button, IconButton, Typography, useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Swal from 'sweetalert2'
import axios from 'axios'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// progress bar
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';




const ViewProducts = () => {
  // product category states
  const [productsData, setProductsData] = useState([]);



  const getproductsData = async () => {
    
    try {
      // const response = await fetch('http://127.0.0.1:8000/api/v1/product_categories');
      // const data = await response.json();

      axios.get('http://127.0.0.1:8000/api/v1/products')
        .then(function (response) {
           const data =  response.data.data;
          //  const data = response.data !== null ? response.data : 'Default Data';
        // Assuming your data structure includes a 'category' property within each 'product'
        // fetch the data with its relationship  here
        // (backend fetch ) ->
        // $product_categories = ProductCategory::with('parent_product_category')->get();

      
      const formattedData = data?.map(product_data => ({

        id: product_data.id || 'No Id',
        product_code : product_data.product_code || 'No Code',
        supplier_id : product_data.supplier.supplier_name || 'No Supplier',
        brand_id : product_data.brand.brand_name || 'No Brand',
        branch_id : product_data.branch.branch_name,
        parent_product_category_id : product_data.parent_product_category.parent_product_category_name || 'No Parent Category',
        product_category_id : product_data.product_category.product_category_name || 'No Product Category',
        unit_id : product_data.unit.unit_name || 'No Unit',
        product_created_date : product_data.product_created_date || 'No Created Date',
        product_expiry_date : product_data.product_expiry_date || 'No Expiry Date',
        product_name : product_data.product_name || 'No Product Name',
        product_stock_quantity : product_data.product_stock_quantity || 'No Stock Quantity',
        product_cost_price : product_data.product_cost_price || 'No Cost Price',
        product_selling_price : product_data.product_selling_price || 'No Selling Price',
        product_status : product_data.product_status || 'No  Status',
        product_description : product_data.product_description || 'No Description',
        product_image : product_data.product_image || 'No Image',

      }));

      console.log("Products Data retrieved successfully", data)

      setProductsData(formattedData);

        })

    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  

useEffect(() => {
  getproductsData()
}, []);




  // columns
  const columns = [
    { 
      field: 'id',
      headerName: '#ID', 
      //  width: 100,
      flex: 1
    },
    
    {
      field: 'product_code',
      headerName: 'Code',
      // width: 200,
      flex: 1,
      editable: true, 
    },

    {
      field: 'branch_id',
      headerName: 'Branch',
      // width: 500,
      editable: true,
    },
    
    
    {
      field: 'parent_product_category_id',
      headerName: 'Parent Product Category',
      // width: 200,
      flex: 1,
      editable: true, 
     
    },

    {
      field: 'product_category_id',
      headerName: 'Product Category',
      // width: 200,
      flex: 1,
      editable: true, 
           
    },

    // {
    //   field: 'brand_id',
    //   headerName: 'Brand',
    //   // width: 200,
    //   flex: 1,
    //   editable: true, 

           
    // },

   
    {
      field: 'product_status',
      headerName: 'Product Status',
      // width: 200,
      flex: 1,
      editable: true, 
      renderCell: (params) => {
        const product_status = params.value;
        let chipColor = '';
  
        switch (product_status) {
          case 'active':
            chipColor = '#4CAF50'; // Green
            break;
          case 'disabled':
            chipColor = '#f6968f'; // Red 
            break;
          
          default:
            chipColor = '#F44336'; // Black (default color)
        }
  
        return <Chip label={product_status} style={{ backgroundColor: chipColor, color: '#ffffff' }} />;
      },
           
    },

   

    // view action
    {
      field: 'actions',
      headerName: 'VIEW',
      sortable: false,
      width: 100,
      renderCell: (productsData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/show_product/${productsData.id}`}
            style={{ backgroundColor:"#0faa50" }}
            variant="contained"
          >
            {/* Edit */}
            <RemoveRedEyeOutlinedIcon />
          </Button>
          
        );
      }
    },

    {
      field: 'actions2',
      headerName: 'EDIT',
      sortable: false,
      width: 100,
      renderCell: (productsData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_product/${productsData.id}`}
            style={{ backgroundColor:"#2587da" }}
            variant="contained"
          >
            {/* Edit */}
            <ModeEditOutlinedIcon />
          </Button>
          
        );
      }
    },

    {
      field: 'actions3',
      headerName: 'DELETE',
      sortable: false,
      width: 100,
      // flex: 1,
      renderCell: (productsData) => {
        return (
          <Button
            onClick={()=>handleDelete(productsData.id)}
            style={{ backgroundColor:"#da2533" }}
            variant="contained"
          >
            {/* Edit */}
            <DeleteOutlinedIcon />
          </Button>
          
        );
      }
    },
    

    // 
  ];


  // delete data from api
  const handleDelete = (id) => {
    // trigger sweet alerts on delete
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}`)
            // trigger sweet alerts on successful delete
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Deleted Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                getproductsData()
                console.log("Product Deleted", response.data.message)
            })
            // trigger sweet alerts on error
            .catch(function (error) {
                Swal.fire({
                     icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500
                })
            });
        }
      })
}

  // end of delete data from api




 
  
  return (
    <Box m="30px">
      
      <Box >
      <HeaderViewTableData 
       title="Products" 

       buttonTitleAdd={"Add Products"}
       buttonURLAdd={`/add_product`}
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      {productsData ? (
          <DataGrid 
              rows={productsData} 
              columns={columns}
              initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 100,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick

            />
        ) : (
          
          
          <> 
              <center>
              <Typography style={{ marginTop:'200px', fontSize:'20px' }}>Data is Empty / Loading...</Typography>
              <CircularProgress color="success" style={{ marginTop:'30px', fontSize:'20px' }} />
              </center>
          </>

        )}  


    </Box>

      {/* End table */}

      {/* Start of modal */}

      <div>
      
    </div>

      {/* End of modal */}
      
      </Box>
    </Box>
  );
}

export default ViewProducts;

import React, {useState, useEffect } from 'react'
import Header from '../../components/Header';
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



const ViewProductCategories = () => {
  // product category states
  const [productCategoryData, setproductCategoryData] = useState([]);

  // fetch data from api
//   const getProductCategories = () => {

//     axios.get('http://127.0.0.1:8000/api/v1/product_categories')
//         .then(function (response) {
//           // nested object of data.data
//           setproductCategoryData(response.data.data);
//         })
//         .catch(function (error) {
//           console.log(error);
//         })


//   }

//   useEffect(() => {
//     getProductCategories()
// }, []);

useEffect(() => {
  const getProductCategories = async () => {
    try {
      // const response = await fetch('http://127.0.0.1:8000/api/v1/product_categories');
      // const data = await response.json();

      axios.get('http://127.0.0.1:8000/api/v1/product_categories')
        .then(function (response) {
           const data =  response.data.data;
        // Assuming your data structure includes a 'category' property within each 'product'
        // fetch the data with its relationship  here
        // (backend fetch ) ->
        // $product_categories = ProductCategory::with('parent_product_category')->get();


      const formattedData = data.map(product_category => ({
        id: product_category.id,
        product_category_code: product_category.product_category_code,
        // pick the nested data in relationship here
        parent_product_category_id: product_category.parent_product_category.parent_product_category_name,
        product_category_name: product_category.product_category_name,
        product_category_description: product_category.product_category_description,
        product_category_status: product_category.product_category_status,
        product_category_image: product_category.product_category_image,

      }));

      console.log("Data retrieved successfully", data)

      setproductCategoryData(formattedData);

        })

    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  getProductCategories();
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
      field: 'product_category_code',
      headerName: 'Code',
      // width: 200,
      flex: 1,
      editable: true, 
    },
    
    {
      field: 'parent_product_category_id',
      headerName: 'Parent Category',
      // width: 200,
      flex: 1,
      editable: true, 
     
    },

    {
      field: 'product_category_name',
      headerName: 'Category Name',
      // width: 200,
      flex: 1,
      editable: true, 
    },

    {
      field: 'product_category_status',
      headerName: 'Status',
      // width: 200,
      flex: 1,
      editable: true, 
    },

    // {
    //   field: 'description',
    //   headerName: 'DESCRIPTION',
    //   width: 500,
    //   editable: true,
    // },

    // view action
    {
      field: 'actions',
      headerName: 'VIEW',
      sortable: false,
      width: 100,
      renderCell: (productCategoryData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/show_product_category/${productCategoryData.id}`}
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
      renderCell: (productCategoryData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_product_category/${productCategoryData.id}`}
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
      renderCell: (productCategoryData) => {
        return (
          <Button
            onClick={()=>handleDelete(productCategoryData.id)}
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
            axios.delete(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
            // trigger sweet alerts on successful delete
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product Category Deleted Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                // getProductCategories()
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
      
      <Box>
      <Header title="Product Categories" 
       buttonTitle={"ADD PRODUCT CATEGORY"}
       buttonURL={`/add_product_category/`}
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      {productCategoryData ? (
          <DataGrid 
              rows={productCategoryData} 
              columns={columns}
              initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
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

export default ViewProductCategories;

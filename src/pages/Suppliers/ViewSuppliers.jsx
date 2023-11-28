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




const ViewSuppliers = () => {
  // product category states
  const [supplierData, setSupplierData] = useState([]);



  const getsupplierData = async () => {
    
    try {
      // const response = await fetch('http://127.0.0.1:8000/api/v1/product_categories');
      // const data = await response.json();

      axios.get('http://127.0.0.1:8000/api/v1/suppliers')
        .then(function (response) {
           const data =  response.data.data;
          //  const data = response.data !== null ? response.data : 'Default Data';
        // Assuming your data structure includes a 'category' property within each 'product'
        // fetch the data with its relationship  here
        // (backend fetch ) ->
        // $product_categories = ProductCategory::with('parent_product_category')->get();

      
      const formattedData = data?.map(supplier_data => ({

        id: supplier_data.id || 'No Id ',
        supplier_code: supplier_data.supplier_code || 'No Code ',
        supplier_name: supplier_data.supplier_name || 'No Supplier  Name ',
        supplier_status: supplier_data.supplier_status || 'No Status ',
        supplier_image: supplier_data.supplier_image || 'No Image ',
        supplier_register_date:supplier_data.supplier_register_date || 'No Date ',
        supplier_email: supplier_data.supplier_email || 'No Email ',
        supplier_phone: supplier_data.supplier_phone || 'No Phone ',
        supplier_address: supplier_data.supplier_address || 'No Address ',
        supplier_city: supplier_data.supplier_city || 'No City ',
        supplier_country: supplier_data.supplier_country || 'No Country ',
        supplier_organization: supplier_data.supplier_organization || 'No Organization ',
        supplier_description: supplier_data.supplier_description || 'No Description ',
        supplier_website_url: supplier_data.supplier_website_url || 'No Website ',


      }));

      console.log("Data retrieved successfully", data)

      setSupplierData(formattedData);

        })

    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  

useEffect(() => {
  getsupplierData()
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
      field: 'supplier_code',
      headerName: 'Code',
      // width: 200,
      flex: 1,
      editable: true, 
    },
    
    
    {
      field: 'supplier_name',
      headerName: 'Supplier Name',
      // width: 200,
      flex: 1,
      editable: true, 
     
    },

    {
      field: 'supplier_status',
      headerName: 'Supplier Status',
      // width: 200,
      flex: 1,
      editable: true, 
      renderCell: (params) => {
        const brand_status = params.value;
        let chipColor = '';
  
        switch (brand_status) {
          case 'active':
            chipColor = '#4CAF50'; // Green
            break;
          case 'disabled':
            chipColor = '#f6968f'; // Red 
            break;
          
          default:
            chipColor = '#F44336'; // Black (default color)
        }
  
        return <Chip label={brand_status} style={{ backgroundColor: chipColor, color: '#ffffff' }} />;
      },
           
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
      renderCell: (supplierData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/show_supplier/${supplierData.id}`}
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
      renderCell: (supplierData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_supplier/${supplierData.id}`}
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
      renderCell: (supplierData) => {
        return (
          <Button
            onClick={()=>handleDelete(supplierData.id)}
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
            axios.delete(`http://127.0.0.1:8000/api/v1/suppliers/${id}`)
            // trigger sweet alerts on successful delete
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Supplier Deleted Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                getsupplierData()
                console.log("Supplier deleted", response.data.message)
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
       title="Suppliers" 

       buttonTitleAdd={"Add Supplier"}
       buttonURLAdd={`/add_supplier`}
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      {supplierData ? (
          <DataGrid 
              rows={supplierData} 
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

export default ViewSuppliers;

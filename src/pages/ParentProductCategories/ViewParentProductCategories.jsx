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




const ViewParentProductCategories = () => {
  // data grid states

  // product category states
  const [parentProductCategoryData, setParentProductCategoryData] = useState([]);

  // fetch data from api
  const getParentProductCategories = () => {
    axios.get('http://127.0.0.1:8000/api/v1/parent_product_categories')
        .then(function (response) {

          // nested object of data.data
          const data =  response.data.data;
          const formattedData = data?.map(parent_category_data => ({
            id: parent_category_data.id || 'No Id ',
            parent_product_category_code: parent_category_data.parent_product_category_code || 'No Code ',
            parent_product_category_name: parent_category_data.parent_product_category_name || 'No Category  Name ',
            parent_product_category_description: parent_category_data.parent_product_category_description || 'No Description ',
            parent_product_category_status: parent_category_data.parent_product_category_status || 'No Status ',

          }));

          console.log("Data retrieved successfully", data)

          setParentProductCategoryData(formattedData);

        })
        .catch(function (error) {
          console.log(error);
        })
  }

  useEffect(() => {
    getParentProductCategories()
}, []);


  // columns
  const columns = [
    { 
      field: 'id',
      headerName: '#ID', 
      flex: 1
    },
    {
      field: 'parent_product_category_code',
      headerName: 'Code',
      // width: 200,
      flex: 1,
      editable: true, 
    },
    {
      field: 'parent_product_category_name',
      headerName: 'Parent Category Name',
      width: 200,
      editable: true,
    },

    

    {
      field: 'parent_product_category_status',
      headerName: 'Status',
      width: 200,
      editable: true,
      renderCell: (params) => {
        const parent_product_category_status = params.value;
        let chipColor = '';
  
        switch (parent_product_category_status) {
          case 'active':
            chipColor = '#4CAF50'; // Green
            break;
          case 'disabled':
            chipColor = '#f6968f'; // Red 
            break;
          
          default:
            chipColor = '#F44336'; // Black (default color)
        }
  
        return <Chip label={parent_product_category_status} style={{ backgroundColor: chipColor, color: '#ffffff' }} />;
      },
    },

    // view action
    {
      field: 'actions',
      headerName: 'VIEW',
      sortable: false,
      width: 100,
      renderCell: (parentProductCategoryData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            // href={`/show_parent_product_categories/${parentProductCategoryData.id}`}
            href={`/show_parent_product_category/${parentProductCategoryData.id}`}
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
      renderCell: (parentProductCategoryData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_parent_product_category/${parentProductCategoryData.id}`}
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
      renderCell: (parentProductCategoryData) => {
        return (
          <Button
            onClick={()=>handleDelete(parentProductCategoryData.id)}
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
      // text: "You won't be able to revert this! '\n' This will also delete all child categories",
      html: "You won't be able to revert this! <br /> This will also delete all child categories and data associated with this parent category",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      
      if (result.isConfirmed) {
          axios.delete(`http://127.0.0.1:8000/api/v1/parent_product_categories/${id}`)
          // trigger sweet alerts on successful delete
          .then(function (response) {
              Swal.fire({
                  icon: 'success',
                  title: 'Parent Product Category Deleted Successfully!',
                  showConfirmButton: false,
                  timer: 1500
              })
              getParentProductCategories()
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
      <HeaderViewTableData 
       title="Parent Categories" 
       buttonTitleAdd={"Add Parent Category"}
       buttonURLAdd={`/add_parent_product_category`}
       
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>

       {parentProductCategoryData ? (
          <DataGrid 
              rows={parentProductCategoryData} 
              columns={columns}
              initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
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

export default ViewParentProductCategories;

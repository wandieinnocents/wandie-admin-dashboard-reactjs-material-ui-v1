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




const ViewBranches = () => {
  // product category states
  const [branchData, setBranchData] = useState([]);



  const getBranchData = async () => {
    try {
      // const response = await fetch('http://127.0.0.1:8000/api/v1/product_categories');
      // const data = await response.json();

      axios.get('http://127.0.0.1:8000/api/v1/branches')
        .then(function (response) {
           const data =  response.data.data;
          //  const data = response.data !== null ? response.data : 'Default Data';
        // Assuming your data structure includes a 'category' property within each 'product'
        // fetch the data with its relationship  here
        // (backend fetch ) ->
        // $product_categories = ProductCategory::with('parent_product_category')->get();
      
      const formattedData = data?.map(branch_data => ({

        id: branch_data.id || 'No Id ',
        branch_code: branch_data.branch_code || 'No Code ',
        branch_name: branch_data.branch_name || 'No Branch  Name ',
        branch_address: branch_data.branch_address || 'No Address ',

      }));

      console.log("Branches retrieved successfully", data)

      setBranchData(formattedData);

        })

    } catch (error) {
      console.error('Error fetching branches:', error);
    }
  };
  
  // useEffect
  useEffect(() => {
    getBranchData();
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
      field: 'branch_code',
      headerName: 'Code',
      // width: 200,
      flex: 1,
      editable: true, 
    },
    
    
    {
      field: 'branch_name',
      headerName: 'Branch Name',
      // width: 200,
      flex: 1,
      editable: true, 
     
    },


    // view action
    {
      field: 'actions',
      headerName: 'VIEW',
      sortable: false,
      width: 100,
      renderCell: (branchData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/show_branch/${branchData.id}`}
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
      renderCell: (branchData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_branch/${branchData.id}`}
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
      renderCell: (branchData) => {
        return (
          <Button
            onClick={()=>handleDelete(branchData.id)}
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
            axios.delete(`http://127.0.0.1:8000/api/v1/branches/${id}`)
            // trigger sweet alerts on successful delete
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Branch Deleted Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                getBranchData()
                console.log("Branch deleted", response.data.message)
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
       title="Branches" 

       buttonTitleAdd={"Add Branch"}
       buttonURLAdd={`/add_branch`}
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      {branchData ? (
          <DataGrid 
              rows={branchData} 
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

export default ViewBranches;

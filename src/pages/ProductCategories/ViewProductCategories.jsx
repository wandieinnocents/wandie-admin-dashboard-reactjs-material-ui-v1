import React, {useState, useEffect } from 'react'
import Header from '../../components/Header';
import {  Button, IconButton, Typography, useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
// icons
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ViewProductCategories = () => {
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/product_categories")
      .then((data) => data.json())
      .then((data) => setTableData(data.data))
  }, [])
   console.log(tableData)


  // columns
  const columns = [
    { 
      field: 'id',
      headerName: 'id', 
      width: 50 },
    {
      field: 'name',
      headerName: 'name',
      width: 200,
      editable: true, 
    },
    {
      field: 'description',
      headerName: 'description',
      width: 400,
      editable: true,
    },

    // view action
    {
      field: 'actions',
      headerName: 'View',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
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
      headerName: 'Edit',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
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
      headerName: 'Delete',
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
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

 
  
  return (
    <Box m="30px">
      
      <Box>
      <Header title="View ViewProductCategories" subtitle="Welcome to your ViewProductCategories" />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={tableData}
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
    </Box>

      {/* End table */}
      
      </Box>
    </Box>
  );
}

export default ViewProductCategories;

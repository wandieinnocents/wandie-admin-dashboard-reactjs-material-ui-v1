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




const ViewUnits = () => {
  // unit states
  const [unitData, setUnitData] = useState([]);



  const getUnitData = async () => {
    try {
      // const response = await fetch('http://127.0.0.1:8000/api/v1/product_categories');
      // const data = await response.json();

      axios.get('http://127.0.0.1:8000/api/v1/units')
        .then(function (response) {
           const data =  response.data.data;
          //  const data = response.data !== null ? response.data : 'Default Data';
        // Assuming your data structure includes a 'category' property within each 'product'
        // fetch the data with its relationship  here
        // (backend fetch ) ->
        // $product_categories = ProductCategory::with('parent_product_category')->get();
      
      const formattedData = data?.map(unit_data => ({

        id: unit_data.id || 'No Id ',
        unit_name: unit_data.unit_name || 'No Unit Name ',
        unit_description: unit_data.unit_description || 'No Unit Description ',

      }));

      console.log("Units retrieved successfully", data)

      setUnitData(formattedData);

        })

    } catch (error) {
      console.error('Error fetching Units:', error);
    }
  };

  useEffect(() => {
  getUnitData();
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
      field: 'unit_name',
      headerName: 'Unit Name',
      // width: 200,
      flex: 1,
      editable: true, 
     
    },

    {
      field: 'unit_description',
      headerName: 'Unit Description',
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
      renderCell: (unitData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/show_unit/${unitData.id}`}
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
      renderCell: (unitData) => {
        return (
          <Button
            // onClick={(e) => onButtonClick(e, params.row)}
            href={`/edit_unit/${unitData.id}`}
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
      renderCell: (unitData) => {
        return (
          <Button
            onClick={()=>handleDelete(unitData.id)}
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
            axios.delete(`http://127.0.0.1:8000/api/v1/units/${id}`)
            // trigger sweet alerts on successful delete
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Unit Deleted Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                getUnitData()
                console.log("Unit deleted", response.data.message)
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
       title="Units" 

       buttonTitleAdd={"Add Unit"}
       buttonURLAdd={`/add_unit`}
       
        />

      {/* table */}

      <Box sx={{ height: 900, width: '100%' }}>
      {unitData ? (
          <DataGrid 
              rows={unitData} 
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

export default ViewUnits;

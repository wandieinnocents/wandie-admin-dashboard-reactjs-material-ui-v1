import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import axios from 'axios'


const ShowProductCategory = () => {
  const [id, setId] = useState(useParams().id)
    const [project, setProject] = useState({name:'', description:''})
 
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/product_categories/${id}`)
        .then(function (response) {
          setProject(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])


  return (
    <Box m="30px">
      
      <Box>
      <Header title="Show Product Category" 
       buttonTitle={"ALL PRODUCT CATEGORIES"}
       buttonURL={`/view_product_categories/`}
        />

      <p>{project.name}</p>
      <p>{project.description}</p>
      
      </Box>
    </Box>
  );
}

export default ShowProductCategory;

import React from 'react';
import Header from '../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const  Contacts = ()=> {
  return (
    <Box m="20px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Contacts" subtitle="Welcome to your contacts" />
      </Box>

      {/* more info here */}
      <p>more info heremore infomore infemore infoe info heremore info here</p>
      
    </Box>
  );
}

export default Contacts;

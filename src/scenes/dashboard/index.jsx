import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  return (
    <Box m="30px">
      
      <Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <p>Add content of dashboard here</p>
      </Box>
    </Box>
  );
}

export default Dashboard;

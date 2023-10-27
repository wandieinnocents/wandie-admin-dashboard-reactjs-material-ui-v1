import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  return (
    <Box m="50px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
}

export default Dashboard;

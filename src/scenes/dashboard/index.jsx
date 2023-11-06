import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import BarChart from '../../components/Charts/BarChart';

const Dashboard = () => {
  return (
    <Box m="30px">
      
      <Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <p>Add content of dashboard here</p>
      <Box height="75vh">
      <BarChart />
      </Box>

      </Box>
    </Box>
  );
}

export default Dashboard;

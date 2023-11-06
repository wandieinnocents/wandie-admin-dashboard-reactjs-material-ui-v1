import React from 'react';
import Header from '../../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import BarChart from '../../components/Charts/BarChart';
import PieChart from '../../components/Charts/PieChart';

const Dashboard = () => {
  return (
    <Box m="30px">
      
      <Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <p>Add content of dashboard here</p>
      <Box height="75vh">
      <BarChart />
      <PieChart />
      </Box>

      </Box>
    </Box>
  );
}

export default Dashboard;

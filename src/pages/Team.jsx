import React from 'react';
import Header from '../components/Header';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockDataTeam } from '../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../theme';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns =  [ ] ;
  return (
    <Box m="20px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Team" subtitle="Welcome to your Team" />


      


      </Box>
      
    </Box>
  );
}

export default Team;

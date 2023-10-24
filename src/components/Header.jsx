import React from 'react';
import { Typography,Box,useTheme } from '@mui/material';
import { tokens } from '../theme';
import Grid from '@mui/material/Grid';



const Header = ({ title, subtitle })=> {

  return (

   <Grid container spacing={2}>
  <Grid item xs={8}>
  <Typography 
      variant='h3' 
      color="#000000" 
      fontWeight="bold" 
      sx={{ mb: "5px" }}>
      { title }
    </Typography>
    
    <Typography
    variant='h5' 
    // color={colors.greenAccent[400]}
    >
    { subtitle }
    </Typography>
  </Grid>

  <Grid item xs={4}>
  <Typography
    variant='h5'
    style={{textAlign: 'right'}}  
    // color={colors.greenAccent[400]}
    >
    Dashboard
    </Typography>
  </Grid>
  
</Grid>

  
  
  );
}

export default Header;

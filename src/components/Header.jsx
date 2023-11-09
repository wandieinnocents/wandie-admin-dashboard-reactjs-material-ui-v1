import React from 'react';
import { Typography, Button, Box, useTheme } from '@mui/material';
// import { tokens } from '../theme';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';




const Header = ({ title, buttonTitle, buttonURL })=> {

  return (

   <Grid container spacing={2}>
  <Grid item xs={8}>
  <Typography 
      variant='h3' 
      color="#000000" 
      fontWeight="bold" 
      sx={{ mb: "15px" }}>
      { title }
    </Typography>
    
    
  </Grid>

  <Grid item xs={4}>
  {/* <Typography
    variant='h5'
    style={{textAlign: 'right'}}  
    sx={{ mb: "50px" }}
    // color={colors.greenAccent[400]}
    >
    Dashboard
    </Typography> */}

    {/* Button */}
    <Box display="flex" justifyContent="end">

      <Button 
      sx={{ mb: "15px" }}
      href={buttonURL}
      type="submit" size="large" endIcon={<SendIcon />} 
      style={{ backgroundColor:"#2587da", color:"#ffffff", alignItems: 'right' }}  
      variant="contained">
        { buttonTitle }
      </Button>
    </Box>
  </Grid>
  
</Grid>

  
  
  );
}

export default Header;

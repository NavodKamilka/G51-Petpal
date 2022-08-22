import * as React from 'react';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import TopNavbar from '../../Components/TopNavbar';
import Footer from '../../Components/Footer'

//main page content
import ShopPetAds from './ShopPetAds'






export default function ShopProductAdsFinal() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          backgroundColor: '#FFFFFF',
          padding: '8px',
          margin: '6px 14px',
          width : '1450px',
          
        }}
      >
        <TopNavbar  /> <br/>


        {/* put page content here */}

      <ShopPetAds/>
      
        <Footer />  
      </Box>      
    </Box>
  );
}

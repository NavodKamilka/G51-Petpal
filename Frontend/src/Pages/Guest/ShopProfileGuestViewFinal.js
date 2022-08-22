import * as React from 'react';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import TopNavbar from '../../Components/TopNavbar';
import Footer from '../../Components/Footer'

//main page content
import ShopProfileGuestView from './ShopProfileGuestView'






export default function PetAdsFinal() {
  
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

      <ShopProfileGuestView/>
      
        <Footer />  
      </Box>      
    </Box>
  );
}

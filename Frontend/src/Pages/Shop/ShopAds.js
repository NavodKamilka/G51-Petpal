import React, { useState, useEffect } from 'react';
// import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import SearchBar from '../../Components/SearchBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Axios from "axios";


import petmartshop from '../../Images/petmartshop.jpg';


//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons

    blackButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    blueButton: {
      main: '#1D168F',
      contrastText: "#fff" 
    },
    
  },
});



export default function ShopAds() {

  const[shopList, setShopList]=useState([]);

// here we don't have to click any button to display data
useEffect(() =>{
  Axios.get("http://localhost:3001/api/shop/getShopList").then((response)=>{
    setShopList(response.data.data);   
  console.log(response);
  });
}, []);



  return (
    <div>
      <h1>Pet Stores</h1>
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center">
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ShopAdsFinal">Shops</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/ProductAdsFinal">Products</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/PetAdsFinal">Pets</Button></ThemeProvider>
      </Stack>
        <br></br>

      <SearchBar/>

        <br></br>
        <br></br>
          <Grid container alignItems="stretch"  justifyContent="center">
            {/* show the cards in a row */}
            <Grid item style={{display: 'flex'}} padding={5}>

            {shopList.map((val) => {
                return(
                <Card sx={{ maxWidth: 240 , padding:1}}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={val.Picture}
                      alt="shop image"
                  
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {val.Name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {val.Address} <br></br>
                      {val.OwnerTelNum}
                      </Typography>
                    </CardContent>

                  <CardActions>
                    <Button size="small">View shop</Button>
                  </CardActions>
                </Card>
                )
                })}
      </Grid>
          </Grid>

     
    </div>
  );
}

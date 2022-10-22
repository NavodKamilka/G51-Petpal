import React, { useState, useEffect, useRef } from 'react';
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Axios from "axios";


import SearchBar from '../../Components/SearchBar';
// import AdCardProduct from '../../Components/AdCardProduct';
import petFoodImage from '../../Images/petFood1.png';
import food2 from '../../Images/food2.png';
import wiskasCatFood from '../../Images/wiskasCatFood.jpg';

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



export default function ProductAds() {
// backend
const[foodList, setFoodList]=useState([]);


// here we don't have to click any button to display data
useEffect(() =>{
  Axios.get("http://localhost:3001/api/shop/getproduct").then((response)=>{
  setFoodList(response.data.data);   
  console.log(response);
  });
}, []);


  return (
    <div>
      <h1>Products</h1>
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/ShopAdsFinal">Shops</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ProductAdsFinal">Products</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/PetAdsFinal">Pets</Button></ThemeProvider>
      </Stack>
        <br></br>
          <SearchBar/>
        <br></br>
        <br></br>

        <Grid container alignItems="stretch"  justifyContent="center">
            {/* show the cards in a row */}
            <Grid item style={{display: 'flex'}} padding={5}>

            {foodList.map((val) => {
                return(
                          <Card sx={{ maxWidth: 240, minWidth:240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image= {val.Picture}
              alt="Product image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Product name:{val.name}<br></br>
              Price per one (Rs.): {val.pricePerOne}<br></br>
              Available quantity:{val.availableQty}<br></br>
             
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
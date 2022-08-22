import * as React from 'react';
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
//  import productImage from '../../images/petFood1.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


import SearchBar from '../../Components/SearchBar';
import AdCardProduct from '../../Components/AdCardProduct';

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

        <Grid container spacing={{ xs: 2, md:3}} columns={{ xs: 2, md: 5}} alignItems="center" justifyContent="center">
            {Array.from(Array(10)).map((index) => (
              <AdCardProduct/>
            ))}
        </Grid>
 {/* show the cards in a row */}
 {/* <Stack spacing={10} direction="row" justifyContent="center" >
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={petFoodImage}
              alt="green iguana"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pedegree
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chicken and vegetables 400g<br></br>
                Rs 375.00<br></br>
              No10, Yatinuwara street,Kandy <br></br>
              081-2233445
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small">View shop</Button>
          </CardActions>
        </Card>
  </Stack> */}
     
    </div>
  );
}
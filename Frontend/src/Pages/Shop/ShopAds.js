import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import SearchBar from '../../Components/SearchBar';
import AdCardShop from '../../Components/AdCardShop';





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
          <Grid container spacing={{ xs: 2}} columns={{ xs: 2, md:5}} alignItems="center" justifyContent="center">
                      {Array.from(Array(10)).map((index) => (
                        <AdCardShop/>
                      ))}
          </Grid>
 {/* show the cards in a row */}
 {/* <Stack spacing={10} direction="row" justifyContent="center" > */}
        {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={shopImage}
              alt="shop image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet store 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
              No10, Yatinuwara street,Kandy <br></br>
              081-2233445
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}

      {/* card 2 */}
    {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={shopImage}
            alt="green iguana"
        
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet store 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            No10, Yatinuwara street,Kandy <br></br>
            081-2233445
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}

        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={shopImage}
            alt="green iguana"
        
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet store 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            No10, Yatinuwara street,Kandy <br></br>
            081-2233445
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}
        {/* </Stack> */}
     
    </div>
  );
}

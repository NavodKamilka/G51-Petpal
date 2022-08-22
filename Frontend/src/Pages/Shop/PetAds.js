import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



import SearchBar from '../../Components/SearchBar';
// import AdCardPet from '../../Components/AdCardPet';
import { Typography } from '@mui/material';

import puppyImage from '../../Images/puppy.jpg';
import perssianCat from '../../Images/perssianCat.jpg';
import parrot from '../../Images/parrot.jpg';


//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
   
    blueButton: {
      main: '#1D168F',
      contrastText: "#fff" ,

      // not working
      '&:hover': {
        main: "#ff0000",
     },
    },
    
  },
});

  

export default function PetAds() {
  return (
    <div>
      <Typography variant="h3" style={{align:"center"}}>
        Pets

      </Typography>
      <br></br>

      <Stack spacing={10} direction="row" justifyContent="center" >
        <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/ShopAdsFinal">Shops</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href="/ProductAdsFinal">Products</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/PetAdsFinal">Pets</Button></ThemeProvider>
      </Stack>

        <br></br>
        {/* searchbar component */}
        <SearchBar/>
        <br></br>


          <Grid container alignItems="stretch" spacing={{ xs: 2 }} columns={{ xs: 2}} justifyContent="center" >
            {/* {Array.from(Array(10)).map((index) => (
              <AdCardPet/>
            ))} */}
            <Card sx={{ maxWidth: 240, minWidth:240, padding:1 }}>

              <CardMedia
                component="img"
                height="140"
                width="100"
                image={puppyImage}
                alt="pet image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Labrador
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Male puppy<br></br>
                  Rs 30 000<br></br>
                  Colombo <br></br>
                  011-2233445
                </Typography>
              </CardContent>
            </Card>




            <Card sx={{ maxWidth: 240, minWidth:240, padding:1 }}>
              <CardMedia
                component="img"
                height="140"
                width="100"
                image={perssianCat}
                alt="pet image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Perssian Kitten
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Female cat<br></br>
                  Rs 38 000<br></br>
                  Kandy <br></br>
                  071-7894561
                </Typography>
              </CardContent>
            </Card>



            <Card sx={{ minWidth: 240, maxWidth: 240, padding:1 }}>
              <CardMedia
                component="img"
                height="140"
                width='20%'
                image={parrot}
                alt="pet image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Parrot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Male<br></br>
                  Rs 5 000<br></br>
                  Batticaloa <br></br>
                  071-3334445
                </Typography>
              </CardContent>
            </Card>

          </Grid>
    </div>
  );
}

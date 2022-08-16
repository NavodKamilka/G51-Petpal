import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';





import SearchBar from '../../Components/SearchBar';
import AdCardPet from '../../Components/AdCardPet';



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
      <h1>Pets</h1>
      <br></br>

      <Stack spacing={10} direction="row" justifyContent="center" >
        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ShopAdsFinal">Shops</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ProductAdsFinal">Products</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/PetAdsFinal">Pets</Button></ThemeProvider>
      </Stack>

        <br></br>
        {/* searchbar component */}
        <SearchBar/>
        <br></br>


          <Grid container spacing={{ xs: 2 }} columns={{ xs: 2}} alignItems="center" justifyContent="center" >
            {Array.from(Array(8)).map((index) => (
              <AdCardPet/>
            ))}
          </Grid>
    </div>
  );
}

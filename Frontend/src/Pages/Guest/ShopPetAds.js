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
import Typography from '@mui/material/Typography';


import SearchBar from '../../Components/SearchBar';
import AdCardPet from '../../Components/AdCardPet';

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



export default function ShopPetAds() {
  return (
    <div>
     <Typography variant="h4" style={{textAlign: 'center'}}>
               Pets
      </Typography>
      <br></br>
        <br></br>
          <SearchBar/>
        <br></br>
        <br></br>

        <Grid container spacing={{ xs: 2, md:3}} columns={{ xs: 2, md: 5}} alignItems="center" justifyContent="center">
            {Array.from(Array(10)).map((index) => (
              <AdCardPet/>
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
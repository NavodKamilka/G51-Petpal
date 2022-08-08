// previous pet adds page 


import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import puppyImage from '../../images/puppy.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchBar from '../../components/SearchBar';


//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons

    shopButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    productButton: {
      main: '#1D168F',
      contrastText: "#fff" 
    },
    
  },
});



export default function ProductAds() {
  return (
    <div>
      <h1>Pets</h1>
      <br></br>

      <Stack spacing={10} direction="row" justifyContent="center" >
        <ThemeProvider theme={theme}><Button variant="contained" color='productButton'>Shops</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained" color='productButton'>Products</Button></ThemeProvider>
        <ThemeProvider theme={theme}><Button variant="contained" color='shopButton'>Pets</Button></ThemeProvider>
      </Stack>

        <br></br>
        <SearchBar/>
        <br></br>


 {/* show the cards in a row */}
 <Stack spacing={10} direction="row" justifyContent="center" >
        <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              height="240"
              width="100"
              image={puppyImage}
              alt="green iguana"
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

        {/* card 2 */}
        <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              height="240"
              width="100"
              image={puppyImage}
              alt="green iguana"
          
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

   {/* card 3 */}
        <Card sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              height="240"
              width="100"
              image={puppyImage}
              alt="green iguana"
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
    </Stack>
     
    </div>
  );
}
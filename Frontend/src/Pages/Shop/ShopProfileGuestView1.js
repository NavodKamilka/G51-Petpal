import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import petFoodImage from '../../images/petFood1.png';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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

  
export default function ShopProfileGuestView() {
  return (
    <div>
        {/* upper part - shop details */}
            <Box
            sx={{
                width: 1,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            >
        {/* Content inside upper box */}

            <h1>Pet shop 1</h1>
            <p>No 10, Main street, Colombo</p>
            <p>011-1112223</p>



        </Box>
        <br></br>

        {/* lower part- products available in the shop */}
        <Box
            sx={{
                width: 1,
                height:500,
                // p:3, //padding = 3px
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
            >
        <Stack spacing={10} direction="row" justifyContent="center">
            <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'>Products for sale</Button></ThemeProvider>
            <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Pets for sale</Button></ThemeProvider>
        </Stack>
        
        <div>
        {/* Content inside lower box */}
        {/* show the cards in a row */}
        <Stack spacing={10} direction="row" justifyContent="center" >
                <Card sx={{ maxWidth: 200 }} position="relative">
                    <CardMedia
                    component="img"
                    height="100"
                    image={petFoodImage}
                    alt="Product"
                    
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
        </Stack>
        </div>

        </Box>
    </div>
  );
}

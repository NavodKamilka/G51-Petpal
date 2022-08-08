import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import shopImage from '../../images/shop.jpg';
import mapImage from '../../images/map.png';
// import Grid from '@mui/material/Grid';
// import AdCardProduct from '../../components/AdCardProduct';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


//colors for buttons
const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blueButton: {
        main: '#1D168F',
        contrastText: "#fff" 
      },
      
    },
  });


export default function ShopProfileGuestView() {
    // related to rating
    const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} >
        <Item style={{backgroundColor:"#CEFFFC"}}>
            <table>
                <tr> 
                    <td>
                    <Typography variant="h4" gutterBottom component="div">
                        Shop Name   
                    </Typography>
                    </td>
                    <td>  
                        <Rating name="read-only" value={value} size="large"  readOnly />
                    </td>
                    <td>
                        Review
                    </td>
                </tr>
                <tr>
                    <td>   
                      <p>No10, Yatinuwara street,Kandy</p>
                      <p>081-2233445</p>
                    </td>
                    <td colSpan={2}>
                        <img src={mapImage} alt='mapImage' style={{width:"70%"}}></img>
                    </td>
                </tr>
            </table>
        </Item>

        <Item>
        <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Product for sale</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Pets for sale</Button></ThemeProvider>
      </Stack>  
        </Item>

        {/* row 2 in the page  

        <Item style={{ padding: 50 }}>
            <Grid container spacing={{ xs: 2}} columns={{ xs: 2}} alignItems="center" justifyContent="center">
                {Array.from(Array(8)).map((index) => (
                <AdCardProduct/>
                ))}
            </Grid>        
        </Item> */}
       
      </Stack>
    </Box>
  );
}

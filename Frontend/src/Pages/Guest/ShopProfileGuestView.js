import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import shopImage from '../../images/shop.jpg';
import mapImage from '../../Images/map.png';
// import Grid from '@mui/material/Grid';
// import AdCardProduct from '../../components/AdCardProduct';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  height:'90%',
  top:10,
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
    <Box sx={{ flexGrow: 1 }}>
      <Stack spacing={2} >
        <Item >
            <table>
                <tr> 
                    <td>
                      <Typography variant="h4" gutterBottom component="div">
                          Pet Mart  
                      </Typography>
                    </td>
                    <td colSpan={2} rowSpan={4}>
                        <img src={mapImage} alt='mapImage' style={{width:"70%"}}></img>
                    </td>

                   
                </tr>
                <tr>
                    <td>   
                      <p>Sri Jayawardanapura, Kotte</p>
                      <p>070 8807070</p>
                    </td>
                    
                </tr>
                    
                <tr>
                    <td>  
                        <Rating name="read-only" value={value} size="large"  readOnly />
                    </td>
                </tr>
                  <td>
                    <a href="/">Review</a>
                  </td>
                <tr>

                </tr>
            </table>

            <Stack spacing={10} direction="row" justifyContent="center" marginTop={5}>
              <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ShopProductAdsFinal">Products for sale</Button></ThemeProvider>
              <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/ShopPetAdsFinal">Pets for sale</Button></ThemeProvider>
            </Stack> 

        </Item>
      </Stack>
    </Box>
  );
}

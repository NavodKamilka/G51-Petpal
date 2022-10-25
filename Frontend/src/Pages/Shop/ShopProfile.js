import *as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShopImage from "../../Images/shop.jpg";
// import MapImage from "../../Images/map.png";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';


// import '../../Style/Shop/ShopProfile.css'
// import logo from "../../images/Logo.png";
import { FormControl } from '@mui/material';



// the box-grey
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    height:1000,
    width:'60%',
    top:10,
  }));


  const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blueButton: {
        main: '#1D168F',
      //   change the text color inside the button to another color
        contrastText: "#fff"
    },
    },
  });

function ShopProfile() {
    return(
        <div>
            <br></br>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
                <Item>
                    <FormControl>
                    <h3>Login Credentials</h3>
                    <Divider />
                    <br></br>
                            <table >
                                <tr>
                                    <td><TextField id="outlined-basic" label="Email" variant="outlined" style={{float:"left", width:'100%'}} defaultValue="petmart@gmail.com"/></td>
                                    <td> <ThemeProvider theme={theme}><Button variant="contained" className='Button' color='blueButton' style={{float:"right"}}>Edit</Button></ThemeProvider></td>
                                </tr>
                            </table>

                            <h3>Shop Details</h3>
                            <Divider />
                            <br></br>
                            <table>
                                <tr>
                                    <td><TextField id="outlined-basic" label="Shop name" variant="outlined" defaultValue="Pet Mart" /></td>
                                    <td><TextField id="outlined-basic" label="Shop registraiton number" variant="outlined" defaultValue="XXXX"/></td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td><TextField id="outlined-basic" label="Shop Address" variant="outlined" defaultValue="No 10, Kotte"/></td>
                                    <td><TextField id="outlined-basic" label="Contact number" variant="outlined" defaultValue="070-780 0 800 "/></td>
                                </tr>
                                <br></br>
                                {/* <tr>
                                    <td colSpan={2}> <img src ={ShopImage} alt="sampleimage" className='Image'/></td>
                                    {/* <td><img src ={MapImage} alt="sampleimage"  className='Image'/></td> */}
                                {/* </tr>  */}
                                <br></br>
                                <tr>
                                    <td></td>
                                    <td style={{float:"right"}}>
                                    <ThemeProvider theme={theme}><Button variant="contained" className='Button' color='blueButton'>Edit</Button></ThemeProvider>
                                    </td>
                                </tr>

                            </table> 

                            <h3>Shop Owner Details</h3>
                            <Divider />
                            <br></br>
                            <table>
                                <tr>
                                    <td><TextField id="outlined-basic" label="Name" variant="outlined" defaultValue="Kamal Perera"/></td>
                                    <td><TextField id="outlined-basic" label="Email" variant="outlined" defaultValue="kamal@gmail.com"/></td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td><TextField id="outlined-basic" label="Address" variant="outlined" defaultValue="No 10, Kotte"/></td>
                                    <td><TextField id="outlined-basic" label="Contact number" variant="outlined" defaultValue="070-780 0 800 "/></td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td></td>
                                    <td style={{float:"right"}}>
                                    <ThemeProvider theme={theme}><Button variant="contained" className='Button' color='blueButton'>Edit</Button></ThemeProvider>
                                    </td>
                                </tr>
                                
                            </table> 
                        </FormControl>
                    </Item>
                </Grid>
                </Box>
        </div>   
    )       
}
export default ShopProfile;
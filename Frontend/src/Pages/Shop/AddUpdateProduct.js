import *as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey } from '@mui/material/colors';
import '../../Style/Shop/ShopProfile.css'


//change the length of the textfield
const style={
    width: 500
}

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blackButton: {
        main: '#000000',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      },
      
    },
  });

// the box-grey
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:800,
    top:10,
  }));
  
function AddUpdateProduct() {
    return(
        <div>
             <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Product Details</h3>
            <Divider />
            <FormControl>
                <table>
                    <tr> 
                        <td><TextField 
                            id="outlined-helperText"
                            label="Brand"
                            defaultValue="Pedegree"
                            style={style}
                            // change the lenght of the text field
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>

                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Product Name"
                            defaultValue="Vegeable and chicken 400g"
                            style={style}

                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Price per 1 (Rs)"
                            defaultValue="375.00"
                            style={style}

                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField
                            id="outlined-helperText"
                            label="Total Quantity"
                            defaultValue="10"
                            sx={{ width: 250 }}
                            // helperText="Some important text"
                            />

                            <TextField
                            id="outlined-helperText"
                            label="Available Quantity"
                            defaultValue="10"
                            sx={{ width: 250 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                defaultValue="Description about the product"
                                style={style}

                                // sx={{ width: 500 }}
                            />
                        </td>
                    </tr>
                    <tr>
                        {/* upload pet image */}
                        <p>upload product image</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[900] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>

                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3} >

                        <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'>Update</Button></ThemeProvider>

                    </Stack>
                    </tr>
                </table>
                </FormControl>
                </Item>
                </Grid>
                </Box>

            </div>
        
    )       
}
export default AddUpdateProduct;
import *as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';

import '../../css/ShopProfile.css'


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


  
function AddUpdateProduct() {
    return(
        <div>
            
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
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'>Add product image</Button></ThemeProvider>
                        <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'>Update</Button></ThemeProvider>

                    </Stack>
                    </tr>
                </table>
                </FormControl>
               

            </div>
        
    )       
}
export default AddUpdateProduct;
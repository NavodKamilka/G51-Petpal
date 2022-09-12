import *as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
//import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';

import '../../Style/Shop/ShopProfile.css'

// import { color } from '@mui/system';

//change the length of the textfield
const style={
    width: 500
}

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blackButton: {
        main: '#1D168F',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      } ,     
    },
  });


// the box-grey
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:700,
    top:10,
  }));

function AddAppo() {

    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Appointment</h3>
            <Divider/>
            <br></br>
            <FormControl>
                <table>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Pet Owner Name"
                        
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Pet Owner Contact Number"
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Request Date"
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Request Time"
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Description About Pet"
                                multiline
                                rows={4}
                                style={style}
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3}>    
                        <ThemeProvider theme={theme}><Button variant="contained" href='/TodayAppoMain' color='blackButton'>Get Appoitment</Button></ThemeProvider>
                        <ThemeProvider theme={theme}><Button variant="contained" href='/TodayAppoMain' color='blackButton'>Cancel</Button></ThemeProvider>
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
export default AddAppo;
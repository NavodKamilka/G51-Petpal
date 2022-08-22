import *as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey } from '@mui/material/colors';


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
        main: '#000000',
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
    height:800,
    top:10,
  }));

function AddUpdatePet() {
    // used for drop down list 
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return(
        <div>
            <br></br>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Pet Details</h3>
            <Divider /> <br></br>
            
            <FormControl>
                <table>
                    <tr> 
                        <td>
                            <TextField
                                value={value}
                                // onChange={(e) => setValue(e.target.value)}
                                select // tell TextField to render select
                                label="Pet Type"
                                style={style}
                                onChange={handleChange}
                                >  
                                 
                                <MenuItem value={'Dog'}>Dog</MenuItem>
                                <MenuItem value={'Puppy'}>Puppy</MenuItem>
                                <MenuItem value={'Cat'}>Cat</MenuItem> 
                                <MenuItem value={'Kitten'}>Kitten</MenuItem>
                                <MenuItem value={'Rabbit'}>Rabbit</MenuItem>
                                <MenuItem value={'Parrot'}>Parrot</MenuItem>
                                <MenuItem value={'Guenia pig'}>Guenia pig</MenuItem>
                                <MenuItem value={'Fish'}>Fish</MenuItem>
                            </TextField>
                       
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Breed"
                            // defaultValue="Labrador"
                            style={style}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Price per 1 (Rs)"
                            // defaultValue="45000.00"
                            style={style}

                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Total Quantity"
                            // defaultValue="2"
                            sx={{ width: 250 }}
                            // helperText="Some important text"
                            />
                       <TextField
                            id="outlined-helperText"
                            label="Available Quantity"
                            // defaultValue="2"
                            sx={{ width: 250 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                // defaultValue="Description about the pet"
                                style={style}

                                // sx={{ width: 500 }}
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        {/* upload pet image */}
                        <p>upload pet image</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[900] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>
                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3}>    
                        <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'>Add</Button></ThemeProvider>
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
export default AddUpdatePet;
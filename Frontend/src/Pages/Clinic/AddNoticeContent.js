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
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey } from '@mui/material/colors';


//import '../../Style/Shop/ShopProfile.css'

// import { color } from '@mui/system';

//change the length of the textfield
const style={
    width: 500
}

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blueButton: {
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
    height:600,
    top:10,
  }));

function AddNoticeContent() {
    
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Add Notice</h3>
            <Divider />
            <br></br>
            <FormControl>
                <table>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Title"
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            label="Last Published Date"
                            style={style}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Notice Content"
                                multiline
                                rows={4}
                                style={style}
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <p>Upload Notice</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[900] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>
                    <br></br>
                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3}>    
                        <ThemeProvider theme={theme}><Button variant="contained" href='/ViewNoticeMain'color='blueButton'>Request</Button></ThemeProvider>
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
export default AddNoticeContent;
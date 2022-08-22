import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import Link from '@mui/material/Link';


import '../../Style/Clinic/MyProfile/MyProfileContent.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Profile from '../../Images/upload.png'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:850,
    top:10
    
  }));

  // const theme = createTheme({
  //   palette: {
  //     //name given as view, update and delete to declare buttons
  //     blueButton: {
  //       main: '#1D168F',
  //     //   change the text color inside the button to another color
  //       contrastText: "#fff" 
  //     } ,     
  //   },
  // });


  export default function  MyProfileContent() {
   
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>

          <img src={Profile}  alt="Logo" height='370' className='image' style={{
          marginLeft: '-55%',
          marginTop:40

          
        
        }}/>

          <IconButton color="primary" aria-label="upload picture" component="label" style={{
                left:'-15.5%',
                top:40
          }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
          </IconButton>

          
              

              <Box 
                  
                  sx={{
                    '& .MuiTextField-root': {top:-380, left:'50%', width: '42%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  
            <div>
              <Stack 
                spacing={2}
              >
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                // value={value1}
                // onChange={handleChange1}
              /><br/>
              <TextField
                id="outlined-multiline-flexible"
                label="Email Addreess"
                multiline
                maxRows={4}
                // value={value2}
                // onChange={handleChange2}
              />
               <br/>
              
              <TextField
                id="outlined-multiline-flexible"
                label="Mobile No"
                multiline
                maxRows={4}
                // value={value4}
                // onChange={handleChange4}
              /><br/>
              <TextField
                id="outlined-multiline-flexible"
                label="Register No"
                multiline
                maxRows={4}
                // value={value5}
                // onChange={handleChange5}
              /> 
              </Stack>
            </div>
            
          </Box>
          <Stack spacing={10} direction="row" style={{
            marginLeft:'34%',
            marginTop: -280
          }}>
              <Button variant="contained" href='/DoctorMain'>Save</Button>
              <Button variant="contained" href='/DoctorMain'>Cancel</Button>
          </Stack>
            {/* <Stack spacing={10} direction="row" justifyContent="center" marginTop={3}>    
              <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Request</Button></ThemeProvider>
            </Stack> */}
          <Stack spacing={20} direction="row" style={{
            // left:'-45%',
            marginLeft:'10%',
            marginRight:'10%',
            marginTop: 120
          }}>
             
          </Stack>

          <Stack spacing={45} direction="row" style={{
            // left:'-45%',
            marginLeft:'18%',
            marginRight:'10%',
            marginTop: 20
          }}>
             
          </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent
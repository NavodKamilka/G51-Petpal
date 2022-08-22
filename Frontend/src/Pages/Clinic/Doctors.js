import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import SearchBar from '../../Components/SearchBar.js';
import AdCardDoctor from '../../Components/AdCardDoctor';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
//import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';





//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
    addButton: {
      main: '#059862',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    doctorsButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    productButton: {
      main: '#1D168F',
      contrastText: "#fff" 
    },
    
  },
});



export default function Doctors() {
  return (
    <div>
      {/* <h1>Pet Stores</h1> */}
      <br></br>
     
      {/* align the 'add doctor' button to the right */}
       {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Doctor</Button></ThemeProvider>  </Grid>  */}
       <ThemeProvider theme={theme}><Button variant="contained" href='/AddProfile'color='addButton' startIcon={<AddCircleRoundedIcon />}>
        Add Doctors
      </Button></ThemeProvider>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain' color='doctorsButton'>Doctor List</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" href='/AppointmentMain'color='productButton'>Make Appointments</Button></ThemeProvider>
      
      </Stack>
        <br></br>
      <SearchBar/>
      

<br></br>
 {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Doctor</Button></ThemeProvider>  </Grid> 
      <br></br> */}

<Grid container spacing={{ xs: 2}} columns={{ xs: 2}} alignItems="center" justifyContent="center">
            {Array.from(Array(3)).map((index) => (
              <AdCardDoctor/>

            ))}
          </Grid>

          <div>
          <br></br>

          {/* <ThemeProvider theme={theme}><Button variant="contained" color='productButton'>Add Doctor</Button></ThemeProvider> */}
          </div>
  {/* {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Doctor</Button></ThemeProvider>  </Grid>  */}
          
 {/* show the cards in a row */}
 {/* <Stack spacing={10} direction="row" justifyContent="center" > */}
        {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={shopImage}
              alt="shop image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet store 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
              No10, Yatinuwara street,Kandy <br></br>
              081-2233445
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}

      {/* card 2 */}
    {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={shopImage}
            alt="green iguana"
        
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet store 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            No10, Yatinuwara street,Kandy <br></br>
            081-2233445
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}

        {/* <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={shopImage}
            alt="green iguana"
        
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet store 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            No10, Yatinuwara street,Kandy <br></br>
            081-2233445
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button size="small">View shop</Button>
          </CardActions>
        </Card> */}
        {/* </Stack> */}
     
    </div>
  );
}

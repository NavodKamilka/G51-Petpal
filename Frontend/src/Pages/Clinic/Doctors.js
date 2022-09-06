import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import SearchBar from '../../Components/SearchBar.js';
//import AdCardDoctor from '../../Components/AdCardDoctor';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DoctorImage from '../../Images/vet1.png';
import DoctorImage2 from '../../Images/vet2.png';
import DoctorImage3 from '../../Images/vet3.png';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
//import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';





//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
    addButton: {
      main: '#005A2B',
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
      <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain' color='productButton'>Doctor List</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" href='/AppointmentMain'color='productButton'>Appointments</Button></ThemeProvider>
      
      </Stack>
        <br></br>
      <SearchBar/>
      

<br></br>
 {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Doctor</Button></ThemeProvider>  </Grid> 
      <br></br> */}

<Grid container spacing={{ xs: 2}} columns={{ xs: 2}} alignItems="center" justifyContent="center">
            {/* {Array.from(Array(3)).map((index) => (
              <AdCardDoctor/>

            ))} */}
            <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={DoctorImage}
              alt="Doctor Image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Dayani Siriwardane
              </Typography>
              <Typography variant="body2" color="text.secondary">
                076-8945612<br></br>
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small" href='/ClinicDocProfile'>View Doctor</Button>
          </CardActions>
            
        </Card>
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={DoctorImage2}
              alt="Doctor Image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Janaki Sri Collure
              </Typography>
              <Typography variant="body2" color="text.secondary">
                077-1865756<br></br>
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small" href='/ClinicDocProfile'>View Doctor</Button>
          </CardActions>
            
        </Card>
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={DoctorImage3}
              alt="Doctor Image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Prabath Wickrmasinghe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                071-9854321<br></br>
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small" href='/ClinicDocProfile'>View Doctor</Button>
          </CardActions>
            
        </Card>
          </Grid>

          <div>
          <br></br>

          {/* <ThemeProvider theme={theme}><Button variant="contained" color='productButton'>Add Doctor</Button></ThemeProvider> */}
          </div>
  {/* {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Doctor</Button></ThemeProvider>  </Grid>  */}
          
 
     
    </div>
  );
}

import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
//import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ClinicImage from "../../Images/PetClinic.png";
import ClinicMapImage from "../../Images/clinicLo.png";
import Divider from '@mui/material/Divider';



import '../../Style/Clinic/MyProfile/Content1.css'

import TextField from '@mui/material/TextField';


import FormControl from '@mui/material/FormControl';



const style={
    width: 400
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1000,
    top:10
    
  }));

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


  export default function  ClinicProfileContent() {

  return (
    
    <div>
      <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid item xs={12}>
        
          <Item>
            <FormControl>
            <h3>Login Credentials</h3>
            <Divider />
            <br></br>
                <table>
                    <tr>
                        <br></br>
                        <td><TextField
                            id="outlined-helperText"
                            label="Email"
                            defaultValue="PetLove@gmail.com"
                            style={style}
                            /></td>
                            <td><ThemeProvider theme={theme}><Button variant="contained" href='/ClinicProfile' color='blueButton'>Save Changes</Button></ThemeProvider></td>
              
                        
                        <br></br>
                    </tr>
                </table>

                <h3>Clinic Details</h3>
                <Divider />
                <br></br>
                <table>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Clinic Name"
                            defaultValue="Pet Love"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="Contact Number"
                            defaultValue="011-2233446"
                            style={style}
                            /></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Clinc Address"
                            defaultValue="No10.Flower Street, Colombo 07"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="No of Doctors"
                            defaultValue="03"
                            style={style}
                            /></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td> <img src ={ClinicImage} alt="sampleimage" className='Image'/></td>
                        <td><img src ={ClinicMapImage} alt="sampleimage"  className='Image'/></td>
                    </tr>

                </table> 
                <h3>Clinic Main Doctor Details</h3>
                <Divider/>
                <br></br>
                <table>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Doctor Name"
                            defaultValue="Dr. Dayani Siriwardane"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="Email"
                            defaultValue="DayaniSiriwardane@gmail.com"
                            style={style}
                            /></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Register No"
                            defaultValue="78-9568"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="Contact Number"
                            defaultValue="076-1587345"
                            style={style}
                            /></td>
                    </tr>
                </table> 

                <h3>Clinic Available Time</h3>
                <Divider/>
                <br></br>
                <table>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Date Type"
                            defaultValue="Week Days"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="Start Time"
                            defaultValue="10.00am"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="End Time"
                            defaultValue="5.00pm"
                            style={style}
                            /></td>
                    </tr>
                    <br></br>
                    <tr>
                    <td><TextField
                            id="outlined-helperText"
                            label="Date Type"
                            defaultValue="Week End Days"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="Start Time"
                            defaultValue="10.00am"
                            style={style}
                            /></td>
                        <td><TextField
                            id="outlined-helperText"
                            label="End Time"
                            defaultValue="7.00pm"
                            style={style}
                            /></td>
                    </tr>
                </table>
                 
                </FormControl>
                </Item>
       </Grid>
      </Grid>
     </Box>
           
        </div>   
  )
}

//export default ClinicProfileContent
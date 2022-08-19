import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
//import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import ClinicImage from "../../Images/PetClinic.png";
import ClinicMapImage from "../../Images/clinicLo.png";
import Divider from '@mui/material/Divider';



import '../../Style/Clinic/MyProfile/Content1.css'

import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';

// import Profile from '../../Iamges/vet1.png'
// import alex from '../../../Images/alex.png'
// import tom from '../../../Images/tom.png'
// import wicky from '../../../Images/wicky.png'

// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';




// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



const style={
    width: 300
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1250,
    top:10
    
  }));

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
                <table>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Email"
                            defaultValue="PetLove@gmail.com"
                            style={style}
                            /></td>
                        <td> <Button variant="contained" className='Button'>Edit Profile</Button></td>
                    </tr>
                </table>

                <h3>Clinic Details</h3>
                <Divider />
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
                    <tr>
                        <td> <img src ={ClinicImage} alt="sampleimage" className='Image'/></td>
                        <td><img src ={ClinicMapImage} alt="sampleimage"  className='Image'/></td>
                    </tr>

                </table> 
                <h3>Clinic Main Doctor Details</h3>
                <Divider />
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
                <Divider />
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
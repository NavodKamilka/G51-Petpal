import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";


// import '../../../Style/PetOwner/MyProfile/MyProfileContent.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// import Profile from '../../../Images/Profile.png'
// import alex from '../../../Images/alex.png'
// import tom from '../../../Images/tom.png'
// import wicky from '../../../Images/wicky.png'

// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';




// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';

// import FormControl from '@mui/material/FormControl';

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:950,
    top:10
    
  }));

  export default function  MyProfileContent() {

    const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  
   

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>
          <Stack
                spacing={80}
                direction="row"
                marginLeft={10}
                sx={{ marginTop: 4 }}
              >
                <Button
                  variant="contained"
                  href="/PetOwnerAppointment"
                  startIcon={<KeyboardDoubleArrowLeftIcon />}
                >
                  Go Back
                </Button>
              </Stack> <br /><br />
          
          <TextField
                sx={{ marginLeft: "0%", width: "70%" ,top:60}}
                id="outlined-basic"
                label="Pet Owner Name"
                variant="outlined"
              />{" "}
              <br />
              <br />
              <br />  
              <TextField
                sx={{ marginLeft: "0%", width: "70%",top:60 }}
                id="outlined-basic"
                label="Pet Name"
                variant="outlined"
              />{" "}
              <br />
              <br />
              <br />
              <FormControl sx={{ m: 1, width: "70%",top:60 }}>
                <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="{Pet Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Dog</MenuItem>
                  <MenuItem value={20}>Cat</MenuItem>
                  <MenuItem value={30}>Parrot</MenuItem>
                  <MenuItem value={30}>Guine Pig</MenuItem>
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/>

              <FormControl sx={{ m: 1, width: "70%",top:60 }}>
                <InputLabel id="demo-simple-select-label">Clinic</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="{Pet Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Pet We PhotoCamera</MenuItem>
                  <MenuItem value={20}>AWT Hospital</MenuItem>
                  {/* <MenuItem value={30}>Parrot</MenuItem>
                  <MenuItem value={30}>Guine Pig</MenuItem> */}
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/>

              <FormControl sx={{ m: 1, width: "70%",top:60 }}>
                <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="{Pet Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Dr. Wasantha</MenuItem>
                  <MenuItem value={20}>Dr. Perera</MenuItem>
                  <MenuItem value={30}>Dr. Wasana</MenuItem>
                  <MenuItem value={30}>Dr. Dr. Kamal</MenuItem>
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/>

              <FormControl sx={{ m: 1, width: "70%",top:60 }}>
                <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="{Pet Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>4-5 pm</MenuItem>
                  <MenuItem value={20}>5-6 pm</MenuItem>
                  <MenuItem value={30}>6-7 pm</MenuItem>
                  <MenuItem value={30}>7-8 pm</MenuItem>
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/>

              <Stack direction="row"  marginTop={8} marginLeft={'80%'} marginRight={'20%'}>
                <Button variant="contained" sx={{fontSize: 14, height:40}} >Submit</Button>

                </Stack>
              
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

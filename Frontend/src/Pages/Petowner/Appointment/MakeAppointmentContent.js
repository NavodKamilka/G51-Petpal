import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';


import Axios from 'axios';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


// import '../../../Style/PetOwner/MyProfile/MyProfileContent.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

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
    height:1000,
    top:10
    
  }));

  export default function  MyProfileContent() {

    const token = useSelector((state) => state.user.token);

    const [petOwnerName, setPetOwnerName] = React.useState("");
    const [petName, setPetName] = React.useState("");
    const [petType, setPetType] = React.useState("");
    const [clinic, setClinic] = React.useState("");
    const [doctor, setDoctor] = React.useState("");
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [time, setTime] = React.useState("");

  const handleChange1 = (event) => {
    setPetOwnerName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPetName(event.target.value);
  };
  const handleChange3 = (event) => {
    setPetType(event.target.value);
  };
  const handleChange4 = (event) => {
    setClinic(event.target.value);
  };

  const handleChange5 = (event) => {
    setDoctor(event.target.value);
  };

  const handleChange6 = (event) => {
    setDate(event.target.value);
  };

  const handleChange7 = (event) => {
    setTime(event.target.value);
  };


  const addAppointment = () => {

    // console.log(name);

    Axios.post('http://localhost:3001/api/makeAppointment', {
      OwnerName : petOwnerName,
      PetName : petName,
      PetType : petType,
      ClinicName : clinic,
      DoctorName : doctor,
      Date : date,
      Time : time 
      
    },{
      // headers: { authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjYyNjM1Nzk4LCJleHAiOjE2NjI2NDY1OTh9.duI8_LU5euykMI8GqnJKzju3aOphic4ic_4L0i-9E94` }
      headers: { authorization : `Bearer ${token}` }
    }).then(() => {
        console.log("Success");
    });
};
  

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  
   

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
                value={petOwnerName}
                onChange={handleChange1}
              />{" "}
              <br />
              <br />
              <br />  
              <TextField
                sx={{ marginLeft: "0%", width: "70%",top:60 }}
                id="outlined-basic"
                label="Pet Name"
                variant="outlined"
                value={petName}
                onChange={handleChange2}
              />{" "}
              <br />
              <br />
              <br />
              <FormControl sx={{ m: 1, width: "70%",top:60 }}>
                <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={petType}
                  label="{Pet Type}"
                  onChange={handleChange3}
                >
                  <MenuItem value={'Dog'}>Dog</MenuItem>
                  <MenuItem value={'Cat'}>Cat</MenuItem>
                  <MenuItem value={'Parrot'}>Parrot</MenuItem>
                  <MenuItem value={'Guine Pig'}>Guine Pig</MenuItem>
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
                  value={clinic}
                  label="{Pet Type}"
                  onChange={handleChange4}
                >
                  <MenuItem value={'Pet We PhotoCamera'}>Pet We PhotoCamera</MenuItem>
                  <MenuItem value={'AWT Hospital'}>AWT Hospital</MenuItem>
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
                  value={doctor}
                  label="{Pet Type}"
                  onChange={handleChange5}
                >
                  <MenuItem value={'Dr. Wasantha'}>Dr. Wasantha</MenuItem>
                  <MenuItem value={'Dr. Perer'}>Dr. Perera</MenuItem>
                  <MenuItem value={'Dr. Wasana'}>Dr. Wasana</MenuItem>
                  <MenuItem value={'Dr. Kamal'}>Dr. Kamal</MenuItem>
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/><br/><br/><br/>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack sx={{  width: "70%",top:60,marginLeft:'15%' }}>
                  <DesktopDatePicker
                    label="Pick Your Date"
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={handleChange6}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  
                </Stack>
              </LocalizationProvider>

              <FormControl sx={{ m: 1, width: "70%",top:50 }}>
                <InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={time}
                  label="{Pet Type}"
                  onChange={handleChange7}
                >
                  <MenuItem value={'4-5 pm'}>4-5 pm</MenuItem>
                  <MenuItem value={'5-6 pm'}>5-6 pm</MenuItem>
                  <MenuItem value={'6-7 pm'}>6-7 pm</MenuItem>
                  <MenuItem value={'7-8 pm'}>7-8 pm</MenuItem>
                  {/* <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem> */}
                </Select>
              </FormControl><br/><br/><br/>

              

              <Stack direction="row"  marginTop={8} marginLeft={'80%'} marginRight={'20%'}>
                <Button variant="contained" onClick={addAppointment} sx={{fontSize: 14, height:40}} >Submit</Button>

                </Stack>
              
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

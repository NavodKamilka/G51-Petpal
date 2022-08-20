import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';


import '../../../Style/PetOwner/MyProfile/MyProfileContent.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select


import alex from '../../../Images/alex.png'
import petdiary1 from '../../../Images/pet diary 1.png'
import petdiary2 from '../../../Images/pet diary 2.png'
import petdiary3 from '../../../Images/pet diary 3.png'
import petdiary4 from '../../../Images/pet diary 4.png'

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



const values = {
  someDate: "2017-05-24"
};


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1780,
    top:10
    
  }));

  export default function  PetProfileContent() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
  
    const [value1, setValue1] = React.useState('Alex');
    // const [value2, setValue2] = React.useState('navodkamilka98@gmail.com');
    // const [value3, setValue3] = React.useState('**************');
    const [value4, setValue4] = React.useState('sdssds');
    const [value5, setValue5] = React.useState('Ambalangoda');

    const handleChange1 = (event) => {
      setValue1(event.target.value);
    };
    // const handleChange2 = (event) => {
    //   setValue2(event.target.value);
    // };
    // const handleChange3 = (event) => {
    //   setValue3(event.target.value);
    // };
    const handleChange4 = (event) => {
      setValue4(event.target.value);
    };
    const handleChange5 = (event) => {
      setValue5(event.target.value);
    };

    

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>

          <img src={alex}  alt="Logo" height='370' className='image' style={{
          marginLeft: '-55%',
          marginTop:120

          
        
        }}/>

          <IconButton color="primary" aria-label="upload picture" component="label" style={{
                left:'-15.5%',
                top:40
          }}>
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
          </IconButton>

          
              {/* <Button variant="contained">Save Changes</Button> */}

              <Box 
                  
                  sx={{
                    '& .MuiTextField-root': {top:-380, left:'50%', width: '42%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  
            <div>
            <Button variant="contained" href="/PetProfile/Alex/Vaccinations" sx={{top:-480, left:'34%'}} endIcon={<KeyboardDoubleArrowRightIcon />}>Vaccinatons Deatails</Button>
              <Stack 
                spacing={2}
              >
                
              <TextField
                id="outlined-multiline-flexible"
                label="Pet Name"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange1}
              /><br/>
              {/* <TextField
                id="outlined-multiline-flexible"
                label="Date of Birth"
                multiline
                maxRows={4}
                value={value2}
                onChange={handleChange2}
              /> */}
              <TextField
                name="someDate"
                label="Date of Birth"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={values.someDate}
              />
                
               <br/>

               <FormControl sx={{ m: 1, width: '42%' }} style={{top:-380, left:'50%'}}>
                <InputLabel id="demo-simple-select-label">Pet Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Pet Type"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Dog</MenuItem>
                  <MenuItem value={20}>Cat</MenuItem>
                  <MenuItem value={30}>Parrot</MenuItem>
                  <MenuItem value={30}>Guine Pig</MenuItem>
                </Select>
              </FormControl>

               <br/>
                    <TextField
                id="outlined-multiline-flexible"
                label="Breed"
                multiline
                maxRows={4}
                value={value4}
                onChange={handleChange4}
              /><br/>
              <FormControl sx={{ m: 1, width: '42%' }} style={{top:-380, left:'50%'}}>
                <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Blood Group"
                  onChange={handleChange}
                  
                >
                  <MenuItem value={10}>A+</MenuItem>
                  <MenuItem value={20}>A-</MenuItem>
                  <MenuItem value={30}>AB+</MenuItem>
                  <MenuItem value={30}>B+</MenuItem>
                </Select>
              </FormControl> <br/>
              <TextField
                InputProps={{ sx: { height: 180 } }}
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={value5}
                onChange={handleChange5}
              />
              
              </Stack>
              
            </div>
            
          </Box>
          <Stack spacing={10} direction="row" style={{
            marginLeft:'34%',
            marginTop: -310
          }}>
              <Button variant="contained">Edit</Button>
              <Button variant="contained">Save Changes</Button>
              
          </Stack>
          <br/><br/><br/>
          <Box>
          {/* <Box  sx={{ marginLeft:-100 }}> */}
            <Typography variant="h4" color={'ActiveBorder'} >Health History</Typography>
          </Box> <br/><br/><br/>
          <Stack spacing={10} direction="row" marginLeft={20}>
              <TextField
                  sx={{width:'30%'}}
                  name="someDate"
                  label="Date"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  defaultValue={values.someDate}
                />
                <TextField
                sx={{width:'30%'}}
                  name="someDate"
                  label="Date"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  defaultValue={values.someDate}
                />
                <Button variant="contained">Filter</Button>
            </Stack>
            <br/><br/><br/>
            <Box>
          {/* <Box  sx={{ marginLeft:-100 }}> */}
            <Typography variant="h4" color={'ActiveBorder'} >Pet Diary</Typography>
          </Box> <br/><br/><br/>
          <Stack spacing={10} direction="row" marginLeft={20}>
              <TextField
                  sx={{width:'30%'}}
                  name="someDate"
                  label="Date"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  defaultValue={values.someDate}
                />
                <TextField
                sx={{width:'30%'}}
                  name="someDate"
                  label="Date"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                  defaultValue={values.someDate}
                />
                <Button variant="contained">Filter</Button>
            </Stack>
            <br/><br/><br/><br/><br/>
            <Stack spacing={10} direction="row" marginLeft='10%' marginRight='10%'>
                <img src={petdiary1}  alt="Logo" height='40%' width={'25%'} className='image' style={{
                    // marginLeft: '-55%',
                    // marginTop:40
                  }}/>
                  <img src={petdiary2}  alt="Logo" height='40%' width={'25%'} className='image' style={{
                    // marginLeft: '-55%',
                    // marginTop:40
                  }}/>
                  <img src={petdiary3}  alt="Logo" height='40%' width={'25%'} className='image' style={{
                    // marginLeft: '-55%',
                    // marginTop:40
                  }}/>
                  <img src={petdiary4}  alt="Logo" height='40%' width={'25%'} className='image' style={{
                    // marginLeft: '-55%',
                    // marginTop:40
                  }}/>
            </Stack>


            <IconButton color="primary" aria-label="upload picture" component="label" style={{
                left:'0%',
                top:40
          }}> Add New Photo
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
          </IconButton>



          
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent
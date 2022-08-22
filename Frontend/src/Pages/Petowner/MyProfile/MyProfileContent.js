import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


import '../../../Style/PetOwner/MyProfile/MyProfileContent.css'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Profile from '../../../Images/Profile.png';
import alex from '../../../Images/alex.png'
import tom from '../../../Images/tom.png'
import wicky from '../../../Images/wicky.png'

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';




import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10
    
  }));

  export default function  MyProfileContent() {

    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const [value1, setValue1] = React.useState('Navod Kamilka');
    const [value2, setValue2] = React.useState('navodkamilka98@gmail.com');
    const [value3] = React.useState('HelloNavod');
    const [value4, setValue4] = React.useState('0778393860');
    const [value5, setValue5] = React.useState('Ambalangoda');

    const handleChange1 = (event) => {
      setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
      setValue2(event.target.value);
    };
    // const handleChange3 = (event) => {
    //   setValue3(event.target.value);
    // };
    const handleChange4 = (event) => {
      setValue4(event.target.value);
    };
    const handleChange5 = (event) => {
      setValue5(event.target.value);
    };

    // const [values, setValues] = React.useState({
    //   amount: '',
    //   password: '',
    //   weight: '',
    //   weightRange: '',
    //   showPassword: false,
    // });
  
    // const handleChange1 = (prop) => (event) => {
    //   setValues({ ...values, [prop]: event.target.value });
    // };
  
    // const handleClickShowPassword = () => {
    //   setValues({
    //     ...values,
    //     showPassword: !values.showPassword,
    //   });
    // };
  
    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

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
                label="Pet Owner"
                multiline
                maxRows={4}
                value={value1}
                onChange={handleChange1}
              /><br/>
              <TextField
                id="outlined-multiline-flexible"
                label="Email Addreess"
                multiline
                maxRows={4}
                value={value2}
                onChange={handleChange2}
              />
               <br/>
              {/* <TextField
                id="outlined-multiline-flexible"
                label="Password"
                multiline
                maxRows={4}
                value={value3}
                onChange={handleChange3}
              /> 
              // <br/> */}
              <br/>
              
              <FormControl sx={{ m: 1, width: '42%' }} variant="outlined" style={{top:-400, left:'50%'}}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  // value={values.password}
                  value={value3}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl> <br/>
              <TextField
                id="outlined-multiline-flexible"
                label="Tel No"
                multiline
                maxRows={4}
                value={value4}
                onChange={handleChange4}
              /><br/>
              <TextField
                id="outlined-multiline-flexible"
                label="Address"
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
            marginTop: -280
          }}>
              <Button variant="contained" style={{backgroundColor:'#1D168F'}}>Edit</Button>
              <Button variant="contained" style={{backgroundColor:'#1D168F'}}>Save Changes</Button>
          </Stack>
          <Stack spacing={20} direction="row" style={{
            // left:'-45%',
            marginLeft:'10%',
            marginRight:'10%',
            marginTop: 120
          }}>
            <img src={alex}  alt="Logo" height='70%' width={'24%'} className='image'/>
            <img src={tom}  alt="Logo" height='50%' width={'22%'} className='image'/>
            <img src={wicky}  alt="Logo" height='70%' width={'24%'} className='image'/>
             
          </Stack>

          <Stack spacing={45} direction="row" style={{
            // left:'-45%',
            marginLeft:'18%',
            marginRight:'10%',
            marginTop: 20
          }}>
            <Link href="/PetProfile/Alex">Alex</Link>
            <Link href="#">Tomm</Link>
            <Link href="#">Wicky</Link>
             
          </Stack>
          <br/><br/><br/>
          <Button variant="contained" style={{backgroundColor:'#005A2B'}}>Add New Pet</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

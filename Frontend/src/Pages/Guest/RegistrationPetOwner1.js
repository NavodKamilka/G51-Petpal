import *as React from 'react';
// import {useState} from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import '../../Style/Guest/registrationStyle.css'
import logo from "../../Images/Logo.png";

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      
      blueButton: {
        main: '#1D168F',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      },
     
    },
  });
  



function RegistrationPetOwner() {
  //related to select option
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };




    return(
        <div className='regbody'>
            <img src ={logo} alt="petpalLogo" className='logo'/>     
            <FormControl >
              <div>
                <div className="box">
                    <h1>Sign up</h1>
                    <div><p>Already have an account?  <a href={'/'}>Login</a></p> 
                    </div>

                    <div className="form-body">
                      <InputLabel id="role" shrink={true}>Age</InputLabel>

                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={role}
                        label="Role"
                        onChange={handleChange}
                        sx={{ m: 1, minWidth: 120 }} size="small"
                        style={{background: "rgb(255, 255, 255)"}}
                      >
                        
                        <MenuItem value={"petOwner"}>Pet Owner</MenuItem>
                        <MenuItem value={"vetDoc"}>Veterinary Doctor</MenuItem>
                        <MenuItem value={"clinic"}>Clinic</MenuItem>
                        <MenuItem value={"petStore"}>Pet Store</MenuItem>
                      </Select>
                        {/* <select>
                            <option value="petOwner">Pet owner</option>
                            <option value="doctor">Doctor</option>
                            <option value="clinic">Clinic</option>
                            <option value="shop">Pet Store</option>
                        </select> */}

                            <div className="firstname">
                              <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"
                              style={{background: "rgb(255, 255, 255)"}}/>  
                            </div>

                            <div className="lastname">                 
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                style={{background: "rgb(255, 255, 255)"}}/>  
                            </div>

                            <div className="email">
                              <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                  style={{background: "rgb(255, 255, 255)"}}/>                        
                            </div>

                            <div className="password">                        
                                <TextField
                                          id="outlined-password-input"
                                          label="Password"
                                          type="password"
                                          autoComplete="current-password"
                                          style={{background: "rgb(255, 255, 255)"}}
                                          size="small"
                                        />
                            </div>

                          <div className="confirm-password">
                          <TextField
                                        id="outlined-password-input"
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="current-password"
                                        style={{background: "rgb(255, 255, 255)"}}
                                        size="small"
                                      />
                          </div>


                          <input type="checkbox"/>Agree to all<a href={'/'}>Terms and conditions</a>
                  </div>


                  <div class="footer">
                    <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Sign up</Button></ThemeProvider>
                  </div>
              </div> 
              </div>  
            </FormControl>
        </div>   
    )       
}
export default RegistrationPetOwner;

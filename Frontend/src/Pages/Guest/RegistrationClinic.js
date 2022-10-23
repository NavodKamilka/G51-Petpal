import *as React from 'react';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../../Style/Guest/Login.css'

import logo from "../../Images/Logo.png";

// change the length of the textfield
// const style={
//     width: 500
// }

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


// the grey box
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'60%',
    top:10,
    width:'40%'
  }));

function RegistrationClinic() {
    // // used for input may be for password 
    // const [values, setValues] = React.useState({
    //     // amount: '',
    //     password: '',
    //     // weight: '',
    //     // weightRange: '',
    //     showPassword: false,
    //   });

    

    return(
        <div>
          <div className="box" 
             // add a shadow to the box
            style={{
            boxShadow: '1px 2px 29px #808080'}}>
            <img src={logo} alt="petpalLogo1" width={200} />
                <h1>Sign up</h1>
                <div><p>Already have an account?  <a href={'./Login'}>Login</a> </p> 
                </div>
                    <FormControl>
                        <table style={{borderSpacing: '0px 20px'}}>
                            <tr>
                                <td>
                                    <div className="clinicname">
                                    <TextField id="outlined-basic" label="Clinic Name" variant="outlined" size="small" required
                                        style={{background: "rgb(255, 255, 255)"}}/>                        
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                
                                <td>
                                    <div className="RegNumber">                 
                                        <TextField id="outlined-basic" label="Registration Number" variant="outlined" size="small" required
                                        style={{background: "rgb(255, 255, 255)"}}/>                  
                                    </div> 
                                </td>
                            </tr>

                            <tr>
                                
                                <td>
                                <div className="email">
                                    <TextField id="outlined-basic" label="Email" variant="outlined" size="small" required
                                    style={{background: "rgb(255, 255, 255)"}}/>    
                                </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                <div className="password">
                                <TextField
                                                id="outlined-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                style={{background: "rgb(255, 255, 255)"}}
                                                size="small"
                                                required
                                            />  
                                </div>  
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="confirm-password">
                                    <TextField
                                        id="outlined-password-input"
                                        label="Confirm Password"
                                        type="password"
                                        autoComplete="current-password"
                                        style={{background: "rgb(255, 255, 255)"}}
                                        size="small"
                                        required
                                        />                        
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />Agree to all <a href={'/'}>Terms and conditions</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div class="footer">
                                <ThemeProvider theme={theme}> <Button variant="contained" color='blueButton'>Sign up</Button> </ThemeProvider>                         
                                </div>
                                </td>
                            </tr>
                        </table>
                        </FormControl>
                 </div>   
            </div>
        
    )       
}
export default RegistrationClinic;
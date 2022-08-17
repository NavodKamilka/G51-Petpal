import React from 'react';
import '../../Style/Guest/Login.css'
import logo from "../../Images/Logo.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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


function Login() {
    return(
   
        <div className='regbody'>
            <img src ={logo} alt="petpalLogo" className='logo'/>
            <div className="box">
                <h1>Login</h1>
            
                <div className="form-body">
                    <TextField id="outlined-basic" label="User Name or Email" variant="outlined" 
                        style={{background: "rgb(255, 255, 255)"}}/>   
                        <br></br>
                        <br></br>  

                    <TextField id="outlined-basic" label="Password" variant="outlined" 
                        style={{background: "rgb(255, 255, 255)"}}/>    
                        <br></br>
                        <br></br>
                        <input type="checkbox" />Remember me!
                </div>

                    <br></br>
                <div class="footer">
                <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Login</Button></ThemeProvider>

                </div>
            </div>   
        </div>   
      
    )       
}
export default Login;
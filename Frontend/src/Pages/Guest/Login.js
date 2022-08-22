import React from 'react';
import '../../Style/Guest/Login.css'
import logo from "../../Images/Logo.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl } from '@mui/material';

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

function Login() {
    return(
        <div>
            <img src ={logo} alt="petpalLogo" width={200}  className='logo'/>
            <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} justifyContent="center">
                <Item style={{backgroundColor: '#9BABCF'}}>
 
                  <h1>Login</h1>
                  <FormControl>
                <table style={{borderSpacing: '0px 20px'}} >
                  <tr>
                    <td>
                      <TextField id="outlined-basic" label="User Name or Email" variant="outlined" 
                          style={{background: "rgb(255, 255, 255)"}}/>  
                    </td>   
                    </tr> 

                    <tr>
                    <td>
                    <TextField id="outlined-basic" label="Password" variant="outlined" 
                        style={{background: "rgb(255, 255, 255)"}}/>    
                    </td>   
                    </tr> 

                    <tr>
                    <td>
                        <input type="checkbox" />Remember me!
                    </td>
                </tr>

                <tr>
                    <td>
                <div class="footer">
                <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Login</Button></ThemeProvider>
               </div>
               </td>
               </tr>
               </table>
               </FormControl>
                </Item>
                </Grid>
                </Box>   
        </div>   
      
    )       
}
export default Login;
import React from "react";
import "../../Style/Guest/Login.css";
import logo from "../../Images/Logo.png";
<<<<<<< HEAD
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl } from '@mui/material';
=======
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../redux/userApiCalls";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
>>>>>>> c7cb85d52fc8a6bcdd35765a9d77162b79dbf5a4

const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
    blueButton: {
      main: "#1D168F",
      //   change the text color inside the button to another color
      contrastText: "#fff",
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
<<<<<<< HEAD
    return(
        <div>
            
            <Box sx={{ flexGrow: 1 }} >
            <img src ={logo} alt="petpalLogo" width={200}  style={{ alignSelf: 'center', marginTop:5}}  className='logo'/>
            <Grid container spacing={2} justifyContent="center">
                <Item style={{backgroundColor: '#1bbcb6'}}>
 
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
=======
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userData = {
      email: data.get("username"),
      password: data.get("password"),
    };
    console.log(userData);
    if (!userData.email) {
      alert("Username is empty!");
      // setEmailError(true);
      // setErrorMessageEmail("Username can't be empty!");
    } else if (!userData.password) {
      alert("Password is empty!");
      // setPasswordError(true);
      // setErrorMessagePassword("Password can't be empty!");
    } else {
      console.log(userData);
      await login(dispatch, userData);
      console.log("User");
      console.log(user);
      // setLoginErrorSet(userError);
      // console.log(user);
      // console.log(userError);
      // if (userError) {
      //   setLoginCancelShow(true);
      // window.location.href = "http://localhost:3000/login";
      if(error){
        alert("User login fail!");
      }else {
        navigate('/MyProfile');
      }
      // } else {
      //   setLoginShow(true);
      // }
    }
  };

  return (
    <div className="regbody">
      <img src={logo} alt="petpalLogo" className="logo" />
      <div className="box">
        <h1>Login</h1>

        <div className="form-body">
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              label="User Name or Email"
              variant="outlined"
              style={{ background: "rgb(255, 255, 255)" }}
              name="username"
              id="username"
            />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              variant="outlined"
              style={{ background: "rgb(255, 255, 255)" }}
              name="password"
              id="password"
            />
            <br></br>
            <br></br>
            <input type="checkbox" />
            Remember me!
            <br></br>
            <div class="footer">
              <ThemeProvider theme={theme}>
                <Button type="submit" variant="contained" color="blueButton">
                  Login
                </Button>
              </ThemeProvider>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
>>>>>>> c7cb85d52fc8a6bcdd35765a9d77162b79dbf5a4
}
export default Login;

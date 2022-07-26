import React from "react";
import "../../Style/Guest/Login.css";
import logo from "../../Images/loginLogo1.jpeg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../redux/userApiCalls";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

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

function Login() {
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
    
    <div className="background-container">
      <div className="box" 
        // add a shadow to the box
          // style={{
          // boxShadow: '1px 2px 29px #808080' }}
          >
        <img class='login-logo' src={logo} alt="petpalLogo1" width={200} height={190} />
        <h1 class='h1'style={{ marginTop:'-25px'}}>Login</h1>
      
        <div className="form-body">
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1  }}
          >
            <TextField
              label="User Name or Email"
              variant="outlined"
              size="small"
              style={{ background: "rgb(255, 255, 255)" }}
              name="username"
              id="username"
            />
            <br></br>
            <br></br>
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              style={{ background: "rgb(255, 255, 255)" }}
              name="password"
              id="password"
            />
            <br></br>
            <br></br>
            {/* <input type="checkbox" /> */}
            <a href="#forgotPassword.js">Forgot password?</a>
            <br></br>
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
}
export default Login;
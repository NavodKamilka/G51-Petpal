import * as React from "react";
import TextField from "@mui/material/TextField";
// import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import axios from "axios";
import logo from "../../Images/loginLogo1.jpeg";
import { addUser } from "../../redux/userApiCalls";
import { useDispatch, useSelector } from "react-redux";
import '../../Style/Guest/registrationStyle.css'
import {InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {SelectChangeEvent} from "@mui/material/Select";

//change the length of the textfield
// const style={
//     width: 500
// }

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


function RegistrationPetOwner() {

  const [nameReg, setNameReg] = React.useState("");
  const [emailReg, setEmailReg] = React.useState("");
  const [userTypeReg, setUserTypeReg] = React.useState("");
  const [passwordReg, setpasswordReg] = React.useState("");


    const handleUserTypeChange = (e: SelectChangeEvent) => {
        setUserTypeReg(e.target.value);
    };


  const disptach = useDispatch();



  const register = async () => {

    if(!nameReg){
        alert("Username is empty!!");
    }else if(!emailReg){
        alert("Email is empty!!");
    }else if(!passwordReg){
        alert("Password is empty!!");
    }else {
        const userData = {
            name: nameReg,
            email: emailReg,
            password: passwordReg,
            userRole:userTypeReg,
        }
        console.log(userData);
        await addUser(userData,disptach);
    }
  };

  return (
    <div className="background-container">
           <div className="box">
            <img class='login-logo' src={logo} alt="petpalLogo1" width={200} />
            <h1 class='h1'style={{ marginTop:'-25px'}}>Sign up</h1>
            <div>
              <p>
                Already have an account? <a href={"/"}>Login</a>{" "}
              </p>
            </div>
            <FormControl>
              <table>
                  <tr>
                      <td>
                              <InputLabel id="demo-simple-select-label" style={{marginLeft:'20px',marginBottom:'10px'}}>User Type</InputLabel>
                                  <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={userTypeReg}
                                      label="User Type"
                                      style={{width:'219px',height:'45px'}}
                                      variant='outlined'
                                      onChange={(e)=>handleUserTypeChange(e)}
                                  >
                                      <MenuItem value={'petowner'}>Pet Owner</MenuItem>
                                      <MenuItem value={'clinic'}>Clinic</MenuItem>
                                      <MenuItem value={'shop'}>Shop</MenuItem>
                                      <MenuItem value={'doctor'}>Doctor</MenuItem>
                                  </Select>
                      </td>
                  </tr>
                  <br/>
                <tr style={{marginTop:'100px'}}>
                  <td>
                    <div className="firstname">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        style={{ background: "rgb(255, 255, 255)" }}
                        required
                        onChange={(e) => {
                          setNameReg(e.target.value);
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <br/>
                <tr>
                  <td>
                    <div className="email">
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        required
                        style={{ background: "rgb(255, 255, 255)" }}
                        onChange={(e) => {
                          setEmailReg(e.target.value);
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <br/>

                <tr>
                  <td>
                    <div className="password">
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                        style={{ background: "rgb(255, 255, 255)" }}
                        size="small"
                        onChange={(e) => {
                          setpasswordReg(e.target.value);
                        }}
                      />
                    </div>
                  </td>
                </tr>
                        <br/>
                <tr>
                  <td>
                    <input type="checkbox" />
                    Agree to all <a href={"/"}>Terms and conditions</a>
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td>
                    <div class="footer">
                      <ThemeProvider theme={theme}>
                        {" "}
                        <Button
                          variant="contained"
                          color="blueButton"
                          onClick={register}
                        >
                          Sign up
                        </Button>
                      </ThemeProvider>
                    </div>
                  </td>
                </tr>
              </table>
            </FormControl>
            </div>
          {/* </Item>
        </Grid> */}
      {/* </Box> */}
    </div>
  );
}
export default RegistrationPetOwner;
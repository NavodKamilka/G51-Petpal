import * as React from "react";
import TextField from "@mui/material/TextField";
// import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import logo from "../../Images/Logo.png";
import { addUser } from "../../redux/userApiCalls";
import { useDispatch, useSelector } from "react-redux";

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

// the grey box
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(0.2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 650,
  top: 10,
  width: "40%",
}));

function RegistrationPetOwner() {
  // // used for input may be for password
  // const [values, setValues] = React.useState({
  //     // amount: '',
  //     password: '',
  //     // weight: '',
  //     // weightRange: '',
  //     showPassword: false,
  //   });
  const [nameReg, setNameReg] = React.useState("");
  const [emailReg, setEmailReg] = React.useState("");
  const [passwordReg, setpasswordReg] = React.useState("");

  const disptach = useDispatch();

  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setpassword] = React.useState("");

  const register = async () => {
    // axios
    //   .post("http://localhost:3001/api/register", {
    //     name: nameReg,
    //     email: emailReg,
    //     password: passwordReg,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   });
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
        }
        console.log(userData);
        await addUser(userData,disptach);
    }
  };

  return (
    <div style={{ backgroundColor: "#CEFFFC" }}>
      <img src={logo} alt="petpalLogo" style={{ float: "left" }} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Item style={{ backgroundColor: "#9BABCF" }}>
            <h1>Sign up</h1>
            <div>
              <p>
                Already have an account? <a href={"/"}>Login</a>{" "}
              </p>
            </div>
            <FormControl>
              <table>
                {/* <tr> 
                            <td>
                                <TextField
                                    value={value}
                                    // onChange={(e) => setValue(e.target.value)}
                                    select // tell TextField to render select
                                    label="Pet Type"
                                    style={style}
                                    onChange={handleChange}
                                    >  
                                    
                                    <MenuItem value={'Dog'}>Dog</MenuItem>
                                    <MenuItem value={'Puppy'}>Puppy</MenuItem>
                                    <MenuItem value={'Cat'}>Cat</MenuItem> 
                                    <MenuItem value={'Kitten'}>Kitten</MenuItem>
                                    <MenuItem value={'Rabbit'}>Rabbit</MenuItem>
                                    <MenuItem value={'Parrot'}>Parrot</MenuItem>
                                    <MenuItem value={'Guenia pig'}>Guenia pig</MenuItem>
                                    <MenuItem value={'Fish'}>Fish</MenuItem>
                                </TextField>
                        
                            </td>
                        </tr> */}

                <tr>
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

                {/* <tr>
                            
                            <td>
                            <div className="lastname">                 
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                style={{background: "rgb(255, 255, 255)"}}/>  
                            </div>
                            </td>
                        </tr> */}

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

                {/* <tr>
                            <td>
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
                            </td>
                        </tr> */}
                <tr>
                  <td>
                    <input type="checkbox" />
                    Agree to all <a href={"/"}>Terms and conditions</a>
                  </td>
                </tr>
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
          </Item>
        </Grid>
      </Box>
    </div>
  );
}
export default RegistrationPetOwner;

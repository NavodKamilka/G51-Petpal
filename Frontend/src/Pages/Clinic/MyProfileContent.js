// import React, { useState, useEffect} from 'react';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// // import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// //import Link from '@mui/material/Link';


// import '../../Style/Clinic/MyProfile/MyProfileContent.css'

// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';

// import Profile from '../../Images/vet1.png'


// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

// import { useLocation } from 'react-router-dom';
// import Axios from "axios";










// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height:850,
//     top:10
    
//   }));

//   const theme = createTheme({
//     palette: {
//       //name given as view, update and delete to declare buttons
//       blueButton: {
//         main: '#1D168F',
//       //   change the text color inside the button to another color
//         contrastText: "#fff" 
//       } ,     
//     },
//   });


//   export default function  MyProfileContent() {
//     const oneDoctor = useLocation();
//     const DocID = oneDoctor.state.id;

//     const[doctorList, setDoctorList]=useState([]);
 
//     // here we don't have to click any button to display data
//     useEffect(() =>{
//         Axios.get(`http://localhost:3001/api/Doctor/getOneDoctor/${DocID}`).then((response)=>{
//         setDoctorList(response.data.data);   
//         });
//   }, [oneDoctor.state.id]);

  
//     // const [value1, setValue1] = React.useState('Janaki Collure');
//     // const [value2, setValue2] = React.useState('JanakiCollure@gmail.com');
//     // // const [value3] = React.useState('HelloNavod');
//     // const [value4, setValue4] = React.useState('0778393860');
//     // const [value5, setValue5] = React.useState('79-8564');

//     // const handleChange1 = (event) => {
//     //   setValue1(event.target.value);
//     // };
//     // const handleChange2 = (event) => {
//     //   setValue2(event.target.value);
//     // };
//     // // const handleChange3 = (event) => {
//     // //   setValue3(event.target.value);
//     // // };
//     // const handleChange4 = (event) => {
//     //   setValue4(event.target.value);
//     // };
//     // const handleChange5 = (event) => {
//     //   setValue5(event.target.value);
//     // };



//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
        
//           <Item>

//           <img src={Profile}  alt="Logo" height='370' className='image' style={{
//           marginLeft: '-55%',
//           marginTop:40

          
        
//         }}/>

//           <IconButton color="primary" aria-label="upload picture" component="label" style={{
//                 left:'-15.5%',
//                 top:40
//           }}>
//                             <input hidden accept="image/*" type="file" />
//                             <PhotoCamera />
//           </IconButton>

          
              

//               <Box 
                  
//                   sx={{
//                     '& .MuiTextField-root': {top:-380, left:'50%', width: '42%' },
//                   }}
//                   noValidate
//                   autoComplete="off"
//                 >
                  
//             <div>
//               <Stack 
//                 spacing={2}
//               >
//               {doctorList.map((oneDoctor) => {
//                return(

//                 <table key={oneDoctor.id}>
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Doctor Name"
//                 multiline
//                 maxRows={4}
//                 value={oneDoctor.DoctorName}
//                 //onChange={handleChange1}
//               /><br/>
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Register Number"
//                 multiline
//                 maxRows={4}
//                 value={oneDoctor.RegNo}
//                 //onChange={handleChange2}
//               />
//                <br/>
//               {/* <TextField
//                 id="outlined-multiline-flexible"
//                 label="Password"
//                 multiline
//                 maxRows={4}
//                 value={value3}
//                 onChange={handleChange3}
//               /> 
//               // <br/> */}
//               {/* <br/>
              
//               <FormControl sx={{ m: 1, width: '42%' }} variant="outlined" style={{top:-400, left:'50%'}}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={values.showPassword ? 'text' : 'password'}
//                   // value={values.password}
//                   value={value3}
//                   onChange={handleChange('password')}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Password"
//                 />
//               </FormControl> <br/> */}
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Qualification"
//                 multiline
//                 maxRows={4}
//                 value={oneDoctor.Qualification}
//                 //onChange={handleChange4}
//               /><br/>
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Email Address"
//                 multiline
//                 maxRows={4}
//                 value={oneDoctor.Email}
//                 //onChange={handleChange5}
//               /> 
//             </table>
//               )
//                 })}
//               </Stack>
//             </div>
            
//           </Box>
//           <Stack spacing={10} direction="row" style={{
//             marginLeft:'34%',
//             marginTop: -280
//           }}>
//               <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain' color='blueButton'>Save Changes</Button></ThemeProvider>
//               <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain'color='blueButton'>Cancel</Button></ThemeProvider>
//           </Stack>
//           <Stack spacing={20} direction="row" style={{
//             // left:'-45%',
//             marginLeft:'10%',
//             marginRight:'10%',
//             marginTop: 120
//           }}>
//             {/* <img src={alex}  alt="Logo" height='70%' width={'24%'} className='image'/>
//             <img src={tom}  alt="Logo" height='50%' width={'22%'} className='image'/>
//             <img src={wicky}  alt="Logo" height='70%' width={'24%'} className='image'/> */}
             
//           </Stack>

//           <Stack spacing={45} direction="row" style={{
//             // left:'-45%',
//             marginLeft:'18%',
//             marginRight:'10%',
//             marginTop: 20
//           }}>
//             {/* <Link href="/PetProfile/Alex">Alex</Link>
//             <Link href="#">Tomm</Link>
//             <Link href="#">Wicky</Link> */}
             
//           </Stack>
//           {/* <br/><br/><br/>
//           <Button variant="contained">Add New Pet</Button> */}
//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//     </div>
//   )
// }

// export default MyProfileContent


import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { blueGrey } from '@mui/material/colors';
import '../../Style/Shop/ShopProfile.css'

import { useLocation } from 'react-router-dom';
import Axios from "axios";



//change the length of the textfield
const style={
    width: 500
}

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blackButton: {
        main: '#000000',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      },
      blueButton: {
        main: '#1D168F',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      },
    },
  });

// the box-grey
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:700,
    top:10,
  }));
  
function ViewDoctor({DocID}) {
    const oneDoctor = useLocation();
    // const oneDoctor ="";
    // const DocID = oneDoctor.state.id;

    const[doctorList, setDoctorList]=useState([]);
//  console.log(DocID);
    // here we don't have to click any button to display data
    useEffect(() =>{
        
        Axios.get(`http://localhost:3001/api/Doctor/getOneDoctor/${DocID}`).then((response)=>{setDoctorList(response.data.data)})
        console.log(doctorList)
  }, [DocID]);
 


    return(
        <div>
            <br></br>
             <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Doctor Details</h3>
            <Divider />
            <FormControl>
            {doctorList.map((oneDoctor) => {
              //console.log(oneDoctor.RegNo)
            //   console.log("oneDoctor.RegNo")
            return(
                
                <table key={oneDoctor.id}>
                    <tr> 
                        <td ><TextField 
                            id="outlined-helperText"
                            label="Doctor Name"
                            value={oneDoctor.DoctorName}
                            
                            style={style}
                            // change the lenght of the text field
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Register Number"
                            style={style}
                            value={oneDoctor.RegNo}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Qualification"
                            style={style}
                            value={oneDoctor.Qualification}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Email Address"
                            value={oneDoctor.Email}
                            style={style}
                           
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <TextField
                            id="outlined-helperText"
                            label="Mobile Number"
                            value={oneDoctor.TelNum}
                            style={style}
                            //sx={{ width: 250 }}
                            // helperText="Some important text"
                            />

                            {/* <TextField
                            id="outlined-helperText"
                            label="Available Quantity"
                            value={oneFood.availableQty}
                            sx={{ width: 250 }}
                            //   helperText="Some important text"
                            /> */}
                        </td>
                    </tr>
                    <br></br>
                    {/* <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                value={oneFood.description}
                                style={style}
                                // sx={{ width: 500 }}
                            />
                        </td>
                    </tr>
                    <br></br> */}
                    <tr>
                        {/* upload pet image */}
                        <p>upload product image</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[600] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>
                    <br></br>
                    {/* <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3} >

                        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'>Add</Button></ThemeProvider>

                    </Stack>
                    </tr> */}
                     <Stack spacing={8} direction="row" style={{
                        marginLeft:'30%',
                        marginTop: 25
                    }}>
              <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain' color='blueButton' >Update</Button></ThemeProvider>
              <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain'color='blueButton'>Cancel</Button></ThemeProvider>
              
          </Stack>
                </table>

                )
                })}
                </FormControl>
                </Item>
                </Grid>
                </Box>

            </div>
        
    )       
}
export default ViewDoctor;
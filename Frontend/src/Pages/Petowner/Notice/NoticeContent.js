import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleIcon from '@mui/icons-material/AddCircle';

// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Typography } from "@mui/material";

import BloodNotice from '../../../Images/BloodNotice.jpg'
import Micro from '../../../Images/Micro.jpg'
import { Typography } from "@mui/material";







// let items=[BloodNotice,BloodNotice,BloodNotice,BloodNotice,BloodNotice];

// let itemList=[];
// items.forEach((item,index)=>{
//   itemList.push( <li key={index}>{item}</li>)
// })





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 2000,
  top: 10,
}));

export default function PetSellContent() {

  // const images = [
  //   { id: 1, src: '../../../Images/BloodNotice.png', title: 'foo', description: 'bar' },
  //   { id: 2, src: '../../../Images/BloodNotice2.png', title: 'foo', description: 'bar' },
  //   { id: 3, src: '../../../Images/BloodNotice.png', title: 'foo', description: 'bar' },
    
  
  // ];
  const n1 = [BloodNotice,Micro,BloodNotice]

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  
  // function filterFunction() {
  //   var input, filter, ul, li, a, i;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // }

  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
            <Stack
                spacing={40}
                direction="row"
                marginLeft={10}
                sx={{ marginTop: 4 }}
              >
                <Button
                  variant="contained"
                  href="Notice/PostNotice"
                  endIcon={<AddCircleIcon />}
                >
                  Post Notice
                </Button>    

                 
              </Stack>
              
              
              {/* <div className="dropdown">
                  <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                  <div id="myDropdown" className="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                    <a href="#about">About</a>
                    <a href="#base">Base</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                    <a href="#custom">Custom</a>
                    <a href="#support">Support</a>
                    <a href="#tools">Tools</a>
                  </div>
                </div> */}

                <FormControl sx={{top:-50, left:300, m: 1, width: "40%" }}>
                  <InputLabel id="demo-simple-select-label">Notice Category</InputLabel>
                  <Select
                    // inputProps={'40%'}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Notice Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Lost</MenuItem>
                    <MenuItem value={20}>Blood Request</MenuItem>
                    <MenuItem value={30}>Breeding</MenuItem>
                    <MenuItem value={30}>Vaccination</MenuItem>
                    <MenuItem value={30}>Donation/Volunteering</MenuItem>
                    <MenuItem value={30}>Adoption</MenuItem>
                    <MenuItem value={30}>Rescue Program(Evevnts)</MenuItem>
                  </Select>
                </FormControl> 

                <br/><br/><br/>

                
                  <Typography variant="h5">Pet Vaccination Clinic</Typography> <br/><br/>
                  <img src={n1[0]}  alt="Logo" height='800' width={'50%'}/> <br/><br/><br/>

                  <Typography variant="h5">Get Me Vaccinated And Michrochipped</Typography> <br/><br/>
                  <img src={n1[1]}  alt="Logo" height='800' width={'50%'}/>

                 
                {/* <Stack>
                  
                   
                   {[...Array(n1.length)].map((index) => ( 
                        
                        <img src={n1[index]}  alt="Logo"/> 

                      ) 
                    )}

                </Stack> */}



            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

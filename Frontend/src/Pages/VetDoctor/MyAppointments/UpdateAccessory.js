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
import '../../../Style/Shop/ShopProfile.css'

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
    height:800,
    top:10,
  }));
  
function UpdateAccessory() {
    const oneAccessory = useLocation();
    const accessoryId = oneAccessory.state.AppointmentID;
    const[accessoryList, setAccessoryList]=useState([]);
   
  
    const[newPricePerOne, setNewPricePerOne]=useState([]);
    const[newTotalQty, setNewTotalQty]=useState([]);
    
    


     // here we don't have to click any button to display data
    useEffect(() =>{
        Axios.get(`http://localhost:3001/api/vetappointment/getSelectedDetails/${accessoryId}`).then((response)=>{
            setAccessoryList(response.data.data);   
            const x = response.data.data;
            x.map((val)=>{
                newPricePerOne.push(val.Description);
                newTotalQty.push(val.Prescription)
            });
        });
    }, [oneAccessory.state.id]);
 

  //update function to update one food item
  const updateOneAccessory=(event)=>{
    Axios.put("http://localhost:3001/api/vetappointment/insertHealthRecord",{
        Description: newPricePerOne, 
        Prescription:newTotalQty,
        AppointmentID:accessoryId,
    }).then((response)=>{
        alert('Updated successfully');
    });
  }

    return(
        <div>
            <br></br>
             <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Health record</h3>
            <Divider />
            <FormControl>
            {accessoryList.map((oneAccessory) => {
            return(

                <table key ={oneAccessory.id}>
                    
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Product Name"
                            style={style}
                            value={oneAccessory.Description}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Price per 1 (Rs)"
                            // defaultValue={oneAccessory.pricePerOne}
                            style={style}
                            value={oneAccessory.Prescription}
                                
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
  
                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3} >

                        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' onClick={()=>(updateOneAccessory())}>Update</Button></ThemeProvider>

                    </Stack>
                    </tr>
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
export default UpdateAccessory;
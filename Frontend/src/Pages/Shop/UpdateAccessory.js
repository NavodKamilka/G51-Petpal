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
    height:800,
    top:10,
  }));
  
function UpdateAccessory() {
    const oneAccessory = useLocation();
    const accessoryId = oneAccessory.state.id;
    const[accessoryList, setAccessoryList]=useState([]);
    // newTotalQty = accessoryList.totalQty;
    // newPricePerOne = accessoryList.pricePerOne;
    // newAvailableQty = accessoryList.availableQty;
    
    //get new values to be updated in food table (only totalQty, availableQty and pricePerOne)
  
    const[newPricePerOne, setNewPricePerOne]=useState([]);
    const[newTotalQty, setNewTotalQty]=useState([]);
    const[newAvailableQty, setNewAvailableQty]=useState([]);
    
    


     // here we don't have to click any button to display data
    useEffect(() =>{
        Axios.get(`http://localhost:3001/api/shop/getOneAccessory/${accessoryId}`).then((response)=>{
            setAccessoryList(response.data.data);   
            const x = response.data.data;
            x.map((val)=>{
                newPricePerOne.push(val.pricePerOne);
                newTotalQty.push(val.totalQty)
                newAvailableQty.push(val.availableQty)
            });
        });
    }, [oneAccessory.state.id]);
 

  //update function to update one food item
  const updateOneAccessory=(event)=>{
    Axios.put("http://localhost:3001/api/shop/updateOneAccessory",{
        pricePerOne: newPricePerOne, 
        totalQty:newTotalQty,
        availableQty:newAvailableQty,
        accessoryId:accessoryId,
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
            <h3>Product Details</h3>
            <Divider />
            <FormControl>
            {accessoryList.map((oneAccessory) => {
            return(

                <table key ={oneAccessory.id}>
                    {/* <tr> 
                        <td><TextField 
                            id="outlined-helperText"
                            label="Brand"
                            value={oneFood.brand}
                            
                            style={style}
                            // change the lenght of the text field
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br> */}
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Product Name"
                            style={style}
                            value={oneAccessory.name}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>

                    {/* <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Weight"
                            value={oneFood.weight}
                            style={style}

                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr> */}
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Price per 1 (Rs)"
                            defaultValue={oneAccessory.pricePerOne}
                            style={style}
                            onChange={(event)=>{
                                setNewPricePerOne(event.target.value);
                                
                            }}
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
                            label="Total Quantity"
                            defaultValue={oneAccessory.totalQty}
                            sx={{ width: 250 }}
                            onChange={(event)=>{
                                setNewTotalQty(event.target.value)
                            }}
                            // helperText="Some important text"
                             />

                            <TextField
                            id="outlined-helperText"
                            label="Available Quantity"
                            defaultValue={oneAccessory.availableQty}
                            sx={{ width: 250 }}
                            onChange={(event)=>{
                                setNewAvailableQty(event.target.value)
                            }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                value={oneAccessory.description}
                                style={style}

                                // sx={{ width: 500 }}
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        {/* upload pet image */}
                        <p>upload product image</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[900] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>
                    <br></br>
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
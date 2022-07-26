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

import { useLocation, useNavigate } from 'react-router-dom';
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
  
function UpdateProduct() {
    const oneFood = useLocation();
    const foodId = oneFood.state.id;
    const[foodList, setFoodList]=useState([]);

    //get new values to be updated in food table (only totalQty, availableQty and pricePerOne)
    const[newPricePerOne, setNewPricePerOne]=useState([]);
    const[newTotalQty, setNewTotalQty]=useState([]);
    const[newAvailableQty, setNewAvailableQty]=useState([]);

    //to redirect to foodTableFinal.js page
    const navigate = useNavigate();

     // here we don't have to click any button to display data
     useEffect(() =>{
        Axios.get(`http://localhost:3001/api/shop/getOneFood/${foodId}`).then((response)=>{
        setFoodList(response.data.data); 
        const x = response.data.data;
        x.map((val)=>{
            newPricePerOne.push(val.pricePerOne);
            newTotalQty.push(val.totalQty)
            newAvailableQty.push(val.availableQty)
        });
        });
  }, [oneFood.state.id]);
 

  //update function to update one food item
  const updateOneFood=(event)=>{
    Axios.put("http://localhost:3001/api/shop/updateOneFood",{
        pricePerOne: newPricePerOne, 
        totalQty:newTotalQty,
        availableQty:newAvailableQty,
        foodId:foodId
    }).then((response)=>{
        alert('Updated successfully');
        navigate('/FoodTableFinal');
        
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
            {foodList.map((oneFood) => {
            return(

                <table key ={oneFood.id}>
                    <tr> 
                        <td><TextField 
                            disabled
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
                    <br></br>
                    <tr>
                        <td><TextField
                            disabled
                            id="outlined-helperText"
                            label="Product Name"
                            style={style}
                            value={oneFood.name}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                            disabled
                            id="outlined-helperText"
                            label="Weight"
                            value={oneFood.weight}
                            style={style}

                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Price per 1 (Rs)"
                            defaultValue={oneFood.pricePerOne}
                            style={style}
                            onChange={(event)=>{
                                setNewPricePerOne(event.target.value)
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
                            defaultValue={oneFood.totalQty}
                            sx={{ width: 250 }}
                            style={style}
                            onChange={(event)=>{
                                setNewTotalQty(event.target.value)
                            }}
                            // helperText="Some important text"
                            />

                            {/* <TextField
                            id="outlined-helperText"
                            label="Available Quantity"
                            defaultValue={oneFood.availableQty}
                            sx={{ width: 250 }}
                            onChange={(event)=>{
                                setNewAvailableQty(event.target.value)
                            }}
                            //   helperText="Some important text"
                            /> */}
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><TextField
                                disabled
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

                        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' onClick={()=>(updateOneFood())}>Update</Button></ThemeProvider>

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
export default UpdateProduct;
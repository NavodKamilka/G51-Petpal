import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import Grid from '@mui/material/Grid';
//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from "axios";
import SearchBar from '../../Components/SearchBar';

import {Link} from 'react-router-dom'




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
    addButton: {
      main: '#005A2B',
      contrastText: "#fff"
    },
    view: {
      main: '#63B8BB',
      contrastText: "#fff"
    },
    update: {
      main: '#059862',
      contrastText: "#fff"
    },
    delete: {
      main: '#f00e0e',
      contrastText: "#fff"
    },
  },
});




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#A689FC',
    color: theme.palette.common.black,
    fontSize: 15,
    fontWeight:'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  // },
}));






// function createData(ProductImage, ProductName, PricePerOne, AvailableQty, LastUpdate) {
//   return { ProductImage, ProductName, PricePerOne, AvailableQty, LastUpdate};
// }

// const rows = [
//   createData(<img src ={toy} alt="toy" style={{width:'25%', height:'25%'}}/>,'Embark Dog Toy Bone', 750.00, 5, '21-08-2022'),
//   createData(<img src ={dogCollar} alt="toy" style={{width:'25%', height:'25%'}}/>,'Iydia - Delicate Safety Casual Nylon Dog, Cat Camo Collar Neck Strap Belt', 690.00, 1, '21-08-2022'),
// ];

export default function AccessoriesTable() {
  const[accList, setAccList]=useState([]);

  
// here we don't have to click any button to display data
useEffect(() =>{
  Axios.get("http://localhost:3001/api/shop/getAllAccessories").then((response)=>{
  setAccList(response.data.data);   
  console.log(response);
  });
}, []);


//delete one accessory item
const deleteOneAccessory=(accessoryId)=>{
  //".then()" will refresh the page after one accessory item is deleted. 
  Axios.delete(`http://localhost:3001/api/shop/deleteOneAccessory/${accessoryId}`).then((response) => {
    setAccList(accList.filter((val)=>{
      return val.accessoryId !== accessoryId
    }))
  })
}
  return (
    <div>  
        <SearchBar/> 
        
      <h1>Product Details</h1>
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/FoodTableFinal'>Food</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href='/AccessoriesTableFinal' >Accessories</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/SkinCareTableFinal'>Skin care</Button></ThemeProvider>
      </Stack>

      <br></br>
    
   {/* align the 'add product' button to the right */}
   <Stack  justifyContent="right" spacing={10} direction="row">    

<ThemeProvider theme={theme}>
  <Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="addButton" href='./AddProductFinal'>Add Product</Button>
</ThemeProvider> 


</Stack> 
  <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Product Image</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">Price per 1 (Rs)</StyledTableCell>
            <StyledTableCell align="left">Available quantity</StyledTableCell>
            <StyledTableCell align="left">Last update</StyledTableCell>
            {/* <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {accList.map((val) => {
          return(
            <StyledTableRow key={val.name}> 
              <StyledTableCell align="left"><img src={val.accessoryImage} alt="accessory" style={{width:'25%', height:'25%'}}/></StyledTableCell>
              <StyledTableCell align="left">{val.name}</StyledTableCell>
              <StyledTableCell align="left">{val.pricePerOne}</StyledTableCell>
              <StyledTableCell align="left">{val.availableQty}</StyledTableCell>
              <StyledTableCell align="left">{val.lastUpdate}</StyledTableCell>
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view" component={Link} to={"/ViewAccessoryFinal"} state={{id:val.accessoryId}}>View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update" component={Link} to={"/UpdateAccessoryFinal"} state={{id:val.accessoryId}}>Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete" onClick={()=>deleteOneAccessory(val.accessoryId)}>Delete</Button></ThemeProvider></StyledTableCell>

            </StyledTableRow>
          )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

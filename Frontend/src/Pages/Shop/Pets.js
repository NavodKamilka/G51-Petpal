// pet details table
import React, { useState, useEffect }  from 'react';
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchBar from '../../Components/SearchBar';
import Stack from '@mui/material/Stack';


// import {Grid} from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Axios from "axios";
import {Link} from 'react-router-dom'


//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
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
    backgroundColor: '#d0f0e9',
    color: theme.palette.common.black,
    fontSize: 20,
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







// function createData(PetImage, PetType, Breed, PricePerOne, AvailableQty, LastUpdate) {
//   return { PetImage, PetType, Breed, PricePerOne, AvailableQty, LastUpdate};
// }

// const rows = [
//   createData('pet image','Puppy', 'Labrador', 45000, 5, '24-07-2022'),
//   createData('pet image','Puppy', 'German Shepherd', 25000, 1,'25-07-2022'),
// ];

export default function Pets() {

  const[petList, setPetList]=useState([]);

  useEffect(() =>{
    Axios.get("http://localhost:3001/api/shop/getAllPets").then((response)=>{
      setPetList(response.data.data);   
    console.log(response);
    });
  }, []);
  

  return (
    <Box>
      <SearchBar/>

  
      <h1>Pet Details</h1>
      <br></br>
      
    
   
      {/* align the 'add product' button to the right */}
      <Stack  justifyContent="right" spacing={10} direction="row">    
        <ThemeProvider theme={theme}>
          <Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="addButton" href='./AddPetFinal'>Add Pet</Button>
        </ThemeProvider> 
      </Stack>  
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Pet image</StyledTableCell>
            <StyledTableCell align="left">Pet Type</StyledTableCell>
            <StyledTableCell align="left">Breed </StyledTableCell>
            <StyledTableCell align="left">Price per 1 (Rs)</StyledTableCell>
            <StyledTableCell align="left">Available quantity</StyledTableCell>
            <StyledTableCell align="left">Last update</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {petList.map((val) => {
            return(
              console.log(val),
            <StyledTableRow> 
              <StyledTableCell align="left"><img src={val.petImage} alt="food" style={{width:'25%', height:'25%'}}/></StyledTableCell>
              <StyledTableCell align="left">{val.petType}</StyledTableCell>
              <StyledTableCell align="left">{val.breed}</StyledTableCell>
              <StyledTableCell align="left">{val.pricePerOne}</StyledTableCell>
              <StyledTableCell align="left">{val.availableQty}</StyledTableCell>
              <StyledTableCell align="left">{val.lastUpdate}</StyledTableCell>
              <StyledTableCell align="left">{val.description}</StyledTableCell>

              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view" component={Link} to={"/ViewPetFinal"} state={{id:val.petId}}>View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update">Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete">Delete</Button></ThemeProvider></StyledTableCell>

            </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

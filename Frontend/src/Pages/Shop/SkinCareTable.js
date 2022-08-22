import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
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

// import { Grid} from "@material-ui/core";
import Grid from '@mui/material/Grid';


//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchBar from '../../Components/SearchBar';

import shampoo from "../../Images/shampoo.jpg";

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






function createData(ProductImage, Brand, ProductName, weight, PricePerOne, AvailableQty, LastUpdate) {
    return { ProductImage, Brand, ProductName, weight, PricePerOne, AvailableQty, LastUpdate};
  }
const rows = [
//   createData(<img src ={toy} alt="toy" style={{width:'25%', height:'25%'}}/>,'Embark Dog Toy Bone', 750.00, 5, '21-08-2022'),
//   createData(<img src ={dogCollar} alt="toy" style={{width:'25%', height:'25%'}}/>,'Iydia - Delicate Safety Casual Nylon Dog, Cat Camo Collar Neck Strap Belt', 690.00, 1, '21-08-2022'),
    createData(<img src ={shampoo} alt="shampoo" style={{width:'25%', height:'25%'}}/>,'Petma', 'Grooming shampoo', '250ml', 250, 20,'25-07-2022'),
];

export default function Products() {
  return (
    <div>  
        <SearchBar/> 
        
      <h1>Product Details</h1>
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/FoodTableFinal'>Food</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/AccessoriesTableFinal' >Accessories</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href='/SkinCareTableFinal'>Skin care</Button></ThemeProvider>
      </Stack>

      <br></br>
    
   
      {/* align the 'add product' button to the right */}
      <Grid style={{align:'right'}}><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="addButton" href='./AddUpdateProductFinal'>Add Product</Button></ThemeProvider>  </Grid>  
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Product Image</StyledTableCell>
            <StyledTableCell align="left">Brand</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="left">Weight</StyledTableCell>
            <StyledTableCell align="left">Price per 1 (Rs)</StyledTableCell>
            <StyledTableCell align="left">Available quantity</StyledTableCell>
            <StyledTableCell align="left">Last update</StyledTableCell>
            {/* <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}> 
              <StyledTableCell align="left">{row.ProductImage}</StyledTableCell>
              <StyledTableCell align="left">{row.Brand}</StyledTableCell>
              <StyledTableCell align="left">{row.ProductName}</StyledTableCell>
              <StyledTableCell align="left">{row.weight}</StyledTableCell>
              <StyledTableCell align="left">{row.PricePerOne}</StyledTableCell>
              <StyledTableCell align="left">{row.AvailableQty}</StyledTableCell>
              <StyledTableCell align="left">{row.LastUpdate}</StyledTableCell>
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view">View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update">Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete">Delete</Button></ThemeProvider></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

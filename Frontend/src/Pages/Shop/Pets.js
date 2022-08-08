import * as React from 'react';
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
import SearchBar from '../../components/SearchBar';


import { Grid} from "@material-ui/core";



//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
    view: {
      main: '#63B8BB',
    },
    update: {
      main: '#1C884C',
    },
    delete: {
      main: '#F5222D',
    },
  },
});




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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







function createData(PetImage, PetType, Breed, PricePerOne, AvailableQty, LastUpdate) {
  return { PetImage, PetType, Breed, PricePerOne, AvailableQty, LastUpdate};
}

const rows = [
  createData('prod image','Puppy', 'Labrador', 45000, 5, '24-07-2022'),
  createData('prod image','Puppy', 'German Shepherd', 25000, 1,'25-07-2022'),
];

export default function Products() {
  return (
    <div>
      <SearchBar/>

  
      <h1>Pet details</h1>
      <br></br>
      
    
   
      {/* align the 'add product' button to the right */}
      <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Pet</Button></ThemeProvider>  </Grid>  

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
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}> 
              <StyledTableCell align="left">{row.PetImage}</StyledTableCell>
              <StyledTableCell align="left">{row.PetType}</StyledTableCell>
              <StyledTableCell align="left">{row.Breed}</StyledTableCell>
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

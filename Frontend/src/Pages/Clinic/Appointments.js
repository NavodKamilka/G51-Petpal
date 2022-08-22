import * as React from 'react';
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

// import { Grid} from "@material-ui/core";


//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchBar from '../../Components/SearchBar.js';

const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons
    foodButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    accessoriesButton: {
      main: '#1D168F',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
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






function createData(DoctorName, NoOfAppointments) {
  return {DoctorName,NoOfAppointments};
}

const rows = [
  createData('Dr.Dayani Siriwardane','03'),
  createData('Dr.Janaki Collure','02'),
  createData('Dr.Ashan Perera','01'),
];

export default function Appointments() {
  return (
    <div>  
        <SearchBar/> 
        
      {/* <h1>Product details</h1> */}
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      
      <ThemeProvider theme={theme}><Button variant="contained" href='/DoctorMain' color='accessoriesButton'>Doctors</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" href='/AppointmentMain' color='foodButton'>Make Appointments</Button></ThemeProvider>
      </Stack>

      <br></br>
    
   
      {/* align the 'add product' button to the right */}
      {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Product</Button></ThemeProvider>  </Grid>   */}

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Doctor Name</StyledTableCell>
            <StyledTableCell align="left">No of Appointments</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            {/* <StyledTableCell align="left"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}> 
              <StyledTableCell align="left">{row.DoctorName}</StyledTableCell>
              <StyledTableCell align="left">{row.NoOfAppointments}</StyledTableCell>
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view">View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update">Add</Button></ThemeProvider></StyledTableCell>
              {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete">Blocked</Button></ThemeProvider></StyledTableCell> */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

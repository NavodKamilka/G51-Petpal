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
//import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

// import { Grid} from "@material-ui/core";
//import Grid from '@mui/material/Grid';


//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';

//import SearchBar from '../../Components/SearchBar';

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
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
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






function createData(PetOwnerName, PetOwnerNo, RequiredDate, RequiredTime, PetDes) {
  return {PetOwnerName, PetOwnerNo, RequiredDate, RequiredTime, PetDes};
}

const rows = [
  createData('Nimal Perera','078-9654786', '2022-08-23', '11.00am', 'Ear Infection of labrado dog'),
  createData('Sunil Kure','077-5624786', '2022-08-23', '1.00pm', 'Itchy skin Infection of cat'),
  
];

export default function Products() {
  return (
    <div>  
        {/* <SearchBar/>  */}
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="outlined" href='/PreviousAppoMain' color='blueButton'>Previous</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" href='/TodayAppoMain' color='blueButton'>Today</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" href='/UpAppoMainMain' color='blueButton'>Upcomming</Button></ThemeProvider>
      </Stack>

      <br></br>
    
   
      {/* align the 'add product' button to the right
      <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Product</Button></ThemeProvider>  </Grid>   */}

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Pet Owner Name</StyledTableCell>
            <StyledTableCell align="left">Pet Owner Contact No</StyledTableCell>
            <StyledTableCell align="left">Required Date</StyledTableCell>
            <StyledTableCell align="left">Required Time</StyledTableCell>
            <StyledTableCell align="left">Pet Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}> 
              <StyledTableCell align="left">{row.PetOwnerName}</StyledTableCell>
              <StyledTableCell align="left">{row.PetOwnerNo}</StyledTableCell>
              <StyledTableCell align="left">{row.RequiredDate}</StyledTableCell>
              <StyledTableCell align="left">{row.RequiredTime}</StyledTableCell>
              <StyledTableCell align="left">{row.PetDes}</StyledTableCell>
            
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view">View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update">Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete">Delete</Button></ThemeProvider></StyledTableCell> */}

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

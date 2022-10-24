import React, { useState, useEffect } from 'react';
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
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

//import { Grid} from "@material-ui/core";
import Grid from '@mui/material/Grid';

import Axios from "axios";

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
      main: '#005A2B',
      contrastText: "#fff"
    },
    delete: {
      main: '#f00e0e',
      contrastText: "#fff"
    },
  },
});




// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     // backgroundColor: theme.palette.common.black,
//     // color: theme.palette.common.white,
//     color: theme.palette.common.black,
//     fontSize: 15,
//     fontWeight:'bold',
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // // hide last border
//   // '&:last-child td, &:last-child th': {
//   //   border: 0,
//   // },
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#d0f0e9',
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





// function createData(PetOwnerName, PetOwnerNo, RequiredDate, RequiredTime, PetDes) {
//   return {PetOwnerName, PetOwnerNo, RequiredDate, RequiredTime, PetDes};
// }

// const rows = [
//   createData('Rishini Hasini','077-8697524', '2022-08-24', '10.00am', 'Dog eye infection'),
//   createData('Thilina Shan','077-5654786', '2022-08-24', '2.00pm', 'Cat ear infection'),
  
// ];

export default function Upappo() {

  const[upappoList, setUpappoList]=useState([]);

  // const ref = useRef(null);
  
  // here we don't have to click any button to display data
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/Doctor/getupappo").then((response)=>{
    setUpappoList(response.data.data);   
    console.log(response);
    });
  }, []);
  
  return (
    <div>  
        {/* <SearchBar/>  */}
      <br></br>
      <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="outlined" href='/PreviousAppoMain' color='blueButton'>Previous</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" href='/TodayAppoMain' color='blueButton'>Today</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="contained" href='/UpAppoMain' color='blueButton'>Upcomming</Button></ThemeProvider>
      </Stack>

      <br></br>

      <h1>Upcomming Appointment Details</h1>
      <br></br>

   
      {/* align the 'add product' button to the right */}
      {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" href='/AddAppoMain' startIcon={<AddCircleRoundedIcon/>} color="update">Add Appointment</Button></ThemeProvider>  </Grid>   */}

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Pet Owner Name</StyledTableCell>
            <StyledTableCell align="left">Pet Owner Contact No</StyledTableCell>
            <StyledTableCell align="left">Pet Type</StyledTableCell>
            <StyledTableCell align="left">Required Date</StyledTableCell>
            <StyledTableCell align="left">Required Time</StyledTableCell>
            <StyledTableCell align="left">Pet Description</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
        {upappoList.map((val) => {
            return(
              console.log(val),
            <StyledTableRow> 
              {/* <StyledTableCell align="left"><img src={val.foodImage} alt="food" style={{width:'25%', height:'25%'}}/></StyledTableCell> */}
              <StyledTableCell align="left">{val.OwnerName}</StyledTableCell>
              <StyledTableCell align="left">{val.OwnerTel}</StyledTableCell>
              {/* <StyledTableCell align="left">{val.VaccineName}</StyledTableCell> */}
              <StyledTableCell align="left">{val.PetType}</StyledTableCell>
              <StyledTableCell align="left">{val.Date}</StyledTableCell>
              <StyledTableCell align="left">{val.Time}</StyledTableCell>
              <StyledTableCell align="left">{val.Description}</StyledTableCell>
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view" component={Link} to={"/ViewProductFinal"} state={{id:val.foodId}}>View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update"  component={Link} to={"/UpdateProductFinal"} state={{id:val.foodId}}>Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete" onClick={()=>deleteOneFood(val.foodId)}>Delete</Button></ThemeProvider></StyledTableCell> */}
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" href='/UpAppoMain'color="delete">Cancel</Button></ThemeProvider></StyledTableCell>
            </StyledTableRow>
          )
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

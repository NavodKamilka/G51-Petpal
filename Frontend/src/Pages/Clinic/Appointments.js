// import React, { useState, useEffect } from 'react';
// import { styled} from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// // import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

// // import { Grid} from "@material-ui/core";

// import Axios from "axios";

// //related to changing colors in  (view, update, delete) buttons
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import SearchBar from '../../Components/SearchBar.js';

// const theme = createTheme({
//   palette: {
//     //name given as view, update and delete to declare buttons
//     foodButton: {
//       main: '#000000',
//     //   change the text color inside the button to another color
//       contrastText: "#fff" 
//     },
//     accessoriesButton: {
//       main: '#1D168F',
//     //   change the text color inside the button to another color
//       contrastText: "#fff" 
//     },
//     view: {
//       main: '#63B8BB',
//     },
//     update: {
//       main: '#005A2B',
//     },
//     delete: {
//       main: '#F5222D',
//     },
//   },
// });




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






// function createData(DoctorName, NoOfAppointments) {
//   return {DoctorName,NoOfAppointments};
// }

// const rows = [
//   createData('Dr. Dayani Siriwardane','03'),
//   createData('Dr. Janaki Collure','02'),
//   createData('Dr. Prabath Wickramasinghe','01'),
// ];

// export default function Appointments() {
//   return (
//     <div>  
//         <SearchBar/> 
        
//       {/* <h1>Product details</h1> */}
//       <br></br>
//       <Stack spacing={10} direction="row" justifyContent="center" >
      
//       <ThemeProvider theme={theme}><Button variant="outlined" href='/DoctorMain' color='accessoriesButton'>Doctor List</Button></ThemeProvider>
//       <ThemeProvider theme={theme}><Button variant="contained" href='/AppointmentMain' color='accessoriesButton'>Appointments</Button></ThemeProvider>
//       </Stack>

//       <br></br>
    
   
//       {/* align the 'add product' button to the right */}
//       {/* <Grid container justify="flex-end"><ThemeProvider theme={theme}><Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="update">Add Product</Button></ThemeProvider>  </Grid>   */}

//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 600 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">Doctor Name</StyledTableCell>
//             <StyledTableCell align="left">No of Appointments</StyledTableCell>
//             <StyledTableCell align="left"></StyledTableCell>
//             <StyledTableCell align="left"></StyledTableCell>
//             {/* <StyledTableCell align="left"></StyledTableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}> 
//               <StyledTableCell align="left">{row.DoctorName}</StyledTableCell>
//               <StyledTableCell align="left">{row.NoOfAppointments}</StyledTableCell>
//               {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
//               <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" href='/TodayAppoMain' color="view">View</Button></ThemeProvider></StyledTableCell>
//               {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" href='/AddAppoMain' color="update">Add</Button></ThemeProvider></StyledTableCell> */}
//               {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete">Blocked</Button></ThemeProvider></StyledTableCell> */}

//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }


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

// import { Grid} from "@material-ui/core";
// import Grid from '@mui/material/Grid';
import Axios from "axios";


//related to changing colors in  (view, update, delete) buttons
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchBar from '../../Components/SearchBar';


// import { Link } from '@mui/material';
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






// function createData(ProductImage, Brand, ProductName, weight, PricePerOne, AvailableQty, LastUpdate) {
//   return { ProductImage, Brand, ProductName, weight, PricePerOne, AvailableQty, LastUpdate};
// }

// const rows = [
//   createData(<img src ={food2} alt="food" style={{width:'25%', height:'25%'}}/>,'Pedegree', 'chicken and vegetable', '500g', 1500, 5, '24-07-2022'),
//   createData(<img src ={food3} alt="food" style={{width:'25%', height:'25%'}}/>,'Whiskas', 'Adult wet food (Mackaral flavour)','85g', 500, 5, '24-07-2022'),

  
// ];

export default function Appointments() {
// backend
const[appointmentList, setAppointmentList]=useState([]);

// const ref = useRef(null);

// here we don't have to click any button to display data
useEffect(() =>{
  Axios.get("http://localhost:3001/api/Doctor/getappointment").then((response)=>{
  setAppointmentList(response.data.data);   
  console.log(response);
  });
}, []);


//delete one food item
// const deleteOneFood=(foodId)=>{
//   //".then" part will refresh the page after one food item is deleted. 
//   Axios.delete(`http://localhost:3001/api/shop/deleteOneFood/${foodId}`).then((response) => {
//     setFoodList(foodList.filter((val)=>{
//       return val.foodId !== foodId
//     }))
//   })
// }


// view one product
// const getOneFood = event => {
//   console.log(event.currentTarget.id);

//   console.log(ref.current.id);
// };


  return (
    <div>  
        <SearchBar/> 
        
      <h1>Appointments Details</h1>
      <br></br>
      {/* <Stack spacing={10} direction="row" justifyContent="center" >
      <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href='/FoodTableFinal'>Food</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/AccessoriesTableFinal'>Accessories</Button></ThemeProvider>
      <ThemeProvider theme={theme}><Button variant="outlined" color='blueButton' href='/SkinCareTableFinal'>Skin care</Button></ThemeProvider>
      </Stack> */}
    
   
      {/* align the 'add product' button to the right */}
      {/* <Stack  justifyContent="right" spacing={10} direction="row">    

        <ThemeProvider theme={theme}>
          <Button variant="contained" startIcon={<AddCircleRoundedIcon/>} color="addButton" href='./AddNotice'>Post Notice</Button>
        </ThemeProvider> 

       
      </Stack>   */}
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
    
            <StyledTableCell align="left">Doctor Name</StyledTableCell>
            <StyledTableCell align="left">Telephone Number</StyledTableCell>
            <StyledTableCell align="left">Number of Appointments</StyledTableCell>
            {/* <StyledTableCell align="left">Vaccination Date</StyledTableCell>
            <StyledTableCell align="left">Venue</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell> */}
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
            {/* <StyledTableCell align="left"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {appointmentList.map((val) => {
            return(
              console.log(val),
            <StyledTableRow> 
              {/* <StyledTableCell align="left"><img src={val.foodImage} alt="food" style={{width:'25%', height:'25%'}}/></StyledTableCell> */}
              <StyledTableCell align="left">{val.DoctorName}</StyledTableCell>
              <StyledTableCell align="left">{val.TelNum}</StyledTableCell>
              <StyledTableCell align="left">{val.noappo}</StyledTableCell>
              {/* <StyledTableCell align="left">{val.Date}</StyledTableCell>
              <StyledTableCell align="left">{val.Venue}</StyledTableCell>
              <StyledTableCell align="left">{val.Status}</StyledTableCell> */}
              {/* these buttons are common to each row, once we added to a row it will display them in every row  */}
              {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view" component={Link} to={"/ViewProductFinal"} state={{id:val.foodId}}>View</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="update"  component={Link} to={"/UpdateProductFinal"} state={{id:val.foodId}}>Update</Button></ThemeProvider></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="delete" onClick={()=>deleteOneFood(val.foodId)}>Delete</Button></ThemeProvider></StyledTableCell> */}
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" href='/TodayAppoMain' color="view">View</Button></ThemeProvider></StyledTableCell>
              {/* <StyledTableCell align="left"> <ThemeProvider theme={theme}> <Button variant="contained" color="view" component={Link} to={"/ViewProductFinal"} >View</Button></ThemeProvider></StyledTableCell> */}
            </StyledTableRow>
          )
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

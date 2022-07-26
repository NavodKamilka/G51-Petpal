import React , { useState, useEffect }from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List1 from './ListUpcoming';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchBar from "../../../Components/SearchBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10
    
  }));
  
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
      contrastText: "#fff" 
    },
    
  },
});

  export default function  TodayAppointmentsContent() {
    const [appointment , setAppointment] = useState([]);
    useEffect(() =>{
      Axios.get('http://localhost:3001/api/vetappointments/getUpAppointmentList').then((response)=>{
        setAppointment(response.data.data);   
      console.log(response);
      });
    }, []);

  //   Axios.get('http://localhost:3001/api/vetappointments/getTodayAppointmentList'.then((response)=>{
  //     setAppointment(response.data.data);   
  //   console.log(response);
  //   });
  // }, []);
  //---------------------------------------
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>
          
{/* up three buttons-prev,today,upcoming */}
        <div style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
        verticalAlign:'center',position:"relative",top:'0%',left:'0%'}}>

            <Stack>
            <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'  href="/PrevJobs"
            style={{display:'inline-block',width: '250px',margin:10,marginLeft:90, fontSize:'15px'}}>Previous jobs</Button></ThemeProvider>
            </Stack> 


            <Stack>
            <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'  href="/TodayAppointments"
            style={{display:'inline-block',width: '250px',margin:10,fontSize:'15px'}}>Today appointments</Button></ThemeProvider>
            </Stack> 

            <Stack>
            <ThemeProvider theme={theme}><Button variant="contained" color='blackButton' 
            style={{display:'inline-block',width: '250px',margin:10,marginRight:90, fontSize:'15px'}}>Upcoming appointments</Button></ThemeProvider>
            </Stack> 

        </div>
        
        <br/>
        

        {/* <Listtoday/> */}
        <div style={{position: "relative", top: "6%"}}>
    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                          <TableHead sx={{backgroundColor: 'orange'}}>
                            <TableRow>
                              
                            <TableCell>Date</TableCell>
                              <TableCell>Token no</TableCell>
                              <TableCell align="right">Owner</TableCell>
                              <TableCell align="right">Telephone number</TableCell>
                              <TableCell align="right">Pet type</TableCell>
                              <TableCell align="right">Pet breed</TableCell>
                              <TableCell align="right">Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          {/* {n1.map((item, index) => (  */}
                          
                            {/* <TableBody >{
                              {appointment.map((row) => (
                                <TableRow key={row.AppointmentCID}>
                                  <TableCell>{row.Date}</TableCell>    
                                  <TableCell>{row.PetName}</TableCell>    
                                  <TableCell>{row.AppointmentStatus}</TableCell>    
                                  <TableCell>{row.ClinicName}</TableCell>    
                                  <TableCell>{row.DoctorName}</TableCell>
                                </TableRow>
                              ))}
                            }    
                            </TableBody> */}
                            <TableBody>
                              {/* {employeeList.map((val , key) => { */}
                              {appointment.map((row ) => (
                                // <TableRow key ={row.AppointmentCID}>
                                <TableRow>
                                  <TableCell align="right">{row.Date}</TableCell>
                                  <TableCell align="right">{row.TokenNo}</TableCell>
                                  <TableCell align="right">{row.OwnerID}</TableCell>
                                  <TableCell align="right">{row.TelNo}</TableCell>
                                  <TableCell align="right">{row.PetID}</TableCell>
                                  <TableCell align="right">{row.PetBreed}</TableCell>
                                  <TableCell align="right"><Button>Cancel</Button></TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          
                        </Table>
              </TableContainer>



</div>

{/* <List1/> */}


       
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

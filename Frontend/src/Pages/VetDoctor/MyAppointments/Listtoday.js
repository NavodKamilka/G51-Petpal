import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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
  
;
const id = 1;

export default function Listtoday() {

    const[List, setList]=useState([]);

    // here we don't have to click any button to display data
    useEffect(() =>{
      Axios.get("http://localhost:3001/api/vetappointments/getTodayAppointmentList").then((response)=>{
        setList(response.data.data);   
      console.log(response);
      });
    }, []);
    
  return (
    <div>

        


{/* list of appointment box  */}
<div style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
verticalAlign:'center',position:"relative",top:'0%',left:'0%',
flexWrap: 'wrap',
padding: '10px 20px',
borderRadius: '27px',
boxShadow: '0 3px 10px rgb(0 0 0 / 40%)',
justifyContent: 'center',spacing:'4' }}>
{/* Box for time */}


<Box style={{ 
    width: window.width, height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15,textAlign:'center',
    margin: '10px 10px'

}}>

    <h2 style={{width: '50%',
    display: 'inline',
    marginRight: '80px',
    fontWeight: 'bold',
    color: '#193498'}}> 1 </h2> </Box>
    

        
{/* box for pet owner name */}
<Box style={{ 
    width: window.width, height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15, textAlign:'center',
    margin: '10px 10px',
    
}}> <h2 style={{width: '50%',
    display: 'inline',
    marginRight: '80px',
    fontWeight: 'bold',
    color: '#193498'}}> Pavani Marasinghe</h2></Box>
    <Box style={{ 
    width: window.width, height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15, textAlign:'center',
    margin: '10px 10px',
    
}}> <h2 style={{width: '50%',
    display: 'inline',
    marginRight: '80px',
    fontWeight: 'bold',
    color: '#193498'}}> Dog</h2></Box>
{/* box for checkbox home visit or not */}
{/* <Box style={{ 
    width: window.width, height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15, textAlign:'center',
    margin: '10px 10px',
    
}}> 
    <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Home visit" />

    </FormGroup>
</Box> */}

{/* button view more */}
<Stack><Button variant="contained" href='/TodayAppointmentDetails' style={{display:'inline-block',width: 'fit-content',margin:10,

}}>View More </Button></Stack>


</div>
      
    </div>
  )
}


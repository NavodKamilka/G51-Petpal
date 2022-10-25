import React , { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Listtoday from './Listtoday';
import Axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10
    
  }));

  //colors for buttons

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
    const current = new Date();
    const date = `${current.getDay()}`;
    const datee = `${current.getYear()}`+"-"+`${current.getMonth()}`+"-"+`${current.getDate()}`;

    if(date==0){
      var day = "Sunday";
    }
    else if(date == 1){
      var day = "Monday";
    }
    else if(date == 2){
      var day = "Tuesday";
    }
    else if(date == 3){
      var day = "Wedneday";
    }
    else if(date == 4){
      var day = "Thursday";
    }
    else if(date == 5){
      var day = "Friday";
    }
    else if(date == 6){
      var day = "Saturday";
    }

    const[List, setList]=useState([]);

    // here we don't have to click any button to display data
    useEffect(() =>{
      Axios.get("http://localhost:3001/api/vetappointments/getTimeslots").then((response)=>{
        setList(response.data.data);   
      console.log(response);
      });
    }, []);

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
            <ThemeProvider theme={theme}><Button variant="contained" color='blackButton' 
            style={{display:'inline-block',width: '250px',margin:10,fontSize:'15px'}}>Today appointments</Button></ThemeProvider>
            </Stack> 

            <Stack>
            <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'  href="/UpcomingJobs"
            style={{display:'inline-block',width: '250px',margin:10,marginRight:90, fontSize:'15px'}}>Upcoming jobs</Button></ThemeProvider>
            </Stack> 

        </div>
        
        <div style={{width:window.width, textAlign:'center',
            position:"relative",top: '2%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // top:'180px',left:'0%'
            }}>
            <h1 style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontWeight: 'bold',
            color: '#193498'}}> {datee}{" "}{day} </h1>  
        
          {List.map((val) => {

              return (
            <h1 style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontWeight: 'bold',
            color: '#193498'}}> {val.StartTime} - {val.EndTime} </h1>   
            )       
            })}

        </div>
        <br/>
        <Listtoday/>
       
          </Item>
     
        </Grid>
      </Grid>
    </Box>
    </div>
  )

}

// export default MyProfileContent

import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List1 from './ListUpcoming';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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
    const current = new Date();
    const date = `${current.getFullYear()} - ${current.getMonth()+1} - ${current.getDate()}`;

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
            <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' href="/TodayAppointments"
            style={{display:'inline-block',width: '250px',margin:10,fontSize:'15px'}}>Today appointments</Button></ThemeProvider>
            </Stack> 

            <Stack>
            <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'  
            style={{display:'inline-block',width: '250px',margin:10,marginRight:90, fontSize:'15px'}}>Upcoming jobs</Button></ThemeProvider>
            </Stack> 

        </div>
        <div style={{width:window.width, textAlign:'center',
            position:"relative",top: '0%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // top:'180px',left:'0%'
            }}>
            <h3 >Calendar</h3>
        </div>
        <div style={{width:window.width, textAlign:'center',
            position:"relative",top: '0%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // top:'180px',left:'0%'
            }}>
            <h1 style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontWeight: 'bold',
            color: '#193498'}}> 2022 - 11 - 03 </h1>
        

        </div>

<List1/>


       
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

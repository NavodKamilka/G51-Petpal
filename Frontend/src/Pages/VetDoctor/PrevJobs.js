import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function PrevJobs() {

  return (
    <div>
      {/* up navigation bar */}
        <div>
            Nav Bar
        </div>
{/* up three buttons-prev,today,upcoming */}
        <div style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
        verticalAlign:'center',position:"fixed",top:'20%',left:'25%'}}>

            <Stack><Button variant="contained" 
            style={{display:'inline-block',width: '250px',margin:10,marginLeft:90, fontSize:'15px',backgroundColor:'#68FD22',
           
            }}>Previous jobs </Button></Stack> 

            <Stack><Button variant="outlined" style={{display:'inline-block',width: '250px',margin:10, 
            fontSize:'15px'
           
            }}>Today Appointments </Button></Stack> 

            <Stack><Button variant="outlined" style={{display:'inline-block',width: '250px',fontSize:'15px',
            margin:10,marginRight:90,
           
            }}>Upcoming Jobs </Button></Stack> 

        </div>
        <div style={{width:window.width, textAlign:'center',
            position:"fixed",top: '37%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            // top:'180px',left:'0%'
            }}>
            <h3 >Calendar</h3>
        </div>
{/* today date */}
        <div style={{width:window.width, textAlign:'center',
            position:"fixed",top: '42%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            // top:'180px',left:'0%'
            }}>

            <h1 style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontWeight: 'bold',
            color: '#193498'}}> 2022 - 02 - 03 </h1>

        </div>
{/* list of appointment box  */}
        <div style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
            verticalAlign:'center',position:"fixed",top:'50%',left:'25%',
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
          
            }}><h2 style={{width: '50%',
                display: 'inline',
                marginRight: '80px',
                fontWeight: 'bold',
                color: '#193498'}}> 7 pm - 7 30 pm</h2> </Box>
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
                color: '#193498'}}> Kasun Perera</h2></Box>
            {/* box for checkbox home visit or not */}
            <Box style={{ 
                width: window.width, height: 40,  
                '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                fontSize:15, textAlign:'center',
                margin: '10px 10px',
                
            }}> 
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Home visit" />
        
                </FormGroup>
            </Box>

{/* button view more */}
            <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
           
            }}>View More </Button></Stack>
        
        </div>



    </div>
  )
}

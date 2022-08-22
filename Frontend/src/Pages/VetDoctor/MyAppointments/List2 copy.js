import React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
export default function List1() {
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

}}><h2 style={{width: '50%',
    display: 'inline',
    marginRight: '80px',
    fontWeight: 'bold',
    color: '#193498'}}> 4 00 pm - 5 00 pm</h2> </Box>
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
    color: '#193498'}}> Damitha Rathnayake</h2></Box>
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
<Stack><Button variant="contained" href='/UpcomingAppointmentDetails' style={{display:'inline-block',width: 'fit-content',margin:10,

}}>View More </Button></Stack>
{/* button cancel appoitnments */}
<Stack><Button variant="outlined" style={{margin:10}} startIcon={<DeleteIcon />}>
                 Delete </Button></Stack>

</div>
{/* 
<div style={{position:"relative",top:'0%',left:'0%'}}> */}
{/* list of appointment box  */}
        {/* <div style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:'200px',
            verticalAlign:'center',position:"relative",top:'45%',left:'0%',
            flexWrap: 'wrap',
            padding: '10px 20px',
            borderRadius: '27px',
            boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
            justifyContent: 'center',spacing:'4' }}> */}
{/* Box for time */}
            {/* <Box style={{ 
                 height: 40,  
                '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                fontSize:15,textAlign:'center',
                margin: '10px 10px'
          
            }}><h2 style={{width: '50%',
                display: 'inline',
                marginRight: '80px',
                fontWeight: 'bold',
                color: '#193498'}}> 6 00 pm - 6 30 pm</h2> </Box> */}
{/* box for pet owner name */}
            {/* <Box style={{ 
                 height: 40,  
                '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                fontSize:15, textAlign:'center',
                margin: '10px 10px',
                
            }}> <h2 style={{width: '50%',
                display: 'inline',
                marginRight: '80px',
                fontWeight: 'bold',
                color: '#193498'}}> Kasun Perera</h2></Box> */}
            {/* box for checkbox home visit or not */}
            {/* <Box style={{ 
                 height: 40,  
                '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                fontSize:15, textAlign:'center',
                margin: '10px 10px',
                
            }}> 
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Home visit" />
        
                </FormGroup>
            </Box> */}

{/* button view more */}
            {/* <Stack><Button variant="contained" href='/UpcomingAppointmentDetails' style={{display:'inline-block',width: 'fit-content',margin:10,
           
            }}>View More </Button></Stack>

            {/* button cancel appoitnments */}
            {/* <Stack><Button variant="outlined" style={{margin:10}} startIcon={<DeleteIcon />}>
                 Delete </Button></Stack>
        
        </div>
      </div> */} 



      
    </div>
  )
}


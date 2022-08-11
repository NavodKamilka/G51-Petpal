import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

export default function ArticlesAsAList() {
  return (
    <div>
    
{/* list of appointment box  */}
<div style={{ flexDirection:'row',display:'inline-flex',height:120,margin:10,width:'60%',
verticalAlign:'center',position:"absolute",top:'30%',left:'25%',
flexWrap: 'wrap',
padding: '10px 20px',
borderRadius: '27px',
boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
justifyContent: 'center',spacing:'4' }}>
{/* Box for time */}
<Box style={{ 
    height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15,textAlign:'center',
    margin: '10px 10px',   
    width:'840px',
    flexDirection:'row',display:'inline-flex',
    position:"absolute",top:'0%',left:'5%',

}}><h2 style={{width: '100%',
    display: 'inline',
    marginRight: '80px',
    fontWeight: 'bold',
    color: '#193498'}}> article title</h2> </Box>
    {/* button view more */}
<Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,

}}>Read </Button></Stack>
{/* box for pet owner name */}
<Box style={{ 
    width: window.width, height: 40,  
    '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
    fontSize:15, textAlign:'center',
    margin: '10px 10px',
    flexDirection:'row',display:'inline-flex',
    
    position:"absolute",top:'25%',left:'30%'
    
}}> <h2 style={{width: '100%',
    display: 'inline',
    marginRight: '10px',
    fontWeight: 'bold',
    color: '#193498'}}> Dr. Kasun Perera</h2></Box>

{/* button view more */}
<Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,

}}>More from Author</Button></Stack>


</div>
</div>
  )
}

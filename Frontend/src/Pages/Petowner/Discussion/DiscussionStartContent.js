import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import QuickreplyIcon from '@mui/icons-material/Quickreply';


import TextField from "@mui/material/TextField";
// import SearchIcon from '@mui/icons-material/Search';

// import IconButton from '@mui/material/IconButton';

// import InputBase from '@mui/material/InputBase';











const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:800,
    top:10
    
  }));

  export default function  DiscussionStartContent() {

   

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>
          <Stack spacing={80} direction="row" marginLeft={10} sx={{marginTop:4}}>
                <Button variant="contained" href='/Discussion' startIcon={<KeyboardDoubleArrowLeftIcon />}>Go Back</Button>
           </Stack> <br/><br/><br/>          
             <Typography variant='h5' sx={{
             marginLeft:'-70%'
           }}>
                    Topic :
            </Typography> <br/> 
                <TextField 
                    sx={{marginLeft:'0%', width:'70%'}}
                    id="outlined-basic" 
                    label="Topic" 
                    variant="outlined" 
                    // fullWidth
                /> <br/><br/> 
            <Typography variant='h5' sx={{
             marginLeft:'-58%'
           }}>
                    Discussion Details :
            </Typography> <br/> 
                <TextField 
                    sx={{marginLeft:'0%', width:'70%'}}
                    InputProps={{ sx: { height: 280 } }}
                    id="outlined-basic" 
                    label="Topic" 
                    variant="outlined" 
                    // fullWidth
                /><br/><br/><br/><br/>
            <Stack spacing={40} direction="row" marginLeft={'22.5%'}>
                <Button variant="contained" sx={{width:180}} >Cancel</Button>
                <Button variant="contained"  sx={{width:180}}>Submit</Button>
            </Stack>
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

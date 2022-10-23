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
import Axios from 'axios';
import {useState} from 'react';


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

    const [topic , setTopic] = useState();
    const [details , setDetails] = useState();

    const handleChange1 = (event) => {
      setTopic(event.target.value);
    };
    const handleChange2 = (event) => {
      setDetails(event.target.value);
    };

    const startDiscussion = () => {

      
  
      Axios.post('http://localhost:3001/api/startDiscussion', {
          Title : topic,
          Content : details
        },{
          headers: { authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjYyNjM1Nzk4LCJleHAiOjE2NjI2NDY1OTh9.duI8_LU5euykMI8GqnJKzju3aOphic4ic_4L0i-9E94` }
          // headers: { authorization : `Bearer ${this.Token}` }
        }).then(() => {
          console.log("Success");
      });
      // const auth = await Axios.post(`/api/get-user`,{
      //     Title : topic,
      //     Content : details
      // }, {
      //   headers: {
      //   Authorization: `Bearer ${this.Token}` 
      //   }
    // })



  };

  

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
                    onChange={handleChange1}
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
                    onChange={handleChange2}
                    // fullWidth
                /><br/><br/><br/><br/>
            <Stack spacing={40} direction="row" marginLeft={'22.5%'}>
                <Button variant="contained" sx={{width:180}} >Cancel</Button>
                <Button variant="contained" onClick={startDiscussion}  sx={{width:180}}>Submit</Button>
            </Stack>
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

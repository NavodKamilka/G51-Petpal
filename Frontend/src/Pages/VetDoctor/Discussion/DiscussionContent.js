import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import QuickreplyIcon from '@mui/icons-material/Quickreply';


import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import InputBase from '@mui/material/InputBase';
// import { width } from '@mui/system';
// import { Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';






const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor:'#D9D9D9',
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    backgroundColor:'#D9D9D9',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10
    
  }));

  export default function  DiscussionContent() {

    const [value1, setValue1] = React.useState('How poisonous are the mushrooms that your dog can find while wandering about outside? The answer is not a simple one. Whereas most mushrooms may cause mild, limiting nausea and diarrhea, they can look just like mushrooms that can cause life-threatening effects.');

    const handleChange1 = (event) => {
      setValue1(event.target.value);
    };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        
          <Item>
            <Stack spacing={80} direction="row" marginLeft={10} sx={{marginTop:4}}>
            
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

            </Stack>
            <Stack spacing={10}  marginLeft={'-60%'}  marginTop={8}>
              <Typography variant='h5'>Discussion Topic (Kasun Silva)</Typography>
            </Stack><br/><br/><br/>
            <Stack marginLeft={'10%'} marginRight={'10%'}>
              <TextField
                  InputProps={{readOnly: true, sx: { height: 90} }}
                  id="outlined-read-only-input"
                  width='70%'
                  // id="outlined-multiline-flexible"
                  label="Discussin Topic"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange1}
                  
                />
            </Stack> <br/>
            <Stack direction="row" spacing={3} marginLeft={'70%'} >
                  <IconButton  component="label" style={{
                      // left:'0%',
                      color:'#11B94A'
                      // top:40
                }}>
                     <ThumbUpIcon />
                     10
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#FF0000'
                      // left:'0%',
                      // top:40
                }}> 
                     <ThumbDownIcon />
                      5
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#47B2EE'
                      // left:'0%',
                      // top:40
                }}> 
                     <QuickreplyIcon />
                      
                </IconButton>
            </Stack> <br/>


            <Stack marginLeft={'15%'} marginRight={'10%'}>
              <TextField
                  InputProps={{readOnly: true, sx: { height: 90} }}
                  id="outlined-read-only-input"
                  width='70%'
                  // id="outlined-multiline-flexible"
                  label="Discussin Topic"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange1}
                  
                />
            </Stack> <br/>
            <Stack direction="row" spacing={3} marginLeft={'70%'} >
                  <IconButton  component="label" style={{
                      // left:'0%',
                      color:'#11B94A'
                      // top:40
                }}>
                     <ThumbUpIcon />
                     10
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#FF0000'
                      // left:'0%',
                      // top:40
                }}> 
                     <ThumbDownIcon />
                      5
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#47B2EE'
                      // left:'0%',
                      // top:40
                }}> 
                     <QuickreplyIcon />
                      
                </IconButton>
            </Stack><br/>

            <Stack marginLeft={'15%'} marginRight={'10%'}>
              <TextField
                  InputProps={{readOnly: true, sx: { height: 90} }}
                  id="outlined-read-only-input"
                  width='70%'
                  // id="outlined-multiline-flexible"
                  label="Discussin Topic"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange1}
                  
                />
            </Stack> <br/>
            <Stack direction="row" spacing={3} marginLeft={'70%'} >
                  <IconButton  component="label" style={{
                      // left:'0%',
                      color:'#11B94A'
                      // top:40
                }}>
                     <ThumbUpIcon />
                     10
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#FF0000'
                      // left:'0%',
                      // top:40
                }}> 
                     <ThumbDownIcon />
                      5
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#47B2EE'
                      // left:'0%',
                      // top:40
                }}> 
                     <QuickreplyIcon />
                      
                </IconButton>
            </Stack>
                  <br/>
            <Stack marginLeft={'20%'} marginRight={'10%'}>
              <TextField
                  InputProps={{readOnly: true, sx: { height: 90} }}
                  id="outlined-read-only-input"
                  width='70%'
                  // id="outlined-multiline-flexible"
                  label="Discussin Topic"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange1}
                  
                />
            </Stack> <br/>
            <Stack direction="row" spacing={3} marginLeft={'70%'} >
                  <IconButton  component="label" style={{
                      // left:'0%',
                      color:'#11B94A'
                      // top:40
                }}>
                     <ThumbUpIcon />
                     10
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#FF0000'
                      // left:'0%',
                      // top:40
                }}> 
                     <ThumbDownIcon />
                      5
                </IconButton>
                <IconButton color="primary" component="label" style={{
                      color:'#47B2EE'
                      // left:'0%',
                      // top:40
                }}> 
                     <QuickreplyIcon />
                      
                </IconButton>
            </Stack>

            
          
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

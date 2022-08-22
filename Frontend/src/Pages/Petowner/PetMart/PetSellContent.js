import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Link from '@mui/material/Link';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';











const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10
    
  }));

  export default function  PetSellContent() {

    

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Item>
            <Stack spacing={80} direction="row" marginLeft={10} sx={{marginTop:4}}>
                    <Button variant="contained" href='/PetMart' startIcon={<KeyboardDoubleArrowLeftIcon />}>Go Back</Button>
            </Stack> <br/><br/><br/>  

          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}


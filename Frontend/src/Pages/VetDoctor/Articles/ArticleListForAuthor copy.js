import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Axios from "axios";

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
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


export default function ArticleListForAuthor() {
  const[allArticleList, setAllArticleList]=useState([]);

// here we don't have to click any button to display data
useEffect(() =>{
  Axios.get("http://localhost:3001/api/vetdoc/getArticlesForAuthorTwo").then((response)=>{
    setAllArticleList(response.data.data);   
  console.log(response);
  });
}, []);

  return (
    <div>
      <Grid container alignItems="stretch"  justifyContent="center">
        {/* show the cards in a row */}
        <Grid item style={{display: 'inline-block'}} padding={10}>

          {allArticleList.reverse().map((val) => {
            return(
              <Card sx={{ maxWidth: 1000 , height:150,padding:2}}>
                <CardContent>
                  <CardContent style={{display: 'flex',height:15}} padding={10}>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.Title}
                    </Typography>
                    <CardActions>
                      <Button>Read more</Button>
                    </CardActions>
                  </CardContent>

                  <CardContent style={{display: 'flex',height:15}} padding={10}>
                  <Stack direction="row" spacing={1} marginLeft={'50%'} >
                    <Typography variant="body2" color="text.secondary">
                     Date published : {val.DatePublished} 
                    </Typography>
                  <IconButton  component="label" style={{
                      // left:'0%',
                      color:'#11B94A'
                      // top:40
                }}>
                     {/* <ThumbUpIcon /> */}
                     {/* {val.Likes} */}
                </IconButton>
                </Stack>
                  </CardContent>

                     
                </CardContent>

                  
              </Card>
            )
          })}
        </Grid>
      </Grid>
    </div>
  );
}

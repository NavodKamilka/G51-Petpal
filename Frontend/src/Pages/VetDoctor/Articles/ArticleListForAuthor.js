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
  Axios.get("http://localhost:3001/api/vetdoc/getArticlesForAuthor").then((response)=>{
    setAllArticleList(response.data.data);   
  console.log(response);
  });
}, []);

  return (
    <div>
      <Grid container alignItems="stretch"  justifyContent="center">
        {/* show the cards in a row */}
        <Grid item style={{display: 'flex'}} padding={10}>

          {allArticleList.map((val) => {
            return(
              <Card sx={{ maxWidth: 1000 , padding:2}}>
                <CardContent>
                  <CardContent style={{display: 'flex'}} padding={10}>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.Title}
                    </Typography>
                    <CardActions>
                      <Button size="small">Read more</Button>
                    </CardActions>
                  </CardContent>

                  <CardContent style={{display: 'flex'}} padding={10}>
                    <Typography variant="body2" color="text.secondary">
                      {val.DatePublished} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.Likes}
                    </Typography>
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

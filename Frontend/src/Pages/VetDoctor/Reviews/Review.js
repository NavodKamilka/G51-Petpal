import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { CardActionArea } from "@mui/material";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1230,
  top: 10,
}));

export default function Review() {
  const[list, setList]=useState([]);

  // here we don't have to click any button to display data
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/vetdoc/getVetReviews").then((response)=>{
      setList(response.data.data);   
    console.log(response);
    });
  }, []);
  
 
  return (
    <div>

      <Grid container alignItems="stretch"  justifyContent="center">

      <Box>
                <Typography sx={{ fontSize: "20px" }}>
                  <h1
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "100px",
                      fontWeight: "bold",
                      color: "#193498",
                    }}
                  >
                    {" "}
                    Reviews
                  </h1>
                </Typography>
              </Box>
              <br />
        {/* show the cards in a row */}
        <Grid item style={{display: 'inline-block'}} padding={10}>

          {list.map((val) => {
            return(
              <Card sx={{ maxWidth: 1000 , padding:2}}>
                <CardContent>
                  <CardContent style={{width:1500,height:10}} padding={1}>
                    <Typography gutterBottom variant="h6" component="div">
                      {val.Content} {"  "}
                      {val.FirstName}{"  "}
                      {val.LastName}{"  "}
                      {val.Date} 
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

import React, { useState, useEffect} from 'react';
import Axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import Grid from '@mui/material/Grid';

import SearchBar from '../../Components/SearchBar';
//import AdCardClinic from '../../Components/AdCardClinic';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   // textAlign: 'center',
//   // color: theme.palette.text.secondary,
// }));



export default function ClinicAds() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const[List, setList]=useState([]);

  // here we don't have to click any button to display data
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/vetdoc/getDoctorList").then((response)=>{
      setList(response.data.data);   
    console.log(response);
    });
  }, []);


  return (
    <div>
      <Typography variant="h4" style={{textAlign: 'center'}}>
                Find the nearest expert veterinary doctor from here
            </Typography>
      {/* <h1>Pet Clinics</h1> */}
      <br></br>
      
        <br></br>
        <SearchBar/>
        <Button href="/Healthcare">Click here for Animal clinics</Button>
      

      <br></br>

          <Grid container spacing={{ xs: 2}} columns={{ xs: 2}} alignItems="center" justifyContent="center" padding={5}>
                      {/* {Array.from(Array(10)).map((index) => (
                        <AdCardClinic/>
                      ))} */}
            <Grid item style={{display: 'flex'}} padding={2}>
              {List.map((val) => {
                return(
                  <Grid item style={{ display: "flex" }} padding={5}>
                  <Card sx={{ maxWidth: 240, padding:1 }}>
                  <CardMedia
                    component="img"
                    height="240"
                    // image={ClinicImage}
                    // alt="Clinic Image"
                
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.FirstName}{" "}{val.LastName}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                      {val.Address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.TelNum}
                    </Typography>
                    <Button onClick={handleClickOpen}>Reviews</Button>
                  </CardContent>

                  
              </Card>
              </Grid>
                )
              })}

            </Grid>
            



           
              </Grid>


     
    </div>
  )
}
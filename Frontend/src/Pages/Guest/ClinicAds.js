import React, { useState, useEffect} from 'react';
import Axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ClinicImage from '../../Images/PetClinic.png';
import clinicImage2 from '../../Images/petClinic2.png';

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
  const[clinicList, setClinicList]=useState([]);

  // here we don't have to click any button to display data
  useEffect(() =>{
    Axios.get("http://localhost:3001/api/clinic/getclinic").then((response)=>{
      setClinicList(response.data.data);   
    console.log(response);
    });
  }, []);
  return (
    <div>
      <Typography variant="h4" style={{textAlign: 'center'}}>
                Pet Clinics
            </Typography>
      {/* <h1>Pet Clinics</h1> */}
      
      <Button href="/VeterinaryDoctors">Click here for Veterinary doctors</Button>
      <br></br>
      
        <br></br>

      <SearchBar/>

      <br></br>

          <Grid container spacing={{ xs: 2}} columns={{ xs: 2}} alignItems="center" justifyContent="center" padding={5}>
                      {/* {Array.from(Array(10)).map((index) => (
                        <AdCardClinic/>
                      ))} */}
            <Grid item style={{display: 'flex'}} padding={2}>
              {clinicList.map((val) => {
                return(
                  <Grid item style={{ display: "flex" }} padding={5}>
                  <Card sx={{ maxWidth: 240, padding:1 }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={val.ClinicImg}
                    alt="Clinic Image"
                
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.Name}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                      {val.Address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.TelNum}
                    </Typography>
                  </CardContent>

                <CardActions>
                  <Button size="small" href='/ClinicViewMain'>View Clinic</Button>
                </CardActions>
                  
              </Card>
              </Grid>
                )
              })}

            </Grid>

           
              </Grid>

     
    </div>
  )
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import petImage from '../../Images/pets.jpg';
import petProdImage from '../../Images/petProducts.jpg';
import makeAppointment from '../../Images/makeAppointment.jpg';
import discussion from '../../Images/discussion.jpg';
import articles from '../../Images/articles.jpg';
import notices from '../../Images/notices.jpg';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

export default function service() {
    return (
        <div>
            <Typography variant="h4" style={{textAlign: 'center'}}>
                Our Services
            </Typography>
            <br></br>
        <Grid container alignItems="stretch"  justifyContent="center">
        
            {/* row 1 */}
            <Grid item style={{display: 'flex'}} padding={5}>
            
                    {/* Petmart service */}
                    <Card sx={{ maxWidth: 240, padding:1}}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={petImage}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Pet Mart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Here you can sell or buy pets.
                        </Typography>
                        </CardContent>        
                    </Card>
                </Grid>

                {/* <Item padding={5}> */}
                <Grid item style={{display: 'flex'}} padding={5}>
                    {/* Product mart service */}
                    <Card sx={{ maxWidth: 240, padding:1}}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={petProdImage}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Product Mart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pet product mart facilitates finding the availability of pet products in various pet stores.
                        </Typography>
                        </CardContent>        
                    </Card>
                    </Grid>
                    
                    <Grid item style={{display: 'flex'}} padding={5}>
                    {/* make appointments service */}
                    <Card sx={{ maxWidth: 240, padding:1 }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={makeAppointment}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Make appointments to Veterinary Doctors
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Here you can search for the availability of veterinary doctors and make appointments 
                        </Typography>
                        </CardContent>        
                    </Card>
                    </Grid>
        </Grid>






        {/* row 2 */}

        <Grid container alignItems="stretch"  justifyContent="center">
           
            <Grid item style={{display: 'flex'}} padding={5}>
                    {/* discussion service */}
                    <Card sx={{ maxWidth: 240, padding:1}}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={discussion}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Discussion forum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Provides a collaborative platform for pet owners and doctors to discuss about pet related topics
                        </Typography>
                        </CardContent>        
                    </Card>
            </Grid>
            <Grid item style={{display: 'flex'}} padding={5}>
                    {/* articles service */}
                    <Card sx={{ maxWidth: 240, padding:1}} >
                        <CardMedia
                        component="img"
                        height="140"
                        image={articles}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Articles 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Here you can read the articles published by the doctors about pet related topics
                        </Typography>
                        </CardContent>        
                    </Card>
            </Grid>
                    
            <Grid item style={{display: 'flex'}} padding={5}>
                    {/* notices service */}
                    <Card sx={{ maxWidth: 240, padding:1 }}>
                        <CardMedia
                        component="img"
                        height="140"
                        image={notices}
                        alt="shop image"
                        />

                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Notices                        
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Provides notices on 
                        
                        <ul>
                            <li>vaccination and sterilization programs</li>
                            <li>pet breeding</li>
                            <li> lost or found pets</li>
                            <li>requests for donations and volunteering services </li>
                        </ul>
                        </Typography>
                       
                        </CardContent>        
                    </Card>
            </Grid>
        </Grid>
    </div>
)}
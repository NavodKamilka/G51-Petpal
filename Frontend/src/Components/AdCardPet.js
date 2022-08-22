import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import puppyImage from '../Images/puppy.jpg';


export default function AdCardPet() {
    return (
        <Card sx={{ maxWidth: 240, padding:1 }}>

            <CardMedia
              component="img"
              height="140"
            //width="100"
              image={puppyImage}
              alt="pet image"
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Labrador
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Male puppy<br></br>
                Rs 30 000<br></br>
                Colombo <br></br>
                011-2233445
              </Typography>
            </CardContent>
        </Card>

    )}


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClinicImage from '../Images/PetClinic.png';


export default function AdCardClinic() {
    return (
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={ClinicImage}
              alt="Clinic Image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Love
              </Typography>
              <Typography variant="body2" color="text.secondary">
              No10, Flower street,Colombo 07 <br></br>
              011-2233446
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small">View Clinic</Button>
          </CardActions>
            
        </Card>

    )}


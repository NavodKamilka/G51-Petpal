import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoctorImage from '../Images/vet1.png';


export default function AdCardDoctor() {
    return (
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={DoctorImage}
              alt="Doctor Image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dr. Dayani Siriwardane
              </Typography>
              <Typography variant="body2" color="text.secondary">
                076-8945612<br></br>
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small" href='/ClinicDocProfile'>View Doctor</Button>
          </CardActions>
            
        </Card>

    )}


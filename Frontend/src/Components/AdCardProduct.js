import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import petFoodImage from '../Images/petFood1.png';


export default function AdCardProduct() {
    return (
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="240"
              image={petFoodImage}
              alt="Product image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pedegree
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chicken and vegetables 400g<br></br>
                Rs 375.00<br></br>
              No10, Yatinuwara street,Kandy <br></br>
              081-2233445
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small">View shop</Button>
          </CardActions>
            
        </Card>

    )}


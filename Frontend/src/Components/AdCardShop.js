import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import shopImage from '../Images/shop.jpg';

export default function AdCardShop() {
    return (
        <Card sx={{ maxWidth: 240, padding:1 }}>
            <CardMedia
              component="img"
              height="140"
              image={shopImage}
              alt="shop image"
          
             />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet store 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
              No10, Yatinuwara street,Kandy <br></br>
              081-2233445
              </Typography>
            </CardContent>

          <CardActions>
            <Button size="small" href="/ShopProfileGuestView">View shop</Button>
          </CardActions>
            
        </Card>

    )}
  
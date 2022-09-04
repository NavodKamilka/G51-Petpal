import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import navod from "../../Images/navod.jpg";
import prasadani from '../../Images/prasadani.jpg'
import pavani from "../../Images/pavani.jpg";
import keshani from "../../Images/keshani.jpeg";
import Dhanika from "../../Images/Dhanika.jpg";
// import Image3 from '../../Images/contactus.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1230,
  top: 10,
}));

export default function ArticlesContent() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container alignItems="stretch" spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Box>
                <Typography sx={{fontSize:'50px'}}>Head Contacts</Typography>
              </Box>
              <br />
              <div>
              <Stack spacing={10} direction="row" position={'relative'} left='15%'>
                <Stack>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                      height='140px'
                      width='100px'
                      ><img src={navod}  alt="Logo" height='200' className='image' style={{
                          marginLeft: '0%',
                          marginTop:40                            
                        
                        }}/></CardMedia>
                        
                       

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        For Technical assistance 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Typography>Assitant manager : Navod Kamilka</Typography>
                            <Typography>Telphone no : +94 77 647 7890</Typography>
                            <Typography>Email : navodkamilaka@gmail.com</Typography>              
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
                <Stack>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        height='140px'
                        width='100px'
                        ><img src={Dhanika}  alt="Logo" height='200' className='image' style={{
                            marginLeft: '0%',
                            marginTop:40                            
                          
                          }}/></CardMedia>
                        

                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        For Financial assistance 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Typography>Assitant manager : Pinsara Dhanika</Typography>
                            <Typography>Telphone no : +94 77 112 1134</Typography>
                            <Typography>Email : dhanika@gmail.com</Typography>              
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>

                <Stack>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        height='140px'
                        width='100px'
                        ><img src={keshani}  alt="Logo" height='200' className='image' style={{
                            marginLeft: '0%',
                            marginTop:40                            
                          
                          }}/>
                        
                        </CardMedia>

                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Administrative assistance
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Typography>System Administrator : Keshani Ekanayake</Typography>
                            <Typography>Telphone no : +94 77 777 8889</Typography>
                            <Typography>Email : keshaniekanayake@gmail.com</Typography>              
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Stack>
              <br></br>
              <br></br>
              <Stack spacing={10} direction="row" position={'relative'} left='30%'>
                <Stack>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                       height='140px'
                       width='100px'
                       ><img src={prasadani}  alt="Logo" height='200' className='image' style={{
                           marginLeft: '0%',
                           marginTop:40                            
                         
                         }}/>
                       
                       </CardMedia>

                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Customer care
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Typography>Assitant manager : Prasadani Aluthwathta</Typography>
                            <Typography>Telphone no : +94 77 666 1111</Typography>
                            <Typography>Email : prasadanialuthwathta@gmail.com</Typography>              
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
                <Stack>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        height='140px'
                        width='100px'
                        ><img src={pavani}  alt="Logo" height='200' className='image' style={{
                            marginLeft: '0%',
                            marginTop:40                            
                          
                          }}/>
                        
                        </CardMedia>
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Customer care
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Typography>Assitant manager : Pavani Marasinghe</Typography>
                            <Typography>Telphone no : +94 77 333 4445</Typography>
                            <Typography>Email : pavanimarasinghe@gmail.com</Typography>              
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Stack>
              </Stack>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

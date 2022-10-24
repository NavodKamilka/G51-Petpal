import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
// import Image1 from "../../Images/Profile.png";
// import Image2 from '../../Images/vet1.png'
// import Image3 from '../../Images/contactus.jpg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
  height: '130%',
  top: 10,
}));

export default function ArticlesContent() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Box>
                <Typography sx={{fontSize:'50px',textAlign:'center'}}>Who We Are?</Typography>
              </Box>
              <br />
              
                <Typography variant="body1" >
                   

                    PetPal system was started in March 2022 by a group of students of University of Colombo School of Computing as an academic project 
                    which was aiming to introduce a new and better interconnected platform for all the pet enthusiasts including pet owners, 
                    veterinary doctors, veterinary clinics, animal foster homes and pet stores to ensure well being of pets while supporting the
                    welfare of street animals. 
                    <br></br>
                    <br></br>
                    PetPal system will ensure;
                    <ul>
                        <li>Convenience in managing and organizing pet details</li>

                        <li>Less time and effort spent on searching for veterinary doctors, making appointments with doctors, and finding specific brands of pet products.</li>

                        <li>A collaborative area for pet lovers and veterinarians. </li>

                        <li>Increased user-friendliness by providing notices on vaccination and sterilization programs, pet breeding, lost or found pets, articles on pet diseases, and pet-related topics.</li>

                        <li>Welfare of street animals by facilitating donations and volunteering for foster homes and animal rescue programs.</li>
                    </ul>
                </Typography>
               

                
              
                
              
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

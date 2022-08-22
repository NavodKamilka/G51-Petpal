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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1230,
  top: 10,
}));

export default function Review() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Box>
                <Typography sx={{ fontSize: "20px" }}>
                  <h1
                    style={{
                      width: "50%",
                      display: "inline",
                      marginRight: "100px",
                      fontWeight: "bold",
                      color: "#193498",
                    }}
                  >
                    {" "}
                    Reviews
                  </h1>
                </Typography>
              </Box>
              <br />
              <div>
                <Stack spacing={2} direction="column">
                  {Array.from(Array(1)).map((index) => (
                    <Card sx={{ maxWidth: "800px" }}>
                      <CardActionArea>
                        <CardMedia height="140px" direction="row">
                          <Typography>Kasun Perera</Typography>
                          <Typography>Veterinary Doctor</Typography>
                        </CardMedia>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Great service!!
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Stack>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

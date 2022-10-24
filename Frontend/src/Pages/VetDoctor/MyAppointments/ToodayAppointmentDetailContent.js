import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../../Style/VetDoctor/CompletedAppointment.css";
import HealthRecord from "./HealthRecord";
//popup
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from '@mui/material/styles';

//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons

    blackButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    blueButton: {
      main: '#1D168F',
      contrastText: "#fff" 
    },
    
  },
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1000,
  top: 10,
}));

export default function UpcomingAppointmentDetailContent() {
  //-------Dialog box ---------------

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const[List, setList]=useState([]);

    // here we don't have to click any button to display data
    useEffect(() =>{
      Axios.get("http://localhost:3001/api/vetappointments/getAppointmentDetails").then((response)=>{
        setList(response.data.data);   
      console.log(response);
      });
    }, []);
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          
            <Item>
            
              <div
                style={{
                  width: window.width,
                  textAlign: "center",
                  position: "relative",
                  top: "5%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  // top:'180px',left:'0%'
                }}
              >
                {List.map((vall)=>{ return( <h1
                  style={{
                    width: "50%",
                    display: "inline",
                    marginRight: "100px",
                    fontWeight: "bold",
                    color: "#193498",
                  }}
                >
                  {" "}
                  Appointment - {vall.AppointmentID}
                </h1>)})}
              </div>
              <div
                className="box4"
                style={{ position: "relative", top: "5%", left: "30%" }}
              >
              {List.map((val)=>{
              return(
              
                <table className="">
                  <tbody>
                    <tr>
                      <td colspan="5">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <h3 className="orderitemtopic">Timeslot details</h3>
                      </td>
                      <td colspan="2">
                        <h3 className="orderitemtopic">Owner details</h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Date</td>
                      <td className="orderitemx" id="date">
                        {val.Date}
                      </td>
                      <td className="orderitem">Name</td>
                      <td className="orderitemx" id="date">
                        {val.OwnerID}
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Token</td>
                      <td className="orderitemx" id="timeslot">
                        {val.Timeslot}
                      </td>
                      <td className="orderitem">Mobile no</td>
                      <td className="orderitemx" id="mobile">
                        07793277567
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Home visit</td>
                      <td className="orderitemx" id="timeslot">
                        yes
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <h3
                          className="orderitemtopic"
                          style={{ textAlign: "center" }}
                        >
                          Pet details
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Pet name</td>
                      <td className="orderitemx" id="date">
                        Bobby
                      </td>

                      <td className="orderitem">Type</td>
                      <td className="orderitemx" id="type">
                        Dog
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Breed</td>
                      <td className="orderitemx" id="breed">
                        labrador
                      </td>
                      <td className="orderitem">Age</td>
                      <td className="orderitemx" id="age">
                        10
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Gender</td>
                      <td className="orderitemx" id="gender">
                        Male
                      </td>
                      <td className="orderitem">Blood Group</td>
                      <td className="orderitemx" id="blood">
                      DEA 7
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <h3
                          className="orderitemtopic"
                          style={{ textAlign: "center" }}
                        >
                          Health records
                        </h3>
                      </td>
                      <td colspan="2">
                       <Stack>
                       <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' onClick={handleClickOpen}>Add new record</Button></ThemeProvider>
      
                        </Stack>
                      </td>
                    </tr>
                  </tbody>
                </table>
                )})}
              </div>

              <div style={{ position: "relative", top: "5%", left: "-0%" }}>
                <HealthRecord />
              </div>
              <div>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Today record</DialogTitle>

                  <DialogContent>
                    <DialogContentText>
                      Please fill this data carefully.Once you confirmed then the database will be updated and you cannot retrieve it for any reason.
                    </DialogContentText>

                    <TextField
                      autoFocus
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="prescription"
                      label="Prescription"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                        
                    
                  </DialogContent>

                  <DialogActions>
                  
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                      onClick={handleClose}
                      // component={Link} state={{id:val.AppointmentID}}
                      style={{
                        "&:hover": { backgroundColor: "#1BDD3A" },
                        transitionDuration: "0.4s",
                        cursor: "pointer",
                      }}
                    >
                      Confirm
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../../Style/VetDoctor/CompletedAppointment.css";
import HealthRecord from "./HealthRecord";

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
                  Appointment - 0001
                </h1>
              </div>
              <div
                className="box4"
                style={{ position: "relative", top: "5%", left: "30%" }}
              >
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
                        2022-2-2
                      </td>
                      <td className="orderitem">Name</td>
                      <td className="orderitemx" id="date">
                        kasun perera
                      </td>
                    </tr>
                    <tr>
                      <td className="orderitem">Time</td>
                      <td className="orderitemx" id="timeslot">
                        10 pm
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
                        fgkjdfn
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
                        Dunno
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
                          <Button
                            variant="contained"
                            // onClick={handleClickOpen}
                            style={{
                              display: "inline-block",
                              width: "250px",
                              margin: 10,
                              fontSize: "15px",
                              backgroundColor: "#005A2B",
                            }}
                          >
                            Add{" "}
                          </Button>
                        </Stack>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ position: "relative", top: "5%", left: "-0%" }}>
                <HealthRecord />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

import React, { useState, useEffect }  from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";


export default function HealthRecord() {
  
  const[List, setList]=useState([]);

    // here we don't have to click any button to display data
    useEffect(() =>{
      Axios.get("http://localhost:3001/api/vetappointments/getHealthRecord").then((response)=>{
        setList(response.data.data);   
      console.log(response);
      });
    }, []);
  return (
    <div>
      <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell align="left">Description</TableCell>
                          <TableCell align="left">Prescription</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {List.map((row) => (
                          <TableRow
                            key={row.date}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">{row.Date}
                            </TableCell>
                            <TableCell align="left" >{row.Description}</TableCell>
                            <TableCell align="left">{row.Prescription}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
    </div>
  )
}

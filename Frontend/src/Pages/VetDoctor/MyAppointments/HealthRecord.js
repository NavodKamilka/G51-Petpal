import React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
    date: string,
    description: string,
    prescription: string
  ) {
    return { date, description, prescription };
  }
  
  const rows = [
    createData("2022-01-10", "Ear Infections", "amoxicillin-clavulanate anti-fungal."),
    createData("2022-01-25", "Itchy skin/Skin Infections", "cephalexin, erythromycin"),
  ];

export default function HealthRecord() {
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
                        {rows.map((row) => (
                          <TableRow
                            key={row.date}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">{row.date}
                            </TableCell>
                            <TableCell align="left" >{row.description}</TableCell>
                            <TableCell align="left">{row.prescription}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
    </div>
  )
}

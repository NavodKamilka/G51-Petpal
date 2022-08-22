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
    createData("2022-02-10", "ghhdhjbndvfnjhbhjds jhjsdh hgshgb dcfvdgh vccdfngnfgdf fddgydtr hgfdyu", "sbdcjhgdyb dvhjgjas ggsdgjkc hsgdjdh"),
    createData("2022-02-10", "ghhdhjbndvfnjhbhjds jhjsdh hgsydtr hgfdyu", "sbdcjhgdyb dvhjgjas ggsdgjkc hsgdjdh"),
    createData("2022-02-10", "ghhdhjbndvfnjhbhjds jhjsdh hgsydtr hgfdyu", "sbdcjhgdyb dvhjgjas ggsdgjkc hsgdjdh"),
    createData("2022-02-10", "ghhdhjbndvfnjhbhjds jhjsdh hgsydtr hgfdyu", "sbdcjhgdyb dvhjgjas ggsdgjkc hsgdjdh"),
    createData("2022-02-10", "ghhdhjbndvfnjhbhjds jhjsdh hgsydtr hgfdyu", "sbdcjhgdyb dvhjgjas ggsdgjkc hsgdjdh"),
  ];

export default function HealthRecord() {
  return (
    <div>
      <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
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
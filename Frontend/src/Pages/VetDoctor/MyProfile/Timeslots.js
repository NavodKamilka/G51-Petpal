import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

function createData(daay: string, startTime: string, endTime: string) {
    return { daay, startTime, endTime };
  }

  const rows = [createData("Saturday", "6pm", "10 pm"),createData("Sunday", "6pm", "10 pm")];
export default function Timeslots() {
  
  return (
    <div>
      <Stack>
        <TableContainer component={Paper} sx={{width:400,position:"relative",left:"30%",top:'40%'}}>
          <Table sx={{ width: 400 }} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell align="center">Day</TableCell>
                <TableCell align="center">Time Duration</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.daay}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.daay}
                  </TableCell>
                  <TableCell align="left">
                    {row.startTime} - {row.endTime}
                  </TableCell>
                  <TableCell align="left">
                    <Button>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
}

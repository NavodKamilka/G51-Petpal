import React , {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Axios from "axios";

export default function Timeslots() {
  
  const [timeslotList,setTimeslotList] = useState ([]);

  useEffect(()=>{

      Axios.get('http://localhost:3001/api/ViewTimeslot').then((response)=>{
          setTimeslotList(response.data);
          console.log(response.data)

      });
  },[]);

  return (
    <div>
      <Stack>
        <TableContainer component={Paper} sx={{width:400,position:"relative",left:"30%",top:'40%'}}>
          <Table sx={{ width: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Day</TableCell>
                <TableCell align="center">Time Duration</TableCell>
                <TableCell align="center">Maximum no of slots</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timeslotList.map((data) => (
                <TableRow
                  key={data.Day}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {data.Day}
                  </TableCell>
                  <TableCell align="left">
                    {data.StartTime} to {data.EndTime}
                  </TableCell>
                  <TableCell align="left">
                    {data.MaxTokens} 
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

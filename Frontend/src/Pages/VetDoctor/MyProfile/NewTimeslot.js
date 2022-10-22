import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Box from "@mui/material/Box";
import Axios from "axios";


export default function NewTimeslot() {
  //choose a day
  const [day, setDay] = React.useState("");

  const chooseDay = (e) => {
    setDay(e.target.value);
  };
  // const startTimeSelected = format(new Date(this.state.date),"hh:mm");
  const [startTimeSelected, setStartTime] = React.useState(null);

  const handleStartTime = (newValue) => {
    setStartTime(newValue);
  };
  //
  const [endTime, setEndTime] = React.useState(null);

  const handleEndTime = (newValue) => {
    setEndTime(newValue);
  };

  const [slots, setSlots] = useState("");

  function print(event) {
    console.log(day);
    console.log(startTimeSelected);
    console.log(endTime);
    console.log(slots);

    const data = {
      headers: {
        Day: day,
        StartTime: startTimeSelected,
        EndTime: endTime,
        Slots: slots,
      },
    };
    console.log(data);

    //Axios.post("http://localhost:3001/api/AddDocTimeslot",data,null);
   Axios.post("http://localhost:3001/api/AddDocTimeslot",null,data);
  }

  return (
    <div>
      <Stack spacing={3} direction="column">
        <h2>Add new timeslot</h2>

        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">Day</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Day"
            onChange={chooseDay}
          >
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker
              label="Start Time"
              value={startTimeSelected}
              onChange={handleStartTime}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <TimePicker
              label="End Time"
              value={endTime}
              onChange={handleEndTime}
              format="hh:mm"
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Maximum No of Tokens"
            value={slots}
            variant="outlined"
            onChange={(e) => {
              setSlots(e.target.value);
            }}
          />
        </Box>

        <Button onClick={print}>Submit</Button>
      </Stack>
    </div>
  );
}

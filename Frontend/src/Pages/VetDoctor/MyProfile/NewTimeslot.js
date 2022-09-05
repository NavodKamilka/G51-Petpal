import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Box from '@mui/material/Box';

export default function NewTimeslot() {
 
  //choose a day
  const [day, setDay] = React.useState("");

  const chooseDay = (event: SelectChangeEvent) => {
    setDay(event.target.value);
  };
  ///
  const [startTime, setStartTime] = React.useState(
    null
  );

  const handleStartTime= (newValue) => {
    setStartTime(newValue);
  };
  //
  const [endTime, setEndTime] = React.useState(
    null
  );

  const handleEndTime= (newValue) => {
    setEndTime(newValue);
  };
  
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
            <MenuItem value={1}>Monday</MenuItem>
            <MenuItem value={2}>Tuesday</MenuItem>
            <MenuItem value={3}>Wednesday</MenuItem>
            <MenuItem value={4}>Thursday</MenuItem>
            <MenuItem value={5}>Friday</MenuItem>
            <MenuItem value={6}>Saturday</MenuItem>
            <MenuItem value={7}>Sunday</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
        <TimePicker
          label="Start Time"
          value={startTime}
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
          renderInput={(params) => <TextField {...params} />}
        />

      </Stack>
    </LocalizationProvider>
        
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box>

        <Button>Submit</Button>
      </Stack>
    </div>
  );
}

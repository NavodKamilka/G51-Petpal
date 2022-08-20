import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function NewTimeslot() {
//choose a day
    const [day, setDay] = React.useState('');

    const chooseDay = (event: SelectChangeEvent) => {
      setDay(event.target.value);
    };
    const [value, setValue] = React.useState<Date | null>(null);
//choose start time
    // const [startTime, setStartTime] = React.useState('');

    // const chooseStartTime = (event: SelectChangeEvent) => {
    //   setStartTime(event.target.value);
    // };

//choose end time
const [endTime, setEndTime] = React.useState('');

const chooseEndTime = (event: SelectChangeEvent) => {
  setEndTime(event.target.value);
};
  return (
    <div>

      <Stack spacing={3} direction="column">
        <h2>Add new timeslot</h2>
      <FormControl sx={{width:"150px"}}>
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
      <FormControl sx={{width:"150px"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
</FormControl>

<FormControl sx={{width:"150px"}}>
  <InputLabel id="demo-simple-select-label">End Time</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={endTime}
    label="EndTime"
    onChange={chooseEndTime}
  >
    <MenuItem value={1}>00.00</MenuItem>
    <MenuItem value={2}>Tuesday</MenuItem>
    <MenuItem value={3}>Wednesday</MenuItem>
    <MenuItem value={4}>Thursday</MenuItem>
    <MenuItem value={5}>Friday</MenuItem>
    <MenuItem value={6}>Saturday</MenuItem>
    <MenuItem value={7}>Sunday</MenuItem>
  </Select>
</FormControl>
<Button>Submit</Button>
        </Stack>
    </div>
  )

}



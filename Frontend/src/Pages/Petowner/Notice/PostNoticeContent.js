import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// // import Link from '@mui/material/Link';
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import TextField from "@mui/material/TextField";

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const values = {
  someDate: "2017-05-24"
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1500,
  top: 10,
}));

export default function PetSellContent() {

  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };


  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
            <Stack
                spacing={80}
                direction="row"
                marginLeft={10}
                sx={{ marginTop: 4 }}
              >
                <Button
                  variant="contained"
                  href="/Notice"
                  startIcon={<KeyboardDoubleArrowLeftIcon />}
                >
                  Go Back
                </Button>
              </Stack> <br /><br />
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Notice Topic"
                variant="outlined"
              />
              <br />
              <br />
              <br />  

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Publisher Name"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="NIC"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Publisher Address"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Telephone Number"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                name="someDate"
                label="Requested Date"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                defaultValue={values.someDate}
              />
              <br />
              <br />
              <br />

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Distric"
                variant="outlined"
              />
              <br />
              <br />
              <br /> 
              <FormControl sx={{ m: 1, width: "70%" }}>
                <InputLabel id="demo-simple-select-label">Notice Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="{Pet Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Lost</MenuItem>
                  <MenuItem value={20}>Blood Request</MenuItem>
                  <MenuItem value={30}>Breeding</MenuItem>
                  <MenuItem value={30}>Vaccination</MenuItem>
                  <MenuItem value={30}>Donation/Volunteering</MenuItem>
                  <MenuItem value={30}>Adoption</MenuItem>
                  <MenuItem value={30}>Rescue Program(evevnts)</MenuItem>
                </Select>
              </FormControl><br/><br/><br/>
              <Typography
                variant="h5"
                sx={{
                  marginLeft: "-60%",
                }}
              >
                Upload Your Notice :
              </Typography>

              <Stack marginTop={5}>
                    <form
                      id="form-file-upload"
                      onDragEnter={handleDrag}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        ref={inputRef}
                        type="file"
                        id="input-file-upload"
                        multiple={true}
                        onChange={handleChange}
                      />
                      <label
                        id="label-file-upload"
                        htmlFor="input-file-upload"
                        className={dragActive ? "drag-active" : ""}
                      >
                        <div>
                          <p>Drag and drop your file here or</p>
                          <button className="upload-button" onClick={onButtonClick}>
                            Upload a file
                          </button>
                        </div>
                      </label>
                      {dragActive && (
                        <div
                          id="drag-file-element"
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                        ></div>
                      )}
                    </form>
                </Stack >
                <Stack direction="row"  marginTop={8} marginLeft={'80%'} marginRight={'20%'}>
                <Button variant="contained"  style={{backgroundColor:'#1D168F'}} sx={{fontSize: 14, height:40}} >Post </Button>

                </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

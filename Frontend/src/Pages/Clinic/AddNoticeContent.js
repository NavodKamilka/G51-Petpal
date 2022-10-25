import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
//import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import Axios from "axios";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { blueGrey } from '@mui/material/colors';


//import '../../Style/Shop/ShopProfile.css'

// import { color } from '@mui/system';

const values = {
    someDate: "YYYY-MM-DD"
  };

//change the length of the textfield
const style={
    width: 500
}

const theme = createTheme({
    palette: {
      //name given as view, update and delete to declare buttons
      blueButton: {
        main: '#1D168F',
      //   change the text color inside the button to another color
        contrastText: "#fff" 
      } ,     
    },
  });


// the box-grey
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:650,
    top:50,
  }));

export default function AddNoticeContent() {

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
  
    const [PublisherName, setPublisherName] = useState("");
    const [RegNo, setRegNo] = useState("");
    const [VaccineName, setVaccineName] = useState("");
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [Venue, setVenue] = useState("");
   
    const addNotice = (event) =>{
        event. preventDefault();
        Axios.post("http://localhost:3001/api/Doctor/insertnotice", {
            PublisherName: PublisherName, 
            RegNo: RegNo, 
            VaccineName: VaccineName, 
            Date: Date,
            Time: Time, 
            Venue: Venue
        }).then(()=> {
            alert("successful insert");
        });
    };
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
            <h3>Add Notice</h3>
            <Divider />
            <br></br>
            <FormControl>
                <table>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Publisher Name"
                            style={style}
                            value={PublisherName}
                            onChange={(e)=>{
                              setPublisherName(e.target.value)
                }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Clinic Register No"
                            style={style}
                            value={RegNo}
                            onChange={(e)=>{
                              setRegNo(e.target.value)
                            }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Vaccine Name"
                            style={style}
                            value={VaccineName}
                            onChange={(e)=>{
                              setVaccineName(e.target.value)
                            }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        
                        <td><TextField
                            id="outlined-helperText"
                            name="someDate"
                            label="Date"
                            InputLabelProps={{ shrink: true, required: true }}
                            type="date"
                            defaultValue={values.someDate}
                            style={style}
                            value={Date}
                            onChange={(e)=>{
                              setDate(e.target.value)
                            }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Start Time"
                            style={style}
                            value={Time}
                            onChange={(e)=>{
                              setTime(e.target.value)
                            }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td><TextField
                            id="outlined-helperText"
                            label="Venue"
                            style={style}
                            value={Venue}
                            onChange={(e)=>{
                              setVenue(e.target.value)
                            }}  
                            />
                        </td>
                    </tr>
                    <br></br>

                    {/* <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Notice Content"
                                multiline
                                rows={4}
                                style={style}
                            />
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <p>Upload Notice</p>
                    <Stack spacing={10} direction="row" justifyContent="center" >
                        <IconButton  sx={{ color: blueGrey[900] }} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>


                    </tr>
                    <br></br>
                    <tr>
                    <Stack spacing={10} direction="row" justifyContent="center" marginTop={3}>    
                        <ThemeProvider theme={theme}><Button variant="contained" href='/ViewNoticeMain'color='blueButton'>Request</Button></ThemeProvider>
                    </Stack>
                    </tr> */}
                    {/* <Typography
                variant="h10"
                sx={{
                  marginLeft: "-70%",
                }}
              >
                Upload Your Notice :
              </Typography>

              <Stack marginTop={2}>
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
                </Stack > */}
                {/* <Stack direction="row"  marginTop={8} marginLeft={'80%'} marginRight={'20%'}>
                <Button variant="contained" sx={{fontSize: 14, height:40}} >Post </Button>

                </Stack> */}
                  <Stack spacing={8} direction="row" style={{
                        marginLeft:'30%',
                        marginTop: 25
                    }}>
              <ThemeProvider theme={theme}><Button variant="contained" href='/ViewNoticeMain' color='blueButton' onClick={addNotice}>Post</Button></ThemeProvider>
              <ThemeProvider theme={theme}><Button variant="contained" href='/ViewNoticeMain'color='blueButton'>Cancel</Button></ThemeProvider>
              
          </Stack>
                </table>
                </FormControl>
                </Item>
                </Grid>
                </Box>
            </div>
        
    )       
}
//export default AddNoticeContent;
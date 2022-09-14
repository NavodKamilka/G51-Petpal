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
import Axios from 'axios';
import { useSelector } from 'react-redux';

// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


// const values = {
//   someDate: "2017-05-24"
// };

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

  const token = useSelector((state) => state.user.token);

  const [NoticeType, setNoticeType] = React.useState("");
  const [NoticeTopic, setNoticeTopic] = React.useState("");
  const [PublisherName, setPublisherName] = React.useState("");
  const [Nic, setNic] = React.useState("");
  const [PublisherAdress, setPublisherAdress] = React.useState("");
  const [TelephoneNumber, setTelephoneNumber] = React.useState("");
  // const [values.someDate, setTelephoneNumber] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [District, setDistrict] = React.useState("");
  const [file, handleFiles] = React.useState(null);
  //const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [date, setDate] = React.useState("");

  const handleChange2 = (event) => {
    setNoticeTopic(event.target.value);
  };
  const handleChange3 = (event) => {
    setPublisherName(event.target.value);
  };
  const handleChange4 = (event) => {
    setNic(event.target.value);
  };
  const handleChange5 = (event) => {
    setPublisherAdress(event.target.value);
  };
  const handleChange6 = (event) => {
    setTelephoneNumber(event.target.value);
  };
  const handleChange7 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange8 = (event) => {
    setDate(event.target.value);
  };

  const handleChange9 = (event) => {
    setDistrict(event.target.value);
  };
  

  const handleChange1 = (event) => {
    setNoticeType(event.target.value);
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
      console.log(e.target.files);
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const Post = () => {

    // console.log(name);
    const data = new FormData();
    data.append('file', file)

    Axios.post('http://localhost:3001/api/postNotice', {  
      NoticeType : NoticeType,
      NoticeTopic : NoticeTopic,
      PublisherName : PublisherName,
      NIC : Nic,
      PublisherAddress : PublisherAdress,
      TelNum : TelephoneNumber,
      Email : Email, 
      District : District,
      Image : file,
      RequestedDate : date

      
    },{
      //headers: { authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjYzMDUwNDk4LCJleHAiOjE2NjMwNjEyOTh9.v8aNDlQi8qKPI_urGeq1NQugXtdfMpZEqOxKB76Gvco` }
      // headers: { authorization : `Bearer ${this.Token}` }
      headers: { authorization : `Bearer ${token}` }
    }).then(() => {
        console.log("Success");
    });
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
                value={NoticeTopic}
                onChange={handleChange2}
              />
              <br />
              <br />
              <br />  

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Publisher Name"
                variant="outlined"
                value={PublisherName}
                onChange={handleChange3}
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="NIC"
                variant="outlined"
                value={Nic}
                onChange={handleChange4}
              />
              <br />
              <br />
              <br /> 

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Publisher Address"
                variant="outlined"
                value={PublisherAdress}
                onChange={handleChange5}
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Telephone Number"
                variant="outlined"
                value={TelephoneNumber}
                onChange={handleChange6}
              />
              <br />
              <br />
              <br /> 
              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={Email}
                onChange={handleChange7}
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
                // defaultValue={values.someDate}
                value={date}
                onChange={handleChange8}
              />
              <br />
              <br />
              <br />

              <TextField
                sx={{ marginLeft: "0%", width: "70%" }}
                id="outlined-basic"
                label="District"
                variant="outlined"
                value={District}
                onChange={handleChange9}
              />
              <br />
              <br />
              <br /> 
              <FormControl sx={{ m: 1, width: "70%" }}>
                <InputLabel id="demo-simple-select-label">Notice Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={NoticeType}
                  label="{Notice Type}"
                  onChange={handleChange1}
                >
                  <MenuItem value={'Lost'}>Lost</MenuItem>
                  <MenuItem value={'BloodRequest'}>Blood Request</MenuItem>
                  <MenuItem value={'Breeding'}>Breeding</MenuItem>
                  <MenuItem value={'Vaccination'}>Vaccination</MenuItem>
                  <MenuItem value={'DonationVolunteering'}>Donation/Volunteering</MenuItem>
                  <MenuItem value={'Adoption'}>Adoption</MenuItem>
                  <MenuItem value={'RescueProgram'}>Rescue Program(evevnts)</MenuItem>
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
                <Button variant="contained" onSubmit={Post} sx={{fontSize: 14, height:40}} >Post </Button>

                </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

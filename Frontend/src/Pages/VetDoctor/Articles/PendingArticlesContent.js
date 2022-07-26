import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
// import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ArticleList3 from "./ArticleList3";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from '@mui/material/styles';
//popup
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useFilePicker } from "use-file-picker";
import Autocomplete from "@mui/material/Autocomplete";
import SearchBar from "../../../Components/SearchBar";

const filterByDate = [
  { title: "Latest published" },
  { title: "Latest published" },
];

const filterByLikes = [{ title: "High rated" }, { title: "Low rated" }];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F3F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 1230,
  top: 10,
}));
//colors for buttons
const theme = createTheme({
  palette: {
    //name given as view, update and delete to declare buttons

    blackButton: {
      main: '#000000',
    //   change the text color inside the button to another color
      contrastText: "#fff" 
    },
    blueButton: {
      main: '#1D168F',
      contrastText: "#fff" 
    },
    
  },
});

export default function ArticlesContent() {
  //-------Dialog box ---------------

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //-------------------- File selector---------
  const [openFileSelector, { loading, errors, plainFiles }] = useFilePicker({
    multiple: true,
    readAs: "DataURL",
    // accept: '.ics,.pdf',
    accept: [".pdf"],
    limitFilesConfig: { min: 1, max: 1 },
  });

  if (errors.length) {
    return (
      <div>
        <button onClick={() => openFileSelector()}>
          Something went wrong, retry!{" "}
        </button>
        {errors[0].fileSizeTooSmall && "File size is too small!"}
        {errors[0].fileSizeToolarge && "File size is too large!"}
        {errors[0].readerError && "Problem occured while reading file!"}
        {errors[0].maxLimitExceeded && "Too many files"}
        {errors[0].minLimitNotReached && "Not enought files"}
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              {/* up  bar buttons and searches */}
              <div>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add your Article</DialogTitle>

                  <DialogContent>
                    <DialogContentText>
                      Please enter your article topic here and upload the
                      article in pdf format. We will inform you when it is
                      published and we have all the rights to reject your
                      article.
                    </DialogContentText>

                    <TextField
                      autoFocus
                      margin="dense"
                      id="topic"
                      label="Topic"
                      type="text"
                      fullWidth
                      variant="standard"
                    />

                    {/* <input type="file" onChange={this.onFileChange} /> */}

                    <Button onClick={() => openFileSelector()}>
                      Select file{" "}
                    </Button>

                    {plainFiles.map((file) => (
                      <p key={file.name}>
                        {file.name}

                        <Button
                          variant="contained"
                          style={{ borderRadius: "10px", left: "40px" }}
                        >
                          Upload!
                        </Button>
                      </p>
                    ))}
                  </DialogContent>

                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                      onClick={handleClose}
                      style={{
                        "&:hover": { backgroundColor: "#1BDD3A" },
                        transitionDuration: "0.4s",
                        cursor: "pointer",
                      }}
                    >
                      Confirm
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>

              {/* <div style={{ position: "absolute", top: "28%", left: "20%" }}>
                <hr
                  style={{
                    width: "1000px",
                    height: "5px",
                    backgroundColor: "#666",
                    opcaity: "0.5",
                  }}
                />
              </div> */}
              <div
                style={{
                  flexDirection: "row",
                  display: "inline-flex",
                  height: 55,
                  margin: 10,
                  width: window.width,
                  verticalAlign: "center",
                  position: "relative",
                  top: "0%",
                  left: "0%",
                }}
              >
                <Stack>
                <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' style={{display:'inline-block',width: '250px',margin:10,marginLeft:90, fontSize:'15px'}}
                href="/ArticlesFrom">
                  My articles</Button></ThemeProvider>
                </Stack>

                <Stack>
                <ThemeProvider theme={theme}><Button variant="contained" color='blackButton'
                style={{display:'inline-block',width: '250px',margin:10,fontSize:'15px'}}>Pending</Button></ThemeProvider>
                </Stack>

                <Stack>
                <ThemeProvider theme={theme}><Button variant="contained" color='blueButton'
                onClick={handleClickOpen}
                style={{display:'inline-block',width: '250px',margin:10,marginRight:90, fontSize:'15px'}}
                >Add</Button></ThemeProvider>
                
                </Stack>
              </div>
              <Stack style={{ position: "relative", top: "2%" }}>
                {/* <SearchBar style={{ width: "20px" }}> </SearchBar> */}
              </Stack>

              

              {Array.from(Array(1)).map((index) => (
                <div style={{ position: "relative", top: "5%", left: "0%" }}>
                  <ArticleList3 />
                </div>
              ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

// export default MyProfileContent

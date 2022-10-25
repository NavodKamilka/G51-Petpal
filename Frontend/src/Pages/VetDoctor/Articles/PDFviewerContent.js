import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
// import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AllPagesPDFViewer from "./components/pdf/all-pages";
import samplePDF from "../../../Images/Topic.pdf";
// import PDFViewer from 'pdf-viewer-reactjs'

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

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              
            <h4>All Pages</h4>
            {/* <div className="all-page-container">
                <AllPagesPDFViewer pdf={samplePDF} />
            </div> */}
            {/* <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }} */}
        {/* /> */}

            <hr />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}


// export default MyProfileContent

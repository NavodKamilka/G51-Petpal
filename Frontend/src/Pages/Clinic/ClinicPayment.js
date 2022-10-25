import { Divider } from '@mui/material';
import *as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';



// the box-grey
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:800,
    top:10,
  }));


  
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

//change the length of the textfield
const style={
    width: 500
}

function Payment() {
    return(
        <div>
         
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
            <Item>
                <h1>Bill summary</h1>
            <table>
                <br></br>
                <tr>
                    <td>Monthly charge</td>
                    <td>100</td>
                </tr>
                <br></br>

                <tr>
                    <td>Number of Appointments</td>
                    <td>150</td>

                </tr>
                <br></br>

                <tr>
                    <td>Price per 1 Appointment</td>
                    <td>10</td>
                    
                </tr>
                <br></br>

                <tr>
                    <td>Arrears amount</td>
                    <td>0</td>
                    
                </tr>
                <br></br>
                <tr>
                    <td><b>Total Amount</b></td>
                    <td><b>1600</b></td>  
                </tr>
            </table>


            <Divider></Divider> 
            <br></br>
            <h1>Make Payment</h1>
            <table>
                <tr>
                    <td>
                    <TextField
                            id="outlined-helperText"
                            label="Amount"
                            defaultValue="Rs 100.00"
                            style={style}
                            // sx={{ width: 500 }}
                            //   helperText="Some important text"
                            /> 
                    </td>
                </tr>
                <br></br>

                <tr>
                        <td><TextField
                                id="outlined-multiline-static"
                                label="Remarks"
                                multiline
                                rows={4}
                                defaultValue="Description about the payment"
                                style={style}

                                // sx={{ width: 500 }}
                            />
                        </td>
                    </tr>
                    <br></br>

                    <tr>
                        <td>
                        <ThemeProvider theme={theme}><Button variant="contained" color='blueButton' >Pay Now</Button></ThemeProvider>

                        </td>
                    </tr>
            </table>
            </Item>
            </Grid>
            </Box>
           

            
        </div>
    )
}
export default Payment;
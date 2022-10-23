import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../../Style/Manager/AccountRequests.css';

import Dashboard from "./Dashboard";
import Axios from "axios";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.username2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 1230,
    top: 10

}));




export default function MyProfileContent(){


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 420,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
    };

    const style2 ={
        borderRadius:100
    };

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/*<Item>*/}
                        {/*Do the coding part in the item tag*/}
                        <Dashboard></Dashboard>
                        {/*</Item>*/}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
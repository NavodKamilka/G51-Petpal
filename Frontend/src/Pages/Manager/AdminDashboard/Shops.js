import React, {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import Axios from "axios";


function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Shops() {

    const [dashDetail,setDashDetail] = useState([]);
    const shopCount =dashDetail.Shop_Count;
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/DashboardUsers").then((response) => {
            setDashDetail(response.data);
        });
    },[]);

    return (
        <React.Fragment>
            <Stack direction='column' alignItems='center'>
                <AccountCircleIcon color='primary'/>
                <Title >Shops</Title>
            </Stack>
            <Typography component="p" variant="h4" textAlign="center">
                {shopCount}
            </Typography>

        </React.Fragment>
    );
}
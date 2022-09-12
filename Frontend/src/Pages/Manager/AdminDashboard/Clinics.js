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

export default function Clinics() {
    const [dashDetail,setDashDetail] = useState([]);
    const clinicCount =dashDetail.Clinic_Count;
    console.log(clinicCount);

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/DashboardUsers").then((response) => {
            setDashDetail(response.data);
        });
    },[]);

    return (
        <React.Fragment>
            <Stack direction='column' alignItems='center'>
                <AccountCircleIcon color='primary'/>
                <Title >Clinics</Title>
            </Stack>
            <Typography component="p" variant="h4" textAlign="center">
                {clinicCount}
            </Typography>

        </React.Fragment>
    );
}
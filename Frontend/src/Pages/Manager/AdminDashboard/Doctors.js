import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from "@mui/material/Stack";

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Doctors() {
    return (
        <React.Fragment>
            <Stack direction='column' alignItems='center'>
                <AccountCircleIcon color='primary'/>
                <Title >Doctors</Title>
            </Stack>
            <Typography component="p" variant="h4" textAlign="center">
               100
            </Typography>

        </React.Fragment>
    );
}
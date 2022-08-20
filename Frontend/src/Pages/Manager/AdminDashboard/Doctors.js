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
            <Stack direction='row' gap={3}>
                <Title>Doctors</Title>
                <AccountCircleIcon />
            </Stack>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                on 15 March, 2019
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
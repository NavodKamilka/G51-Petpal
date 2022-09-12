import React from 'react';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../../Style/Manager/NoticesRequests.css';
import Stack from "@mui/material/Stack";
// import {Carousel} from "react-responsive-carousel";
import testImage from '../../../Images/dog3.png';
// import {Image} from "react-bootstrap";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 1230,
    top: 10

}));

export default function MyProfileContent() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        {/*<Item>*/}
                        {/*Do the coding part in the item tag*/}
                        <Stack direction="column" spacing={2} padding={3} className="notice-requests-outerbox">

                            <Stack direction="row" className="general-notice-requests-container"
                                   borderRadius={5}>
                                <Typography variant="h5" fontWeight="500" align="center" ml={4} mt={1}>
                                    General
                                </Typography>
                                {/*<Carousel axis='horizontal' showIndicators={false}>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*    <Image src={testImage} className='w-25' fluid/>*/}
                                {/*</Carousel>*/}
                                {/*<NoticeItem/>*/}
                            </Stack>
                            <Stack direction="row" className="donation-volunteering-notice-requests-container">
                                <Typography variant="h5" fontWeight="500" align="center" mt={1}>
                                    Donation & Volunteering
                                </Typography>
                            </Stack>


                        </Stack>

                        {/*</Item>*/}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}


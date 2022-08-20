import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../../Style/Manager/AccountRequests.css';
import InfiniteCarousel from 'react-leaf-carousel';

import Stack from "@mui/material/Stack";
import {Button} from '@mui/material';
import FilterSearchBar from "../../../Components/FilterSearchBar";
import Modal from '@mui/material/Modal';
import puppy from '../../../Images/puppy.jpg';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { Carousel } from '@trendyol-js/react-carousel';
import IconButton from "@mui/material/IconButton";

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
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/*<Item>*/}
                        {/*Do the coding part in the item tag*/}
                        {/*<InfiniteCarousel*/}
                        {/*    breakpoints={[*/}
                        {/*        {*/}
                        {/*            breakpoint: 500,*/}
                        {/*            settings: {*/}
                        {/*                slidesToShow: 2,*/}
                        {/*                slidesToScroll: 2,*/}
                        {/*            },*/}
                        {/*        },*/}
                        {/*        {*/}
                        {/*            breakpoint: 768,*/}
                        {/*            settings: {*/}
                        {/*                slidesToShow: 3,*/}
                        {/*                slidesToScroll: 3,*/}
                        {/*            },*/}
                        {/*        },*/}
                        {/*    ]}*/}
                        {/*    dots={true}*/}
                        {/*    showSides={true}*/}
                        {/*    sidesOpacity={0.5}*/}
                        {/*    sideSize={0.1}*/}
                        {/*    slidesToScroll={4}*/}
                        {/*    slidesToShow={4}*/}
                        {/*    scrollOnDevice={true}*/}
                        {/*><div>*/}
                        {/*    <img*/}
                        {/*        alt=""*/}
                        {/*        src="../../../Images/alex.png"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*    <div>*/}
                        {/*        <img*/}
                        {/*            alt=""*/}
                        {/*            src="../../../Images/alex.png"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <img*/}
                        {/*            alt=""*/}
                        {/*            src="../../../Images/alex.png"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    */}
                        {/*</InfiniteCarousel>*/}
                        {/*</Item>*/}
                        <div id='root' >

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )

}
import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../../Style/Manager/AccountRequests.css';
import Stack from "@mui/material/Stack";
import {Button} from '@mui/material';
import FilterSearchBar from "../../../Components/FilterSearchBar";
import Modal from '@mui/material/Modal';
import puppy from '../../../Images/puppy.jpg';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
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
    // const [blogs, setBlogs] = useState([
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake', imagepath:'../../../Images/alex.png',id: 1 },
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake',imagepath:'../../../Images/Profile.png', id: 2 },
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake',imagepath:'../../../Images/tom.png', id: 3 },
    //     { date: '2014.04.20', usertype: 'Doctor', fullname: 'Prasadi Menike',imagepath:'../../../Images/wicky.png', id: 4 },
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake', imagepath:'../../../Images/alex.png',id: 5 },
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake',imagepath:'../../../Images/Profile.png', id: 6 },
    //     { date: '2019.05.30', usertype: 'Pet Owner', fullname: 'R.A.P.D Wickramathilake',imagepath:'../../../Images/tom.png', id: 7 },
    //     { date: '2014.04.20', usertype: 'Doctor', fullname: 'Prasadi Menike',imagepath:'../../../Images/wicky.png', id: 8 }
    // ]);


    const [requestList,setRequestList] = useState ([]);

    useEffect(()=>{

        Axios.get('http://localhost:3001/api/AccountRequest').then((response)=>{
            setRequestList(response.data);

        });
    },[]);

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
                        <Stack direction="column" spacing={2} padding={3} className="notice-requests-outerbox">
                            <Stack direction="row"mb={2} spacing={2} justifyContent="right" alignItems="center">
                                <FilterSearchBar />
                                <Button variant="contained">All</Button>
                                <Button variant="contained">Doctor</Button>
                                <Button variant="contained">Clinics</Button>
                                <Button variant="contained">Shops</Button>
                            </Stack>
                            <Stack direction='column' >
                                <Stack direction="row" justifyContent="flex-start" spacing={25} p={1} sx={{
                                    borderTop: 1,
                                    borderBottom: 1,
                                    borderColor: 'primary.main',
                                    borderWidth: '2px'
                                }}>
                                    <div className='table-header-date'>Date</div>
                                    <div>User Type</div>
                                    <div>User Name</div>
                                </Stack>
                                {/*request list rows*/}
                                <Stack sx={{overflowY:'scroll'}} mt={2} height='440px'>
                                    {requestList.map( (val)=> (
                                        <Stack className='request-row-container' mb={2} pt={0} key={val.Id} >
                                            <Stack direction="row" justifyContent="flex-start" alignItems='flex-start' p={1}>
                                                <div className='row-detail-box' >
                                                    {val.Date}
                                                </div>
                                                <div className='row-detail-box ' >
                                                    {val.UserType}
                                                </div>
                                                <div className='row-detail-box user-name-box'>
                                                    {val.UserName}
                                                </div>
                                                <Stack className="row-detail-buttons" direction='row' ml={20} mt={-1} p={1}
                                                       justifyContent='space-around'>
                                                    <Button variant="contained" size='small'
                                                            style={{backgroundColor:'#1C884C',
                                                                borderRadius:'15px',
                                                                fontSize:'12px',
                                                                textTransform:'capitalize',}}>Accept
                                                    </Button>
                                                    <Button variant="contained" size='small' style={{backgroundColor:'#F5222D',
                                                        borderRadius:'15px',
                                                        fontSize:'12px',
                                                        textTransform:'capitalize',}}>Reject</Button>
                                                    <Button variant="contained" size='small' style={{backgroundColor:'#63B8BB',
                                                        borderRadius:'15px',
                                                        fontSize:'12px',
                                                        textTransform:'capitalize',}} onClick={handleOpen}>View
                                                    </Button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"

                                                    >
                                                        <Box sx={style} p={0}>
                                                            <Stack direction='column'>
                                                                <CloseIcon sx={{color:'gray', marginTop:'-20px',
                                                                    marginLeft:'542px',marginBottom:'8px',cursor:'pointer'}}
                                                                           onClick={handleClose}/>
                                                                <Stack direction='row' mt={0} p={2}  sx={{
                                                                    boxShadow:'0 0 10px lightgray', alignSelf:'center',
                                                                    justifySelf:'center'
                                                                }}>
                                                                    <Stack direction='column' sx={{
                                                                        borderRight: 1,
                                                                        borderColor: 'lightgray',
                                                                        borderWidth: '2px'
                                                                    }} width={300} >
                                                                        <Avatar ml={3} mb={2} src={puppy}
                                                                                sx={{
                                                                                    width:'150px',
                                                                                    height:'150px',marginBottom:'10px',marginLeft:'75px'
                                                                                }}/>
                                                                        <Typography mt={2} fontSize={12}>Type:  {val.UserType}</Typography>
                                                                        <Typography fontSize={12}>FullName:  {val.UserName}</Typography>
                                                                        <Typography fontSize={12}>Email: {val.Email}</Typography>
                                                                        <Typography fontSize={12}>Contact:</Typography>
                                                                        <Typography fontSize={12}>Age: {val.Age}</Typography>
                                                                        <Typography fontSize={12}>Registration Number: {val.Registration}</Typography>
                                                                    </Stack>
                                                                    <Typography width={200} fontSize={12} pl={2}>
                                                                        {val.Details}
                                                                    </Typography>
                                                                </Stack>

                                                            </Stack>
                                                        </Box>
                                                    </Modal>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>

                            </Stack>


                        </Stack>
                        {/*</Item>*/}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
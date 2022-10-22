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

    const [userList,setUserList] = useState([]);

    useEffect( () => {
        Axios.get("http://localhost:3001/api/AccountManagement").then((response) =>{
            setUserList(response.data);
        })
    },[]);

    const handlePetOwnerClick = () =>{
        Axios.get("http://localhost:3001/api/AccountManagement/PetOwner").then((response) =>{
            setUserList(response.data);
        })
    }

    const handleAllClick = () => {
        Axios.get("http://localhost:3001/api/AccountManagement").then((response) => {
            setUserList(response.data);
        })
    }
    const handleDoctorClick = () => {
        Axios.get("http://localhost:3001/api/AccountManagement/Doctor").then((response) => {
            setUserList(response.data);
        })
    }

    const handleClinicClick = () => {
        Axios.get("http://localhost:3001/api/AccountManagement/Clinic").then((response) => {
            setUserList(response.data);
        })
    }

    const handleShopClick = () => {
        Axios.get("http://localhost:3001/api/AccountManagement/Shop").then((response) => {
            setUserList(response.data);
        })
    }

    const handleBannedClick = () => {
        Axios.get("http://localhost:3001/api/AccountManagement/Banned").then((response) => {
            setUserList(response.data);
        })
    }

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
                                <Button variant="contained" onClick={handleAllClick}>All</Button>
                                <Button variant="contained" onClick={handlePetOwnerClick}>Pet Owner</Button>
                                <Button variant="contained" onClick={handleDoctorClick}>Doctor</Button>
                                <Button variant="contained" onClick={handleClinicClick}>Clinics</Button>
                                <Button variant="contained" onClick={handleShopClick}>Shops</Button>
                                <Button variant="contained" onClick={handleBannedClick}>Banned</Button>
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
                                    {userList.map( (val)=> (
                                        <Stack className='request-row-container' mb={2} pt={0} key={val.Id} >
                                            <Stack direction="row" justifyContent="flex-start" alignItems='flex-start' p={1}>
                                                <div className='row-detail-box' >
                                                    {val.Date}
                                                </div>
                                                <div className='row-detail-box ' >
                                                    {val.UserRole}
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
                                                                textTransform:'capitalize',}}>Unban
                                                    </Button>
                                                    <Button variant="contained" size='small' style={{backgroundColor:'#d46b08',
                                                        borderRadius:'15px',
                                                        fontSize:'12px',
                                                        textTransform:'capitalize',}}>Ban</Button>
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
                                                                        <Typography mt={2} fontSize={12}>Type:</Typography>
                                                                        <Typography fontSize={12}>FullName:</Typography>
                                                                        <Typography fontSize={12}>Email:</Typography>
                                                                        <Typography fontSize={12}>Contact:</Typography>
                                                                        <Typography fontSize={12}>Age:</Typography>
                                                                        <Typography fontSize={12}>Registration Number:</Typography>
                                                                    </Stack>
                                                                    <Typography width={200} fontSize={12} pl={2}>
                                                                        Details : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                                        sed do eiusmod tempor incididunt ut labore et dolore
                                                                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                                        exercitation ullamco laboris nisi ut aliquip ex ea
                                                                        commodo consequat.
                                                                    </Typography>
                                                                </Stack>
                                                                <Stack direction='row' justifyContent='flex-end' gap={2} mt={2} mr={1.5}>
                                                                    <Button variant="contained" size='small'
                                                                            style={{backgroundColor:'#1C884C',
                                                                                borderRadius:'15px',
                                                                                fontSize:'12px',
                                                                                textTransform:'capitalize',}}>Unban
                                                                    </Button>
                                                                    <Button variant="contained" size='small'
                                                                            style={{backgroundColor:'#d46b08',
                                                                                borderRadius:'15px',
                                                                                fontSize:'12px',
                                                                                textTransform:'capitalize',}}>Ban
                                                                    </Button>
                                                                    <Button variant="contained" size='small'
                                                                            style={{backgroundColor:'#F5222D',
                                                                                borderRadius:'15px',
                                                                                fontSize:'12px',
                                                                                textTransform:'capitalize',}}>Delete
                                                                    </Button>
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
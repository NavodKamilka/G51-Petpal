import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';


import '../../../Style/Manager/Articles.css';

// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
//
// import Profile from '../../../Images/Profile.png'
// import alex from '../../../Images/alex.png'
// import tom from '../../../Images/tom.png'
import embark from '../../../Images/embark.png';
//
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
//
//
//
//
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
//
// import FormControl from '@mui/material/FormControl';
//
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F3F3F3',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:1230,
    top:10

}));

export default function  MyProfileContent() {


    // const [values, setValues] = React.useState({
    //   amount: '',
    //   password: '',
    //   weight: '',
    //   weightRange: '',
    //   showPassword: false,
    // });

    // const handleChange1 = (prop) => (event) => {
    //   setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //   setValues({
    //     ...values,
    //     showPassword: !values.showPassword,
    //   });
    // };

    // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        <Item>
                                {/*Do the coding part in the item tag*/}
                            <div className="Articles_Outer_Container">
                                <div className="Article_Container" >
                                    <Typography variant="h4" color="black" mt={2} mb={2}>
                                        Potty Train your Dog
                                    </Typography>
                                    <div className="Article_Image_box">
                                        <img src={embark} width="400" height="400"/>
                                        <div className="Article_Text_Box">
                                            <Typography paragraph="true">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.

                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.

                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.
                                            </Typography>
                                            <div className="Article_Button_Container" >
                                                <Button  variant="contained" size="small" startIcon={<StarIcon />}>Mark as starred</Button>
                                                <Button  variant="contained" endIcon={<DownloadIcon />}>Download</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            {/*2nd article*/}

                                <div className="Article_Container" >
                                    <Typography variant="h4" color="black" mt={2} mb={2}>
                                        Potty Train your Dog
                                    </Typography>
                                    <div className="Article_Image_box">
                                        <img src={embark} width="400" height="400"/>
                                        <div className="Article_Text_Box">
                                            <Typography paragraph="true">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.

                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.

                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.
                                            </Typography>
                                            <div className="Article_Button_Container" >
                                                <Button  variant="contained" size="small" startIcon={<StarIcon />}>
                                                    Mark as starred</Button>
                                                <Button  variant="contained" endIcon={<DownloadIcon />}>Download</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

// export default MyProfileContent

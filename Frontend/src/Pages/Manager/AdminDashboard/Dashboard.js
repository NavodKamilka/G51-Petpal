import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Clinics from './Clinics';
import Orders from './Orders';
import Shops from "./Shops";
import PetOwners from "./PetOwners";
import Doctors from "./Doctors";
import Button from "@mui/material/Button";
import '../../../Style/Manager/DashBoard.css';
import { useNavigate } from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();
    const handleOnClickNavigate = (event,id) => {
        event.preventDefault();

        switch (id) {
            case 'btn-users' :
                navigate("/AdminDashboard", {replace: true})
                break;
            case 'btn-transaction' :
                navigate("/AdminDashboardTransactions", {replace: true})
                break;
            case 'btn-publication' :
                navigate("/AdminDashboardPublications", {replace: true})
                break;
        }

    }

    const handleSideNavClick = (event,desc) =>{
        event.preventDefault();

        switch (desc) {
            case 'Requests' :
                navigate("/AccountRequests", {replace: true})
                console.log(desc);
                break;
            case 'Dashboard' :
                navigate("/AdminDashboard", {replace: true})
                console.log(desc);
                break;
            case 'Manage Accounts' :
                navigate("/AccountManagement", {replace: true})
                console.log(desc);
                break;
        }

    }
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{  mb: 4}}>
                        <Grid container spacing={3} >
                            <Grid item xs={12}  direction='row' >
                                <Paper className='dashboard-button-container' elevation={1} >

                                        <Button id='btn-publication' variant='contained'
                                                onClick={(event) => handleOnClickNavigate(event,'btn-publication' )}>Publications</Button>

                                        <Button id='btn-transaction' variant='contained'
                                                onClick={(event) => handleOnClickNavigate(event,'btn-transaction')}>Transactions</Button>

                                        <Button id='btn-users' variant='contained'
                                                onClick={(event) => handleOnClickNavigate(event,'btn-users')}>Users</Button>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 140
                                    }}
                                >
                                    <Clinics />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 140,
                                    }}
                                >
                                    <Shops />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 140,
                                    }}
                                >
                                    <PetOwners />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 140,
                                    }}
                                >
                                    <Doctors />
                                </Paper>
                            </Grid>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={12} sx={{
                               paddingLeft:100 ,width:'1100px',

                            }}>
                                <Paper
                                    sx={{
                                        p: 6, pb:4,m:'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 400,width:'900px'
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
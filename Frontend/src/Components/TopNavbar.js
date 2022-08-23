import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../Images/Logo.png'
import {useNavigate} from "react-router-dom";

const pages = ['Home', 'Who We Are', 'Health Care', 'Shop','Events','Our Services','Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const links = ['/Whoweare', '/Whoweare', '/Whoweare', 'Whoweare','Whoweare','Whoweare','Whoweare'];

const TopNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const handleSideNavClick = (event,key) =>{
        event.preventDefault();

        switch (key) {
            case 'Home' :
                navigate("/", {replace: true})
                break;
            case 'Who We Are' :
                navigate("/Whoweare", {replace: true})
                break;
            case 'Health Care' :
                navigate("/ClinicAdsMain", {replace: true})
                break;
            case 'Contact Us' :
                navigate("/Contactus", {replace: true})
                break;
            case 'Our Services' :
                navigate("/Ourservices", {replace: true})
                break;
            case 'Events' :
                navigate("/Events", {replace: true})
                break;
            case 'Shop' :
                navigate("/ShopAdsFinal", {replace: true})
                break;
            case 'Discussion' :
                navigate("/DocDiscussionContent", {replace: true})
                break;
            case 'Events' :
                navigate("/AccountManagement", {replace: true})
                break;
        }

    }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{borderRadius: '8px' }} style={{background:'#8DE777'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img src={logo}  alt="Logo" height='70'   style={{
            //   marginTop: '100vh',
            //   width : '100%',
            padding:10
              
          }}  
      />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PetPal
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }} 
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                    onClick={(event)=>handleSideNavClick(event,page)
              }
                sx={{ my: 2, color: 'white', display: 'block' }}
                
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
                <IconButton aria-label="delete" sx={{marginRight:3 }} size="large">
                    <NotificationsIcon fontSize="50" />
                </IconButton>
            <Tooltip title="Open settings">
                
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopNavbar;


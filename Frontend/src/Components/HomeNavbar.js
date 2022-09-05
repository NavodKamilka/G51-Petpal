import React from 'react'
import image from '../Images/Logo.png'
import '../Style/Guest/HomeNavbar.css'
import { Link } from 'react-router-dom'
// import { Button, Stack } from '@mui/material'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

// import LoginIcon from '@mui/icons-material/Login';
// import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
// import Icon from '@mui/material/Icon';

const options = ['Pet Owner', 'Clinic', 'Vet Doctor','Shop'];

function HomeNavbar() {


  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  

  return (
    <>
    <div className='navbackground'>
        <div className='logo'><img src={image} height={150}  alt="Logo"/></div>
          <div>
            <nav className="navC">
                <ul className='navUl'>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/Whoweare">Who We Are</Link>
                    <Link className="nav-link" to="/Healthcare">Health Care</Link>
                    <Link className="nav-link" to="/Shops">Shop</Link>
                    <Link className="nav-link" to="/Events">Events</Link>
                    <Link className="nav-link" to="/Ourservices">Our Services</Link>
                    <Link className="nav-link" to="/Contactus">Contact Us</Link>
                </ul>  
            </nav>
          </div>
          {/* <Button variant="contained" sx={{top:60, left:1150}}>Hello</Button> */}
      </div>
      <React.Fragment>     
    <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" sx={{marginTop:7.9, marginLeft:125}} >
        <Button href='/login'  onClick={handleClick}>{options[selectedIndex]} Login</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </React.Fragment>
      </> 
               
  );      
}

export default HomeNavbar


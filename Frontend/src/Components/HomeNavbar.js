import React from 'react'
import image from '../Images/Logo.png'
import '../Style/Guest/HomeNavbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
// import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
// import Icon from '@mui/material/Icon';



function Navbar() {


  return (
    <div className='navbackground'>
        <div className='logo'><img src={image} width={200}  alt="Logo"/></div>

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

        <div className='loginbtn'> 
          <Button endIcon={<LoginIcon />} variant="contained" 
            style={{
              backgroundColor: '#da0000',
              left: 1380,
              top: -215,

              color: "#FFFFFF",
              borderColor : "#FF0000"
              //Color: "#21b6ae",
             
          }}
          >Login</Button>
        </div>
        
      
    </div>
  )
}

export default Navbar


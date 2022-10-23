import React from 'react'
import HomeNavbar from '../../Components/HomeNavbar' 
import group from '../../Images/group202.png'
import homeCat from '../../Images/homeCat.png'
import Footer from '../../Components/Footer'

// import Button from '@mui/material/Button'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


import Item from '../../Components/sliderItem'
import '../../Style/Guest/sliderItem.css'
// import ReactDOM from "react-dom"
import Carousel from "react-elastic-carousel"
import Popover from '@mui/material/Popover'


import catdonation from '../../Images/catdonation.png'
import dogdonation1 from '../../Images/dogdonation1.png'
import dogdonation2 from '../../Images/dogdonation2.png'
import dogvoluntering from '../../Images/dogvoluntering.png'
import catdonation2 from '../../Images/catdonation2.png'
import rabbitdonation from '../../Images/rabbitdonation.png'
import dogdonation3 from '../../Images/dogdonation3.png'
import embark from '../../Images/embark.png'


import '../../Style/Guest/Home.css'
// import image from '../../Images/actors.png'
import circle7 from '../../Images/Ellipse 7.png'
import circle8 from '../../Images/Ellipse 8.png'
import circle9 from '../../Images/Ellipse 9.png'
import circle10 from '../../Images/Ellipse 10.png'
import { Typography } from '@mui/material';


const options = ['Pet Owner', 'Clinic', 'Vet Doctor','Shop'];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function Home() {

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





  const [anchorEl, setAnchorEl] = React.useState(null);

  const text1 = "Individuals who have registered as volunteers will also be included into the ";


  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  return (
    // <div className='main'>

    //   <HomeNavbar />
      
    // </div>
    <div
      style={{
        marginTop : -69,
        // backgroundColor: '#FFC71C',
        background: 'linear-gradient(132.19deg, #CEFFFC 15.52%, rgba(211, 209, 202, 0) 80.08%)',
        width: '100%',
        height: 1250
      }}
    >
        <HomeNavbar />
        <Button variant="contained" href='/Login' style={{backgroundColor: '#FB5C39'}} sx={{top:-500, left:1350}}>Login</Button>
        

    <div className='welcome'>
        Welcome to PetPal!
      </div>
      <div className='para'>
        All you need for your pet, <br />
        now in one place...
      </div>  
      {/* <div className='register'>  */}
          {/* <Button endIcon={<KeyboardDoubleArrowDownIcon />} variant="contained" 
            style={{
              fontSize: 25,
              fontFamily: 'Roboto',
              width: 200,
              height:50,
              
              left: 160,
              top: 420,

              backgroundColor: '#31ba32',
              color: "#FFFFFF",
              borderColor : "#FF0000"
             
          }}
          >Register</Button> */}


        <React.Fragment >     
          <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button"  sx={{marginTop:45, marginLeft:35}} >
            <Button href='/RegistrationPetOwner' style={{backgroundColor: '#31ba32', height:45}} onClick={handleClick}>{options[selectedIndex]} Register</Button>
            <Button

              
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
              style={{backgroundColor: '#31ba32'}}
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





        <div className='Group'><img src={group}   alt="Logo" style={{
            // marginLeft: '1700px',
            marginLeft:-263,
            marginTop:-460,
            width: 900,
            height:630,

          }}/></div>    
      {/* </div> */}

      <div className='actors'>
         Who can register? 
      </div>
           {/* <div className='actorpng'><img src={image}  alt="Logo"/></div>
           <div className='events'>Donations and volunteering</div>  */}
           <Stack direction="row" spacing={15} sx={{marginLeft:15, marginTop:24}}>
            <img src={circle7}   alt="Logo"/>
            <img src={circle8}   alt="Logo" style={{
              // marginLeft: '1700px',
              // marginLeft:-265,
              // marginTop:-420,
              // width: 900,
              // height:630,

            }}/>
            <img src={circle9}   alt="Logo" style={{
              // marginLeft: '1700px',
              // marginLeft:-265,
              // marginTop:-420,
              // width: 900,
              // height:630,

            }}/>
            <img src={circle10}   alt="Logo" style={{
              // marginLeft: '1700px',
              // marginLeft:-265,
              // marginTop:-420,
              // width: 900,
              // height:630,

            }}/>
           </Stack>
           <Stack direction="row" spacing={27} sx={{marginLeft:21, marginTop:3}}>
              <Typography variant='h6'>Pet Enthusiasts</Typography>
              <Typography variant='h6'>Veterinary doctors</Typography>
              <Typography variant='h6'>Animal Clinics</Typography>
              <Typography variant='h6'>Pet Stores</Typography>
           </Stack>
            
           <div className='events'>Donations and volunteering</div>


           <div className="slider">
          <Carousel breakPoints={breakPoints}>
            {/* <Item>one</Item> */}
            <Item >
              <div>
                <img src={catdonation}  alt="Logo" style={{top:0, height:225}}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={embark}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={dogdonation2}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={dogdonation1}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={dogvoluntering}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={catdonation2}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={dogdonation3}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            <Item >
              <div>
                <img src={rabbitdonation}  alt="Logo" style={{top:0, height:225 }}/>
                <Button aria-describedby={id} variant="contained" style={{backgroundColor: '#35A2F0',
              color: "#FFFFFF", left:65,top:-30}}  onClick={handleClick1}>
                  View More Details
                </Button>
                <Popover
                  id={id}
                  open={open1}
                  anchorEl={anchorEl}
                  onClose={handleClose1}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{`${text1}`}</Typography>
                </Popover>
              </div>
            </Item>
            {/* <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item> */}
          </Carousel>
      </div>

      <div>
        <div className='topic'>
          Now you can easily post notices at zero cost
        </div>
        <div className='list'> 
          <ul className='b'>
            <li>Donations and volunteering for your foster home.</li><br />
            <li>Pet related events organized by your organization.</li><br />
            <li>Help to find the pet parent of a found pet.</li><br />
            <li>Rehome innocent street dogs and cats.</li>
          </ul>
        </div>
      </div>
      <div className='homeCat'><img src={homeCat}  alt="Logo"/>
      </div>
      <Button variant="contained" href='/Notice/PostNotice' style={{
              
          
              backgroundColor: '#F4A4A4',
              left: 370,
              top: 180,

              color: "#000000",
              // borderColor : "#FF0000"
              //Color: "#21b6ae",
             
          }}>Click here</Button>

          <br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <Footer />


    </div>
  )
}

export default Home

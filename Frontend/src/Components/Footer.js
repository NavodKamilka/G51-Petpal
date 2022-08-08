import React from 'react'
import Image from '../Images/footer.png'
// import dog from '../Images/dog3.png'
// import PetsIcon from '@mui/icons-material/Pets';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
// import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <div>
      <img src={Image}  alt="Logo" className='main' height={270}  style={{
              marginTop: '10vh',
              width : '100%',
              
          }}  
      />
      <div style={{marginTop:-40}}>
        <Copyright />
      </div>

      <div style={{marginLeft:-100, marginTop:80}}>

            <div style={{
                  marginTop: -270,
                  marginLeft: 250,
                  fontFamily: 'Poppins',
                  fontSize: '34px',
                  color: '#F6D048'
              }}>About Us <br />
                  
              </div>
              <p style={{color: '#D4D4D4',marginLeft: 250 }}>dghfgdhgfdjgfjh sbsdvsvdsvdbvfdvfvdfj <br />ddgsdaghfghdfahdgfahfdsdahgdjas<br />
              sdhgdshjadgahjsgjjdhgfjdfgjhgfdhgfh<br />shfdkfhsdjhfjdsfhjdgfjhdhfgjd <br/>jfhsjhfjdhjfhd
              sghdahgjhghjgfhdgfhjddfdh<br/>gshjgdhjfgdhjgfsjdg</p>
          <div style={{
                  marginTop: -180,
                  marginLeft: 670,
                  fontFamily: 'Poppins',
                  fontSize: '34px',
                  color: '#F6D048'
              }}>Useful Links
              </div>
              <div style={{
                  

                  marginTop: -36,
                  marginLeft: 1100,
                  fontFamily: 'Poppins',
                  fontSize: '34px',
                  color: '#F6D048'
              }}>Get In Touch
              </div>
              <div style={{
                  // marginTop: -240,
                  marginLeft: 593,
                  // fontFamily: 'Poppins',
                  // fontSize: '34px',
                  // color: '#F6D048'
              }}>
                <ul>
                  <ol><Link
                      href="#"
                      underline="hover"
                      color={'#D4D4D4'}
                      component="button"
                      variant="body2"
                      onClick={() => {
                        console.info("I'm a button.");
                      }}
                    >
                      Terms & conditions
                    </Link>
                  </ol><br />
                  <ol><Link
                      href="#"
                      underline="hover"
                      color={'#D4D4D4'}
                      component="button"
                      variant="body2"
                      onClick={() => {
                        console.info("I'm a button.");
                      }}
                    >
                      FAQs
                    </Link>
                  </ol>
                </ul>
              </div>
              <div style={{
                  marginTop: -70,
                  marginLeft: 1020,
                  // fontFamily: 'Poppins',
                  // fontSize: '34px',
                  // color: '#F6D048'
              }}>
                <ul>
                  <ol><WhatsAppIcon color="success"/> <div style={{
                  marginTop: -27,
                  marginLeft: 50,
                  // fontFamily: 'Poppins',
                  // fontSize: '34px',
                  color: '#D4D4D4'
              }}>071 1122334</div></ol><br />
                  <ol><AlternateEmailIcon color="success"/><div style={{
                  marginTop: -27,
                  marginLeft: 50,
                  // fontFamily: 'Poppins',
                  // fontSize: '34px',
                  color: '#D4D4D4'
              }}>petpal@gmial.com</div></ol><br />
                </ul>
                {/* <div style={{marginTop: -200 ,marginLeft: -710,}}>
                  <PetsIcon sx={{ fontSize: 150}} color="primary" />  
                </div> */}
                
              </div>
              
              
              

       </div>
      
      
    </div>
  )
}

export default Footer

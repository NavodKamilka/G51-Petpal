import React from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import { ListItemAvatar } from '@mui/material';


import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


// import AddArticlePopup from './AddArticlePopup';
const filterByDate = [
    { title :'Latest published' },
    { title :'Latest published' }, ];

const filterByLikes = [
    { title :'High rated' },
    { title :'Low rated' }, ];


export default function ArticlesFromAuthor() {
  return (
    <div>
        <div  style={{ flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
          verticalAlign:'center',position:"fixed",top:'10%',left:'25%'}}>
        <Stack style={{
            position:"fixed",top: '20%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            }}><Avatar style={{width:'80px' ,height:'80px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></Stack>
      {/* doc name */}
      <div style={{width:window.width, textAlign:'center',
            position:"fixed",top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            }}>

            <h1 style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontWeight: 'bold',
            color: '#193498'}}> Dr. Kasun Perera </h1>

        </div>        

        <div style={{width:window.width, textAlign:'center',
            position:"fixed",top: '20%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            }}>

            <p style={{width: '50%',
            display: 'inline',
            marginRight: '100px',
            fontSize:'200%',
            color: '#000000'}}> Articles  |  20 </p>

        </div>
        </div>

        {/* brekout line */}
        
        <div style={{position:'absolute',top:'28%',left:'25%'}}> 
            <hr style={{width: '1000px',height: '5px',backgroundColor:'#666',opcaity: '0.5'}} />
        </div>

        <div style={{flexDirection:'row',display:'inline-flex',height:55,margin:10,width:window.width,
          verticalAlign:'center',position:"fixed",top:'35%',left:'25%'}}>
        <Stack spacing={2} sx={{ width: 300 ,marginRight:'10px'}}>
            <Autocomplete
                id="free-solo-demo-author-date"
                freeSolo
                options={filterByDate.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Sort By Date" />}
            />     
        </Stack>
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                id="free-solo-demo-author-likes"
                freeSolo
                options={filterByLikes.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Sort By Likes" />}
            />     
        </Stack>
        </div>

            {/* artcle list */}
        <div style={{position:"fixed",top:'50%',left:'25%',}}>

            <div style={{ flexDirection:'row',display:'inline-flex',height:80,margin:10,width:'980px',
                        verticalAlign:'center',flexWrap: 'wrap',
                        padding: '10px 20px',borderRadius: '27px',
                        boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
                        justifyContent: 'center',spacing:'4' }}>
                {/* Box for time */}
                    <Box style={{ height: 40,  
                        '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                        fontSize:15,textAlign:'center',
                        margin: '5px 10px',  width:'840px',

                        }}><h2 style={{width: '50%', display: 'inline', marginRight: '80px',
                            fontWeight: 'bold',color: '#193498'
                            }}> article title1</h2> 
                    </Box>

                 {/* button view more */}
                    <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
                        }}>Read1 </Button>
                    </Stack>

                    <div style={{width: '50%', display: 'inline', marginRight: '80px',
                            color: '#193498',position:'relative',top:'20%',left:'20%'
                            }}><p> Date posted : 2022 / 02 / 271</p>
                    </div>

                    <div style={{width: '50%',marginRight: '80px', color: '#193498',
                            position:'relative',top:'20%',left:'50%',
                            lexDirection:'row',display:'inline-flex',
                            }}><p style={{marginRight:'7px'}}> 201</p> <ThumbUpIcon style={{marginTop:'3px',position:'absolute',top:'20%',left:'5%', }}/>
                    </div>


                </div>  
                        
                <div style={{ flexDirection:'row',display:'inline-flex',height:80,margin:10,width:'980px',
                        verticalAlign:'center',flexWrap: 'wrap',
                        padding: '10px 20px',borderRadius: '27px',
                        boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
                        justifyContent: 'center',spacing:'4' }}>
                {/* Box for time */}
                    <Box style={{ height: 40,  
                        '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                        fontSize:15,textAlign:'center',
                        margin: '5px 10px',  width:'840px',

                        }}><h2 style={{width: '50%', display: 'inline', marginRight: '80px',
                            fontWeight: 'bold',color: '#193498'
                            }}> article title2</h2> 
                    </Box>

                 {/* button view more */}
                    <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
                        }}>Read2 </Button>
                    </Stack>

                    {/* <Stack style={{width: '50%', display: 'inline', marginRight: '80px',
                            color: '#193498',position:'relative',top:'20%',left:'20%'
                            }}><p> Date posted : 2022 / 02 / 28</p>
                    </Stack> */}

                    <Stack style={{width: '50%',marginRight: '80px', color: '#193498',
                            position:'absolute',top:'20%',left:'50%',
                            lexDirection:'row',display:'inline-flex',
                            }}><p style={{marginRight:'7px'}}> 202</p> <ThumbUpIcon style={{marginTop:'3px',position:'absolute',top:'20%',left:'5%', }}/>
                    </Stack>


                </div>     
                <div style={{ flexDirection:'row',display:'inline-flex',height:80,margin:10,width:'980px',
                        verticalAlign:'center',flexWrap: 'wrap',
                        padding: '10px 20px',borderRadius: '27px',
                        boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
                        justifyContent: 'center',spacing:'4' }}>
                {/* Box for time */}
                    <Box style={{ height: 40,  
                        '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                        fontSize:15,textAlign:'center',
                        margin: '5px 10px',  width:'840px',

                        }}><h2 style={{width: '50%', display: 'inline', marginRight: '80px',
                            fontWeight: 'bold',color: '#193498'
                            }}> article title3</h2> 
                    </Box>

                 {/* button view more */}
                    <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
                        }}>Read3 </Button>
                    </Stack>

                    {/* <Stack style={{width: '50%', display: 'inline', marginRight: '80px',
                            color: '#193498',position:'absolute',top:'20%',left:'20%'
                            }}><p> Date posted : 2022 / 02 / 29</p>
                    </Stack> */}

                    <Stack style={{width: '50%',marginRight: '80px', color: '#193498',
                            position:'relative',top:'20%',left:'50%',
                            lexDirection:'row',display:'inline-flex',
                            }}><p style={{marginRight:'7px'}}> 203</p> <ThumbUpIcon style={{marginTop:'3px',position:'absolute',top:'20%',left:'5%', }}/>
                    </Stack>


                </div>   
        </div>
{/* list of appointment box  */}
        {/* <div style={{ flexDirection:'row',display:'inline-flex',height:70,margin:10,width:window.width,
            verticalAlign:'center',position:"fixed",top:'50%',left:'25%',
            flexWrap: 'wrap',
            padding: '10px 20px',
            borderRadius: '27px',
            boxShadow: '0 2px 7px rgb(0 0 0 / 40%)',
            justifyContent: 'center',spacing:'4' }}> */}
{/* Box for time */}
            {/* <Box style={{ 
                height: 40,  
                '&:hover': {  backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},        
                fontSize:15,textAlign:'center',
                margin: '5px 10px',   
                width:'840px',

            }}><h2 style={{width: '50%',
                    display: 'inline',
                    marginRight: '80px',
                    fontWeight: 'bold',
                    color: '#193498'}}> article title</h2> 
            </Box> */}

    {/* button view more */}
            {/* <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
                }}>Read </Button>
            </Stack>

            <Stack style={{width: '50%',
                display: 'inline',
                 marginRight: '80px',
                color: '#193498',
                position:'absolute',
                top:'40%',
                left:'30%'}}>
                <p> Date posted : 2022 / 02 / 27</p>
            </Stack>

            <Stack style={{width: '50%',
                marginRight: '80px',
                color: '#193498',
                position:'absolute',
                top:'40%',
                left:'60%',
                flexDirection:'row',display:'inline-flex',}}>
                <p style={{marginRight:'7px'}}> 20</p> <ThumbUpIcon style={{marginTop:'13px' }}/>
            </Stack>


            </div> */}

    </div>
  )
}
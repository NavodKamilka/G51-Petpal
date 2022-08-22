import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ArticleListForAuthor() {
  return (
    <div>
    

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
                            }}> How to take care of a dog</h2> 
                    </Box>

                 {/* button view more */}
                    <Stack><Button variant="contained" style={{display:'inline-block',width: 'fit-content',margin:10,
                        }}>Read </Button>
                    </Stack>

                    <div style={{width: '50%', display: 'inline', marginRight: '80px',
                            color: '#193498',position:'absolute',top:'45%',left:'20%'
                            }}><p> Date posted : 2022 / 02 / 271</p>
                    </div>

                    <div style={{width: '50%',marginRight: '80px', color: '#193498',
                            position:'absolute',top:'45%',left:'70%',
                            lexDirection:'row',display:'inline-flex',
                            }}><p style={{marginRight:'7px'}}> 201</p> <ThumbUpIcon style={{marginTop:'3px',position:'absolute',top:'20%',left:'5%', }}/>
                    </div>
                    </div>
</div>
  )
}

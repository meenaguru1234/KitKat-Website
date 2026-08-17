

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyllabusTable from './SyllabusTable';
import { Avatar, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ecommerceimg from "../../../assets/Images/Ecommerce.jpg"
import taskmanagement from "../../../assets/Images/taskmanagement.jpg"
import blogging from "../../../assets/Images/blogging.jpg"
import chatapplication from "../../../assets/Images/chatapplication.jpg"
import jobportal from "../../../assets/Images/jobportal.png"


const ProjectMern = () => {
    const projectArray = [
        {
            icon:ecommerceimg,
            text:"E-Commerce Website",
            sub:"Full featured online store with cart, checkout & payments"
           
        },
        {
             icon:taskmanagement,
               text:"Task Management App",
               sub:"Task tracking app with authentication & team management"
            
        },
        {
             icon:blogging,
           text:"Blogging Platform",
           sub:"Create, read, update & delete blogs with user authentication"
           
        },
        {
            icon:chatapplication,
              text:"Chat Application",
              sub:'Real-time chat app using Socket.io and user presence'
            
        },
        {
            icon:jobportal,
               text:"Job Portal",
               sub:"Job listing portal with search, apply & admin panel"
           
        },
                
    ]


  return (
        <Box sx={{mt:4,px:{xs:1,lg:8},}}>
              
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                            <Typography sx={{fontSize:'1.4rem', color:'#071B52', textTransform:'uppercase', fontWeight:900,  }}>
                           Live Project You Will build
                                </Typography>
                        </Box>

                        <Box sx={{border:'1px solid #f8f4f4', display:'flex', justifyContent:'center' , borderRadius:3, bgcolor:'#f8f4f4'}}>
            <Grid container spacing={1} sx={{ width:1800}}>

               
               
                <Grid size={{xs:12,lg:12}} sx={{}} >
                    
                    <Grid container sx={{height:"100%",}}>

                      
                      <Box sx={{height:"auto",gap:2,p:4,color:"#001E4E",borderRadius:2, }}>
                        {/* <Typography component={'h1'} variant='h5' sx={{fontWeight:600, textTransform:'uppercase'}}>Course Details</Typography> */}
                       
                     <Box sx={{display:"flex",flexDirection:{xs:'column', md:'row'}, justifyContent:'center',gap:3,  }}>

                        {
                            projectArray.map((item, index)=>{
                              

                                return (
                                    <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:3, lineHeight:3, mb:2, px:2,borderRadius:2,
                                        borderRight: index != projectArray.length - 1 ? '1px solid #c8c6c6' : "none",border:'1px solid #c8c6c6',
                                        bgcolor:'#e6e2e2', py:2, justifyContent:'center'
                                    }}>

                                        <Box  sx={{display:'flex', justifyContent:'center', height:'100px', width:'auto', }}>
                                           <Avatar src={item.icon} alt={item.text} sx={{ objectFit:'fill', height:'auto', width:'auto', borderRadius:0}} />
                                            </Box>

                                         <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                                          <Typography sx={{fontSize:'1rem', fontWeight:600, color:'#061938'}}>{item.text}</Typography>
                                          <Typography  sx={{fontSize:'0.8rem',textAlign:'center'}}>{item.sub}</Typography>
                                         

                                          </Box>

                                        </Box>
                                      

                                )
                            })
                        }
                        
                        
                    </Box>
                       
                       
                       
                         </Box> 
                    </Grid>
                </Grid>
              
            </Grid>
        </Box>
        </Box>
    );
}

export default ProjectMern;
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyllabusTable from './JavaSyllabusTable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MonitorIcon from '@mui/icons-material/Monitor';
import PersonIcon from '@mui/icons-material/Person';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import JavaSyllabusTable from './JavaSyllabusTable';


const JavaSyllabusDetails = () => {
    const serviceArray = [
        {
            icon:CalendarMonthIcon,
            text:"Course Duration",
            sub:"4 to 6 Months"
        },
        {
             icon:EventRepeatIcon,
            text:"Batches",
            sub:"Weekday & Weekend"
        },
        {
             icon:MonitorIcon,
            text:"Class Mode",
            sub:"Offline (Coimbatore) / Online"
        },
        {
             icon:PersonIcon,
            text:"Eligibility",
            sub:"Any Degree / Diploma / 12th Pass"
        },
        {
            icon:OpenWithIcon,
            text:"Experience Level",
            sub:"Beginner to Advanced"
        },
        {
            icon:AutoStoriesIcon,
            text:"Certification",
            sub:"Industry Recognized Certificate"
        },
        {
             icon:PersonPinIcon,
            text:"Placement Support",
            sub:"100% Placement Assistance"
        },
       
    ]
    return (
        <Box sx={{mt:4,px:{xs:1,lg:8}}}>
            <Grid container spacing={1}>
               
                <Grid size={{xs:12,lg:8}} >
                    
                    <Grid container sx={{height:"100%", border:'1px solid #c8c6c6', p:2, borderRadius:2}}>

                        <Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
                            <Typography sx={{fontSize:'1.4rem', color:'#071B52', textTransform:'uppercase', fontWeight:800, 
                                
                             }}>
                               JAVA COURSE SYLLABUS – 8 STAGE PROGRAM </Typography>
                        </Box>

                     <JavaSyllabusTable/>

                     
                    </Grid>
                </Grid>
                <Grid size={{xs:12,md:12,lg:4}} >
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column",gap:2,p:4,color:"#001E4E",borderRadius:2, border:'1px solid #c8c6c6', bgcolor:'#edf2f3'}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600, textTransform:'uppercase'}}>Course Details</Typography>
                       
                     <Box sx={{}}>

                        {
                            serviceArray.map((item, index)=>{
                                const Icon = item.icon

                                return (
                                    <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:2, lineHeight:3, mb:2}}>

                                        <Box >
                                            <Icon />
                                            </Box>

                                         <Box>
                                          <Typography sx={{fontSize:'1.1rem', fontWeight:700, color:'#061938'}}>{item.text}</Typography>
                                          <Typography  sx={{fontSize:'1rem', }}>{item.sub}</Typography>

                                          </Box>

                                        </Box>
                                      

                                )
                            })
                        }
                        
                        
                    </Box>
                       
                         <Box sx={{border:'1px solid #c8c6c6', bgcolor:'#001E4E', width:'100%', borderRadius:3, py:2,
                            display:'flex', justifyContent:'center'
                          }}>
                            <Button startIcon={<FileDownloadIcon/>} sx={{color:'white', fontSize:'1rem', fontweight:600}}>Download Syllabus PDF</Button>
                    </Box> 
                       
                         </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default JavaSyllabusDetails;

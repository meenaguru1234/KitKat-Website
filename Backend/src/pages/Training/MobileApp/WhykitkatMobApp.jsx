import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import whychoosemobimg from '../../../assets/Images/whychoosemobapp.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import OnDeviceTrainingOutlinedIcon from '@mui/icons-material/OnDeviceTrainingOutlined';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdFlutterDash } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";


const WhykitkatMobApp = () => {
    const whychoose = [
        {
           
            text:"Learn from industry developers who ship real apps",
        },
        {
           
            text:"Work on live client projects & app modules",
        },
        {
           
            text:"Comprehensive curriculum with practical training",
        },
        {
           
            text:"Placement assistance with resume & interview prep",
        },
        {
           
            text:"Apps published on Play Store & App Store",
        },
        {
           
            text:"Flexible batch timings (Weekday/Weekend)",
        },
       
    ]

 const coursehighlight = [
        {
           icon:OnDeviceTrainingOutlinedIcon,
            text:"60+ Hours of Instructor-Led Training",
        },
        {
           icon:VpnLockOutlinedIcon,
            text:"20+ Real World Projects",
        },
        {
           icon:FeedOutlinedIcon,
            text:"Apps Published on Stores",
        },
        {
           icon:CardMembershipOutlinedIcon,
            text:"Certification of Completion",
        },
        {
           icon:CastForEducationOutlinedIcon,
            text:"Lifetime Access to Learning Materials",
        },
        {
           icon:SupervisorAccountOutlinedIcon,
            text:"Doubt Clearing & Mentorship Support",
        },
       
    ]

 const careeropportunities = [
        {
           icon:MdOutlineDeveloperMode,
            text:"Mobile App Developer",
            bgcolor:'#097efa'
        },
        {
           icon:MdFlutterDash,
            text:"Flutter Developer",
             bgcolor:'#051286'
        },
        {
           icon:IoLogoAndroid,
            text:"React Native Developer",
             bgcolor:'#059731'
        },
        {
           icon:FaApple,
            text:"Android Developer",
             bgcolor:'#fa7909'
        },
        {
           icon:FaApple,
            text:"iOS Developer",
             bgcolor:'#097efa'
        },
        {
           icon:SiTestinglibrary,
            text:"App Tester / QA Engineer",
             bgcolor:'#051286'
        },
       
    ]


    return (
        <Box sx={{mt:5,px:{xs:1,lg:8}}}>
            <Grid container spacing={4}>
                <Grid size={{xs:12,lg:4}} sx={{borderRadius:2}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:2,backgroundColor:"#ebf7f9ae", border:'1px solid #cbeaefae',p:3,borderRadius:2,height:"90%"}}>
                        <Typography component={"h1"} variant='h6' sx={{fontWeight:600,textAlign:{xs:"center",lg:"start", color:'#2606a4',}}}>
                            Why Choose KitKat</Typography>
                        <Box >
                            <Grid container spacing={1}  sx={{border:{xs:"2px solid #EBF0F3",lg:0},p:{xs:2,lg:0},borderRadius:{xs:2,lg:0}}}>
                                {
                                    whychoose.map((item,index) => {
                                        
                                        return (
                                            <Grid size={12} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
                                                    <Box><CheckCircleIcon sx={{color:"#0749C4",fontSize:"20px"}}/></Box>
                                                    <Typography sx={{fontSize:"0.8rem", color:'#0B2E6B'}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>

                           <Grid size={{xs:12}} sx={{height:110, width:'100%'}}>
                            <Box component={'img'} src={whychoosemobimg} sx={{width:"100%",height:"100%", objectFit:'fill'}}/>
                        </Grid> 
                    </Box>
                </Grid>





                  <Grid size={{xs:12,lg:4}} sx={{borderRadius:2}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:2,backgroundColor:"#fefcfc",p:3,borderRadius:2,height:"90%",
                        border:'1px solid #cbeaefae'
                    }}>
                        <Typography component={"h1"}  sx={{fontWeight:600,textAlign:{xs:"center",lg:"start", color:'#2606a4', fontSize:'1.3rem'}}}>
                            Course Highlights</Typography>
                        <Box >
                            <Grid container spacing={1}  sx={{border:{xs:"2px solid #EBF0F3",lg:0},p:{xs:2,lg:0},borderRadius:{xs:2,lg:0}}}>
                                {
                                    coursehighlight.map((item,index) => {
                                        const Icon = item.icon
                                        
                                        return (
                                            <Grid size={12} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5, px:2}}>
                                                    <Box><Icon sx={{color:"#0B2E6B",fontSize:"30px"}}/></Box>
                                                    <Typography sx={{fontSize:"1rem", color:'#0B2E6B', lineHeight:3}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>

                          
                    </Box>
                </Grid>
              
              
               <Grid size={{xs:12,lg:4}} sx={{borderRadius:2}}>
                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:2,backgroundColor:"#ebf7f9ae", border:'1px solid #cbeaefae',p:3,borderRadius:2,height:"90%"}}>
                        <Typography component={"h1"} sx={{fontWeight:600,textAlign:{xs:"center",lg:"start", color:'#2606a4', fontSize:'1.3rem'}}}>
                            Career Opportunities</Typography>
                        <Box >
                            <Grid container spacing={1}  sx={{border:{xs:"2px solid #EBF0F3",lg:0},p:{xs:2,lg:0},borderRadius:{xs:2,lg:0}}}>
                                {
                                    careeropportunities.map((item,index) => {
                                        const Icon = item.icon
                                        
                                        return (
                                            <Grid size={12} key={index}>
                                                <Box sx={{display:"flex",alignItems:"center",gap:1.5, px:2}}>
                                                    <Box sx={{bgcolor:item.bgcolor, height:35, width:35, border:`1px solid ${item.bgcolor}`, borderRadius:5}}>
                                                        <Icon size={30} color='white' display='flex' justifyContent='center' /></Box>
                                                    <Typography sx={{fontSize:"1rem", color:'#0B2E6B', lineHeight:3}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>

                          
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WhykitkatMobApp;

import React from 'react'
import { Box, Button, Typography, Grid } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';

import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const BannerTraining = () => {
     const trainingArray = [
    {
      icon: GroupsIcon,
      number:"10+",
       numberSize: true,
      text: "Years of Experience ",
      color: "#021752",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: SupervisedUserCircleIcon,
      number:"450+",
       numberSize: true,
      text: "Students Placed",
      color: "#021752",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: SchoolIcon,
      number:"100+ ",
       numberSize: true,
      text: "Live Project Delivered",
      color: "#021752",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
      {
      icon: CorporateFareIcon,
      number:"20+",
       numberSize: true,
      text: "Hiring Parterns",
      color: "#021752",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
        {
      icon: StarBorderIcon,
      number:"4.8/5",
       numberSize: true,
      text: "Google Rating",
      color: "#021752",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
  ];
  return (
    <>
         
<Box sx={{display:'flex', justifyContent:'center', maxWidth: "100%", borderRadius:5,mt:-7,mb:3 , flexDirection:'column', gap:3}}>

     <Box sx={{ }}>
     
        <Box sx={{border:'1px solid #f0efef', p:2, position:'relative', mt:2, bgcolor:'white',width:'100%', maxWidth:{xs:700,md:1450}, 
        justifyContent:'center',  mx:'auto', borderRadius:3, flexDirection:{xs:'column', md:'row'}, display:'flex', 
            }}>
                 <Grid container spacing={2} justifyContent="space-around" sx={{width:'100%'}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{ xs: 12, sm: 6, md: "grow"} }sx={{   display: "flex", bgcolor: 'white', 
                                           gap:3,    justifyContent: 'center',}}>
                                                <Box sx={{display:"flex",gap:3,alignItems:"center",px:{sm:1.5,md:0},flexDirection: 'row', }}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",nd:"2.8rem"}, color:item.color}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{
                                                            fontSize:{ xs: item.numberSize ? "0.8rem" : "0.55rem",
                                                                       sm: item.numberSize ? "1.2rem" : "0.7rem",
                                                                       md: item.numberSize ? "1.5rem" : "0.9rem",},
                                                            fontWeight:600, color:'#071B52'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",md:"0.89em",color:'#071B52'},}}>{item.text}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",md:"0.89em",color:'#071B52'},}}>{item.text1}</Typography>

                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid> 
            </Box>


          
 </Box>
   <Box sx={{   display: "flex", justifyContent: "center",alignItems: "center",   width: "100%", maxWidth: 1200,  mx: "auto", 
    position: "relative",  }}>
                <Typography sx={{fontSize:16, color:'#071B52'}}>KitKat Software Technologies runs the best software training institute in Coimbatore for learners who want genuine, job-ready skills. We train students inside an active software development company, not a classroom disconnected from real projects. Every learner works alongside professional developers who build live software for paying clients across India.</Typography>
            </Box>
    </Box>
</>
  )
}

export default BannerTraining
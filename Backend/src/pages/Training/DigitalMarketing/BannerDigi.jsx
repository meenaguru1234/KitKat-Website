import React from 'react'
import { Box, Button, Typography, Grid } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';

import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const BannerDigi = () => {
     const trainingArray = [
    {
      icon: SchoolIcon,
      number:"10+",
       numberSize: true,
      text: "Years of ",
      text1:"Excellence",
      color: "#071B52",
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
      number:"600+",
       numberSize: true,
      text: "Students",
      text1:"Trained",
      color: "#071B52",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: CorporateFareIcon,
      number:"200+ ",
       numberSize: true,
      text: "Recruiting",
      text1:"Partners",
      color: "#071B52",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
      {
      icon: BarChartIcon,
      number:"95%",
       numberSize: true,
      text: "Placement",
      text1:'Rate',
      color: "#071B52",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
        {
      icon: StarPurple500Icon,
      number:"4.9/5",
       numberSize: true,
      text: "Student",
      text1:'Rating',
      color: "yellow",
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
         
 <Box sx={{display:'flex', justifyContent:'center', maxWidth: "100%", borderRadius:5,mt:2,  }}>
     
        <Box sx={{border:'1px solid #dbd6d6', p:2, position:'relative', mt:2, bgcolor:'white',width:'100%', maxWidth:{xs:700,md:1450}, justifyContent:'center', 
            mx:5, borderRadius:3, flexDirection:{xs:'column', md:'row'}, display:'flex', 
            }}>
                 <Grid container spacing={2} justifyContent="space-around" sx={{width:'100%'}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{ xs: 12, sm: 6, md: "grow"} }sx={{   display: "flex", bgcolor: 'white', 
                                            borderRight: index !== trainingArray.length - 1 ? '1px solid #d0dcff' : "none",gap:3,
                                                justifyContent: 'center',}}>
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
</>
  )
}

export default BannerDigi
import React from 'react'
import { Box, Button, Typography, Grid } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import Forward10OutlinedIcon from '@mui/icons-material/Forward10Outlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BannerAi = () => {
    const infoArray = [
        {
            icon: DevicesOutlinedIcon,
            number:'10+',
            text: "Years of Experience",
            isnumber:true
        },
        {
            icon: TroubleshootOutlinedIcon,
            number:'500+',
            text: "Students Trained",
            isnumber:true

        },
        {
            icon: Forward10OutlinedIcon,
            number:'200+',
            text: "Use projects Completed",
            isnumber:true

        },
        {
            icon: VerifiedUserOutlinedIcon,
            number:'95+',
            text: "Placement Rate",
            isnumber:true

        },
        {
            icon: AlarmOutlinedIcon,
            number:'Small Batch',
            text: "Size",
            isnumber:false

        },
            {
            icon: SupervisorAccountIcon,
            number:'Industry Experts',
            text: "Trainers",
            isnumber:false

        },
        {
            icon: CalendarMonthIcon,
            number:'Weekend &',
            text: "Weekday Batches",
            isnumber:false

        },
           {
            icon: SupportAgentOutlinedIcon,
            number:'Online Classes',
            text: "Available",
            isnumber:false

        },
    ];
  return (
    <>
         
 <Box sx={{display:'flex', justifyContent:'center', maxWidth: "100%", borderRadius:5,mt:-6,  }}>
     
        <Box sx={{border:'1px solid #dbd6d6', p:2, position:'relative', mt:2, bgcolor:'white',width:'100%', maxWidth:{xs:700,md:1450}, justifyContent:'center', 
            mx:5, borderRadius:3, flexDirection:{xs:'column', md:'row'}, display:'flex', 
            }}>
                 <Grid container spacing={1} justifyContent="space-around" sx={{width:'100%'}}>
                              {infoArray.map((item, index) => {
                 const Icon = item.icon;
                 return (
                    <Grid size={{xs:6,md:'grow'}}>
                        <Box key={index} sx={{height:"100%",display:"flex",px:2,py:1,alignItems:"center",
                            gap:2,color:"#042F60",flexGrow:1,justifyContent:{xs:"start",lg:"center"},borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>
                            <Box>
                                <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2rem"}}}/>
                            </Box>

                            <Box>
                                <Typography sx={{fontSize: item.isnumber ? {xs:"0.8rem",md:"0.9rem",lg:"1.4rem"} : {xs:"0.8rem",md:"0.9rem",lg:"0.95rem"}}}>{item.number}</Typography>

                                <Typography sx={{fontSize:{xs:"0.8rem",md:"0.9rem",lg:"0.8rem"}}}>{item.text}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                 );
             })}
                            </Grid> 
            </Box>
 </Box>
</>
  )
}

export default BannerAi
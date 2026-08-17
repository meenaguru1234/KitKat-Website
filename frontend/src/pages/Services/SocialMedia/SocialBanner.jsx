import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; 
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'; 
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';

const SocialBanner = () => {


    const infoArray = [
  {
    icon: AnalyticsOutlinedIcon,
    title: "Strategy-First ",
    subtitle: "Approach",
  },
  {
    icon: VerifiedOutlinedIcon,
    title: "Creative Content",
    subtitle: " That Connects",
  },
  {
    icon: InsightsOutlinedIcon,
    title: "Targeted Ads for ",
    subtitle: "Better ROI",
  },
  {
    icon: SummarizeOutlinedIcon,
    title: "Transparent Reporting ",
    subtitle: "& Insights",
  },
  {
    icon: AccessTimeOutlinedIcon,
    title: "On-Time Delivery",
    subtitle: " Every Time",
  },
   {
    icon: EngineeringOutlinedIcon,
    title: "Dedicated Account ",
    subtitle: "Manager",
  },
];


 return (
  
    <Grid container sx={{backgroundColor:"#042F60", display:'flex', justifyContent:'center', py:2}}>

    {
        infoArray.map((item, index)=>{
            const Icon = item.icon

            return(
                <Grid size={{xs:6,md:2}} sx={{width:'100%', display:'flex', flexDirection:{xs:'column', md:'row'}, flexWrap:'wrap', 
                justifyContent:'space-around', alignItems:'center', }}>
                    <Box key={index} sx={{height:"100%",display:"flex",px:1,py:2,alignItems:"center", gap:2,color:"white",
                        flexGrow:1,justifyContent:{xs:"start",lg:"center"}, 
                        borderRight:{xs:"none",md:item.borderRight ? "2px solid white" : ""}}}>

                            <Box> <Icon sx={{fontSize:{xs:"1rem",md:"1.3rem",lg:"2rem"}}}/> </Box>
                            <Box>
                                <Typography>{item.title}</Typography>
                                <Typography>{item.subtitle}</Typography>

                            </Box>

                    </Box>



                </Grid>
            )
        })
    }


    </Grid>



  );
}

export default SocialBanner

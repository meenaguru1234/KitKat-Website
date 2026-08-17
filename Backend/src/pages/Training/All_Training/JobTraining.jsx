import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import fullstack from "../../../assets/Images/training-alltrainng/fullstack.png"
import mobapp from "../../../assets/Images/training-alltrainng/mobapp.png"
import custom from "../../../assets/Images/training-alltrainng/custom.png"
import python from "../../../assets/Images/training-alltrainng/python.png"
import setting from "../../../assets/Images/training-alltrainng/setting.png"
import seo from "../../../assets/Images/training-alltrainng/seo.png"
import cloud from "../../../assets/Images/training-alltrainng/cloud.png"

const JobTraining = () => {

 const softwarelogo = [
    {
        id:1,
      logo: fullstack,
      text:"Full-stack Web Development (React, Node.js)"
       },
    {
        id:2,
        logo:mobapp,
        text:'Mobile App Development (Android, Flutter)'
     },
   
    {
        id:3,
    logo: custom,
    text:'Custom Software Development (ERP, CRM, HRM)'
      },
    {
        id:4,
         logo: python,
         text:'Python Programming & Backend'
     },
    {
        id:5,
         logo: setting,
         text:'Software Testing & Automation'
    },
    {
        id:6,
         logo: seo,
         text:"Digital Marketing & SEO"
    },
     {
        id:7,
         logo: cloud,
         text:"Database & Cloud Technologies"
    },
       
  
  ];


  return (
 <Grid sx={{ mt:2,px:3}}>

   

        <Box sx={{display:'flex', justifyContent:'center',  }}>
            <Typography sx={{fontSize:'1.6rem', fontWeight:600, color:'#0f0675', }}>
                Job Oriented Software Courses at KitKat
                </Typography><br />
        </Box>
                <Box sx={{display:'flex', justifyContent:'center',mb:2,}}>
                    <Typography sx={{fontSize:'1.1rem',  color:'#0a053c', }}>Industry-relevant courses designed to meet current hiring demands.</Typography></Box>


         <Grid container spacing={1} sx={{    mx: "auto", width: "95%",maxWidth: "1500px", gap: 3, border: "1px solid #edecfd",
    display: "flex",  justifyContent: "space-evenly",   borderRadius: 2,p: 2,}}>

       

            {
                softwarelogo.map((item, index)=>{

                    return(
                        <Grid  key={index}  size={{ xs: 12, sm: 6, md:1.5}} sx={{ display:'flex', 
                     justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:2,  position: "relative", 
                    py:2,  p:'auto'                   }}>

                           
                           <Box sx={{textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column' ,}}>
                             <Box sx={{  display: "flex", justifyContent: "center", px:2, mb:2, height:'70px'}}>
                                <Box component='img' src={item.logo} sx={{ width: 60, height:60, objectFit: "contain", fontSize:'2rem' }} />

                            </Box>
                           
                                <Typography sx={{fontSize:'14px',fontWeight:550 }}>{item.text}</Typography>


                           </Box>


                        </Grid>
                    )
                })
            }
       


    </Grid>

    <Box sx={{display:'flex', justifyContent:'center', }}>
        <Button sx={{bgcolor:'#0a053c', color:'white', textTransform:'none', fontSize:18, px:3}}>Talk to a Career Counceller</Button>
    </Box>

 </Grid>
  )
}

export default JobTraining
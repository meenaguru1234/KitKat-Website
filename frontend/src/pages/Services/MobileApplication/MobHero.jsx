import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarIcon from "@mui/icons-material/Star";
import MobHeroimg from "../../../assets/Images/mobapp.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShieldMoon } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { LuHeadset } from "react-icons/lu";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import mobuser from "../../../assets/Images/mobapp1.png"

import { autocompleteClasses, Paper } from "@mui/material";


const MobHero = () => {

  const features = [
    {
      icon: RocketLaunchIcon,
    //   number:"150+",
      text: "Custom Solutions",
      color: "#1976d2",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: VerifiedUserIcon,
    //   number:"10+",
      text: "Secure & Scalable",
      color: "#1976d2",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: AvTimerOutlinedIcon,
    //   number:"30+",
      text: "On-time Delivery",
      color: "#1976d2",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: HeadsetMicOutlinedIcon,
    //   number:"98%",
      text: "Support after launch",
      color: "#1976d2",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

 

  return (
        <Box sx={{position:"relative" , minHeight:{xs:'auto', md:'700px'}}}>
            <Grid container alignItems="center" sx={{minHeight:{xs:'auto', md:'620px'}}}>
                <Grid size={{xs:12,md:7}} sx={{display:'flex', alignItems:'center', bgcolor:'#e8f6f9a4'}}>
                    
                    <Box sx={{width:"100%",maxWidth:'900px', mx:'auto',  px: { xs: 3, md: 5 },
      py: { xs: 5, md: 0 },}}>
                        
                        <Box sx={{
                            display:"flex",flexDirection:"column",justifyContent:"space-between",
                            flexGrow:1, p: { xs: 2, lg: 2 },    pl: { xs: 2, lg: 5 },    gap: { xs: 3, lg: 0 },}}>

                               <Box sx={{  display: "inline-flex", alignItems: "center", justifyContent: "center",
                                         px: 1, py: 1,border: "1px solid #bcdcff", borderRadius: "10px",
                                         color: "#1976d2", fontWeight: 700, fontSize: "15px", mb: 3,}} >
                                      INNOVATE. BUILD. GROW.
                                    </Box>
                                
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>

                                

                                <Typography component={'h2'}  sx={{fontSize:{ xs:"2.2rem", md:"3rem" },fontWeight:700, lineHeight:1.1, color:"#041440"  , mb:2 }}>
                                    Mobile App Development Company in {''}<Box component={'span'} sx={{color:"#1976d2"}}>Coimbatore</Box> 
                                </Typography>
                                <Typography sx={{maxWidth:"500px", mt:0,color:"#071B52", fontSize:"1.15rem", fontWeight:'550', lineHeight:1.5}}>
                                    We build high-performance Android, iOS & cross-platform apps that engage users and grow your business.</Typography>
                            </Box><br />
                            <Grid container spacing={1}>
                                {features.map((item, index) => {
                                      const Icon = item.icon;

                                      return (
                                        <Grid key={index} size={{ xs: 6, md: 3 }}>
                                          <Paper
                                            elevation={2}
                                            sx={{
                                                height: "100%",
    p: 2.5,
    borderRadius: 3,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
                                            }}
                                          >
                                            <Icon
                                              sx={{
                                                 fontSize: 38,
                                                   color: "#1976d2",
                                              }}
                                            />

                                            <Typography mt={2} sx={{  mt: 1.5,
                                                  fontWeight: 600,
                                                  fontSize: 15,
                                                  color: "#071B52",}}>
                                              {item.text}
                                            </Typography>
                                          </Paper>
                                        </Grid>
                                      );
                                    })}
                            </Grid> <br />
                            <Box sx={{   display: "flex",    flexWrap: "wrap",  gap:1,    mt: 4,}}>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} variant="contained" 
                                sx={{height:"54px",px:2,fontWeight:600,fontSize:"0.9rem",borderRadius:"8px", gap:1, backgroundColor:'#1976d2'}}>
                                  <CalendarMonthIcon/> Book a Free Consultation</CommonButton>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} 
                                variant="outlined" sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px", border:'1px solid #1976d2', color:'#1976d2'}}>
                                    View Our Case Studies</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid> 
                <Grid size={{ xs: 12, md: 5 }} sx={{  display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#edf7fd",}}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={MobHeroimg} sx={{  width: "100%",
      maxWidth: 700,
      objectFit: "contain",}}/>

                        {/* Fade Effect */}
                       
                    </Box>
                </Grid>
               
            </Grid>

          <Box sx={{borderRadius:10, maxWidth:'1200px',  
            mx: "auto", my:2, px: { xs: 3, md: 6 },  
             py: { xs: 4, md: 5 }, minHeight:'100px',
             border:'1px solid #e4f0fb',
             bgcolor: '#e4f0fb'}}>

               <Box
  sx={{
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    gap: 6,
  }}
>
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box
      component="img"
      src={mobuser}
      sx={{
        width: "100%",
        maxWidth: 320,
        objectFit: "contain",
      }}
    />
  </Box>

  <Box
    sx={{
      flex: 2,
    }}
  >
    <Typography
      sx={{
        fontSize: {
          xs: 28,
          md: 36,
        },
        fontWeight: 700,
        color: "#071B52",
        mb: 2,
      }}
    >
      Your Idea. Our Code. Your Success.
    </Typography>

    <Typography
      sx={{
        fontSize: 18,
        lineHeight: 1.8,
        color: "#4d5b7c",
      }}
    >
      KitKat Software Technologies is a leading mobile app development
      company in Coimbatore delivering powerful, user-friendly and
      future-ready mobile solutions for startups, SMEs and enterprises.
    </Typography>
  </Box>
</Box>

          </Box>
        </Box>
  );
};

export default MobHero;
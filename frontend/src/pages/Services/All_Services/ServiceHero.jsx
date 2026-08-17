import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StarIcon from "@mui/icons-material/Star";
import serviceheroimg from "../../../assets/Images/service-allservice/serviceheroimg.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShieldMoon } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { LuHeadset } from "react-icons/lu";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import { autocompleteClasses, Paper } from "@mui/material";


const ServiceHero = () => {

  const features = [
    {
      icon: PersonIcon,
    //   number:"150+",
      text: "Experienced Team",
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
      icon: AvTimerOutlinedIcon,
    //   number:"10+",
      text: "On-Time Delivery",
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
      icon: SupportAgentIcon,
    //   number:"30+",
      text: "24/7 Support",
      color: "#1976d2",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },

  ];

 

  return (
        <Box sx={{position:"relative" , }}>
            <Grid container alignItems="center" >
                <Grid size={{xs:12,md:7}} sx={{display:'flex', alignItems:'center', bgcolor:'#e8f6f9a4'}}>
                    
                    <Box sx={{width:"100%",maxWidth:'900px', mx:'auto',  px: { xs: 3, md: 5 },
      py: { xs: 5, md: 0 },}}>
                        
                        <Box sx={{
                            display:"flex",flexDirection:"column",justifyContent:"space-between",
                            flexGrow:1, p: { xs: 2, lg: 2 },    pl: { xs: 2, lg: 5 },    gap: { xs: 3, lg: 0 },}}>

                               <Box sx={{  display: "inline-flex", alignItems: "center", justifyContent: "center",
                                         px: 1, py: 1,border: "1px solid #bcdcff", borderRadius: "10px", width:'40%',
                                          mb: 3,}} >
                                    <Typography  sx={{color: "#1976d2", fontWeight: 700, fontSize: "16px",}}> 
                                        <RadioButtonCheckedIcon fontSize="1rem"/> OUR SERVICES</Typography>
                                    </Box>
                                
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>

                                

                                <Typography component={'h2'}  sx={{fontSize:{ xs:"2.2rem", md:"3rem" },fontWeight:700, lineHeight:1.1, color:"#041440"  , mb:2 }}>
                                    Complete IT Solutions Under {''}<Box component={'span'} sx={{color:"#1976d2"}}>One Roof </Box> 
                                </Typography>
                                <Typography sx={{maxWidth:"500px", mt:0,color:"#071B52", fontSize:"1.15rem", fontWeight:'550', lineHeight:1.5}}>
                                    We deliver end-to-end digital solutions that help your business innovate, grow and succeed in the digital world.</Typography>
                            </Box><br />
                            <Grid container spacing={1}>
                                {features.map((item, index) => {
                                      const Icon = item.icon;

                                      return (
                                        <Grid key={index} size={{ xs: 6, md: 4 }} sx={{gap:2}}>
                                          <Paper
                                            elevation={2}
                                            sx={{
                                                height: "100%",
    p: 2.5,
    borderRadius: 3,
    textAlign: "center",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap:2
                                            }}
                                          >
                                            <Icon
                                              sx={{
                                                 fontSize: 38,
                                                   color: "#1976d2",
                                                   alignItems:'center',
                                                   

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
                            {/* <Box sx={{   display: "flex",    flexWrap: "wrap",  gap:1,    mt: 4,}}>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} variant="contained" 
                                sx={{height:"54px",px:2,fontWeight:600,fontSize:"0.9rem",borderRadius:"8px", gap:1, backgroundColor:'#1976d2'}}>
                                  <CalendarMonthIcon/> Book a Free Consultation</CommonButton>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} 
                                variant="outlined" sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px", border:'1px solid #1976d2', color:'#1976d2'}}>
                                    View Our Case Studies</CommonButton>
                            </Box> */}
                        </Box>
                    </Box>
                </Grid> 
                <Grid size={{ xs: 12, md: 5 }} sx={{  display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#edf7fd",}}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={serviceheroimg} sx={{  width: "100%",
      maxWidth: 700,
      objectFit: "contain",}}/>

                        {/* Fade Effect */}
                       
                    </Box>
                </Grid>
               
            </Grid>

      
        </Box>
  );
};

export default ServiceHero;
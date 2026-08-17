import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonitorIcon from '@mui/icons-material/Monitor';

import { FaDisplay } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiFillSound } from "react-icons/ai";
import { TbDeviceAnalytics } from "react-icons/tb";
import { LuSearchCheck } from "react-icons/lu";
import { MdConnectedTv } from "react-icons/md";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { FaCode } from "react-icons/fa6";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ConstructionIcon from '@mui/icons-material/Construction';
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';


const OurService = () => {

 const serviceArray = [
    {
        id:1,
        number:'01',
      icon: FaDisplay,
    //   bg:'#FD6A02',
      bg:'#43A047',
      title: "Website Design And Development",
      text: "We create responsive, SEO-friendly and user-friendly websites that represent your brand perfectly and drive more business.",
    },
    {
        id:2,
        number:'02',
     icon: FaLaptopCode,
      bg:'black',
      title: "Web Application Development",
      text: "We build secure, scalable and high-performance web applications tailored to your business processes.",
    },   
    {
        id:3,
        number:'03',
    icon: IoSettingsOutline,
    // bg:'#2E7D32',
    bg:'#1E88E5',
      title: "Custom Application Development",
      text: "We develop custom software solutions to automate operations and solve unique business challenges.",
    },   
    {       
         id:4,
         number:'04',
         icon: MdLanguage,
         bg:'#00BFFF',
      title: "Domain & Web Hosting",
      text: "Get reliable domain registration and fast, secure web hosting with 99.9% uptime and 24/7 technical support.",
    },
    {
        id:5,
        number:'05',
         icon: IoIosPhonePortrait,
        //  bg:'#26A69A',
         bg:'#1565C0',
      title: "Mobile Application Development",
      text: "We build innovative Android, iOS and cross-platform mobile apps that deliver seamless user experiences.",
    },
    {
        id:6,
        number:'06',
         icon: FaEnvelopesBulk,
         bg:'#FB8C00',
      title: "Bulk SMS",
      text: "Reach your customers instantly with our reliable and cost-effective bulk SMS services for businesses of all sizes.",
    },
     {
        id:7,
        number:'07',
         icon: AiFillSound,
         bg:'#e5353b',
        //  bg:'#8E24AA',
      title: "Digital Marketing",
      text: "We help you grow your brand online with result-driven digital marketing strategies that deliver measurable results.",
    },
    {
        id:8,
        number:'08',
         icon: TbDeviceAnalytics,
        //  bg:'#1E88E5',
        bg:'#26A69A',
      title: "Data Analyst",
      text: "We turn raw data into actionable insights to help you make smarter business decisions and drive growth..",
    },
    {
        id:9,
        number:'09',
         icon: LuSearchCheck,
         bg:'#546E7A',
      title: "SEO (Search Engine Optimization)",
      text: "Improve your website ranking, get more organic traffic and grow your business with our proven SEO strategies.",
    },
    {
        id:10,
        number:'10',
         icon: MdConnectedTv,
        bg:'#1E88E5',
      title: "Social Media Marketing",
      text: "Build your brand presence and engage your audience across social platforms with our creative strategies.",
    }
  ];


  return (
    <>

           <Box sx={{ textAlign:'center',py:'5'}}>
     
       <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'column',
    
    mb: 1,
  }}
>


  {/* Heading */}
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: "2rem", md: "2rem" },
      fontWeight: 700,
      color: "#071B52",
      textAlign: "center",
    }}
  >
  Our <Box component='span' sx={{color:'#0974c6'}}>Services</Box>
  </Typography>

<Typography
  sx={{
    textAlign: "center",
    color: "#555",
    fontSize: "1rem",
    // mb: 1,
  }}
>
  Powerful solutions designed to meet your business needs and drive real results.
</Typography>

<Typography sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt:3, gap:1}}>
     <Box
    sx={{
      width: 70,
      height: 2,
      bgcolor: "#1976d2",
      borderRadius: 2,
    }}
  />
<Typography><CircleIcon  sx={{color:'#024588', mt:-3, fontSize:'0.7rem'}}/></Typography>
   <Box
    sx={{
      width: 70,
      height: 2,
      bgcolor: "#1976d2",
      borderRadius: 2,
    }}
  />
</Typography>
 
</Box>


      </Box>    <br />
  <Box   sx={{
    maxWidth: "1600px",
    mx: "auto",      // Center
    px: 2,
    marginLeft:'10%'
  }}>
      <Grid container spacing={4} justifyContent="center">
  {serviceArray.map((item) => {
    const Icon = item.icon;

    return (
     <Grid key={item.id} size={{ xs: 12, sm: 6, md: 2.3 }}>
        <Box
          sx={{
            border: "1px solid #E5E5E5",
            borderRadius: "15px",
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: ".3s",
            "&:hover": {
              boxShadow: 5,
              transform: "translateY(-6px)",
            },
          }}
        >
            <Box sx={{  width: "100%", display: "flex",justifyContent: "flex-end",  mb: 1,}}>
              <Typography sx={{height:30, width:30,border:'1px solid #e0eaf5', borderRadius:1, fontWeight:550}}> 
                 {item.number}</Typography>
                </Box>
          <Box
            sx={{
              width: 90,
              height:90,
              bgcolor: '#d8f2f86e',
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Icon size={60} color="#1976d2"  />
          </Box>

          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', textAlign:'left'}}>
            <Typography
            sx={{
              fontWeight: 750,
              fontSize: "1.5rem",
              color: "black",
              mb: 3,
              justifyContent:'left',
              height:100
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "black",
              fontSize: ".95rem",
              lineHeight: 1.6,
              height:150
            }}
          >
            {item.text}
          </Typography>
<Typography> <Button endIcon={<ArrowRightAltIcon/>} sx={{textTransform:'none', fontStyle:'italic', fontWeight:550,color:'#1976d2'}}>Learn More </Button>
       </Typography>
            </Box>
        </Box>
      </Grid>
    );
  })}
</Grid>
  </Box>
        
    
    </>
  )
}

export default OurService
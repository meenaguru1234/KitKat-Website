import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonitorIcon from '@mui/icons-material/Monitor';
import { IoLogoAndroid } from "react-icons/io";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { FaReact } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ConstructionIcon from '@mui/icons-material/Construction';
import { SiFlutter } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdBusiness } from "react-icons/io";
import { MdHandyman } from "react-icons/md";


const MobService = () => {

 const serviceArray = [
    {
        id:1,
      icon: IoLogoAndroid,
    //   bg:'#FD6A02',
      bg:'#43A047',
      title: "Android App Development",
      text: "Custom Android apps built with kotlin & Java for phones and tablets.",
    },
    {
        id:2,
     icon: FaApple,
      bg:'black',
      title: "iOS App Development",
      text: "Native iOS apps using Swift & SwiftUI for iPhone and iPad. ",
    },
   
    {
        id:3,
    icon: SiFlutter,
    // bg:'#2E7D32',
    bg:'#1E88E5',
      title: "Flutter App Development",
      text: "Cross platform apps using with beautiful UI and native performance. ",
    },
   
    {
        id:4,
         icon: FaReact,
         bg:'#00BFFF',
        //  bg:'#E53935',
      title: "React Native App Development",
      text: "Built robust cross-platform apps faster with React Native framework",
    },
    {
        id:5,
         icon: IoIosPhonePortrait,
        //  bg:'#26A69A',
         bg:'#1565C0',
      title: "Cross-Platform Development",
      text: "one codebase, multiple platforms.Save time and development cost.",
    },
    {
        id:6,
         icon: FaCode,
         bg:'#FB8C00',
      title: "Hybrid App Development ",
      text: "Hybrid solutions that work seamlessly across devices and platforms.",
    },
     {
        id:7,
         icon: FaCartShopping,
         bg:'#e5353b',
        //  bg:'#8E24AA',
      title: "E-Commerce App Development",
      text: "Feature rice e-commerce app to boost sales and customer engagement",
    },
    {
        id:8,
         icon: MdLocalHospital,
        //  bg:'#1E88E5',
        bg:'#26A69A',
      title: "Healthcare App Development",
      text: "HIPAA-compliant healthcare apps for better patient care and management.",
    },
    {
        id:9,
         icon: IoMdBusiness,
         bg:'#546E7A',
      title: "Enterprise App Development",
      text: "Scalable enterprise apps to streamline oeprations and increase efficiency.",
    },
    {
        id:10,
         icon: MdHandyman,
        //  bg:'#43A047',
        bg:'#1E88E5',
      title: "App Maintenance & Support",
      text: "Ongoing support and maintenance to keep your app up to date.",
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
    gap: 3,
    mb: 2,
  }}
>
  {/* Left Line */}
  <Box
    sx={{
      width: 70,
      height: 3,
      bgcolor: "#1976d2",
      borderRadius: 2,
    }}
  />

  {/* Heading */}
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: "2rem", md: "2.5rem" },
      fontWeight: 700,
      color: "#071B52",
      textAlign: "center",
    }}
  >
    Our Mobile App Development Services
  </Typography>

  {/* Right Line */}
  <Box
    sx={{
      width: 70,
      height: 3,
      bgcolor: "#1976d2",
      borderRadius: 2,
    }}
  />
</Box>

<Typography
  sx={{
    textAlign: "center",
    color: "#555",
    fontSize: "1rem",
    // mb: 1,
  }}
>
  End-to-end mobile app development services to bring your ideas to life
</Typography>
      </Box>    <br />
  <Box   sx={{
    maxWidth: "1400px",
    mx: "auto",      // Center
    px: 2,
    marginLeft:'10%'
  }}>
      <Grid container spacing={3} justifyContent="center">
  {serviceArray.map((item) => {
    const Icon = item.icon;

    return (
     <Grid key={item.id} size={{ xs: 12, sm: 6, md: 2.2 }}>
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
          <Box
            sx={{
              width: 70,
              height: 70,
              bgcolor: item.bg,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Icon size={40} color="#fff" />
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#071B52",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: ".95rem",
              lineHeight: 1.6,
            }}
          >
            {item.text}
          </Typography>
        </Box>
      </Grid>
    );
  })}
</Grid>
  </Box>
        
    
    </>
  )
}

export default MobService
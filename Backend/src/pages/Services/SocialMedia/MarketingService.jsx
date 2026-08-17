import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LuHeadset } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsMic } from "react-icons/bs";
import { SiCardmarket } from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi"

const MarketingService = () => {

  const services = [
    { 
        icon: MdOutlineGroups, 
        title: "Social Media Management Services", 
        desc: "End-to-end management including content creation, scheduling, community engagement and monthly performance tracking.", 
        color: "#f6570e" 
    },
    { 
        icon: FaInstagram, 
        title: "Instagram & Facebook Marketing Services", 
        desc: "Grow your brand with engaging content, page management and targeted ads on Instagram and Facebook.", 
        color: "#f50d7d" 
    },
    { 
        icon: FaLinkedinIn, 
        title: "LinkedIn & Twitter Marketing Services", 
        desc: "Build professional credibility on LinkedIn and stay relevant in real-time conversations on Twitter.", 
        color: "#1977dbdd" 
    },
    { 
        icon: FaYoutube, 
        title: "YouTube & Pinterest Marketing Services", 
        desc: "Increase brand visibility with engaging video content on YouTube and visual discovery with Pinterest.", 
        color: "#f46c05dd" 
    },
    { 
        icon: BsMic, 
        title: "Social Media Advertising & Campaign Management", 
        desc: "Data-driven ad campaigns across platforms that drive traffic, leads and sales.", 
        color: "green" 
    },
    { 
        icon: SiCardmarket, 
        title: "Influencer Marketing Services", 
        desc: "Partner with the right influencers to expand your reach and build trust with your target audience.", 
        color: "purple" 
    },
    { 
        icon: BsGraphUp, 
        title: "Social Media Strategy & Consulting", 
        desc: "Custom strategies based on audience research, competitor analysis and business goals.", 
        color: "#f6570e" 
        },
          { 
        icon: BiSolidReport, 
        title: "Analytics & Performance Reporting", 
        desc: "Detailed reports with actionable insights to measure growth and improve results.", 
        color: "#4d9ff8dd" 
        },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, px: { xs: 3, md: 4 }, mt:-5 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.6rem", md: "1.9rem" }, mb: 1 }}>
          Our <Box component='span' sx={{color:'#1045d7'}}>Social Media Marketing </Box>Services
        </Typography>
        
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
          maxWidth: "1700px",
          mx: "auto",
        }}
      >
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
 <Box
  sx={{
    display: "flex",
    alignItems: "flex-start",
    border:'1px solid #dae3f9',
    borderRadius:2.5,
gap:2,
    p:3,
   

  }}
>
  <Box sx={{ flex: 1 , mt:5,   height:54,width:44,  border:`1px solid ${item.color}`, flexShrink: 0, gap:2,
  borderRadius:'50%', bgcolor:item.color, display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Icon size={25} color='white' />
  </Box>

  <Box sx={{ flex: 4 }}>
    <Typography sx={{fontSize:16, color:'071B52', fontWeight:800, mb:1}}>{item.title}</Typography> 
    <Typography>{item.desc}</Typography>
  </Box>
</Box>  
          );
        })}

       
      </Box>
    </Box>
  );
};


export default MarketingService
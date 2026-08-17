import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LuHeadset } from "react-icons/lu";

import {
  FaServer,
  FaWordpress,
  FaLinux,
  FaCloud,
  FaBriefcase,
  FaEnvelope,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

const WebHostingServices = () => {

  const services = [
    { icon: FaServer, title: "Shared Web Hosting", desc: "Affordable and reliable plans for small businesses and start-ups with great performance.", color: "#071B52" },
    { icon: FaWordpress, title: "WordPress Hosting", desc: "Optimised for WordPress with caching, auto-updates and enhanced security for seamless performance.", color: "#071B52" },
    { icon: FaLinux, title: "Linux & Windows Hosting", desc: "Choose between Linux (PHP, MySQL) or Windows (ASP.NET, MSSQL) based on your application needs.", color: "#171616" },
    { icon: FaCloud, title: "Cloud Web Hosting", desc: "Scalable resources for growing websites with automatic adjustments during traffic spikes.", color: "#1977dbdd" },
    { icon: FaBriefcase, title: "Business Web Hosting", desc: "High performance, priority support and advanced security for business websites.", color: "#1977dbdd" },
    { icon: FaEnvelope, title: "Email Hosting Services", desc: "Professional email with your domain, spam filtering, calendars and reliable delivery.", color: "#1977dbdd" },
    { icon: FaGlobe, title: "Domain Registration & Hosting", desc: "Domain search, registration, DNS setup and hosting configuration done right.", color: "#1977dbdd" },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, px: { xs: 3, md: 4 }, mt:-5 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.6rem", md: "1.9rem" }, mb: 1 }}>
          Our Web Hosting Services
        </Typography>
        <Typography sx={{ color: "black", fontSize: "1rem" }}>
          Complete hosting solutions for businesses of every size.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 2,
          maxWidth: "1300px",
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
    p:3
  }}
>
  <Box sx={{ flex: 1 , mt:5, size:16}}>
    <Icon size={35} color={item.color} />
  </Box>

  <Box sx={{ flex: 3 }}>
    <Typography sx={{fontSize:16, color:'071B52', fontWeight:800, mb:1}}>{item.title}</Typography> 
    <Typography>{item.desc}</Typography>
  </Box>
</Box>  
          );
        })}

        {/* CTA card */}
        <Box
          sx={{
            bgcolor: "#071B52",
            borderRadius: "12px",
            p: 3,
            display: "flex",
            flexDirection: "space-evenly",
          }}
        >
         
         <Box sx={{ display: "flex",  flexDirection: "column", flex:1, mt:3, }}>
             <LuHeadset size={36} color="white" style={{ marginBottom: 12 }} />
       </Box>
          <Box sx={{flex:3}}>

              <Typography sx={{ fontWeight: 700, color: "#fff", fontSize: "1rem", mb: 1.5, lineHeight: 1.4 }}>
            Not sure which hosting plan fits your website?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", lineHeight: 1.6, mb: 2.5, flexGrow: 1 }}>
            Speak with our hosting specialists in Coimbatore and get a tailored
            recommendation within 24 hours.
          </Typography>
          <Button
            variant="contained"
            endIcon={<FaChevronRight size={12} />}
            sx={{
              bgcolor: "#fff",
              color: "#0A1E4E",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "none",
              borderRadius: "6px",
              alignSelf: "flex-start",
              "&:hover": { bgcolor: "#e0e0e0" },
            }}
          >
            Talk to an expert
          </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default WebHostingServices
import React from "react";
import {Box, Grid, Typography,} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import sslhosting from "../../../assets/images/ssl-hosting.png"

const WebHostingSecurity = () => {


    const leftItems = [
  "Free SSL Certificates for every domain",
  "Regular malware scans and removal",
  "Automatic security updates",
];

const rightItems = [
  "DDoS protection and firewalls",
  "Daily backups for data safety",
  "Proactive 24/7 server monitoring",
];


  return (
   <>
   
   <Box sx={{background: "#eaf7e8", py: 1, px: 2,}}
>
  <Grid   container alignItems="center" justifyContent="space-between" spacing={8}
    sx={{   display: "flex",  justifyContent: "space-between", alignItems: "center",
    gap: 8, maxWidth: "1300px", mx: "auto", flexWrap: { xs: "wrap", md: "nowrap" }, }}>

    {/* Left Image */}

    <Box sx={{ flex: 1 }}>
      <Box  component="img"   src={sslhosting}  alt="SSL Hosting"
        sx={{ width: "100%", maxWidth: 420,  display: "block", mx: "auto", }} />
    </Box>

    {/* Right Content */}

     <Box sx={{ flex: 2 }}>

      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "#17491E",
          mb: 2,
        }}
      >
        Secure, SSL-Protected Hosting as Standard
      </Typography>

      <Typography
        sx={{
          color: "#555",
          mb: 4,
          lineHeight: 1.8,
        }}
      >
        Data breaches and malware infections damage customer trust
        faster than almost any other setback. Every account we
        provision includes SSL certificates and robust security layers.
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          {leftItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <CheckCircleIcon
                sx={{
                color: "#41A047",
                    fontSize: 24,
                    mr: 1,
                }}
              />

              <Typography>{item}</Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          {rightItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: "#41A047",
                  mr: 1,
                }}
              />

              <Typography>{item}</Typography>
            </Box>
          ))}
        </Grid>

      </Grid>

    </Box>

  </Grid>
</Box>
   
   
   </>
  )
}

export default WebHostingSecurity
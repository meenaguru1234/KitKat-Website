import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SpeedIcon from "@mui/icons-material/Speed";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import React from 'react'
import { Box, Grid, Typography } from "@mui/material";

const BusinessArray = () => {

const planArray = [
  {
    icon: LocalOfferIcon,
    bg: "#4CAF50",
    title: "Competitive Pricing",
    text: "Value-for-money plans with no hidden costs.",
  },
  {
    icon: SpeedIcon,
    bg: "#2196F3",
    title: "High Performance",
    text: "SSD storage, LiteSpeed servers and CDN.",
  },
  {
    icon: AccessTimeFilledIcon,
    bg: "#7E57C2",
    title: "99.9% Uptime Guarantee",
    text: "We keep your website online, always.",
  },
  {
    icon: SupportAgentIcon,
    bg: "#FF9800",
    title: "24/7 Expert Support",
    text: "Real people. Real support. Anytime you need.",
  },
];


  return (
    
    <Box sx={{ py: 6 ,maxWidth:1800,  justifyContent:'center', p:2}}>

  <Typography
    sx={{
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: 700,
      color: "#1b3a8f",
      

    }}
  >
    Affordable Web Hosting Plans for Every Business
  </Typography>

  <Typography
    sx={{
      textAlign: "center",
      color: "#666",
      mb: 5,
    }}
  >
    Simple plans. Powerful performance. Complete peace of mind.
  </Typography>

  <Grid container spacing={3}   sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",   // ஒரே row
    width: "100%",
  }}>
    {planArray.map((item, index) => {
      const Icon = item.icon;

      return (
        <Grid item xs={12} sm={6} md={3} key={index} >
          <Box
             sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          height: "100%",
          borderRight: {
            md: index !== planArray.length - 1 ? "1px solid #E5E5E5" : "none",
          },
        }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: item.bg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                flex:1
              }}
            >
              <Icon sx={{ color: "#fff", fontSize: 34 }} />
            </Box>

            <Box sx={{flex:5}}>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#071B52",
                  mb: 0.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: ".9rem",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </Typography>
            </Box>
            
          </Box>
        </Grid>
      );
    })}
  </Grid>

</Box>
  )
}

export default BusinessArray
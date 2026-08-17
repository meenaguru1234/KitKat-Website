import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import WhyChooseImg from "../../../assets/Images/mobapp2.PNG"; // your phone mockup image

const WhyChooseKitkat = () => {
  const whyPoints = [
    "Local team in Coimbatore with deep market understanding",
    "Experienced developers in latest technologies",
    "Agile development process with transparent communication",
    "Affordable pricing with no hidden costs",
    "100% quality assurance and bug-free delivery",
    "Post-launch support and regular updates",
  ];



  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 6 } }}>

      {/* Why Choose KitKat Section */}
      <Grid container spacing={4} sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}} >
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={WhyChooseImg}
            alt="Why choose KitKat"
            sx={{ width: "100%", maxWidth: 400, display: "block", mx: "auto" , position:'fit'}}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "#071B52", mb: 3, fontSize: { xs: "1.8rem", md: "2.4rem" } }}
          >
            Why Choose KitKat?
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {whyPoints.map((point, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CheckCircleIcon sx={{ color: "#1976d2", fontSize: 26 }} />
                <Typography sx={{ fontSize: 17, color: "#071B52", fontWeight: 500 }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default WhyChooseKitkat;
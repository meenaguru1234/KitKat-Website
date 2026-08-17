import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

// Icons

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GppGoodIcon from '@mui/icons-material/GppGood';


const WhyBlog = () => {

  const servicesArray = [
    {
      icon: BarChartOutlinedIcon,
      color: "#1a8f5f",
      title: "Growth & Learning",
      text: "Continuous learning culture with training, certifications and career advancement opportunities.",
    },
    {
      icon: LightbulbIcon,
      color: "#1a73e8",
      title: "Meaningful Work",
      text: "Work on real-world projects that solve business problems and create a positive impact.",
    },
    {
      icon: GroupsIcon,
      color: "#e84a1a",
      title: "Collaborative Culture",
      text: "Open communication, knowledge sharing and a supportive team environment.",
    },
    {
      icon: StarsIcon,
      color: "#ae1ae8",
      title: "Recognize & Reward",
      text: "We value your contributions and celebrate your achievements.",
    },
    {
      icon: FavoriteBorderIcon,
      color: "#1a8d8f",
      title: "Work-Life Balance",
      text: "Flexible work options and policies that help you balance life and work.",
    },
    {
      icon: GppGoodIcon,
      color: "#d928b9",
      title: "Stability & Trust",
      text: "A financially stable company with ethical practices and long-term vision.",
    },
   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 3}, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.5rem" } }}
        >
       Why Build Your Career With Us?
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={2}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  p: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    borderColor: "#e5e7eb",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon sx={{ fontSize: "3.5rem", color: '#0530a6', mb: 1 }} />
                <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0530a6" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#071B52", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

     
    </Box>
  );
};

export default WhyBlog;

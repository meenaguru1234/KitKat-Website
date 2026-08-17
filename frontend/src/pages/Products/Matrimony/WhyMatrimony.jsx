import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import CodeIcon from '@mui/icons-material/Code';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const WhyMatrimony = () => {

  const servicesArray = [
    {
      icon: CodeIcon,
      color: "#d928b9",
      title: "Custom Built for Your Community",
      text: "Tailored features for caste, religion and regional communities.",
    },
    {
      icon: GppGoodOutlinedIcon,
      color: "#ae1ae8",
      title: "Secure & Privacy Focused",
      text: "End-to-end data security and verified profiles for complete trust.",
    },
    {
      icon: CurrencyRupeeIcon,
      color: "#e84a1a",
      title: "Advanced Matching & Search",
      text: "Smart matching algorithms and filters to connect the right profiles.",
    },
    {
      icon: PhoneAndroidIcon,
      color: "#0c7b2cd7",
      title: "Mobile Friendly & Responsive",
      text: "Optimized for all devices for a seamless user experience.",
    },
    {
      icon: SettingsIcon,
      color: "#067ae6",
      title: "Easy to Manage & Fully Customizable",
      text: "Simple admin panel to manage users, content and settings.",
    },
    {
      icon: HeadsetMicOutlinedIcon,
      color: "#d928b9",
      title: "Local Support You Can Rely On",
      text: "Coimbatore-based team with quick response and ongoing support.",
    },
   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.45rem" } }}
        >
      Why Choose Kitkat as Your Matrimony Website Development Partner?
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#b40c52", mx: "auto", mt: 1.5, borderRadius: 2 }} />
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
                <Icon sx={{ fontSize: "3.5rem", color: item.color, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#071B52" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#071B52", lineHeight: 1.6 }}>
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

export default WhyMatrimony;

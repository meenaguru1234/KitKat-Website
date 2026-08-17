import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import CodeIcon from '@mui/icons-material/Code';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const WhyHrm = () => {

  const servicesArray = [
    {
      icon: CodeIcon,
      color: "#1a8f5f",
      title: "Custom Built for Your Business",
      text: "We build HRM software around your workflows, not a generic template.",
    },
    {
      icon: GppGoodOutlinedIcon,
      color: "#1a73e8",
      title: "Secure & Compliant",
      text: "Role-based access, data encryption and 100% compliance focus.",
    },
    {
      icon: CloudUploadOutlinedIcon,
      color: "#e84a1a",
      title: "Cloud Based & Scalable",
      text: "Access your HR data anytime, anywhere on any device.",
    },
    {
      icon: ManageAccountsOutlinedIcon,
      color: "#ae1ae8",
      title: "Dedicated Project Manager",
      text: "Single point of contact throughout development and support.",
    },
    {
      icon: BarChartOutlinedIcon,
      color: "#1a8d8f",
      title: "Real-time Insights",
      text: "Powerful dashboards to make faster, smarter people decisions.",
    },
    {
      icon: HeadsetMicOutlinedIcon,
      color: "#d928b9",
      title: "Local Support You Can Trust",
      text: "Coimbatore-based team with quick response and ongoing support.",
    },
   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
        Why Choose Kitkat as Your HRM Software Development Company?
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

export default WhyHrm;

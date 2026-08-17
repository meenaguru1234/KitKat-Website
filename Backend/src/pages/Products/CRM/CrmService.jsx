import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ExtensionIcon from '@mui/icons-material/Extension';
import TuneIcon from '@mui/icons-material/Tune';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const CrmService = () => {

  const servicesArray = [
    {
      icon: Diversity3Icon,
      color: "#1a8f5f",
      title: "CRM Consulting Services",
      text: "Strategic guidance to plan the right CRM solution.",
    },
    {
      icon: CodeIcon,
      color: "#1a73e8",
      title: "Custom CRM Development",
      text: "Build CRM software around your business workflows.",
    },
    {
      icon: RocketLaunchIcon,
      color: "#e84a1a",
      title: "CRM Implementation",
      text: "Smooth migration from legacy systems and spreadsheets.",
    },
    {
      icon: ExtensionIcon,
      color: "#ae1ae8",
      title: "CRM Integration Services",
      text: "Integrate CRM with ERP, email, accounting and other tools.",
    },
    {
      icon: TuneIcon,
      color: "#1a8d8f",
      title: "CRM Customisation Services",
      text: "Custom fields, dashboards and automation rules that fit you.",
    },
    {
      icon: PhoneAndroidIcon,
      color: "#d928b9",
      title: "CRM Application Development",
      text: "Mobile apps for your field sales and remote teams.",
    },
    {
      icon: HeadsetMicIcon,
      color: "#fd8a06",
      title: "CRM Maintenance & Support",
      text: "Ongoing updates, monitoring and expert technical support.",
    },
 
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
         Our CRM Software Development Services
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={1}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 1.7 }} key={index}>
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

export default CrmService;

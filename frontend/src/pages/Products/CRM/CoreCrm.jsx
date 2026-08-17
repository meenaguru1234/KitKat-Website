import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SpatialTrackingOutlinedIcon from '@mui/icons-material/SpatialTrackingOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';


const CoreCrm = () => {

  const servicesArray = [
    {
      icon: GroupAddOutlinedIcon,
      color: "#1a8f5f",
      title: "Lead Capture",
      text: "Capture leads from multiple channels automatically.",
    },
    {
      icon: SpatialTrackingOutlinedIcon,
      color: "#1a73e8",
      title: "Pipeline Tracking",
      text: "Track every deal from first contact to closed.",
    },
    {
      icon: ListAltOutlinedIcon,
      color: "#e84a1a",
      title: "Task & Reminders",
      text: "Automate follow-ups and never miss an opportunity.",
    },
    {
      icon: SignalCellularAltOutlinedIcon,
      color: "#ae1ae8",
      title: "Reporting & Analytics",
      text: "Powerful dashboards and real-time insights.",
    },
    {
      icon: SmsOutlinedIcon,
      color: "#068d39",
      title: "Communication Log",
      text: "Log calls, emails, WhatsApp and meetings in one place.",
    },
    {
      icon: GppGoodOutlinedIcon,
      color: "#d928b9",
      title: "Role & Permissions",
      text: "Secure role-based access for your team.",
    },
    // {
    //   icon: HeadsetMicIcon,
    //   color: "#fd8a06",
    //   title: "CRM Maintenance & Support",
    //   text: "Ongoing updates, monitoring and expert technical support.",
    // },
 
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 1 }, px: { xs: 2, md: 6 }, mx:'auto', }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } , }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
         Core CRM Features We Build Into Every System
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

export default CoreCrm;

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonitorIcon from '@mui/icons-material/Monitor';
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CloudIcon from '@mui/icons-material/Cloud';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import PublicIcon from '@mui/icons-material/Public';


const SoftwareDev = () => {

 const softwareArray = [
    {
        id:1,
      icon: ImportantDevicesOutlinedIcon,
      bg:'#FD6A02',
      title: "Custom Application Development",
      text: "Web, desktop and mobile applications built for your special business needs",
    },
    {
        id:2,
     icon: HubOutlinedIcon,
      bg:'#1565C0',
      title: "Custom ERP Development",
      text: "Integrated ERP  systems to manage finance, inventory, HR, Production and more",
    },
   
    {
        id:3,
    icon: GroupIcon,
    bg:'#2E7D32',
      title: "Custom CRP Development",
      text: "CRM Solutions that streamline sales, track leads and improve customer relations",
    },
    {
        id:4,
         icon: DashboardCustomizeOutlinedIcon,
         bg:'#8E24AA',
      title: "Workflow Automation",
      text: "Automate approvals, tasks and business processes to increase efficiency",
    },
    {
        id:5,
         icon: ApartmentOutlinedIcon,
         bg:'#E53935',
      title: "Enterprise Application Development",
      text: "Robust enterprise solutions with role-based access, audits and integration",
    },
    {
        id:6,
         icon: BarChartOutlinedIcon,
         bg:'#26A69A',
      title: "Business Application Development",
      text: "Focused business apps likes inventory, scheduling, dashboards and more",
    },
    {
        id:7,
         icon: ConstructionIcon,
         bg:'#FB8C00',
      title: "Custom Application Maintenance",
      text: "Ongoing Support, updates, bug fixes and performance optimization",
    },
    {
        id:8,
         icon: CloudIcon,
         bg:'#1E88E5',
      title: "Cloud Solution Deployment",
      text: "Secure cloud architecture and deployment on  AWS, Azure and other platforms.",
    },
    {
        id:9,
         icon: PublicIcon,
         bg:'#546E7A',
      title: "API Development & Integration",
      text: "RESTful API development and seamless integration with third-party systems.",
    },
    {
        id:10,
         icon: VerifiedUserOutlinedIcon,
         bg:'#43A047',
      title: "Legacy System Modernization",
      text: "Upgrade legacy systems to modern, scalable and secure platforms",
    }
  ];


  return (
    <>

           <Box sx={{ textAlign:'center',py:'5'}}>
     
       <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    mb: 2,
  }}
>
  {/* Left Line */}
  <Box
    sx={{
      width: 70,
      height: 3,
      bgcolor: "#FD6A02",
      borderRadius: 2,
    }}
  />

  {/* Heading */}
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: "2rem", md: "2.8rem" },
      fontWeight: 700,
      color: "#071B52",
      textAlign: "center",
    }}
  >
    Our Custom Software Development Services
  </Typography>

  {/* Right Line */}
  <Box
    sx={{
      width: 70,
      height: 3,
      bgcolor: "#FD6A02",
      borderRadius: 2,
    }}
  />
</Box>

<Typography
  sx={{
    textAlign: "center",
    color: "#555",
    fontSize: "1rem",
    mb: 5,
  }}
>
  End-to-end custom development services to solve real business problems
</Typography>
      </Box>    <br />
  <Box   sx={{
    maxWidth: "1400px",
    mx: "auto",      // Center
    px: 2,
    marginLeft:'10%'
  }}>
      <Grid container spacing={3} justifyContent="center">
  {softwareArray.map((item) => {
    const Icon = item.icon;

    return (
     <Grid key={item.id} size={{ xs: 12, sm: 6, md: 2.2 }}>
        <Box
          sx={{
            border: "1px solid #E5E5E5",
            borderRadius: "15px",
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: ".3s",
            "&:hover": {
              boxShadow: 5,
              transform: "translateY(-6px)",
            },
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              bgcolor: item.bg,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Icon sx={{ color: "#fff", fontSize: 35 }} />
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#071B52",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: ".95rem",
              lineHeight: 1.6,
            }}
          >
            {item.text}
          </Typography>
        </Box>
      </Grid>
    );
  })}
</Grid>
  </Box>
        
    
    </>
  )
}

export default SoftwareDev
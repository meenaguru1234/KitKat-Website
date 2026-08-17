import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import whyerpimg from "../../../assets/Images/product/erp/grpimg.jpg"
import GroupIcon from '@mui/icons-material/Group';
import MonitorIcon from '@mui/icons-material/Monitor';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ExtensionIcon from '@mui/icons-material/Extension';
import TuneIcon from '@mui/icons-material/Tune';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LanguageIcon from '@mui/icons-material/Language';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const ErpSoftware = () => {


  // Right side feature icons
  const featureArray = [
    {
      icon: GroupIcon,
      title: "ERP Consulting Services",
      text: "Strategic guidance on modules and rollout planning.",
      color:'#357907'
    },
    {
      icon: MonitorIcon,
      title: "Custom ERP Development",
      text: "Build custom ERP software around your business processes.",
      color:'#1a73e8'
    },
    {
      icon: RocketLaunchIcon,
      title: "ERP Implementation Services",
      text: "Smooth migration from legacy systems or spreadsheets.",
      color:'#d04812'
    },
    {
      icon: ExtensionIcon,
      title: "ERP Integration Services",
      text: "Integrate ERP with CRM, e-commerce, accounting and other tools.",
      color:'#26af71'
    },
    {
      icon: TuneIcon,
      title: "ERP Customisation Services",
      text: "Tailored fields, workflows and approval hierarchies.",
      color:'#661ae8'
    },
       {
      icon: PhoneAndroidIcon,
      title: "ERP Application Development",
      text: "Mobile apps for field staff and plant managers.",
      color:'#e81a66'
    },
       {
      icon: LanguageIcon,
      title: "Web-Based ERP Software",
      text: "Browser-based ERP accessible without installation.",
      color:'#1a7ae8'
    },
       {
      icon: SupportAgentIcon,
      title: "ERP Maintenance & Support",
      text: "Updates, monitoring and technical assistance.",
      color:'#26af71'
    },
  
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 1 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
       Our ERP Software Development Services
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", borderRadius: 2 }} />
      </Box>

      <Grid container spacing={5} alignItems="center" sx={{}}>


        {/* Right Content */}
        <Grid size={{ xs: 12, }} sx={{display:'flex', justifyContent:'space-around', flexDirection:'row', gap:2, py:2}}>
       

  {featureArray.map((item, index) => {
    const Icon = item.icon;
    return (
      <Grid spacing={2} size={{ xs: 6, sm: 4}} key={index}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            height: "100%",
            border:'1px solid #d6e3f3',
            borderRadius:5,
        mb:2
            
          }}
        >
          <Box
            sx={{
              height: 50,
              width: 50,
              borderRadius: "50%",
            //   bgcolor: item.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            mt:2
            }}
          >
            <Icon sx={{ fontSize: { xs: "1.6rem", md: "3rem" }, color: item.color }} />
          </Box>

          <Box sx={{ width: "100%", px: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                color: "#071B52",
                textAlign: "center",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.75rem" },
                color: "#5b6b8c",
                textAlign: "center",
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
      </Grid>
    </Box>
  );
};

export default ErpSoftware;

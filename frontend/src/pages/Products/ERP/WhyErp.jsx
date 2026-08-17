import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from '@mui/icons-material/Settings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import whyerpimg from "../../../assets/Images/product/erp/grpimg.jpg"

const WhyErp = () => {


  // Right side feature icons
  const featureArray = [
    {
      icon: SettingsIcon,
      title: "Process-Oriented Approach",
      text: "We design ERP systems around your workflows, not the other way around.",
      color:'#1a73e8'
    },
    {
      icon: AttachMoneyIcon,
      title: "Transparent Pricing",
      text: "Clear, itemized quotes with no hidden charges.",
      color:'#e89c1a'
    },
    {
      icon: CloudQueueIcon,
      title: "Cloud ERP Solutions",
      text: "Access your ERP securely from any location, anytime.",
      color:'#357907'
    },
    {
      icon: ManageAccountsIcon,
      title: "Dedicated Project Manager",
      text: "Single point of contact with regular updates.",
      color:'#26af71'
    },
    {
      icon: SupportAgentIcon,
      title: "Ongoing Support",
      text: "Maintenance and support included always.",
      color:'#e8511a'
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
        Why Choose KitKat for ERP Software Development
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", borderRadius: 2 }} />
      </Box>

      <Grid container spacing={5} alignItems="center" sx={{}}>

        {/* Comparison Table */}
        <Grid size={{ xs: 12, md: 5 }} >
        <Box sx={{display:'block', justifyContent:'center', width:600,height:300}}>
            <Box component={'img'} src={whyerpimg} sx={{width:'100%', height:'100%', objectFit:'fill',borderRadius:5 }} />
        </Box>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 7 }} sx={{}}>
       
<Grid
  container
  spacing={3}
  sx={{ px: { xs: 2, md: 5 }, py: 5, maxWidth: 1300, mx: "auto" }}
>
  {featureArray.map((item, index) => {
    const Icon = item.icon;
    return (
      <Grid size={{ xs: 6, sm: 2.4 }} key={index}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            height: "100%",
          }}
        >
          <Box
            sx={{
              height: 50,
              width: 50,
              borderRadius: "50%",
              bgcolor: item.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, color: "white" }} />
          </Box>

          <Box sx={{ width: "100%", px: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                color: "#071B52",
                textAlign: "left",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.75rem" },
                color: "#5b6b8c",
                textAlign: "left",
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
      </Grid>
    </Box>
  );
};

export default WhyErp;

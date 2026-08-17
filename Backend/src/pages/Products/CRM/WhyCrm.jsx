import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import whycrmimg from "../../../assets/Images/product/crm/whycrmimg.png"

const WhyCrm = () => {


  // Right side feature icons
  const featureArray = [
    {
      icon: AccountTreeIcon,
      title: "Workflow-Focused Approach",
      text: "We build CRM around your existing sales and support process.",
      color:'#1a73e8'
    },
    {
      icon: AttachMoneyIcon,
      title: "Cloud Based Solutions",
      text: "Access your CRM securely from anywhere, anytime.",
      color:'#e89c1a'
    },
    {
      icon: DesignServicesIcon,
      title: "Transparent Pricing",
      text: "Itemised quotes with no hidden costs.",
      color:'#357907'
    },
    {
      icon: CloudQueueIcon,
      title: "Dedicated Project Manager",
      text: "Regular updates and clear communication.",
      color:'#26af71'
    },
    {
      icon: ManageAccountsIcon,
      title: "Adoption-First Design",
      text: "Easy to use, so your team actually adopts it.",
      color:'#e8511a'
    },
      {
      icon: SupportAgentIcon,
      title: "Ongoing Support",
      text: "Maintenance and support included always.",
      color:'#c91ae8'
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
          Why Choose KitKat as Your CRM Development Company?
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", borderRadius: 2 }} />
      </Box>

      <Grid container spacing={5} alignItems="center" sx={{}}>

        {/* Comparison Table */}
        <Grid size={{ xs: 12, md: 5 }} >
        <Box sx={{display:'block', justifyContent:'center', width:600,height:300, }}>
            <Box component={'img'} src={whycrmimg} sx={{width:'100%', height:'100%', objectFit:'contain'}} />
        </Box>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 7 }} sx={{}}>
       

          <Grid container spacing={2} sx={{px:5, py:5, width:800}}>
            {featureArray.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 6 }} key={index} >
                  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 2,  }}>
                    <Box sx={{height:50, width:50, borderRadius:10, bgcolor:item.color, py:1}}>
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, color: 'white', textAlign:'center', p:'auto' }} />
                     </Box>                    
                     <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.7rem", md: "0.95rem" }, color: "#071B52" , textAlign:'left'}}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.65rem", md: "0.85rem" }, color: "#5b6b8c", textAlign:'left', width:200 }}>
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

export default WhyCrm;

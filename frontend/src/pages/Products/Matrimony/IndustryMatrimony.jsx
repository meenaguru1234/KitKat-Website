import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import whycrmimg from "../../../assets/Images/product/crm/whycrmimg.png"

import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WalletIcon from '@mui/icons-material/Wallet';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import { CommonButton } from "../../../StyledComponents/CommonButton";
import EastIcon from '@mui/icons-material/East';

const IndustryMatrimony = () => {

const feature= [
    
            "Built for Your Community",
            "Customization",
             "Ownership",
            "Scalability",
            "SEO & Performance",           
            "Security & Privacy",
            "Support"
      
]

const crm = [
            "Yes, 100%",
            "Highly Flexible",
            "You Own It",
            "Easy & Unlimited",
            "Optimized",
            "High Standards",
            "Dedicated & Local"
      
]

const shelfplatform = [
   
            "Generic Fit",
            "Limited",
            "Vendor Owned",
            "Restricted",
            "Average",
            "Basic",
            "Ticket Based"

]

  // Right side feature icons
  const industryweserve = [
    {
      icon: WorkIcon,
      title: "Community Matrimonial Portals",
      color:'#1a73e8'
    },
    {
      icon: ApartmentIcon,
      title: "Regional & Language Portals",
      color:'#1a73e8'
    },
    {
      icon: AccountBalanceIcon,
      title: "Caste & Religion Based Websites",
      color:'#26af71'
    },
    {
      icon: VerifiedUserIcon,
      title: "Corporate Matrimonial Platforms",
      color:'#1a73e8'
    },
    {
      icon: DiamondIcon,
      title: "Marriage Bureaus",
      color:'#e8511a'
    },
      {
      icon: LocationCityIcon,
      title: "Astrology Based Matchmaking",
      color:'#e89c1a'
    },  
     {
      icon: CameraAltIcon,
      title: "Elite & NRI Matrimonial Portals",
      color:'#e81a96'
    },
 
       {
      icon: MoreTimeOutlinedIcon,
      title: "And Many More",
      color:'#e81a96'
    },
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 6 } }}>

     

      <Grid container spacing={0} alignItems="center" sx={{}}>

        {/* Comparison Table */}
        <Grid size={{ xs: 12, md: 7 }}  sx={{border:'1px solid #c1cef1', borderRadius:5, px:3, py:2}}>
       <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    mb: 2,
  }}
>
  <Typography
    sx={{
      fontSize: 20,
      fontWeight: 600,
      color: "#071B52",
    }}
  >
                Custom HRM Software vs Off-the-Shelf Solutions</Typography>
                </Box>

         <Grid container spacing={0}>

  {/* Features */}
  <Grid size={4}>
    <Box sx={{ bgcolor: "#f2f2f2",  height: "100%", }} >
      <Box   sx={{  bgcolor: "#c2c3c42a",  color: "#071B52", textAlign: "center", py: 1.5, fontWeight: 700, }} >
        Features
      </Box>

      <Box   sx={{p: { xs: 1.5, md: 2 },  display: "flex", flexDirection: "column", gap: 2,  }} >
        {feature.map((item, index) => (
          <Box key={index}  sx={{  display: "flex", alignItems: "center", gap: 1,}}>
           

            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.85rem" },
                color: "#071B52",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Grid>


  {/* KitKat Difference */}
  <Grid size={4}>
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#b40c52df",
          color: "#fff",
          textAlign: "center",
          py: 1.5,
          fontWeight: 700,
        }}
      >
        Custom by KitKat 
      </Box>

      <Box
        sx={{
          p: { xs: 1.5, md: 2 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {crm.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
           

            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.85rem" },
                color: "#071B52",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Grid>


  {/* Off-the-Shelf */}
  <Grid size={4}>
    <Box
      sx={{
        bgcolor: "#f2f2f2",
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#c3c0c0",
          color: "#fff",
          textAlign: "center",
          py: 1.5,
          fontWeight: 700,
        }}
      >
        Off-the-Shelf
      </Box>

      <Box
        sx={{
          p: { xs: 1.5, md: 2 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {shelfplatform.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
          
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", md: "0.85rem" },
                color: "#071B52",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Grid>

</Grid>

           

          
        




        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 5 }} sx={{border:'1px solid #c1cef1', borderRadius:5, px:1, py:2}}>
       
            <Typography sx={{fontSize:22, fontWeight:600, color:'#071B52', textAlign:'center'}}>Industries We Serve</Typography>

          <Grid container spacing={2} sx={{px:2, py:5, width:600}}>
            {industryweserve.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 6 }} key={index} >
                  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 2,  }}>
                    <Box sx={{height:50, width:50,  py:1}}>
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.1rem" }, color: '#b40c52df', textAlign:'center', p:'auto', }} />
                     </Box>                    
                     <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.7rem", md: "0.8rem" }, color: "#071B52" , width:150,textAlign:'left'}}>
                      {item.title}
                    </Typography>
                      </Box>
                      
                  </Box>
                  
                </Grid>
              );
            })}
                    <Box sx={{border:'1px solid black', borderRadius:2, bgcolor:'#b40c52df', display:'flex', mx:'auto',
                    justifyContent:'center', alignItems:'center',  minWidth:'50%' , px:4
                    }}>
                        <CommonButton endIcon={<EastIcon/>} sx={{color:'white'}} >Book a Free Strategy Call</CommonButton>

                    </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndustryMatrimony;

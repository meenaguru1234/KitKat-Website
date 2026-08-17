import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import TextsmsIcon from '@mui/icons-material/Textsms';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WalletIcon from '@mui/icons-material/Wallet';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';


const ModuleMatrimony = () => {

  const servicesArray = [
    {
      icon: PersonAddAltIcon,
      color: "#f60a88",
      bgcolor: "#f9d2e72b",
      title: "Profile Registration & Verification",
      text: "Secure sign-up with OTP verification and profile approval system.",
    },
    {
      icon: SearchIcon,
      color: "#811ae8",
      bgcolor: "#dec7f538",
      title: "Advanced Search & Filters",
      text: "Search by age, location, education, caste, religion, profession & more.",
    },
    {
      icon: FavoriteIcon,
      color: "#f6220a",
      bgcolor:'#f4d1cd37',
      title: "Matching Algorithms",
      text: "Smart compatibility matching based on preferences & behavior.",
    },
    {
      icon: StarsIcon,
      color: "#2fe81a",
      bgcolor:'#cdf7c833',
      title: "Horoscope & Astrology Match",
      text: "Janam kundli matching and astrology-based compatibility.",
    },
    {
      icon: TextsmsIcon,
      color: "#1249ed",
      bgcolor:'#cfd9f73d',
      title: "Private Messaging & Interest",
      text: "Secure communication with interest, shortlists and message alerts.",
    },
    {
      icon: WorkspacePremiumIcon,
      color: "#f6ba08",
      bgcolor:'#fbecbe3e',
      title: "Membership & Subscription Plans",
      text: "Multiple packages with recurring payments and automatic renewals.",
    },
    {
      icon: WalletIcon,
      color: "#1ad0e8",
      bgcolor:'#c9f4fa37',
      title: "Payment Gateway Integration",
      text: "Razorpay, PayU, Stripe and other secure payment options.",
    },
    {
      icon: LockIcon,
      color: "#fc0384",
      bgcolor:'#eeb9d42a',
      title: "Photo Privacy Controls",
      text: "Users can control who can view photos and contact details.",
    },
      {
      icon: GroupIcon,
      color: "#1249ed",
      bgcolor:'#c0cef72e',
      title: "Family & Reference Access",
      text: "Allow family members to manage profiles with permissions.",
    },
    {
      icon: BarChartIcon,
      color: "#811ae8",
      bgcolor:'#d4b5f43c',
      title: "Admin Dashboard & Reports",
      text: "Real-time analytics, user reports, revenue reports and insights.",
    },

   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 0 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.5rem" } }}
        >
    Core Features of Our Matrimonial Websites
        </Typography>
           </Box>

      {/* Services Grid */}
      <Grid container spacing={3}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  p: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    borderColor: "#e5e7eb",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                    <Box sx={{height:60, width:90, border:`1px solid ${item.bgcolor}`, display:'flex', justifyContent:'center', alignItems:'center',
                        borderRadius:3, bgcolor:item.bgcolor, 
                    }}>
                        <Icon sx={{fontSize:30, color:item.color}}/>

                    </Box>
             <Box sx={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                   <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#071B52" , width:130}}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#071B52", lineHeight: 1.6, width:130 }}>
                  {item.text}
                </Typography>
             </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>

     
    </Box>
  );
};

export default ModuleMatrimony;

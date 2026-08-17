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


const GoldloanIndustry = () => {

const feature= [
    
            "Built for Indian NBFCs",
            "Customisation",
             "Interest Schemes",
            "Branch Management",
            "Vault Management",           
            "Reports & MIS",
            "Support"
      
]

const crm = [
            "Yes, 100%",
            "Highly Flexible",
            "Unlimited",
            "Unlimited Branches",
            "Advanced & Secure",
            "Real-time & Custom",
            "Dedicated & Local"
      
]

const shelfplatform = [
   
            "Generic Fit",
            "Limited",
            "Restricted",
            "Costly Add-ons",
            "Basic",
            "Limited Reports",
            "Ticket Based"

]

  // Right side feature icons
  const industryweserve = [
    {
      icon: WorkIcon,
      title: "NBFCs & Finance Companies",
      color:'#1a73e8'
    },
    {
      icon: ApartmentIcon,
      title: "Gold Loan Startups",
      color:'#1a73e8'
    },
    {
      icon: AccountBalanceIcon,
      title: "Banks & Co-operative Banks",
      color:'#26af71'
    },
    {
      icon: VerifiedUserIcon,
      title: "Credit Societies",
      color:'#1a73e8'
    },
    {
      icon: DiamondIcon,
      title: "Pawn Brokers & Jewelers",
      color:'#e8511a'
    },
      {
      icon: LocationCityIcon,
      title: "Rural & Urban Finance",
      color:'#e89c1a'
    },  
     {
      icon: CameraAltIcon,
      title: "Microfinance Institutions",
      color:'#e81a96'
    },
       {
      icon: PersonAddIcon,
      title: "Multi-Branch Lenders",
      color:'#e81a96'
    },
       {
      icon: WalletIcon,
      title: "Chit Funds & Mutual Benefit Funds",
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
        bgcolor: "#eafaf1",
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#22c55e",
          color: "#fff",
          textAlign: "center",
          py: 1.5,
          fontWeight: 700,
        }}
      >
        KitKat Difference
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
          bgcolor: "#ef4444",
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
       
            <Typography sx={{fontSize:24, fontWeight:600, color:'#071B52', textAlign:'center'}}>Industries We Serve</Typography>

          <Grid container spacing={2} sx={{px:5, py:5, width:600}}>
            {industryweserve.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 6 }} key={index} >
                  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 2,  }}>
                    <Box sx={{height:50, width:50,  py:1}}>
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, color: '#071B52', textAlign:'center', p:'auto', fontWeight:500 }} />
                     </Box>                    
                     <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.7rem", md: "1rem" }, color: "#071B52" , width:200,textAlign:'left'}}>
                      {item.title}
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

export default GoldloanIndustry;

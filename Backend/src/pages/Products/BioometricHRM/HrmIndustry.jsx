import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import whycrmimg from "../../../assets/Images/product/crm/whycrmimg.png"

import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';


const HrmIndustry = () => {

const feature= [
    
            "Built for your Business",
            "Flexibility",
             "Scalability",
            "Ownership",
            "Recurring Cost",           
            "Integration",
            "Support"
      
]

const crm = [
            "Yes, 100%",
            "High",
            "Easy & Unlimited",
            "You Own it",
            "One-time Investment",
            "Easy & Customizable",
            "Dedicated & Local"
      
]

const shelfplatform = [
   
            "Generic Fit",
            "Limited",
            "Restricted",
            "Vendor Owned",
            "Recurring Fees",
            "Limited options",
            "Ticket Based"

]

  // Right side feature icons
  const industryweserve = [
    {
      icon: FactoryOutlinedIcon,
      title: "Manufacturing & FMCG",
      color:'#1a73e8'
    },
    {
      icon: SchoolOutlinedIcon,
      title: "Education & Training",
      color:'#1a73e8'
    },
    {
      icon: LocalHospitalOutlinedIcon,
      title: "Healthcare & Hospitals",
      color:'#26af71'
    },
    {
      icon: LocalLaundryServiceOutlinedIcon,
      title: "Hospitality & Hotels",
      color:'#1a73e8'
    },
    {
      icon: CalculateOutlinedIcon,
      title: "Retail & E-commerce",
      color:'#e8511a'
    },
      {
      icon: CorporateFareOutlinedIcon,
      title: "Real Estate",
      color:'#e89c1a'
    },  
     {
      icon: ApartmentOutlinedIcon,
      title: "IT Companies",
      color:'#e81a96'
    },
       {
      icon: ConstructionOutlinedIcon,
      title: "Construction",
      color:'#e81a96'
    },
       {
      icon: LocalShippingOutlinedIcon,
      title: "Logistics & Transport",
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
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.7rem" }, color: '#071B52', textAlign:'center', p:'auto' }} />
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

export default HrmIndustry;

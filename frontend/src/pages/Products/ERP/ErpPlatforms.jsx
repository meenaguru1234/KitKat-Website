import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import whycrmimg from "../../../assets/Images/product/crm/whycrmimg.png"
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ErpSystemSection from "./ErpSystemSection";

const ErpPlatforms = () => {


const feature= [
    
            "Built for your Business",
            "Flexibility",
            "Ownership",
            "Recurring Cost",
            "Scalability",
            "Integration",
            "Reports",
            "Competitive Advantage"
      
]

const crm = [
            "Yes, 100%",
            "High",
            "You Own It",
            "One-time Investment",
            "Unlimited",
            "Easy & Customized",
            "Custom Reports",
            "Unique to Your Business"
      
]

const shelfplatform = [
   
            "Generic Fit",
            "Limited",
             "Vendor Owned",
             "Recurring Fee",
            "Limited by Licence",
            "Limited options",
            "Standard Reports",
            "Same as Others"

]




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
                Custom ERP Software vs Off-the-Shelf Platforms</Typography>
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
            <CheckCircleIcon
              sx={{
                color: "#22c55e",
                fontSize: "1.1rem",
              }}
            />

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
            <CancelIcon
              sx={{
                color: "#ef4444",
                fontSize: "1.1rem",
              }}
            />

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

        
      
      </Grid>
    </Box>
  );
};

export default ErpPlatforms;

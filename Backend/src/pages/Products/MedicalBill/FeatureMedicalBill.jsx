import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";

// Key Features Icons
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";




const FeatureMedicalBill = () => {

  const keyFeatures = [
    {
      icon: ReceiptLongOutlinedIcon,
      text: "Automated",
      subText: "Invoicing",
    },
    {
      icon: AssignmentTurnedInOutlinedIcon,
      text: "Insurance",
      subText: "Claim Tracking",
    },
    {
      icon: AdminPanelSettingsOutlinedIcon,
      text: "Role-Based",
      subText: "Security",
    },
    {
      icon: CloudOutlinedIcon,
      text: "Cloud Access",
      subText: "Anywhere",
    },
    {
      icon: FactCheckOutlinedIcon,
      text: "ICD & CPT",
      subText: "Coding",
    },
    {
      icon: PaymentOutlinedIcon,
      text: "Payment",
      subText: "Reminders",
    },
    {
      icon: BarChartOutlinedIcon,
      text: "Revenue",
      subText: "Reports",
    },
    {
      icon: ApartmentOutlinedIcon,
      text: "Audit Logs",
      subText: "& Compliance",
    },
    {
      icon: AccountBalanceOutlinedIcon,
      text: "Multi-Branch",
      subText: "Support",
    },
    {
      icon: HubOutlinedIcon,
      text: "Custom",
      subText: "Workflows",
    },
  ];


  return (
      <Box  sx={{ width: "100%", backgroundColor: "#ffffff", px: {  xs: 2,sm: 3, md: 5,},  py: { xs: 4, md: 0, },}}>      

      <Box sx={{ maxWidth: "1400px", margin: "0 auto",}}>

        <Box sx={{ mb: 5 }}>

          {/* Heading */}
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "center",   gap: { xs: 1, md: 2, },mb:1, }}>

            <Box sx={{width: { xs: 35, sm: 80, md: 110,}, height: "2px", backgroundColor: "#b7cadc",}} />

            <Typography sx={{ fontSize: { xs: "1.2rem",sm: "1.5rem", md: "1.45rem", },fontWeight: 700,color: "#071B52",textAlign: "center",whiteSpace: "nowrap", }}>
              KEY FEATURES
            </Typography>

            <Box sx={{width: { xs: 35,sm: 80, md: 110, },height: "2px",backgroundColor: "#b7cadc",}}/>

          </Box>


          {/* Features */}
          <Grid container spacing={{ xs: 1, sm: 1.5,  md: 0,}} >

            {keyFeatures.map((item, index) => {

              const Icon = item.icon;

              return (

                <Grid key={index} size={{ xs: 6, sm: 4,  md: 1.2,  }}sx={{ borderRight: {md:
                        index !== keyFeatures.length - 1
                          ? "1px solid #e5edf3"
                          : "none",
                    },
                  }} >

                  <Box sx={{ height: { xs: 115,sm: 125, md: 130, },display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", textAlign: "center",  px: 1,  }} >

                    <Icon  sx={{ fontSize: { xs: 38,  sm: 42, md: 48, }, 
                    color: index % 2 === 0
                            ? "#0870d8"
                            : "#16a18a",

                        mb: 1,
                      }} />

                    <Typography  sx={{fontSize: {xs: "0.7rem",  sm: "0.8rem",   md: "0.85rem", },  fontWeight: 600, lineHeight: 1.2,
                        color: "#071B52", }} >
                      {item.text}
                    </Typography>

                    <Typography sx={{fontSize: {xs: "0.7rem", sm: "0.8rem", md: "0.85rem",  },fontWeight: 600, lineHeight: 1.2,color: "#071B52", }} >
                      {item.subText}
                    </Typography>

                  </Box>

                </Grid>

              );
            })}

          </Grid>

        </Box>

  </Box>

    </Box>
  )
}

export default FeatureMedicalBill
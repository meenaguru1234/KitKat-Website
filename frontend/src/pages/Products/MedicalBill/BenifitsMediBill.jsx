import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";




const BenifitsMediBill = () => {


    const benefits = [
  { title: "Reduce Billing", subTitle: "Errors" },
  { title: "Faster Insurance", subTitle: "Claims" },
  { title: "Better Cash", subTitle: "Flow" },
  { title: "Secure Patient", subTitle: "Records" },
  { title: "Multi-Branch", subTitle: "Management" },
  { title: "Improved", subTitle: "Productivity" },
];


  return (
     <Box sx={{ width: "100%", backgroundColor: "#ffffff", px: { xs: 2, sm: 3, md: 6 }, py: { xs: 4, md: 0 } }}>
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
       

     <Box sx={{display: "flex",alignItems: "center", justifyContent: "center",   gap: { xs: 1, md: 2, },mb:1, }}>
          
                      <Box sx={{width: { xs: 35, sm: 80, md: 110,}, height: "2px", backgroundColor: "#b7cadc",}} />
          
                      <Typography sx={{ fontSize: { xs: "1.2rem",sm: "1.5rem", md: "1.35rem", }, textTransform:'uppercase',fontWeight: 700,color: "#071B52",textAlign: "center",whiteSpace: "nowrap", }}>
                      Benifits You Get
                      </Typography>
          
                      <Box sx={{width: { xs: 35,sm: 80, md: 110, },height: "2px",backgroundColor: "#b7cadc",}}/>
          
                    </Box>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: { xs: 5, md: 2 } }}>
          {benefits.map((item, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #e5edf3",
                  borderRadius: "16px",
                  backgroundColor: "#fbfcfe",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  py: 3,
                  px: 2,
                  transition: "all .25s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(20,60,100,0.08)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 26, color: "#22a559", flexShrink: 0 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.85rem", md: "0.95rem" }, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.85rem", md: "0.95rem" }, lineHeight: 1.3 }}>
                    {item.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      
      </Box>
    </Box>
  )
}

export default BenifitsMediBill
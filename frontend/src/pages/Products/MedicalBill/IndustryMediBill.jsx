import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

const IndustryMediBill = () => {

const industries = [
  { icon: LocalHospitalOutlinedIcon, title: "Multi-specialty", subTitle: "Hospitals" },
  { icon: MonitorHeartOutlinedIcon, title: "UI / Ux &", subTitle: "OPD Centers" },
  { icon: BiotechOutlinedIcon, title: "Diagnostic", subTitle: "Centres" },
  { icon: MedicalServicesOutlinedIcon, title: "Dental &", subTitle: "Speciality Clinics" },
  { icon: AccessibilityNewOutlinedIcon, title: "Physiotherapy", subTitle: "Clinics" },
  { icon: HealthAndSafetyOutlinedIcon, title: "Insurance & TPA", subTitle: "Partners" },
];



  return (
      <Box sx={{ width: "100%", backgroundColor: "#ffffff", px: { xs: 2, sm: 3, md: 6 }, py: { xs: 4, md: 0 } }}>
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
                    
      <Box sx={{display: "flex",alignItems: "center", justifyContent: "center",   gap: { xs: 1, md: 2, },mb:1, }}>
      
                  <Box sx={{width: { xs: 35, sm: 80, md: 110,}, height: "2px", backgroundColor: "#b7cadc",}} />
      
                  <Typography sx={{ fontSize: { xs: "1.2rem",sm: "1.5rem", md: "1.35rem", },fontWeight: 700,color: "#071B52",
                  textAlign: "center",whiteSpace: "nowrap", textTransform:'uppercase'}}>
                   Industries We Serve
                  </Typography>
      
                  <Box sx={{width: { xs: 35,sm: 80, md: 110, },height: "2px",backgroundColor: "#b7cadc",}}/>
      
                </Box>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: { xs: 5, md: 7 } }}>
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    border: "1px solid #e5edf3",
                    borderRadius: "16px",
                    backgroundColor: "#fbfcfe",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    py: 3,
                    px: 1.5,
                    transition: "all .25s ease",
                    "&:hover": {
                      boxShadow: "0 8px 20px rgba(20,60,100,0.08)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 34, md: 40 }, color: "#0749C4", mb: 1.5 }} />
                  <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.85rem", md: "0.95rem" }, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.85rem", md: "0.95rem" }, lineHeight: 1.3 }}>
                    {item.subTitle}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

     

    
      </Box>
    </Box>
  )
}

export default IndustryMediBill
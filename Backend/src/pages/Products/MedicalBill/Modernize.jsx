import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

// Icons
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

const Modernize = () => {

      const modernizeArray = [
    {
      icon: LocalHospitalOutlinedIcon,
      title: "Hospital",
      subTitle: "Billing",
    },
    {
      icon: MedicationOutlinedIcon,
      title: "Pharmacy",
      subTitle: "Billing",
    },
    {
      icon: AssignmentTurnedInOutlinedIcon,
      title: "Insurance",
      subTitle: "Claims",
    },
    {
      icon: CloudOutlinedIcon,
      title: "Cloud",
      subTitle: "Based",
    },
    {
      icon: SecurityOutlinedIcon,
      title: "Secure",
      subTitle: "Data",
    },
    {
      icon: AnalyticsOutlinedIcon,
      title: "Revenue",
      subTitle: "Analytics",
    },
  ];


  return (
       <Box  sx={{ width: "100%", backgroundColor: "#ffffff", py: { xs: 4, md: 2 }, px: { xs: 2, sm: 3, md: 5 },}}>
     

      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        {/* Heading */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",  gap: 2,  mb: 2 }}>
          <Box  sx={{ width: { xs: 40, md: 100 },  height: "2px",backgroundColor: "#7da6cc", }}/>

          <Typography variant="h4" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.3rem" }, fontWeight: 700,color: "#071B52",
              textAlign: "center", whiteSpace: "nowrap",}}>
            WHY MODERNIZE YOUR BILLING?
          </Typography>

          <Box sx={{ width: { xs: 40, md: 100 },  height: "2px", backgroundColor: "#7da6cc", }}/>
        </Box>

        {/* Modernize Cards */}
        <Grid container spacing={{ xs: 2, sm: 2, md: 2.5 }}justifyContent="center" >
          {modernizeArray.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid size={{ xs: 6,  sm: 4,  md: 2, }} key={index}>
                <Card elevation={0} sx={{
                    height: { xs: 150, sm: 160, md: 185 },
                    border: "1px solid #e5edf5",
                    borderRadius: "18px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 3px 12px rgba(20,60,100,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        "0 8px 22px rgba(20,60,100,0.15)",
                    },
                  }}
                >
                  <CardContent  sx={{  textAlign: "center",p: 2,  "&:last-child": { pb: 2, }, }}>
                    <Icon  sx={{ fontSize: { xs: 45, md: 50 },  color: "#0867d5",  mb: 1,}}/>

                    <Typography  sx={{ fontSize: {xs: "0.9rem",sm: "1rem", md: "1.1rem", },
                        fontWeight: 700, lineHeight: 1.2,color: "#071B52", }} >
                      {item.title}
                    </Typography>

                    <Typography sx={{fontSize: {   xs: "0.9rem",  sm: "1rem", md: "1.1rem",  }, fontWeight: 700,  lineHeight: 1.2,
                        color: "#071B52",  }}  >
                      {item.subTitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

    
      </Box>
    </Box>
  )
}

export default Modernize
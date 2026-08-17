import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";

import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const DevelopmentMediBill = () => {


const developmentProcess = [
    {
      number: "1",
      icon: FindInPageOutlinedIcon,
      title: "Requirement",
      subTitle: "Mapping",
      color: "#1764cf",
    },
    {
      number: "2",
      icon: DesignServicesOutlinedIcon,
      title: "UI / UX",
      subTitle: "Design",
      color: "#159b82",
    },
    {
      number: "3",
      icon: CodeOutlinedIcon,
      title: "Agile",
      subTitle: "Development",
      color: "#6847bd",
    },
    {
      number: "4",
      icon: AssignmentOutlinedIcon,
      title: "Testing &",
      subTitle: "Quality Check",
      color: "#ef8a16",
    },
    {
      number: "5",
      icon: RocketLaunchOutlinedIcon,
      title: "Deployment &",
      subTitle: "Training",
      color: "#14769a",
    },
    {
      number: "6",
      icon: SupportAgentOutlinedIcon,
      title: "Ongoing",
      subTitle: "Support",
      color: "#1764cf",
    },
  ];



  return (


     <Box sx={{ width: "100%",  backgroundColor: "#ffffff",    px: { xs: 2,sm: 3, md: 2, },py: { xs: 4, md: 1, }, }} >     

      <Box  sx={{ maxWidth: "1400px", margin: "0 auto", }} >
        <Box sx={{ mb: 2 }}>

          <Box  sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 1, md: 2, }, mb: 2, }}>

            <Box  sx={{ width: { xs: 30,sm: 70,md: 110, }, height: "2px",backgroundColor: "#b7cadc", }} />

            <Typography  sx={{ fontSize: { xs: "1.15rem", sm: "1.5rem", md: "1.45rem", },fontWeight: 700,color: "#071B52",
                textAlign: "center", whiteSpace: "nowrap", }}  >
              OUR DEVELOPMENT PROCESS
            </Typography>

            <Box sx={{width: {xs: 30,  sm: 70,md: 110,  }, height: "2px", backgroundColor: "#b7cadc",}} />

          </Box>


          <Box sx={{ border: "1px solid #e5edf3", borderRadius: "20px", backgroundColor: "#ffffff",
           px: { xs: 1,  sm: 2,  md: 4, },  py: {   xs: 3,  md: 3.5,},
            boxShadow: "0 3px 15px rgba(20,60,100,0.04)",  }}  >
            <Grid container spacing={1} alignItems="center" justifyContent="center"  >

            {developmentProcess.map((item, index) => {
                const Icon = item.icon;

  return (
    <React.Fragment key={index}>
      <Grid size={{ xs: 6, sm: 4, md: 1.5 }} sx={{ mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Circle wrapper — now the reference point for the arrow */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 75, sm: 85, md: 95 },
              height: { xs: 75, sm: 85, md: 95 },
              borderRadius: "50%",
              border: "2px solid #dce8f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 34,
                height: 34,
                borderRadius: "50%",
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem" }}>
                {item.number}
              </Typography>
            </Box>

            <Icon sx={{ fontSize: { xs: 38, md: 45 }, color: item.color }} />

            {/* Arrow now anchored to the circle, vertically centered */}
            {index !== developmentProcess.length - 1 && (
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  top: "50%",
                  left: "100%",
                  transform: "translateY(-50%)",
                  width: 90,
                  borderTop: "3px dashed #dce6ee",
                  ml: 1,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    right: -5,
                    top: -5,
                    width: 8,
                    height: 8,
                    borderTop: "3px solid #dce6ee",
                    borderRight: "3px solid #dce6ee",
                    transform: "rotate(45deg)",
                    
                  },
                }}
              />
            )}
          </Box>

          <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" }, fontWeight: 700, color: "#071B52", lineHeight: 1.2 }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" }, fontWeight: 700, color: "#071B52", lineHeight: 1.2 }}>
            {item.subTitle}
                </Typography>
              </Box>
            </Grid>
          </React.Fragment>
             );
        })}

            </Grid>

          </Box>

        </Box>



      </Box>

    </Box>


  )
}

export default DevelopmentMediBill
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const MedicalBilling = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", px: { xs: 2, sm: 3, md: 6 }, py: { xs: 4, md: 0 } }}>
      <Box sx={{ maxWidth: "1300px", margin: "0 auto" }}>
       
        <Box
          sx={{
            borderRadius: "18px",
            overflow: "hidden",
            background: "linear-gradient(90deg, #0b3d91 0%, #0e8f8f 100%)",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 5 },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            {/* Left: Calendar icon + heading */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 55, md: 65 },
                    height: { xs: 55, md: 65 },
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CalendarMonthOutlinedIcon sx={{ fontSize: { xs: 55, md: 100 }, color: "#ffffff" }} />
                </Box>
                <Box sx={{width:'100%'}}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.9rem" },
                      color: "#ffffff",
                      lineHeight: 1.25, 
                    }}
                  >
                    Ready to Modernize
                    <br />
                    Your Medical Billing?
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ color: "#eaf1ff", fontSize: { xs: "0.9rem", md: "1rem" }, mt: 2, ml: { md: 13.5 } }}>
                Book a FREE DEMO with KitKat's Healthcare
                <br />
                Software Specialists Today!
              </Typography>
            </Grid>

            {/* Right: contact details + button */}
            <Grid size={{ xs: 12, md: 6 }} sx={{px:5}}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderLeft: { md: "1px solid rgba(255,255,255,0.35)" },
                  pl: { md: 4 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <CallOutlinedIcon sx={{ color: "#ffffff" }} />
                  <Typography sx={{ color: "#ffffff", fontWeight: 700, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                    +91 7010816299
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <EmailOutlinedIcon sx={{ color: "#ffffff" }} />
                  <Typography sx={{ color: "#ffffff", fontWeight: 600, fontSize: { xs: "0.85rem", md: "1rem" }, wordBreak: "break-all" }}>
                    kitkatsoftwaretechnologies@gmail.com
                  </Typography>
                </Box>

                <Box
                  component="button"
                  sx={{
                    mt: 1.5,
                    alignSelf: { xs: "stretch", md: "flex-start" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    backgroundColor: "#ffffff",
                    color: "#0b3d91",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1.4,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#eef3ff" },
                  }}
                >
                  Book Your Consultation Today
                  <EastOutlinedIcon sx={{ fontSize: 20 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalBilling;

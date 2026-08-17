import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";



import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";

import CheckIcon from "@mui/icons-material/Check";


const WhyMiniBank = () => {

      const chooseItems = [
    {
      icon: TrackChangesOutlinedIcon,
      title: "Industry Expertise\nin Banking & Finance",
    },
    {
      icon: LaptopMacOutlinedIcon,
      title: "Custom Software\nDevelopment",
    },
    {
      icon: LocationOnOutlinedIcon,
      title: "Coimbatore-Based\nSupport Team",
    },
    {
      icon: SecurityOutlinedIcon,
      title: "Secure, Reliable\n& Compliant",
    },
    {
      icon: TrendingUpOutlinedIcon,
      title: "Scalable for\nFuture Growth",
    },
    {
      icon: VolunteerActivismOutlinedIcon,
      title: "On-time Delivery\n& Training",
    },
  ];


  return (
     <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: { xs: 5, md: 2 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >

       <Box sx={{ maxWidth: "1450px", mx: "auto" }}>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, md: 2 },
            mt: { xs: 6, md: 1 },
            mb: { xs: 4, md: 2 },
          }}
        >

          <Box
            sx={{
              width: { xs: 40, sm: 80, md: 120 },
              height: "2px",
              backgroundColor: "#1558D6",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: "#071B52",
              fontWeight: 700,
              textAlign: "center",
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.5rem",
              },
              whiteSpace: "nowrap",
            }}
          >
            WHY CHOOSE KITKAT?
          </Typography>

          <Box
            sx={{
              width: { xs: 40, sm: 80, md: 120 },
              height: "2px",
              backgroundColor: "#1558D6",
            }}
          />

        </Box>

        {/* Why Choose Items */}

        <Grid
          container
          sx={{
            alignItems: "stretch",
          }}
        >

          {chooseItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid
                key={index}
                size={{
                  xs: 6,
                  sm: 4,
                  md: 2,
                }}
              >

                <Box
                  sx={{
                    minHeight: {
                      xs: 150,
                      md: 180,
                    },
                    px: {
                      xs: 1,
                      sm: 2,
                      md: 1.5,
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",

                    borderRight:
                      index !== chooseItems.length - 1
                        ? {
                            xs:
                              index % 2 === 0
                                ? "1px solid #dce4ef"
                                : "none",
                            sm:
                              index % 3 !== 2
                                ? "1px solid #dce4ef"
                                : "none",
                            md:
                              index !== 5
                                ? "1px solid #dce4ef"
                                : "none",
                          }
                        : "none",
                  }}
                >

                  <Icon
                    sx={{
                      fontSize: {
                        xs: 45,
                        sm: 50,
                        md: 55,
                      },
                      color: "#0756B8",
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#052664",
                      fontWeight: 600,
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.85rem",
                        md: "0.95rem",
                      },
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.title}
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

export default WhyMiniBank
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import rocketlaunch from '../../../assets/Images/product/allproducts/rocketlaunch.png'

const ReadyTransform = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#02192f",
        position: "relative",
        overflow: "hidden",
        py: { xs: 5, md: 2 },
        px: { xs: 2, sm: 4, md: 8 },
        mb:-4
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
           maskImage:
             "linear-gradient(to right, transparent 55%, black 60%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 55%, black 60%, black 100%)",
        }}
      />

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.2rem",
              },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ready to Transform Your Business?
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.7,
              maxWidth: "550px",
              mb: 3,
            }}
          >
            Get the right software solution tailored to your business needs.
            <br />
            Contact us today for a free demo!
          </Typography>

          {/* BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {/* Get a Demo */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "#0EB850",
                color: "#fff",
                px: 3,
                py: 1.2,
                borderRadius: "5px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "none",

                "&:hover": {
                  background: "#0a9d44",
                  boxShadow: "none",
                },
              }}
            >
              Get a Demo
            </Button>

            {/* Contact Us */}
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "2px solid #fff",
                px: 3,
                py: 1.1,
                borderRadius: "5px",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,

                "&:hover": {
                  border: "2px solid #0EB850",
                  color: "#0EB850",
                  // background: "rgba(14,184,80,0.08)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>

        {/* RIGHT ROCKET */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "flex-end",
            },
            mt: {
              xs: 4,
              md: 0,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 230, sm: 280, md: 330 },
              height: { xs: 180, sm: 200, md: 230 },
            }}
          >
            {/* Platform */}
            <Box
              sx={{
                position: "absolute",
                bottom: 15,
                right: 30,
                width: { xs: 160, md: 220 },
                height: { xs: 65, md: 80 },
                background:
                  "linear-gradient(135deg, #143F66, #0B2948)",
                transform: "perspective(400px) rotateX(55deg)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              }}
            />

            {/* Rocket Circle */}
            <Box
              sx={{
                position: "absolute",
                bottom: 100,
                right: { xs: 70, md: 155 },
                width: { xs: 75, md: 90 },
                height: { xs: 75, md: 90 },
                borderRadius: "50%",
                // background: "#fff",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                // transform: "rotate(-12deg)",
              }}
            >
              {/* <RocketLaunchOutlinedIcon
                sx={{
                  fontSize: { xs: 45, md: 55 },
                  color: "#1976D2",
                }}
              /> */}
              <Box component={'img'} src={rocketlaunch} sx={{height:180, width:220}} />
            </Box>

            {/* Small floating boxes */}
            <Box
              sx={{
                position: "absolute",
                top: 30,
                right: 20,
                width: 35,
                height: 35,
                background: "#17476F",
                transform: "rotate(30deg)",
                borderRadius: 1,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 35,
                left: 20,
                width: 30,
                height: 30,
                background: "#17476F",
                transform: "rotate(30deg)",
                borderRadius: 1,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 65,
                left: 40,
                width: 25,
                height: 25,
                background: "#17476F",
                transform: "rotate(30deg)",
                borderRadius: 1,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReadyTransform;
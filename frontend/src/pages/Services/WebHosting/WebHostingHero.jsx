import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { FaCheckCircle, FaChevronRight, FaClipboardCheck } from "react-icons/fa";

// Replace with your own hero illustration
import heroImage from "../../../assets/Images/webhosting.PNG";
import { Grid } from '@mui/material';

const WebHostingHero = () => {

  const features = [
    "99.9% Uptime Guarantee",
    "SSL Certificate & Security Included",
    "24/7 Expert Support",
    "Scalable & Affordable Plans",
  ];

  return (
    <Box sx={{ position: "relative" }}>

      {/* Hero section */}
      <Grid container  sx={{mb:2, }}>
        
          {/* Left text */}
          <Grid size={{md:4.5, xs:12}}>
            <Box sx={{ height:"100%",display:"flex",flexDirection:"column", bgcolor:'#041030', p:5 }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "2.2rem", md: "2.3rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Web Hosting Company In Coimbatore
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Fast. Secure. Reliable Hosting Solutions for Your Business Growth
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
              {features.map((feature, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <FaCheckCircle size={18} color="#4DA3FF" />
                  <Typography sx={{ color: "rgba(255,255,255,0.9)", fontSize: "1rem" }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              endIcon={<FaChevronRight size={14} />}
              sx={{
                bgcolor: "#E4342B",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                textTransform: "uppercase",
               width:'300px',
                py: 1.5,
                borderRadius: "6px",
               
                "&:hover": { bgcolor: "#c92a22" },
              }}
            >
              Get A Free Hosting Quote
            </Button>
          </Box>
          </Grid>

          {/* Right image */}
          <Grid size={{xs:12, md:7.5}}>
            <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden",}}>
            <Box
              component="img"
              src={heroImage}
              alt="Web hosting servers"
              sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}
            />

              {/* Fade Effect */}
                        <Box sx={{   position: "absolute",
                               inset: 0,
                               background:
                                 "linear-gradient(to right, #041030 0%, rgba(7,22,62,.85) 18%, rgba(7,22,62,.35) 35%, transparent 100%)",
                               pointerEvents: "none",
                        }}
                        />

          </Box>
          </Grid>
       
      </Grid>


      {/* Overlapping white banner card */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          mt: { xs: "-70px", md: "-40px" },
          px: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#F5F7FB",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 9,
          border:'1px solid #a3bef4'

          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: "2 1 400px" }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: "#0A1E4E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaClipboardCheck size={24} color="#4DA3FF" />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: "1.15rem", mb: 0.5 }}>
                Get a free hosting health check for your current website.
              </Typography>
              <Typography sx={{ color: "#071B52", fontSize: "1rem" , }}>
                Our team will review speed, security and uptime, then recommend
                the right plan — no obligation.
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#0A1E4E",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              px: 3,
              py: 1.5,
              borderRadius: "6px",
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#081633" },
            }}
          >
            Request Free Health Check
          </Button>
        </Box>
      </Box>

    </Box>
  );
};

export default WebHostingHero;
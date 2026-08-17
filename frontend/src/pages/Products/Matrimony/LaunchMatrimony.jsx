import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {  FaArrowRight } from "react-icons/fa";
import loveimg from "../../../assets/Images/product/matrimony/loveimg.png"
import { PiPhoneCallDuotone } from "react-icons/pi";

const LaunchMatrimony = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f89dc364",
        borderRadius: "15px",
        maxWidth: "1300px",
        mx: "auto",
        my: 1,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 4,
        }}
      >
        {/* Left icon + text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flex: "2 1 500px",
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.08)",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box component="img"  src={loveimg}  alt={loveimg}   size={36} color="#FD6A02"  
            sx={{height: 150, width: 250, objectFit: "fit",paddingLeft:15}} />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#071B52",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.2rem" },
                lineHeight: 1.3,
                mb: 1.5,
                pl:10
              }}
            >
       Ready to Launch Your Own Matrimonial Website?
            </Typography>
            <Typography
              sx={{
                color: "#071B52",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                pl:10

              }}
            >
        We deliver custom, secure and feature-rich matrimony portals that help you grow your community and build lasting relationships.
            </Typography>

          </Box>
        </Box>

        {/* Right CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            flex: "1 1 260px",
          }}
        >
          <Button
            variant="contained"
            endIcon={<FaArrowRight size={14} />}
            sx={{
              bgcolor: "#b40c52",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": { bgcolor: "#f680b1" },
            }}
          >
          Schedule My Free Demo
          </Button>

        
          
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchMatrimony;
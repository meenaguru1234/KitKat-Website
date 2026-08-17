import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {  FaArrowRight } from "react-icons/fa";
import Clipart from "../../../assets/Images/dataanalytics.png"
import { PiPhoneCallDuotone } from "react-icons/pi";

const CostEstimateBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0A1E4E",
        borderRadius: "15px",
        maxWidth: "1400px",
        mx: "auto",
        my: 5,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 5 },
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
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.08)",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box component="img"  src={Clipart}  alt={Clipart}   size={26} color="#FD6A02"  
            sx={{height: 200, width: "200", objectFit: "fit",paddingLeft:15}} />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                lineHeight: 1.3,
                mb: 1.5,
                pl:10
              }}
            >
              How Much Does Custom Software Development Cost in Coimbatore?
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                pl:10

              }}
            >
              Cost depends on features, complexity, integrations and user volume.
              Share your requirements and get a transparent, itemised estimate.
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
              bgcolor: "#FD6A02",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": { bgcolor: "#e35f00" },
            }}
          >
            Get Your Free Cost Estimate
          </Button>

          <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            or call
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PiPhoneCallDuotone size={36} color="#fff" />
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.8rem",
              }}
            >
              +91 70108 16299
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CostEstimateBanner;
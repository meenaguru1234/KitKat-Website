import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import whyKitkatImg from "../../../assets/Images/product/medicalbilling/medicalbill.png";

const WhyMedicalBilling = () => {
  const whyChoose = [
    "Custom-built software designed for your workflow",
    "Coimbatore-based team with local support",
    "Healthcare domain experts, not resellers",
    "Transparent process & on-time delivery",
    "Long-term support & regular updates",
    "In-house training institute for skilled talent",
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", px: { xs: 2, sm: 3, md: 5 }, py: { xs: 4, md: 5 } }}>
      <Box sx={{ maxWidth: "1300px", mx: "auto" }}>
        <Grid container spacing={{ xs: 3, md: 1 }} alignItems="center">
          {/* LEFT: Heading + checklist */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ mx:'auto', px:4}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Box sx={{ width: { xs: 50, md: 90 }, height: "2px", backgroundColor: "#8db0ce" }} />
              <Typography
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.4rem" },
                  fontWeight: 700,
                  color: "#071B52",
                  whiteSpace: "nowrap",
                }}
              >
                WHY CHOOSE KITKAT?
              </Typography>
              <Box sx={{ width: { xs: 30, md: 80 }, height: "2px", backgroundColor: "#8db0ce" }} />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.2, md: 1.5 } }}>
              {whyChoose.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                  <CheckCircleIcon sx={{ fontSize: { xs: 22, md: 25 }, color: "#0867d5", flexShrink: 0 }} />
                  <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }, color: "#071B52", fontWeight: 500 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* RIGHT: Image */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 250, sm: 320, md: 250 },
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#eaf5ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={whyKitkatImg}
                alt="Why Choose KitKat"
                sx={{ width: '100%', height: '100%', objectFit: "contain", display: "block" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyMedicalBilling;
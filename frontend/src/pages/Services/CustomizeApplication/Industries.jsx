import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FaHeartbeat, FaGraduationCap, FaShoppingCart, FaRobot, FaTruck, FaUniversity, FaCheckCircle } from "react-icons/fa";

import teamImage from "../../../assets/images/teamimage.jpg";

const Industries = () => {

  const industries = [
    { icon: FaHeartbeat, name: "Healthcare" },
    { icon: FaGraduationCap, name: "Education" },
    { icon: FaShoppingCart, name: "Retail" },
    { icon: FaRobot, name: "Manufacturing" },
    { icon: FaTruck, name: "Logistics" },
    { icon: FaUniversity, name: "Finance & FinTech" },
  ];

  const whyChoose = [
    "100% custom-built software tailored to your workflow",
    "Local Coimbatore team with quick response & support",
    "Experienced developers and certified technology experts",
    "Transparent pricing and milestone-based delivery",
    "Secure coding practices and data protection by default",
    "Long-term partnership with reliable maintenance",
  ];

  const BOX_HEIGHT = 380; 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: "wrap",
        gap: 0.2,
        maxWidth: "1700px",
        mx: "auto",
        py: 4,
        px: 2,
        alignItems: "stretch",
      }}
    >
      {/* Industries We Serve */}
      <Box
        sx={{
          flex: "1 1 320px",
          border: "1px solid #E5E5E5",
          borderRadius: "15px",
            height: { lg: BOX_HEIGHT },
          // overflow: "auto",
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap", textAlign: "center" }}>
          <Box sx={{ width: 40, height: 3, bgcolor: "#FD6A02" }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.6rem" } }}>
            Industries We Serve
          </Typography>
          <Box sx={{ width: 40, height: 3, bgcolor: "#FD6A02" }} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            rowGap: 2,
            columnGap: 2,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: 0, bottom: 0, left: "33.33%", width: "1px", bgcolor: "#E0E0E0" }} />
          <Box sx={{ position: "absolute", top: 0, bottom: 0, left: "66.66%", width: "1px", bgcolor: "#E0E0E0" }} />
          <Box sx={{ position: "absolute", left: 0, right: 0, top: "50%", height: "1px", bgcolor: "#E0E0E0" }} />

          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <Box key={index} sx={{ textAlign: "center", py: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Icon size={36} color="#1560BD" style={{ marginBottom: 8 }} />
                <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.8rem", md: "0.95rem" }, minHeight: { xs: "40px", md: "24px" }, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Typography sx={{ textAlign: "center", mt: 3, color: "#071B52", fontSize: "1rem" , fontWeight:700}}>
          We build industry-specific software that meets compliance,
          integrates systems and drives measurable results.
        </Typography>
      </Box>

      {/* Why Choose KitKat */}
      <Box
        sx={{
          flex: "2 1 320px",
          border: "1px solid #E5E5E5",
          borderRadius: "15px",
          p: { xs: 3, md: 4 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4, flexWrap: "wrap", textAlign: "center" }}>
          <Box sx={{ width: 40, height: 3, bgcolor: "#FD6A02" }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.6rem" } }}>
            Why Choose KitKat?
          </Typography>
          <Box sx={{ width: 40, height: 3, bgcolor: "#FD6A02" }} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {whyChoose.map((point, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <FaCheckCircle size={20} color="#FD6A02" style={{ flexShrink: 0, marginTop: 2 }} />
              <Typography sx={{ color: "#071B52", fontSize: { xs: "1rem", md: "1.01rem" , fontWeight:700} }}>
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Team Image */}
      <Box
        sx={{
          flex: "1 1 320px",
          borderRadius: "15px",
          overflow: "hidden",
          minHeight: 300,
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box
          component="img"
          src={teamImage}
          alt="Our team"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Industries;
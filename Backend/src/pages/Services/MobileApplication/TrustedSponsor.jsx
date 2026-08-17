import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HiOutlineCog6Tooth, HiOutlineHeart, HiOutlineBuildingStorefront, HiOutlineTruck, HiOutlineAcademicCap, HiOutlineSparkles } from "react-icons/hi2";

const TrustedSponsor = () => {
  const clients = [
    { icon: HiOutlineCog6Tooth, name: "Texmo", sub: "Industries", color: "#1976d2" },
    { icon: HiOutlineHeart, name: "Kovai", sub: "Healthcare", color: "#00897b" },
    { icon: HiOutlineBuildingStorefront, name: "Sree Annapoorna", sub: "Retail", color: "#e67e22" },
    { icon: HiOutlineTruck, name: "Greenline", sub: "Logistics", color: "#00b894" },
    { icon: HiOutlineAcademicCap, name: "SKS", sub: "Academy", color: "#e91e63" },
    { icon: HiOutlineSparkles, name: "Vahini", sub: "Fashions", color: "#8e44ad" },
  ];

  return (
    <Box sx={{ py: 1, px: { xs: 2, md: 2 } }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "#071B52",
          textAlign: "center",
          mb: 5,
          fontSize: { xs: "1.4rem", md: "1.8rem" },
        }}
      >
        Trusted by Businesses Across Industries
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
          // border:'1px solid black',
          width:1300,
          mx:'auto'
        }}
      >
        {clients.map((client, index) => {
          const Icon = client.icon;
          return (
            <Box 
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                border: "1px solid #e4e8ef",
                borderRadius: 3,
                px: 3,
                py: 2,
                mx:'auto',
                minWidth: 200,
                bgcolor: "#fff",
                transition: "all 0.25s ease",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: client.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink  : 0,
                }}
              >
                <Icon size={22} color="#fff" />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: 15, lineHeight: 1.2 }}>
                  {client.name}
                </Typography>
                <Typography sx={{ color: "#5a6178", fontSize: 13 }}>
                  {client.sub}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TrustedSponsor;
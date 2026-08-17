import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { FaShieldAlt, FaCode, FaMoneyBillWave, FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import { FaServer, FaWordpress, FaLinux, FaCloud, FaBriefcase, FaEnvelope, FaGlobe, FaHeadset, FaChevronRight } from "react-icons/fa";

import hostingImage from "../../../assets/images/why-choose-hosting.png";

const WhyChooseHosting = () => {

  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Security-first infrastructure",
      desc: "SSL, firewalls and regular security patching as standard.",
    },
    {
      icon: FaCode,
      title: "Engineering-led support",
      desc: "Developers who understand code, servers and databases.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Transparent website hosting cost",
      desc: "Clear pricing with no hidden renewal charges.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local accountability",
      desc: "Based in Papanaickenpalayam, Coimbatore with local support.",
    },
    {
      icon: FaLayerGroup,
      title: "Scalable plans",
      desc: "Seamless upgrade from shared hosting to cloud or dedicated.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#EEF6FF", py: { xs: 2, md: 3 }, mt:-5 }}>
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 3, md: 4 },
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Left text */}
        <Box sx={{ flex: "1 1 420px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#071B52",
              fontSize: { xs: "1.6rem", md: "1.9rem" },
              lineHeight: 1,
              mb: 2,
            }}
          >
            Why Choose KitKat as Your Website Hosting Company
          </Typography>

          <Typography sx={{ color: "#071B52", fontSize: "0.95rem", lineHeight: 1.4, mb: 2 }}>
            Selecting the right website hosting company in Coimbatore protects
            your business from downtime, data loss and slow load times. KitKat
            stands apart with engineering-led hosting and transparent support.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      bgcolor: "#071B52",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} color="#4DA3FF" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#0A1E4E", fontSize: "0.95rem" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#555", fontSize: "0.85rem" }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Right image */}
        <Box sx={{ flex: "1 2 600px", display: "flex",  justifyContent:'flex-end', alignItems:'flex-end', mr:-11}}>
          <Box
            component="img"
            src={hostingImage}
            alt="Secure server infrastructure"
            sx={{ width: "100%", maxWidth: 880, height: "100%", display: "block", }}
          />
        </Box>
      </Box>
    </Box>
  );
};



export default WhyChooseHosting;
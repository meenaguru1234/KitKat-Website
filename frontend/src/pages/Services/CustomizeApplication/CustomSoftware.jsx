import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FaSearch, FaClipboardList, FaCode, FaShieldAlt, FaRocket, FaHeadset } from "react-icons/fa";

const CustomSoftware = () => {

  const steps = [
    { icon: FaSearch, bg: "#E4572E", title: "Discovery & Analysis", desc: "We understand your business, workflows and technical needs." },
    { icon: FaClipboardList, bg: "#1560BD", title: "Solution Design & Prototyping", desc: "Wireframes, architecture and prototypes for your early feedback." },
    { icon: FaCode, bg: "#2E9B4F", title: "Agile Development Sprints", desc: "Iterative development with regular updates and transparency." },
    { icon: FaShieldAlt, bg: "#7B4FC9", title: "Quality Assurance & Testing", desc: "Rigorous testing for functionality, security and performance." },
    { icon: FaRocket, bg: "#D9314A", title: "Deployment & Go-Live", desc: "Smooth deployment, data migration and go-live support." },
    { icon: FaHeadset, bg: "#0E8C86", title: "Ongoing Support & Maintenance", desc: "Post-launch support, updates and continuous improvement." },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>

      {/* Heading */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 6, flexWrap: "wrap", textAlign: "center" }}>
        <Box sx={{ width: 70, height: 3, bgcolor: "#FD6A02" }} />
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" } }}>
          Our Custom Software Development Process
        </Typography>
        <Box sx={{ width: 70, height: 3, bgcolor: "#FD6A02" }} />
      </Box>

      {/* Steps */}
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", xl: "nowrap" },
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1600px",
          mx: "auto",
          rowGap: 5,
        }}
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <React.Fragment key={index}>
              {/* Step content */}
              <Box
                sx={{
                  textAlign: "center",
                  flex: { xs: "0 0 50%", sm: "0 0 33.33%", xl: "0 0 200px" },
                  width: { xs: "50%", sm: "33.33%", xl: 200 },
                  px: 1,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: step.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    position: "relative",
                  }}
                >
                  <Icon size={24} color="#fff" />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -4,
                      right: -4,
                      bgcolor: "#fff",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: step.bg,
                      border: `1px solid ${step.bg}`,
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>

                <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "0.85rem", xl: "0.95rem" }, mb: 1, minHeight: { xl: "48px" } }}>
                  {step.title}
                </Typography>

                <Typography sx={{ fontSize: { xs: "0.75rem", xl: "0.78rem" }, color: "#666", lineHeight: 1.5 }}>
                  {step.desc}
                </Typography>
              </Box>

              {/* Dotted connector - only on very large screens */}
              {!isLast && (
                <Box
                  sx={{
                    display: { xs: "none", xl: "block" },
                    flex: "1 1 30px",
                    minWidth: 20,
                    height: "2px",
                    borderTop: "2px dotted #B0B7C3",
                    mt: "32px",
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Box>

    </Box>
  );
};

export default CustomSoftware;
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";



import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';


const MedicalBillingSolutions = () => {




  const solutionsArray = [
    {
      icon: LocalHospitalIcon,
      title: "Hospital",
      highlight: "Billing Software",
      color: "#0867d5",
      points: [
        "OPD & IPD Billing",
        "Lab & Diagnostics",
        "Pharmacy Billing",
        "Unified Invoicing",
      ],
    },

    {
      icon: MedicalServicesOutlinedIcon,
      title: "Clinic Management",
      highlight: "System",
      color: "#159b82",
      points: [
        "Appointments",
        "Patient Records",
        "Consultation Billing",
        "Follow-up Reminders",
      ],
    },

    {
      icon: HealthAndSafetyOutlinedIcon,
      title: "Insurance Claims",
      highlight: "Management",
      color: "#6651c9",
      points: [
        "Claim Generation",
        "Claim Validation",
        "Real-time Tracking",
        "Faster Reimbursement",
      ],
    },

    {
      icon: MonitorHeartOutlinedIcon,
      title: "EHR / EMR",
      highlight: "Integration",
      color: "#e67b0a",
      points: [
        "Digital Patient Records",
        "Doctor Access Anywhere",
        "Integrated Billing",
        "Complete History",
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 4, md: 2 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
        

      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
      
    <Box sx={{ mt: { xs: 5, md: 0 } }}>
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: 30, md: 100 },
                height: "2px",
                backgroundColor: "#7da6cc",
              }}
            />

            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.45rem",
                  md: "1.35rem",
                },
                fontWeight: 700,
                color: "#071B52",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              OUR MEDICAL BILLING SOFTWARE SOLUTIONS
            </Typography>

            <Box
              sx={{
                width: { xs: 30, md: 100 },
                height: "2px",
                backgroundColor: "#7da6cc",
              }}
            />
          </Box>

          {/* Solution Cards */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {solutionsArray.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                  key={index}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      minHeight: {
                        xs: 250,
                        sm: 300,
                        md: 380,
                      },
                      border: `2px solid ${item.color}35`,
                      borderRadius: "18px",
                      backgroundColor: "#ffffff",
                      boxShadow:
                        "0 3px 15px rgba(20,60,100,0.06)",
                      transition: "0.3s",

                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow:
                          "0 10px 25px rgba(20,60,100,0.12)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        p: { xs: 2.5, md: 3 },

                        "&:last-child": {
                          pb: 3,
                        },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          height: 95,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",mb:2
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: {
                              xs: 90,
                              md: 105,
                            },
                            color: item.color,
                          }}
                        />
                      </Box>

                      {/* Title */}
                      <Typography
                        sx={{
                          color: item.color,
                          fontSize: {
                            xs: "1.25rem",
                            md: "1.35rem",
                          },
                          fontWeight: 700,
                          lineHeight: 1.2,
                          mb: 2,
                        }}
                      >
                        {item.title}
                        <br />
                        {item.highlight}
                      </Typography>

                      {/* Points */}
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.3,
                          textAlign: "left",
                        }}
                      >
                        {item.points.map((point, pointIndex) => (
                          <Box
                            key={pointIndex}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <CheckCircleOutlinedIcon
                              sx={{
                                fontSize: 19,
                                color: item.color,
                                flexShrink: 0,
                              }}
                            />

                            <Typography
                              sx={{
                                fontSize: {
                                  xs: "0.85rem",
                                  md: "0.9rem",
                                },
                                color: "#071B52",
                                fontWeight: 500,
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
    
      </Box>
    </Box>
  );
};

export default MedicalBillingSolutions;
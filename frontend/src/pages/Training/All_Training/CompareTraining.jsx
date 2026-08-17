import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CompareTraining = () => {
  const comparisonData = [
    {
      icon: <WorkspacePremiumOutlinedIcon />,
      title: "Project exposure",
      typical: "Simulated or sample exercises only",
      kitkat: "Live modules from real client software projects",
    },
    {
      icon: <PersonIcon />,
      title: "Trainer background",
      typical: "Dedicated trainers, limited industry experience",
      kitkat: "Working engineers who also deliver client projects",
    },
    {
      icon: <BusinessCenterIcon />,
      title: "Placement support",
      typical: "Referral emails and generic job listings",
      kitkat: "Resume review, mock interviews, direct employer referrals",
    },
    {
      icon: <VerifiedUserOutlinedIcon />,
      title: "Certification transparency",
      typical: "Generic completion certificates",
      kitkat: "Certificates referencing actual project contributions",
    },
    {
      icon: <GroupsIcon />,
      title: "Batch sizes",
      typical: "Often large, limiting individual mentoring",
      kitkat: "Kept deliberately small for one-to-one mentoring",
    },
    {
      icon: <ApartmentIcon />,
      title: "Company transparency",
      typical: "Training-only brand with no portfolio",
      kitkat: "Verifiable software company with a public track record",
    },
  ];

  return (
    <Box
      sx={{
        width: "95%",
        mx: "auto",
        mt: 4,
        mb: 4,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.3rem",
            sm: "1.7rem",
            md: "2rem",
          },
          fontWeight: 700,
          color: "#092557",
          mb: 2,
        }}
      >
        How KitKat Compares With Other Software Training Institutes in
        Coimbatore
      </Typography>

      {/* Table */}
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          overflow: "hidden",
          border: "1px solid #d8d8d8",
          borderRadius: "6px",
        }}
      >
        {/* ================= HEADER ================= */}
        <Grid
          container
          sx={{
            bgcolor: "#1764B4",
            color: "white",
          }}
        >
          {/* Evaluation Criteria */}
          <Grid
            size={{ xs: 12, md: 3.5 }}
            sx={{
              borderRight: "1px solid #ddd",
              p: {
                xs: 1,
                md: 1.5,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.85rem",
                  md: "1.1rem",
                },
                textAlign: "center",
              }}
            >
              Evaluation Criteria
            </Typography>
          </Grid>

          {/* Typical */}
          <Grid
            size={{ xs: 12, md: 3.5 }}
            sx={{
              borderRight: "1px solid #ddd",
              p: {
                xs: 1,
                md: 1.5,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.85rem",
                  md: "1.1rem",
                },
                textAlign: "center",
              }}
            >
              Typical Coimbatore Institutes
            </Typography>
          </Grid>

          {/* KitKat */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              bgcolor: "#F58216",
              p: {
                xs: 1,
                md: 1.5,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "0.85rem",
                  md: "1.1rem",
                },
                textAlign: "center",
              }}
            >
              KitKat Software Technologies
            </Typography>
          </Grid>
        </Grid>

        {/* ================= TABLE ROWS ================= */}

        {comparisonData.map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              borderTop: "1px solid #ddd",
              minHeight: {
                xs: "auto",
                md: "70px",
              },
            }}
          >
            {/* ================= CRITERIA ================= */}
            <Grid
              size={{ xs: 12, md: 3.5 }}
              sx={{
                borderRight: {
                  xs: "none",
                  md: "1px solid #ddd",
                },
                p: {
                  xs: 1.5,
                  md: 1.2,
                },
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  minWidth: "45px",
                  display: "flex",
                  justifyContent: "center",
                  color: "#06316B",
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: {
                    fontSize: {
                      xs: 25,
                      md: 30,
                    },
                  },
                })}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  color: "#222",
                  fontWeight: 600,
                  fontSize: {
                    xs: "0.85rem",
                    md: "1rem",
                  },
                }}
              >
                {item.title}
              </Typography>
            </Grid>

            {/* ================= TYPICAL INSTITUTES ================= */}
            <Grid
              size={{ xs: 12, md: 3.5 }}
              sx={{
                borderRight: {
                  xs: "none",
                  md: "1px solid #ddd",
                },
                p: {
                  xs: 1.5,
                  md: 1.2,
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontSize: {
                    xs: "0.82rem",
                    md: "0.95rem",
                  },
                  lineHeight: 1.5,
                }}
              >
                {item.typical}
              </Typography>
            </Grid>

            {/* ================= KITKAT ================= */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                p: {
                  xs: 1.5,
                  md: 1.2,
                },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Green Check */}
              <CheckCircleIcon
                sx={{
                  color: "#55B86A",
                  fontSize: {
                    xs: 22,
                    md: 27,
                  },
                  flexShrink: 0,
                }}
              />

              <Typography
                sx={{
                  color: "#222",
                  fontWeight: 500,
                  fontSize: {
                    xs: "0.82rem",
                    md: "0.95rem",
                  },
                  lineHeight: 1.5,
                }}
              >
                {item.kitkat}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Paper>
    </Box>
  );
};

export default CompareTraining;
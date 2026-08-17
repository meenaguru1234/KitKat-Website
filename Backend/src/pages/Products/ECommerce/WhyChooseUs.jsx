import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const WhyChooseUs = () => {

  // Left comparison table data
  const otherDevelopers = [
    "Slow & Cluttered Design",
    "Poor Mobile Experience",
    "Hidden Costs",
    "No SEO Focus",
    "Limited Support",
  ];

  const kitkatDifference = [
    "Clean, Modern & Fast",
    "Mobile First Design",
    "Transparent Pricing",
    "SEO Ready Architecture",
    "Ongoing Support",
  ];

  // Right side feature icons
  const featureArray = [
    {
      icon: GroupsOutlinedIcon,
      title: "In-house Team",
      text: "Designers & Developers",
      color:'#1a73e8'
    },
    {
      icon: PaidOutlinedIcon,
      title: "Transparent",
      text: "No Hidden Costs",
      color:'#e89c1a'
    },
    {
      icon: TravelExploreOutlinedIcon,
      title: "SEO-Ready",
      text: "From Day One",
      color:'#6ce81a'
    },
    {
      icon: AssignmentIndOutlinedIcon,
      title: "Dedicated Project",
      text: "Managers",
      color:'#1a73e8'
    },
    {
      icon: SupportAgentOutlinedIcon,
      title: "Ongoing Maintenance",
      text: "& Support",
      color:'#e81ac6'
    },
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
          Why Choose KitKat as Your Ecommerce Development Company?
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      <Grid container spacing={3} alignItems="center">

        {/* Comparison Table */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative" , gap:2 }}>
            <Grid container>

              {/* Other Developers */}
              <Grid size={6}>
                <Box sx={{ bgcolor: "#f2f2f2", borderRadius: "12px 0 0 12px", height: "100%" }}>
                  <Box sx={{ bgcolor: "#4b5563a5", color: "#fff", textAlign: "center", py: 1.5, borderRadius: "12px 0 0 0", fontWeight: 700 }}>
                    Other Developers
                  </Box>
                  <Box sx={{ p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", gap: 2 }}>
                    {otherDevelopers.map((item, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CancelIcon sx={{ color: "#ef4444", fontSize: { xs: "1.1rem", md: "1.3rem" } }} />
                        <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" }, color: "#071B52" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* KitKat Difference */}
              <Grid size={6}>
                <Box sx={{ bgcolor: "#eafaf1", borderRadius: "0 12px 12px 0", height: "100%" }}>
                  <Box sx={{ bgcolor: "#22c55e", color: "#fff", textAlign: "center", py: 1.5, borderRadius: "0 12px 0 0", fontWeight: 700 }}>
                    KitKat Difference
                  </Box>
                  <Box sx={{ p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", gap: 2 }}>
                    {kitkatDifference.map((item, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CheckCircleIcon sx={{ color: "#22c55e", fontSize: { xs: "1.1rem", md: "1.3rem" } }} />
                        <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.9rem" }, color: "#071B52" }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* VS Circle */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "48%",
                transform: "translate(-50%, -50%)",
                width: { xs: 44, md: 60 },
                height: { xs: 44, md: 60 },
                borderRadius: "50%",
                bgcolor: "#071B52",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "1rem" },
                zIndex: 2,
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              VS
            </Box>
          </Box>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography sx={{ color: "#071B52", fontSize: { xs: "0.95rem", md: "1.1rem" }, lineHeight: 1.8, mb: 3 }}>
            We treat your online store as a long-term sales channel, not a one-off
            project. Our custom approach, transparent pricing and reliable support
            make us one of the best ecommerce website development companies
            in Coimbatore.
          </Typography>

          <Grid container spacing={2} sx={{px:2}}>
            {featureArray.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 2 }} key={index} >
                  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5,  }}>
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, color: item.color }} />
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.7rem", md: "0.85rem" }, color: "#071B52" }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.65rem", md: "0.75rem" }, color: "#5b6b8c" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;

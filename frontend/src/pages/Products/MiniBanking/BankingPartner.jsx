import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import kitkatofcimg from "../../../assets/Images/product/minibank/kitkatofcimg.jpg"

const partnerPoints = [
  "Deep understanding of banking & financial workflows",
  "RBI guidelines & compliance best practices",
  "Flexible deployment – Cloud or On-Premise",
  "Affordable pricing with no hidden costs",
  "Dedicated implementation & training",
  "Ongoing support & regular updates",
];

const impactData = [
  {
    icon: <GroupsIcon />,
    number: "100+",
    title: "Institutions",
    subtitle: "Served",
  },
  {
    icon: <WorkspacePremiumIcon />,
    number: "15+",
    title: "Years of",
    subtitle: "Experience",
  },
  {
    icon: <SentimentSatisfiedAltIcon />,
    number: "99%",
    title: "Customer",
    subtitle: "Satisfaction",
  },
  {
    icon: <SupportAgentIcon />,
    number: "24/7",
    title: "Support",
    subtitle: "Available",
  },
];

export default function BankingPartner() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 5, md: 0 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      {/* ================= TOP SECTION ================= */}
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
        //   border:'1px solid black'
        }}
      >
        {/* ================= WHY PARTNER ================= */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              border: "1px solid #dce8f5",
              borderRadius: "20px",
              background:
                "linear-gradient(145deg, #f8fbff 0%, #eef6ff 100%)",
              p: { xs: 3, md: 4 },
              boxSizing: "border-box",width:450
            }}
          >
            {/* Heading */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "23px", md: "22px" },
                  fontWeight: 700,
                  color: "#092b63",
                  textAlign: "center",
                }}
              >
                WHY PARTNER WITH US?
              </Typography>
            </Box>

            {/* Points */}
            <Box>
              {partnerPoints.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    mb: 2.1,
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#1262c5",
                      fontSize: "20px",
                      flexShrink: 0,
                      mt: "1px",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#17375f",
                      fontSize: { xs: "15px", md: "14px" },
                      fontWeight: 500,
                      lineHeight: 1.45,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* ================= OUR IMPACT ================= */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              height: "100%",
            //   border: "1px solid #dce8f5",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
              overflow: "hidden",
              width:400
            }}
          >
            {/* Heading */}
            <Box
              sx={{
                py: 2,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "23px", md: "24px" },
                  fontWeight: 600,
                  color: "#092b63",
                }}
              >
                OUR IMPACT
              </Typography>
            </Box>

            {/* Impact Grid */}
            <Grid container>
              {impactData.map((item, index) => (
                <Grid  size={{md:6}} key={index}>
                  <Box
                    sx={{
                      minHeight: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border:'1px solid #dce8f5', borderRadius:3,
                width:200,
                      px: 2,
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#149bd3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: {
                          fontSize: { xs: 40, md: 48 },
                        },
                      })}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: "25px", md: "30px" },
                          fontWeight: 800,
                          color: "#092b63",
                          lineHeight: 1,
                          mb: 0.8,
                        }}
                      >
                        {item.number}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#17375f",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                        <br />
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* ================= OFFICE IMAGE ================= */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              height: "100%",
              minHeight: { xs: "350px", md: "100%" },
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#eaf4ff",
            //   border:'1px solid black'
            }}
          >
            <Box
              component="img"
              src={kitkatofcimg}
              alt="KitKat Office"
              sx={{
                width: 400,
                height: 250,
                minHeight: { xs: "350px", md: "100%" },
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Image Overlay */}
            <Box
              sx={{
                position: "absolute",
                left: 14,
                right: 14,
                bottom: 1,
                background:
                  "linear-gradient(135deg, #0645a5 0%, #0d62c9 100%)",
                borderRadius: "16px",
                p: { xs: 2, md: 2.2 },
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: 40,
                    mt: 0.2,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "17px" },
                    fontWeight: 700,
                    lineHeight: 1.45,
                  }}
                >
                  Proudly Based in Coimbatore
                  <br />
                  Serving Financial Institutions
                  <br />
                  Across Tamil Nadu
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>


    </Box>
  );
}


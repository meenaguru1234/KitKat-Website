import React from 'react'
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box, Grid, Typography } from '@mui/material';

const WhyChoose = () => {

    const chooseProducts = [
  {
    id: 1,
    icon: SecurityOutlinedIcon,
    title: "Secure & Reliable",
    text: "Enterprise-grade security to protect your data.",
  },
  {
    id: 2,
    icon: OpenInFullOutlinedIcon,
    title: "Scalable Solutions",
    text: "Built to grow with your business.",
  },
  {
    id: 3,
    icon: SettingsOutlinedIcon,
    title: "Easy to Use",
    text: "User-friendly interface for all users.",
  },
  {
    id: 4,
    icon: HeadsetMicOutlinedIcon,
    title: "Dedicated Support",
    text: "24/7 support to assist you anytime.",
  },
  {
    id: 5,
    icon: CurrencyRupeeIcon,
    title: "Cost Effective",
    text: "Affordable solutions with maximum value.",
  },
];
  return (
    <Box sx={{ maxWidth: "1300px",  m: "auto",}}>

        {/* Why Choose Our Products */}
<Box
  sx={{
    width: "100%",
    backgroundColor: "#F2FBF8",
    mt: 1,
    py: 5,
  }}
>
  {/* Heading */}
  <Box
    sx={{
      textAlign: "center",
      mb: 4,
    }}
  >
    <Typography
      component="h2"
      sx={{
        fontSize: {
          xs: "1.8rem",
          md: "1.7rem",
        },
        fontWeight: 700,
        color: "#071B52",
        mb: 1,
      }}
    >
      Why Choose Our Products?
    </Typography>

    <Box
      sx={{
        width: 50,
        height: 3,
        backgroundColor: "#0EB850",
        borderRadius: 2,
        mx: "auto",
      }}
    />
  </Box>

  {/* Features */}
  <Box
    sx={{
      maxWidth: "1300px",
      mx: "auto",
      px: {
        xs: 2,
        md: 3,
      },
    }}
  >
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
    >
      {chooseProducts.map((item, index) => {
        const Icon = item.icon;

        return (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              sm: 6,
              md: 2.4,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                px: 2,
                py: 2,
                minHeight: 150,

                borderRight:
                  index !== chooseProducts.length - 1
                    ? {
                        xs: "none",
                        md: "1px solid #D7E5E0",
                      }
                    : "none",
              }}
            >
              {/* Icon */}
              <Icon
                sx={{
                  fontSize: 42,
                  color: "#0B9850",
                  mb: 1,
                }}
              />

              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#071B52",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  maxWidth: 190,
                  mx: "auto",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  </Box>
</Box>












</Box>
  )
}

export default WhyChoose
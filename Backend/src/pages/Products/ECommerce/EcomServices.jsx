import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const EcomServices = () => {

  const servicesArray = [
    {
      icon: ShoppingCartOutlinedIcon,
      color: "#1a8f5f",
      title: "Custom Ecommerce Website Development",
      text: "Bespoke online stores designed around your brand and catalogue.",
    },
    {
      icon: DesignServicesOutlinedIcon,
      color: "#1a73e8",
      title: "Ecommerce Website Design",
      text: "Conversion-focused, visually engaging storefronts.",
    },
    {
      icon: HexagonOutlinedIcon,
      color: "#1a73e8",
      title: "Ecommerce Portal Development",
      text: "Multi-vendor & B2B portals with role-based access.",
    },
    {
      icon: StorefrontOutlinedIcon,
      color: "#1a73e8",
      title: "Online Store Development",
      text: "Complete shopping cart, checkout & payment setup.",
    },
    {
      icon: PhoneIphoneOutlinedIcon,
      color: "#1a8f5f",
      title: "Ecommerce App Development",
      text: "Native & hybrid shopping apps for iOS & Android customers.",
    },
    {
      icon: TuneOutlinedIcon,
      color: "#6d28d9",
      title: "Ecommerce Website Customisation",
      text: "Tailored features, plugins & workflow automation.",
    },
    {
      icon: SettingsSuggestOutlinedIcon,
      color: "#1a8f5f",
      title: "Ecommerce Integration Services",
      text: "Payment gateways, CRM, ERP & inventory systems connected.",
    },
    {
      icon: AutorenewOutlinedIcon,
      color: "#1a8f5f",
      title: "Ecommerce Website Redesign",
      text: "Modern design, better speed & higher conversions.",
    },
    {
      icon: SecurityOutlinedIcon,
      color: "#6d28d9",
      title: "Ecommerce Website Maintenance",
      text: "Updates, security, backups & performance monitoring.",
    },
    {
      icon: SupportAgentOutlinedIcon,
      color: "#6d28d9",
      title: "Ecommerce Consulting Services",
      text: "Strategic guidance on platform, growth & scaling.",
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
          Our Ecommerce Website Development Services
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={3}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  p: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    borderColor: "#1a73e8",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon sx={{ fontSize: "2.2rem", color: item.color, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#071B52" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#5b6b8c", lineHeight: 1.6 }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* CTA Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 4, md: 6 } }}>
        <CommonButton
          endIcon={<EastOutlinedIcon />}
          sx={{
            fontSize: "0.9rem",
            border: "2px solid #1a73e8",
            color: "#1a73e8",
            fontWeight: 600,
            px: 4,
          }}
        >
          Request a Free Ecommerce Store Audit
        </CommonButton>
      </Box>
    </Box>
  );
};

export default EcomServices;

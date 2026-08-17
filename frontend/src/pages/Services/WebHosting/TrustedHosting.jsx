import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Replace with your own illustration image
import securityImage from "../../../assets/images/hosting-security.png";

const TrustedHosting = () => {
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto",
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 4 },
        mt: { xs: "-70px", md: "-40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left illustration */}
        <Box sx={{ flex: "1 1 380px", display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={securityImage}
            alt="Secure web hosting"
            sx={{
              width: "100%",
              maxWidth: 480,
              height: "auto",
              display: "block",
            }}
          />
        </Box>

        {/* Right text */}
        <Box sx={{ flex: "1 1 420px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#0A1E4E",
              fontSize: { xs: "1.6rem", md: "2rem" },
              mb: 3,
            }}
          >
            Trusted Web Hosting Company In Coimbatore
          </Typography>

          <Typography
            sx={{
              color: "#444",
              fontSize: "1rem",
              lineHeight: 1.8,
              mb: 2.5,
            }}
          >
            Every website depends entirely on the server that keeps it online,
            secure and fast for every visitor. A slow or unreliable host quietly
            damages your search rankings, your conversions and your customers'
            trust.
          </Typography>

          <Typography
            sx={{
              color: "#444",
              fontSize: "1rem",
              lineHeight: 1.8,
              mb: 2.5,
            }}
          >
            KitKat Software Technologies is a web hosting company in Coimbatore
            built on the same engineering discipline we apply to ERP, CRM and
            banking software projects. We do not simply resell generic server
            space; we configure, secure and monitor every hosting account with
            the rigour that mission-critical business systems demand.
          </Typography>

          <Typography
            sx={{
              color: "#444",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            Whether you run a small business website, a growing e-commerce
            store, or a corporate portal handling customer data, our web
            hosting plans are structured to match your traffic, budget and
            security needs.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedHosting;
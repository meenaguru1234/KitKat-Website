import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import client1 from "../../assets/Images/aboutus/boyimg1.jpg";
import client2 from "../../assets/Images/aboutus/boyimg1.jpg";
import client3 from "../../assets/Images/aboutus/boyimg1.jpg";

const WhatOurClientsSay = () => {
  const testimonials = [
    {
      avatar: client1,
      quote:
        "KitKat transformed our manual processes into a powerful ERP system. Their team understood our business deeply and delivered beyond our expectations.",
      name: "Sree Annapoorna Retail",
      location: "Coimbatore",
    },
    {
      avatar: client2,
      quote:
        "Professional team, excellent communication and timely delivery. Our custom CRM has improved our sales tracking and customer engagement.",
      name: "HealthTech Startup",
      location: "Coimbatore",
    },
    {
      avatar: client3,
      quote:
        "Their support after deployment is outstanding. KitKat is more than a vendor; they are our technology partner.",
      name: "Logistics Company",
      location: "Coimbatore",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 0 } }}>
      {/* Heading with dashes */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "1.8rem", md: "1.7rem" }, fontWeight: 800, color: "#0B1F44" }}
        >
          What Our Clients Say
        </Typography>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
      </Box>

      {/* Testimonial cards */}
      <Grid container spacing={3}>
        {testimonials.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                border: "1px solid #e5e5e5",
                borderRadius: 3,
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <FormatQuoteIcon
                  sx={{ color: "#FF5722", fontSize: 34, transform: "scaleX(-1)" }}
                />
                <Box sx={{ display: "flex" }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFB400", fontSize: 20 }} />
                  ))}
                </Box>
              </Box>

              <Typography sx={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.7, mb: 3, flex: 1 }}>
                "{item.quote}"
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  component="img"
                  src={item.avatar}
                  alt={item.name}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0B1F44" }}>
                    – {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#666" }}>
                    {item.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatOurClientsSay;
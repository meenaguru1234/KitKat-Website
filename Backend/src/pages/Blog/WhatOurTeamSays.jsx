import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import avatar1 from "../../assets/Images/blog/boyimg1.jpg"
import avatar2 from "../../assets/Images/blog/girlimg1.jpg";
import avatar3 from "../../assets/Images/blog/boyimg2.jpg";

const WhatOurTeamSays = () => {
  const testimonials = [
    {
      quote:
        "KitKat gives me the freedom to learn, experiment and grow every day. The supportive team makes all the difference.",
      avatar: avatar1,
      name: "Aravindh S.",
      role: "Software Developer",
    },
    {
      quote:
        "The work culture is amazing and management truly cares about our growth and well-being.",
      avatar: avatar2,
      name: "Priya Dharshini",
      role: "Data Analyst",
    },
    {
      quote:
        "I love the opportunities here to work on diverse projects and make a real impact for clients.",
      avatar: avatar3,
      name: "Karthik M.",
      role: "Digital Marketing Executive",
    },
        {
      quote:
        "The work culture is amazing and management truly cares about our growth and well-being.",
      avatar: avatar2,
      name: "Priya Dharshini",
      role: "Data Analyst",
    },
    {
      quote:
        "I love the opportunities here to work on diverse projects and make a real impact for clients.",
      avatar: avatar3,
      name: "Karthik M.",
      role: "Digital Marketing Executive",
    },
   
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(testimonials.length - visibleCount, 0) : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const item = testimonials[(startIndex + i) % testimonials.length];
    if (item) visibleTestimonials.push(item);
  }

  return (
    <Box sx={{ mt: 2, px: { xs: 1, lg: 8 } }}>
      <Grid container>
        {/* Heading */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", lg: "1.5rem" }, py: 2, fontWeight: "700", color: "#0B2E6B" }}
          >
            What Our Team Says
          </Typography>
          <Box sx={{ width: "65px", height: "3px", backgroundColor: "#0749C4", mb: 4 }} />
        </Box>

        {/* Carousel row */}
        <Grid size={12} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Left arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              border: "1px solid #ddd",
              width: 44,
              height: 44,
              display: { xs: "none", md: "flex" },
              flexShrink: 0,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              flex: 1,
            }}
          >
            {visibleTestimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  border: "1px solid #e5e5e5",
                  borderRadius: 3,
                  p: 3,
                  bgcolor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <FormatQuoteIcon
                    sx={{ color: "#0749C4", fontSize: 32, transform: "scaleX(-1)" }}
                  />
                  <Typography sx={{ fontSize: "0.95rem", color: "#333", mt: 1 }}>
                    {item.quote}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 3 }}>
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
                    <Typography sx={{ fontWeight: 700, color: "#0B2E6B", fontSize: "0.9rem" }}>
                      – {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666" }}>
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Right arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              border: "1px solid #ddd",
              width: 44,
              height: 44,
              display: { xs: "none", md: "flex" },
              flexShrink: 0,
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Grid>

        {/* Mobile arrows */}
        <Grid
          size={12}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ border: "1px solid #ddd" }}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ border: "1px solid #ddd" }}>
            <ChevronRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatOurTeamSays;
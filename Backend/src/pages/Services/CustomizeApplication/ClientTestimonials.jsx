import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// Replace these with your own avatar image paths
import avatar1 from "../../../assets/Images/client1.jpg";
import avatar2 from "../../../assets/Images/client2.jpg";
import avatar3 from "../../../assets/Images/client3.jpg";
import avatar4 from "../../../assets/Images/client4.jpg";
import google from "../../../assets/Images/google.png"

const ClientTestimonials = () => {

  const testimonials = [
    {
      rating: 5,
      quote: "KitKat built an ERP that completely transformed our operations. The team understood our workflow perfectly.",
      avatar: avatar1,
      name: "Mr. S. Ramesh",
      designation: "CEO, Sree Annapoorna Retail",
    },
    {
      rating: 4,
      quote: "Their team delivered a robust CRM that improved our sales tracking and customer engagement.",
      avatar: avatar2,
      name: "Ms. Priya K.",
      designation: "Founder, HealthTech Startup",
    },
    {
      rating: 5,
      quote: "Professional, transparent and always available. Highly recommend for any custom software project.",
      avatar: avatar3,
      name: "Mr. Karthik M.",
      designation: "Director, Logistics Company",
    },
    {
      rating: 4,
      quote: "The workflow automation they built saved us hours of manual work every single day.",
      avatar: avatar4,
      name: "Mr. Aravind K.",
      designation: "Operations Head, Manufacturing Unit",
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2 }}>

      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 5,
        }}
      >
        <Box sx={{ width: 60, height: 3, bgcolor: "#FD6A02" }} />
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: "2.2rem" }}
        >
          What Our Clients Say
        </Typography>
        <Box sx={{ width: 60, height: 3, bgcolor: "#FD6A02" }} />
      </Box>

      {/* Cards row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          maxWidth: "1600px",
          mx: "auto",
        }}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 250px",
              maxWidth: 300,
              border: "1px solid #E5E5E5",
              borderRadius: "15px",
              p: 3,
            }}
          >
            {/* Stars */}
            <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={18}
                  color={i < item.rating ? "#FDB022" : "#E0E0E0"}
                />
              ))}
            </Box>

            {/* Quote */}
            <Typography
              sx={{
                color: "#071B52",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                // fontStyle: "italic",
                mb: 3,
                minHeight: "80px",
                fontWeight:550
              }}
            >
              "{item.quote}"
            </Typography>

            {/* Author */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar src={item.avatar} alt={item.name} sx={{ width: 44, height: 44 }} />
              <Box>
                <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: "0.9rem" }}>
                  – {item.name}
                </Typography>
                <Typography sx={{ color: "#071B52", fontSize: "0.8rem", fontWeight:600 }}>
                  {item.designation}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

        {/* Google review card */}
        <Box
          sx={{
            flex: "1 1 250px",
            maxWidth: 300,
            border: "1px solid #E5E5E5",
            borderRadius: "15px",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 700,
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box component="span" sx={{ color: "#4285F4" }}>G</Box>
            <Box component="span" sx={{ color: "#EA4335" }}>o</Box>
            <Box component="span" sx={{ color: "#FBBC05" }}>o</Box>
            <Box component="span" sx={{ color: "#4285F4" }}>g</Box>
            <Box component="span" sx={{ color: "#34A853" }}>l</Box>
            <Box component="span" sx={{ color: "#EA4335" }}>e</Box>
          </Typography> */}
            <Box  component="img"
                  src={google}
                  alt={google}
                  sx={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}/>

          <Typography sx={{ fontWeight: 700, fontSize: "2.2rem", color: "#071B52", mb: 1 }}>
           <span> 4.8 </span> <span><Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={20} color="#FDB022" />
            ))}
          </Box></span>
          </Typography>

         

          <Typography sx={{ color: "#071B52", fontSize: "0.85rem", mb: 3, fontWeight:600 }}>
            Based on 78+ reviews
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1a73e8",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              px: 3,
              "&:hover": { bgcolor: "#1557b0" },
            }}
          >
            Read Reviews
          </Button>
        </Box>
      </Box>

    </Box>
  );
};

export default ClientTestimonials;
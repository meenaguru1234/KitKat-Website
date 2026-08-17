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


const ClientReviews = () => {

  const testimonials = [
    {
      rating: 5,
      quote: "KitKat team understood our requirements perfectly and delievered an outstanding app on time.Highly recommended!.",
      avatar: avatar1,
      name: "-Aravind K., CEO,",
      designation: "Retail Business, Coimbatore",
    },
    {
      rating: 5,
      quote: "Professional team, great communication and excellent supports even after launch.They are our go-to app developers.",
      avatar: avatar2,
      name: "-Priya S., Founder",
      designation: "HealthTech Startup",
    },
    {
      rating: 5,
      quote: "From design to deployment, everything was handled smoothly. Our app is performing beyond expectations.",
      avatar: avatar3,
      name: "-Karthik M., Director",
      designation: "Logistics Company",
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

     
      </Box>

    </Box>
  );
};

export default ClientReviews;
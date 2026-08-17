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


const ClientReview = () => {

  const testimonials = [
    {
      rating: 5,
      quote: "KitKat has been instrumental in growing our online visibility. Our organic traffic doubled within 4 months!",
      avatar: avatar1,
      name: "Arun Kumar",
      designation:  "Founder, Home Needs Store",
    },
    {
      rating: 5,
      quote:  "Excellent team and transparent reporting. We now rank on page one for all our important keywords.",
      avatar: avatar2,
      name: "Dr. Priya Natarajan",
      designation: "Director, Priya Dental Care",
    },
    {
      rating: 5,
      quote: "Professional SEO services with great support. Highly recommended for any business in Coimbatore.",
      avatar: avatar3,
      name: "Vikram Subramaniam",
      designation: "CEO, Subra Textiles",
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
        
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: "2rem" }}
        >
          What Our Clients Say
        </Typography>
      
      </Box>

      {/* Cards row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          maxWidth: "100%",
          mx: "auto",
          justifyContent:'space-evenly'
        }}
      >
        {testimonials.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 250px",
              maxWidth: 450,
              border: "1px solid #E5E5E5",
              borderRadius: "15px",
              p: 3,
            }}  >
<Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
     
                  <Avatar src={item.avatar} alt={item.name} sx={{ width: 74, height: 74 }} />
            {/* Stars */}
           <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap'}}>
             

            {/* Quote */}
            <Typography
              sx={{
                color: "#071B52",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                // fontStyle: "italic",
                mb: 1,
                minHeight: "80px",
                fontWeight:550
              }}
            >
              "{item.quote}"
            </Typography>

            {/* Author */}
          
              
             
               <Box sx={{display:'flex', flexDirection:'row', gap:3}}>
                <Box>
                 <Typography sx={{ fontWeight: 700, color: "#071B52", fontSize: "0.9rem" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: "#071B52", fontSize: "0.8rem", fontWeight:600 }}>
                  {item.designation}
                </Typography>

               </Box>
                <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={18}
                  color={i < item.rating ? "#FDB022" : "#E0E0E0"}
                />
              ))}
            </Box>
                </Box>
             
           </Box>

          </Box>
          </Box>
        ))}

     
      </Box>

    </Box>
  );
};

export default ClientReview;
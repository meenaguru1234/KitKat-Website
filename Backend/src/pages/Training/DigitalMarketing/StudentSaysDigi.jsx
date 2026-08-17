import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// Replace these with your own avatar image paths
import avatar1 from "../../../assets/Images/boyimg1.jpg";
import avatar2 from "../../../assets/Images/girlimg2.jpg";
import avatar3 from "../../../assets/Images/boyimg2.jpg";


const StudentSaysDigi = () => {

  const testimonials = [
    {
     
      quote: "The digital marketing course at KitKat is excellent! Trainers explain everything with real examples and live projects. I got placed as an SEO Executive.",
      avatar: avatar1,
      name: "Karthik S.",
      designation:  "SEO Executive, TCS",
    },
    {
   
      quote:  "Practical assignments and mock interviews helped me a lot. The placement team is very supportive throughout the course.",
      avatar: avatar2,
      name: "Priya Dharshini",
      designation: "Digital Marketing Executive, Zoho"
    },
    {
     
      quote: "I joined with zero knowledge. Now I can run ads, do SEO and handle social media campaigns confidently. Thank you KitKat!",
      avatar: avatar3,
      name: "Harish Kumar",
      designation: "Digital Marketer, Startup",
    },

  ];

  return (
    <Box sx={{ py: 0, px: 2, mb:2 }}>

      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "#06024d", fontSize: "1.7rem" }}
        >
          What Our Students Say
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
                color: "#031549",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                // fontStyle: "italic",
                mb: 1,
                minHeight: "80px",
                // fontWeight:550
              }}
            >
              
              <Typography sx={{fontSize:20, fontWeight:800}}>"</Typography>{item.quote}
            </Typography>

            {/* Author */}
          
              
             
               <Box sx={{display:'flex', flexDirection:'row', gap:3}}>
                <Box>
                 <Typography sx={{ fontWeight: 700, color: "#332bc5", fontSize: "0.9rem" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: "#031549", fontSize: "0.9rem", fontWeight:500 }}>
                  {item.designation}
                </Typography>

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

export default StudentSaysDigi
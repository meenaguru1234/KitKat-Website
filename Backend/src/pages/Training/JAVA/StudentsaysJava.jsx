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


const StudentSaysJava = () => {

  const testimonials = [
    {
     
      quote: "KitKat's Java training helped me build a strong foundation. The trainers are excellent and the placement support is amazing. I got placed in TCS!",
      avatar: avatar1,
      name: "Karthik S.",
      designation:  "Java Developer, TCS",
    },
    {
   
      quote:  "The course covers everything from Core Java to Spring Boot with hands-on projects. The mock interviews and doubt sessions really helped me a lot.",
      avatar: avatar2,
      name: "Priya Dharshini",
      designation: "Software Engineer, Infosys"
    },
    {
     
      quote: "Best Java institute in Coimbatore! Practical training, real-time projects and dedicated mentors made my learning journey very smooth.",
      avatar: avatar3,
      name: "Hariharan M",
      designation: "Software Developer, Zoho",
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

export default StudentSaysJava;
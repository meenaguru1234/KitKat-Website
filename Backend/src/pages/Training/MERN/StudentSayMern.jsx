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


const StudentSayMern = () => {

  const testimonials = [
    {
     
      quote: "The best full stack development course in Coimbatore! The mentor support and live projects helped me get placed as a Software Developer.",
      avatar: avatar1,
      name: "Karthik S.",
      designation:  "Software Developer, TCS",
    },
    {
   
      quote:  "I joined with zero coding knowledge. Now I'm confident in building full stack applications. Thank you KitKat!",
      avatar: avatar2,
      name: "Priya Dharshini",
      designation: "Full Stack Developer, Zoho"
    },
    {
     
      quote: "Excellent teaching, updated syllabus and great placement support. Highly recommanded!",
      avatar: avatar3,
      name: "Harish kumar",
      designation: "Software Engineer, Infosys",
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
          sx={{ fontWeight: 700, color: "#332bc5", fontSize: "2rem" }}
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

export default StudentSayMern;
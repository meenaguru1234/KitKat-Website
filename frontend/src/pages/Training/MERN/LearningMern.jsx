import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// Replace these with your own avatar image paths
import mern from "../../../assets/Images/mern.PNG";
import java from "../../../assets/Images/java.png";
import python from "../../../assets/Images/python.png";


const LearningMern = () => {

  const learning = [
    {
     
      title: "MERN Stack Development",
      avatar: mern,
      sub: "MongoDB, Express.js,",
      sub1: "React, Node.js",
      color:'#1e9304',
      bgcolor:'#cdf9c49c'
    },
    {
   
     title: "Java Full Stack Development",
      avatar: java,
      sub: "Core Java, Spring Boot, ",
      sub1: "Hybernate, MySQL",
       color:'#03767e',
      bgcolor:'#d7e9f39a'
    },
    {
     
      title: "Phython Full Stack Development",
      avatar: python,
      sub: "Python Django, Rest API,",
      sub1: " MySQL, React",
       color:'#ee5c0d',
      bgcolor:'#edd2c3b1'
    },

  ];

  return (
    <Box sx={{ py: 1, px: 2 }}>

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
          sx={{ fontWeight: 700, color: "#060256", fontSize: "1.5rem", textTransform:'uppercase' }}
        >
         Choose Your Learning Track
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
        {learning.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 250px",
              maxWidth: 450,
              border: `1px solid ${item.color}`,
              bgcolor:item.bgcolor,
              borderRadius: "15px",
              p: 3,
            }}  >
<Box sx={{ display: "flex", alignItems: "center", gap: 5, }}>
     
                  <Avatar src={item.avatar} alt={item.name} sx={{ width: 85, height: 85 }} />
            {/* Stars */}
           <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap'}}>
             

            {/* Quote */}
            <Typography sx={{color: item.color, fontSize: "1.7rem", lineHeight: 1.3,  mb: 1, minHeight: "80px", }}  >
            { item.title}
            </Typography>
             
                 <Typography sx={{ fontWeight:500, color: "#060341", fontSize: "1.1rem" }}>
                  {item.sub}
                </Typography>
                 <Typography sx={{ fontWeight:500, color: "#060341", fontSize: "1.1rem" }}>
                  {item.sub1}
                </Typography>
              
                

              
             
           </Box>

          </Box>
          </Box>
        ))}

     
      </Box>

    </Box>
  );
};

export default LearningMern;
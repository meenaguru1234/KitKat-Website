import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import html from "../../../assets/Images/html.png"
import css from "../../../assets/Images/css.jpg"
import js from "../../../assets/Images/js.png"
import react from "../../../assets/Images/ReactLogo.png"
import node from "../../../assets/Images/nodejs.png"
import express from "../../../assets/Images/express.png"
import mongodb from "../../../assets/Images/mongodb.png"
import github from "../../../assets/Images/github.jpg"
import bootstrap from "../../../assets/Images/bootstrap.jpg"
import restapi from "../../../assets/Images/api.png"



const TechnologyMern = () => {

    const techArray = [
      { img: html, name: "HTML"},
      { img: css, name: "CSS"},
      { img: js, name: "JavaScript"},
      { img: react, name: "React"},
      { img: node, name: "Node.js"},
      { img: express, name: "Express.js"},
      { img: mongodb, name: "MongoDB"},
      { img: github, name: "GitHub"},
      { img: bootstrap, name: "Bootstrap"},
      { img: restapi, name: "Rest API"},


   
];



  return (
    <>
       <Box sx={{ py: 6, px: 2 }}>

      {/* Heading */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 5, flexWrap: "wrap", textAlign: "center" }}>
        
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1rem", md: "1.5rem" } , textTransform:'uppercase'}}>
          Technologies You Will Master
        </Typography>
      </Box>

      {/* Card */}
      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "15px",
          p: { xs: 3, md: 5 },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(10, 1fr)",
            },
            rowGap: 4,
            columnGap: 2,
          }}
        >
          {techArray.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  height: 50,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#071B52",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>

       
      </Box>

    </Box>
    </>
  );
};


export default TechnologyMern
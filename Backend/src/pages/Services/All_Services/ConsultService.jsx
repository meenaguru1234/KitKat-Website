import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";

const ConsultService = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#0B2E6B",
    color: "#fff",
    py:2,
      width: "90%",
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      mx:10
      
  }}>

  <Box
    sx={{
      maxWidth: "1400px",
    //   mx: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
     
    //   border:'1px solid white'
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "left",
        gap: 3,
        minWidth:'500px',
        // justifyContent:'space-around',
        flexWrap:'wrap',
      gap: 4,
      flex:1,
    //    width:'50%', 

        //   border:'1px solid white',
// 
      }}
    >
     


      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
        fontWeight: 600,
        mb: 1,
        whiteSpace: "nowrap",
          }}
        >
       Ready to Start Your Project?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(255,255,255,.8)",
        fontSize: "1rem",
        // lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
         Let's build something great together. Get a free consultation today!
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 2, 
    width: "500px",
    flexWrap: "wrap",}}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#f9701b",
          color:'white',
          px: 4,
          py: 1.4,
          textTransform:'uppercase',
          borderRadius: "8px",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#52b1f0",
            color:'white'
          },
        }}
      >
        Get Free Consultation
      </Button>
          <Button
        variant="contained"
        sx={{
          bgcolor: "#0B2E6B",
          color:'white',
          px: 4,
          py: 1.4,
          border:'1px solid white',
          textTransform:'uppercase',
          borderRadius: "8px",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#52b1f0",
            color:'white'
          },
        }}
      >
        Contact Us
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default ConsultService
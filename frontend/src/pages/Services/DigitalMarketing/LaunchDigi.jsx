import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { IoCall } from "react-icons/io5";

const LaunchDigi = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#0B2E6B",
    color: "#fff",
    py:2,
      maxWidth: "95%",
      borderRadius:3,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      mx:'auto',
      my:5,
       flexDirection:{xs: "column", md: "row"},
      
  }}>

  <Box
    sx={{
      maxWidth: "1200px",
      mx: "auto",
      display: "flex",
      flexDirection:{xs: "column", md: "row"},
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 4,
      px:{xs:3}
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        minWidth:'800px',
        flexWrap:'wrap',
      
      flex:1
      }}
    >
     
      <Box
  sx={{
    width: {xs:50, md:70},
    height: {xs:50, md:70},
    border: "2px solid white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    
  }}
>
  <RocketLaunchIcon
    sx={{
      fontSize: 38,
      color: "#fff",
    }}
  />
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.4rem", md: "1.7rem" },
        fontWeight: 600,
        mb: 1,
        whiteSpace: "nowrap",
          }}
        >
        Not sure which channel deserves your budget first?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(255,255,255,.8)",
        fontSize: "1rem",
        // lineHeight: 1.7,
        maxWidth: 590,
          }}
        >
          Talk to our digital marketing experts and get a tailored strategy within 24 hours
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "orange",
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
        Talk to our Experts
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default LaunchDigi
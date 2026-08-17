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
      // maxWidth: "100 %",
      
  }}>

  <Box
    sx={{
      maxWidth: "1200px",
      mx: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 4,
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        minWidth:'800px',
        // justifyContent:'space-around',
        flexWrap:'wrap',
      gap: 4,
      flex:1

        //   border:'1px solid white',

      }}
    >
     
      <Box
  sx={{
    width: 70,
    height: 70,
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
            fontSize: { xs: "1.5rem", md: "2rem" },
        fontWeight: 600,
        mb: 1,
        whiteSpace: "nowrap",
          }}
        >
      Ready to Start Your Digital Marketing Career?
        </Typography>

        <Typography
          sx={{
         
              color: "white",
        fontSize: "1.1rem",
        // lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
          Book your <Box component='span' sx={{color:'#f57e07'}}>free demo class now </Box>and take the first step towards a high-paying digital marketing career.
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#f2810f",
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
        Book Free Demo Class
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default LaunchDigi
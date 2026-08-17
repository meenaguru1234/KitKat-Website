import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { IoCall } from "react-icons/io5";

const LaunchSms = () => {
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
        Want to see how fast our SMS gateway really is?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(255,255,255,.8)",
        fontSize: "1rem",
        // lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
          Request a free demo account and send your first test campaign today
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color:'#0B2E6B',
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
        Get Free Demo
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default LaunchSms
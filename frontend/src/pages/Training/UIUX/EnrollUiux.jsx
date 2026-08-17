import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import giftboximg from "../../../assets/Images/giftbox.png"
import EastIcon from '@mui/icons-material/East';

const EnrollUiux = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#330b6b",
    color: "#fff",
          maxWidth: "100%",
          py:{xs:3, md:0}
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
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        minWidth:'800px',
        flexDirection:{xs: "row", md: "row"},
        flexWrap:'wrap',   p:2,
      flex:1,
      mx:'auto'

      }}
    >
     
      <Box
  sx={{
    width: 70,
    height: 70,
    border: "2px solid #330b6b",
    // borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  <Box component="img" src={giftboximg} sx={{width: {xs:"50%",md:"100%"},height: {xs:"50%",md:"100%"},objectFit: "contain",display: "block", }}/>
  
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
        fontWeight: 600,
        whiteSpace: "nowrap",
          }}
        >
       Book a Free Demo Class Today and Get a Free Figma Resources Pack!
        </Typography>

       
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" },  }}>
      <Button endIcon={<EastIcon/>}
       
        sx={{
          bgcolor: "#f97604",
          color:'white',
          px: 4,
          py: 1.4,
          textTransform:'uppercase',
          borderRadius: "8px",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#52b1f0",
            color:'white',
            
          },
        }}
      >
        Enroll Now
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default EnrollUiux
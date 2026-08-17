import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EastIcon from '@mui/icons-material/East';

const BannerMobapp = () => {
  return (
    <>
         
 <Box sx={{display:'flex', justifyContent:'center', maxWidth: "100%", borderRadius:5,mt:2,  }}>
     
       <Box
  sx={{
    bgcolor: "#022da1",
    color: "#fff",
          py:{xs:3, md:0}, 
          borderRadius:0,
          width:1600,
          px:5
         
      }}>

  <Box
    sx={{
    //   maxWidth: "1200px",
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
        flexDirection:{xs: "column", md: "row"},
        flexWrap:'wrap',   p:2,
      flex:1,
      mx:'auto'

      }}
    >
     
      <Box
  sx={{
    width:  80,
    height: 80,
    border: "2px solid white",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  {/* <Box component="img" src={giftboximg} sx={{width: {xs:"50%",md:"100%"},height: {xs:"50%",md:"100%"},objectFit: "contain",display: "block", }}/> */}
  <RocketLaunchIcon
  sx={{width: {xs:"50%",md:"70%"},height: {xs:"50%",md:"100%"},objectFit: "contain",display: "block", }}
  />
  
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
        fontWeight: 600,
        whiteSpace: "nowrap",
          }}
        >
   Book a Free Demo Class Today and Start Your App Development Journey!
        </Typography>

        {/* <Typography>Book your <Box component='span' sx={{color:'orange'}}>free demo class now</Box> and take
        the first step towards a high-paying IT Career.</Typography> */}

       
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
 </Box>
</>
  )
}

export default BannerMobapp
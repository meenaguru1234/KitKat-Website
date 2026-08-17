import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const ReadyLaunch = () => {
  return (
    <>
   <Box sx={{display:'flex', justifyContent:'center'}}>
     <Box
  sx={{
    bgcolor: "#0f4cf5",
    color: "#fff",
    // py: 1,
    px: { xs: 3, md: 6 },
      maxWidth: "1300px",
      mx:7,
      borderRadius:5,
            
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
      flex:1,

          // border:'1px solid red',
          justifyContent:{xs:'center', md:'left'}

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
            fontSize: { xs: "2rem", md: "2.5rem" },
        fontWeight: 700,
        mb: 1,
        whiteSpace: "nowrap",
          // px:{xs:3, md:0}
          }}
        >
         Have an App Idea?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(255,255,255,.8)",
        fontSize: "1.05rem",
        lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
          Let's build something amazing together! <br />
          Get a free consultation and project estimate within
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "center", md: "right" } , display:'flex', flexDirection:'column', 
  justifyContent:'center', px:{xs:30, md:0}}}>
      <Button
        variant="contained"
        endIcon={<FaChevronRight />}
        sx={{
          bgcolor: "white",
          // px:{xs:4,md:0},
          color:'blue',
          px: 4,
          py: 1.4,
          borderRadius: "8px",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#D32F2F",
          },
        }}
      >
        Get Free Quote Now
      </Button>

      <Typography
        sx={{
          mt: 2,
          color: "white",
        }}
      >
       <strong>  <IoCall size={25} /> +91 70108 16299</strong>
      </Typography>
    </Box>
  </Box> 
</Box>
   </Box>
</>
  )
}

export default ReadyLaunch
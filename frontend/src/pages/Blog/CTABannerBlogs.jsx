import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';


const CTABannerBlogs = () => {
  return (
    <>
   <Box sx={{
    mt:2,mb:-4,
      width: '100%',

   }}>
     <Box
  sx={{
    bgcolor: "#0B2E6B",
    color: "#fff",
    px: { xs: 3, md: 6 },
      
      py:2
            
  }}>

  <Box
    sx={{
    //   maxWidth: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: 4,

             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // gap: 3,
        minWidth:'800px',
        justifyContent:'center',
        flexWrap:'wrap',
      gap: 4,
      flex:1,

        //   border:'1px solid white',

      }}
    >
        <Box
  sx={{
height:80, width:80, borderRadius:10,border:'1px solid white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  <NearMeOutlinedIcon
    sx={{
      fontSize: {xs:48, md:58},
      height:50,
      color: "white",
    }}
  />
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "1.5rem" },
        fontWeight: 700,
        mb: 1,
        whiteSpace: "nowrap",
      color: "white",

          }}
        >
       Don't see a role that fits?
        </Typography>

        <Typography
          sx={{
         
              color: "white",
        fontSize: "1rem",
        lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
          Send us your resume at careers@kitkatsoftwaretechnologies.com.
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "center", md: "right" },  mx:{xs:10, md:0} }}>
      <Button
        variant="contained"
        // endIcon={<FaChevronRight />}
        sx={{
          bgcolor: "white",
          color:'#0B2E6B',
          textTransform:'uppercase',
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
      Send Your Resume
      </Button>

    </Box>
  </Box> 
</Box>
   </Box>
</>
  )
}

export default CTABannerBlogs
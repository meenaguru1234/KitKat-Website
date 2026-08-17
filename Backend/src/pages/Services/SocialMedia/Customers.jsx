import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';

const Customers = () => {
  return (
    <>
   <Box sx={{display:'flex', justifyContent:'center', 
      maxWidth: "1800px",

   }}>
     <Box
  sx={{
    bgcolor: "#c9e7e7",
    color: "#fff",
    // py: 1,
    px: { xs: 3, md: 6 },
      maxWidth: "1800px",
      mx:7,
      borderRadius:5,
      py:2
            
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
       justifyContent:'center',
          // border:'1px solid white',

      }}
    >
        <Box
  sx={{
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  <ContentPasteSearchOutlinedIcon
    sx={{
      fontSize: {xs:48, md:58},
      height:50,
      color: "rgba(2, 4, 43, 0.8)",
    }}
  />
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
        fontWeight: 700,
        mb: 1,
        whiteSpace: "nowrap",
      color: "rgba(2, 4, 43, 0.8)",

          }}
        >
      Ready to turn followers into paying customers?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(2, 4, 43, 0.8)",
        fontSize: "1rem",
        lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
           Book a free social media audit with our Coimbatore strategists today.
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "center", md: "right" }, mx:{xs:30, md:0} }}>
      <Button
        variant="contained"
        endIcon={<FaChevronRight />}
        sx={{
          bgcolor: "blue",
          color:'white',
          px: 4,
          py: 1.4,
          borderRadius: "8px",
          fontWeight: 700,
          textTransform: "none",
          fontSize:'18px',
          "&:hover": {
            bgcolor: "#D32F2F",
          },
        }}
      >
       Get Your Free Audit
      </Button>

    </Box>
  </Box> 
</Box>
   </Box>
</>
  )
}

export default Customers
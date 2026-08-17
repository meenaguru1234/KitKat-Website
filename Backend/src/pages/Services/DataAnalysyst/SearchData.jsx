import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { IoCall } from "react-icons/io5";

const SearchData = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#d0e5e990",
    color: "#073b5e",
    py:2,
      maxWidth: 1400,
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
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        minWidth:'800px',
        flexWrap:'wrap',
     
      flex:1
      }}
    >
     
      <Box
  sx={{
    width: 70,
    height: 70,
    
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  <ContentPasteSearchIcon
    sx={{
      fontSize: 68,
      color: "#073b5e",
    }}
  />
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.4rem" },
        fontWeight: 600,
        mb: 1,
        whiteSpace: "nowrap",
          }}
        >
        See how we helped a Coimbatore manufacturer cut waste by 18%.
        </Typography>

        <Typography
          sx={{
         
              color: "#073b5e",
        fontSize: "1rem",
        // lineHeight: 1.7,
        maxWidth: 590,
          }}
        >
          View our data analytics case studies here
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#03273e",
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
       View Case Studies
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default SearchData
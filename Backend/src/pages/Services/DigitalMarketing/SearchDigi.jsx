import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import { IoCall } from "react-icons/io5";

const SearchDigi = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#0B2E6B",
    color: "#fff",
    py:2,
      maxWidth: "100%",
      
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
        flexDirection:{xs: "column", md: "row"},
        flexWrap:'wrap',
      gap: 4,
      flex:1,
      mx:'auto'

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
  <SearchIcon
    sx={{
      fontSize: 38,
      color: "#fff",
    }}
  />
</Box>

      <Box sx={{textAlign:{xs:'center'}}}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
        fontWeight: 600,
        mb: 1,
        whiteSpace: "nowrap",
          }}
        >
        Want to know exactly where your marketing budget is leaking?
        </Typography>

        <Typography
          sx={{
         
              color: "rgba(255,255,255,.8)",
        fontSize: "1rem",
        // lineHeight: 1.7,
        maxWidth: 520,
          }}
        >
          Request a free digital marketing audit and see the gaps yourself.
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
        Get my Free Audit
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default SearchDigi
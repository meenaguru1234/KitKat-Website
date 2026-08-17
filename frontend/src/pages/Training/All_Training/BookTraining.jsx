import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BookTraining = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#0B2E6B",
    color: "#fff",
    py:2,
      width: "93%",
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      mx:'auto',
      borderRadius:3
      
  }}>

  <Box
    sx={{
      maxWidth: "1300px",
    //   mx: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
     
    //   border:'1px solid white'
             }}  >

    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "left",
        gap: 3,
        minWidth:'700px',
        // justifyContent:'space-around',
        flexWrap:'wrap',
      gap: 4,
      flex:1,
    //    width:'50%', 

        //   border:'1px solid white',
// 
      }}
    >
     


      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "1.4rem" },
        fontWeight: 550,
        mb: 1,
        whiteSpace: "nowrap",gap:3,
          }}
        >
   <CalendarMonthIcon/>  Book a Free Demo Class at Coimbatore's Most Practical Software Training Institute
        </Typography>

      
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 2, 
    width: "500px",
    flexWrap: "wrap",}}>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#f9701b",
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
      Book Now
      </Button>
         

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default BookTraining
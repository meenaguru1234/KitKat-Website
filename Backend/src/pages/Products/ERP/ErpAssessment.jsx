import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import EastIcon from '@mui/icons-material/East';

const ErpAssessment = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "white",
    color: "#081456",
          maxWidth: "90%",
          py:{xs:3, md:0},
          border:'1px solid #0b6b3d',
          mx:'auto',
           borderRadius:5
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
    // border: "2px solid #330b6b",
    // borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  }}
>
<EditCalendarOutlinedIcon sx={{fontSize:60, color:'#0b6b3d'}}/>
  
</Box>

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
        fontWeight: 600,
        whiteSpace: "nowrap",
          }}
        >
      Request a Free ERP Needs Assessment
        </Typography>

        <Typography>Let us analyse your requirements and suggest the right ERP solution for your business.</Typography>

       
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" },  }}>
      <Button endIcon={<EastIcon/>}
       
        sx={{
          bgcolor: "#218b3d",
          color:'white',
          px: 4,
          py: 1.4,
          textTransform:'none',
          borderRadius: "8px",
          fontWeight: 700,
          "&:hover": {
            bgcolor: "#52b1f0",
            color:'white',
            
          },
        }}
      >
        Request Assessment
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default ErpAssessment
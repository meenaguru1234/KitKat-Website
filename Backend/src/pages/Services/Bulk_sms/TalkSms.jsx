import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import SmsIcon from '@mui/icons-material/Sms';
import { IoCall } from "react-icons/io5";

const TalkSms = () => {
  return (
    <>
    <Box  sx={{bgcolor: "#0B2E6B",  color: "#fff",  py:2, maxWidth: "100%",}}>
    <Box  sx={{ maxWidth: "1200px", mx: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap",
                gap: 2, }}  >

    {/* Left */}
    <Box  sx={{  display: "flex",  alignItems: "center",   gap: 3,  minWidth:'800px', flexWrap:'wrap', flex:1  }}  >
     
      <Box  sx={{ width: 80,  height: 70,   border: "2px solid white",   borderRadius: "50%",   display: "flex",  justifyContent: "center",
                alignItems: "center",   flexShrink: 0, }}>
            <SmsIcon   sx={{   fontSize: 38,  color: "#fff",    }}  />
      </Box>

      <Box>
        <Typography sx={{  fontSize: { xs: "1rem", md: "1.5rem" },  fontWeight: 600,   mb: 1,  whiteSpace: "nowrap",  }}  >
        Not sure which SMS route suits your business?
        </Typography>

        <Typography sx={{ color: "rgba(255,255,255,.8)", fontSize: "1rem",   }}  >
         Talk to our messaging specialists and get a tailored recommandation within 24hours.
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button   variant="contained" sx={{  bgcolor: "white", color:'#0B2E6B',    px: 2,  py: 1.4,textTransform:'uppercase',
                                    borderRadius: "8px",   fontWeight: 700,
                                     "&:hover": {   bgcolor: "#52b1f0",   color:'white'  }, }}  >
        Talk to Expert
      </Button>

      
    </Box>
  </Box> 
</Box>
</>
  )
}

export default TalkSms
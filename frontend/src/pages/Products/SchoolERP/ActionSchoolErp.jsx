import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {  FaArrowRight } from "react-icons/fa";
import Clipart from "../../../assets/Images/product/schoolerp/bannerimg-removebg-preview.png"
import { PiPhoneCallDuotone } from "react-icons/pi";

const ActionSchoolErp = () => {
  return (
    <Box
      sx={{
        bgcolor: "#124bcf",
        borderRadius: "15px",
        maxWidth: "1300px",
        mx: "auto",
        my: 1,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 4,
        }}
      >
        {/* Left icon + text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flex: "2 1 500px",
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.08)",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Box component="img"  src={Clipart}  alt={Clipart}   size={26} color="#FD6A02"  
            sx={{height: 180, width: "200", objectFit: "fit",paddingLeft:15}} />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.4rem" },
                lineHeight: 1.3,
                mb: 1.5,
                pl:10
              }}
            >
             See Kitkat School ERP Software In Action
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                pl:10

              }}
            >
              Experience how our ERP can transform your school operations, save time and improve communication. 
              Book a free live demo with our experts today.
            </Typography>

          </Box>
        </Box>

        {/* Right CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            flex: "1 1 260px",
          }}
        >
          <Button
            variant="contained"
            endIcon={<FaArrowRight size={14} />}
            sx={{
              bgcolor: "#FD6A02",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              "&:hover": { bgcolor: "#e35f00" },
            }}
          >
           Schedule My Demo
          </Button>

        
          
        </Box>
      </Box>
    </Box>
  );
};

export default ActionSchoolErp;
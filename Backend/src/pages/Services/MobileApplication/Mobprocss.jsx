import React from 'react'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { HiUsers, HiDocumentText,   HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiPencilAlt, HiCode } from "react-icons/hi";
import { HiOutlineBugAnt } from "react-icons/hi2";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Mobprocss = () => {

      const processSteps = [
    { icon: HiUsers, label: "Discovery & Planning", color: "#1976d2", desc: "Understanding your idea, business goals & target users." },
    { icon: HiDocumentText, label: "Planning & Strategy", color: "#00b894", desc:"Research, Competitor analysis and roadmap planning." },
    { icon: HiPencilAlt, label: "UI/UX Design", color: "#8e44ad" , desc:"Creating wireframes & beautiful designs for best user experience."},
    { icon: HiCode, label: "Development", color: "#e67e22", desc:"Agile development with clean code and regular progress updates." },
    { icon: HiOutlineBugAnt, label: "Testing", color: "#e91e63" , desc:"Rigorous testing process devices to ensure perfect performance."},
    { icon: HiOutlineRocketLaunch, label: "Launch & Support", color: "#00897b", desc:" App store deployment and continuous post-launch support." },
  ];


  return (
    <>


<Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>
   <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, color: "#071B52", fontSize: { xs: "1.6rem", md: "2.2rem" } }}
        >
          Our App Development Process
        </Typography>
        <Typography sx={{ color: "#5a6178", mt: 1, fontSize: 16 }}>
          A transparent process that ensures quality at every step.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: { xs: 3, md: 1 },
        }}
      >
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === processSteps.length - 1;

          return (
            <React.Fragment key={index}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 140 }}>
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    bgcolor: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 2,
                  }}
                >
                  <Icon size={32} color="#fff" />
                </Box>
                <Typography sx={{ mt: 2, fontWeight: 700, color: "#071B52", textAlign: "center" , lineHeight:1.5, mb:2}}>
                  {index + 1}. {step.label} 
                </Typography>
                 <Typography sx={{ mt:0.5, fontWeight: 400, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
          {step.desc}
        </Typography>
              </Box>

              {!isLast && (
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", mt: 4 }}>
                  <ArrowForwardIcon sx={{ color: "#c0c0c0", fontSize: 30 }} />
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </Box>


</Box>


    </>
  )
}

export default Mobprocss
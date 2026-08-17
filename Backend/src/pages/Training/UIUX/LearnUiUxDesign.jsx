import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { LuFileSearch2 } from "react-icons/lu";
import { SiRobotframework } from "react-icons/si";
import { SiVisualparadigm } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { PiMicrosoftWordLogoThin } from "react-icons/pi";
import { GrIteration } from "react-icons/gr";
import { MdOutlineCollections } from "react-icons/md";
import realprojectimg from "../../../assets/Images/realproject.jpg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const LearUiUxDesign = () => {

    const benefits = [
        {
            icon: LuFileSearch2,
            title: "User Research & Persona",
        },
        {
           icon: SiRobotframework,
            title: "Wireframing & Information Architecture",
        },
        {
           icon: SiVisualparadigm,
            title: "UI Design Principles & Visual Design",
        },
        {
            icon: FaFigma,
            title: "Figma - Components, Auto Layout & Design Systems",
        },
        {
            icon: PiMicrosoftWordLogoThin,
            title: "Prototyping & Micro Interactions",
        },
        {
              icon: GrIteration,
            title: "Useability Testing & Iteration",
        },
          {
              icon: MdOutlineCollections,
            title: "Design Handoff  & Developer  Collaboration",
        }
    ];

    const impact = [
      {
            number: "01",
            title: "Design Thinking & User Research",
        },
        {
           number: "02",
            title: "Wireframing & Information Architecture",
        },
        {
           number: "03",
            title: "Figma Basics to Advanced",
        },
        {
            number: "04",
            title: "UI Design & Visual Design",
        },
        {
            number: "05",
            title: "Interactive Prototyping",
        },
        {
              number: "06",
            title: "Usability Testing",
        },
         {
            number: "07",
            title: "Design Handoff & Collaboration",
        },
        {
              number: "08",
            title: "Capstone Project - End to End Design",
        }
    ];

    return (
        <Box sx={{ py: 1, px: { xs: 2, md: 6 }, }}>
            <Grid container spacing={4} sx={{border: "1px solid #E5E7EB", borderRadius:10, p:3 }}>

                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 4}} sx={{}}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" } }}>
                        What you will Learn
                    </Typography>

                    <Paper elevation={0} sx={{  borderRadius: "16px", p: { xs: 3, md: 4 } }}>
                        {benefits.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        mb: index !== benefits.length - 1 ? 2 : 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                      
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon size={29} color='#0b3bc0' sx={{  fontSize: "2rem" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: "1rem" }}>
                                            {item.title}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                            );
                        })}
                    </Paper>
                </Grid>

                {/* RIGHT: Our Impact in Numbers */}
                <Grid size={{ xs: 12, md: 4 }} sx={{  borderRadius:5, px:3}}>
                   

                   <Box size={{ xs: 12}}  sx={{position: "relative",width: "100%",height: "400px",overflow: "hidden", minHeight:'200px'  }}>
                      < Box component="img" src={realprojectimg} sx={{width: "100%",height: "400px",objectFit: "cover",
                        display: "block",borderRadius:5 }}/>

                      <Paper elevation={10} sx={{
                                 position: "absolute", bottom: "0%", left: "0%",
                                 p: 1.5, borderRadius: "12px", minWidth: "200px", zIndex: 2, bgcolor:'#57575b'
                             }}>
                                
                                    <Box sx={{ display: "flex", flexDirection:'row', alignItems: "left", color: "#eee" , gap:2, }}>
                                        <Typography><CheckCircleIcon/></Typography>
                                         <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}> Works on Real Projects <br />for Live Clients</Typography>
                                          </Box>
                                 

                      </Paper>
                                 
                   </Box>
                </Grid>



                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" } }}>
                       UI UX Design course Curriculum
                    </Typography>

                    <Paper elevation={0} sx={{  borderRadius: "16px", p: { xs: 3, md: 4 } }}>
                        {impact.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        mb: index !== impact.length - 1 ? 2 : 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: "50%",
                                            bgcolor: "#b58fe8",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            gap:2
                                        }}
                                    >
                                       <Typography sx={{ fontWeight: 500, color: "#260454", fontSize: "1rem" }}>
                                            {item.number}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: "1rem" }}>
                                            {item.title}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                            );
                        })}
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
};

export default LearUiUxDesign;
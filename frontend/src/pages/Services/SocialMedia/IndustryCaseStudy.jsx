import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';

import nightdinnerimg from "../../../assets/Images/nightdinnerimg.jpg"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';


const IndustryCaseStudy = () => {

    const benefits = [
        {
            icon: ShoppingCartOutlinedIcon,
            title: "Retail & E-commerce",
        },
        {
           icon: LocalHospitalOutlinedIcon,
            title: "Healthcare & Hospitals",
        },
        {
           icon: SchoolOutlinedIcon,
            title: "Education & Training",
        },
        {
            icon: LocalDiningOutlinedIcon,
            title: "Restaurants & Food",
        },
        {
            icon: BusinessOutlinedIcon,
            title: "Real Estate",
        },
        {
              icon: FactoryOutlinedIcon,
            title: "Manufacturing",
        },
          {
            icon: CheckroomOutlinedIcon,
            title: "Fashion & Lifestyle",
        },
        {
              icon: FlightTakeoffOutlinedIcon,
            title: "Travel & Tourism",
        }
    ];

   

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>

                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 6 }} sx={{}}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" } }}>
                       Industries We Serve
                    </Typography>

                    <Paper elevation={0}  sx={{   border: "1px solid #E5E7EB",borderRadius: "16px", p: 3, mt: 2, }}>
                      <Grid container spacing={3}>

                          {benefits.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Grid size={{xs:6, md:3}}  key={index} >
                                    <Box
                                   
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection:'column',
                                        justifyContent:'center',
                                        gap: 2,
                                        borderRight: index !== benefits.length - 1 ? "1px solid #a3bef4" : "none",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            // width: 20,
                                            // height: 20,
                                            // borderRadius: "50%",
                                            // bgcolor: "#08277f",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon sx={{ color: "#1752f2", fontSize: "3rem" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: "0.7rem" }}>
                                            {item.title}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                                </Grid>
                            );
                        })}

                      </Grid>
                    </Paper>
                </Grid>

                {/* RIGHT: case study */}
                <Grid container size={{ xs: 12, md: 6 }} sx={{ border:'1px solid #E5E7EB', borderRadius:5, px:3, bgcolor:'#0a1a4a'}}>

                  
                         {/* <Grid  size={{xs:12, md:6}} sx={{border:'1px solid green'}}> */}

                          <Grid size={{ xs: 12, md: 6 }}>
    <Box sx={{ py: 2, px: 3, height: '100%', color: '#fff', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', gap: 2 }}>
      <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Case Study: Coimbatore Restaurant</Typography>
      <Typography sx={{ fontSize: '0.85rem', opacity: 0.9 }}>
        Through targeted Instagram & Facebook campaigns, engaging reels and weekend offers,
        we helped a popular restaurant increase weekend footfall by <b>120%</b> and online orders by <b>85%</b> in <b>3 months</b>.
      </Typography>
      <Box
        sx={{ bgcolor: '#fff',  color: '#0a1a4a',fontWeight: 600,  width: 'fit-content',  px: 2.5,   py: 1,
          borderRadius: '30px', display: 'flex',   alignItems: 'center', gap: 1, cursor: 'pointer',  }}                                                                                       >
        View More Case Studies →
      </Box>
    </Box>
  </Grid>

  <Grid size={{ xs: 12, md: 6 }}>
    <Box sx={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Box component="img" src={nightdinnerimg} sx={{ width: "100%", height: "100%", objectFit: "fill", display: "block" }} />
      <Box
        sx={{
          position: "absolute", top: 0, left: 0,
          width: { xs: "100%", md: "180px" },
          height: { xs: "100px", md: "100%" },
          background: {
            xs: "linear-gradient(to bottom, #0a1a4a 0%, #0a1a4a 10%, rgba(10,26,74,0.8) 30%, transparent 100%)",
            md: "linear-gradient(to right, #0a1a4a 0%, #0a1a4a 10%, rgba(10,26,74,0.8) 30%, transparent 100%)",
          },
          pointerEvents: "none",
        }}
      />
    </Box>
  </Grid>

                    </Grid>
                   
                {/* </Grid> */}

            </Grid>
        </Box>
    );
};

export default IndustryCaseStudy;
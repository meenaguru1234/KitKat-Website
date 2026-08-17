import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NearMeIcon from '@mui/icons-material/NearMe';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CodeIcon from '@mui/icons-material/Code';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SmsIcon from '@mui/icons-material/Sms';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import StarIcon from "@mui/icons-material/Star";
import smshero from "../../../assets/Images/smghero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { IoCall } from "react-icons/io5";


const SmsHero = () => {
  const trainingArray = [
    {
      icon: NearMeIcon,
     
      text: "Instant",
       text1: "Delivery",
      color: "#055DD8",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: GppGoodIcon,
      text: "TRAI & DLT", 
      text1: "Compliant",
      color: "#055DD8",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: CodeIcon,
      text: "Easy API ",
       text1: "Integration",
      color: "#055DD8",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: HeadsetMicIcon,
      text: "Local Support",
       text1: "in Coimbatore",
      color: "#055DD8",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

  return (
     <Box sx={{position:"relative" , bgcolor:'rgba(255,255,255,0.8) '}}>
            <Grid container sx={{ display:'flex', justifyContent:'center', flexwra:'wrap'}}>
                <Grid size={{xs:12,md:6}} sx={{}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"3rem"},fontWeight:"700",color:'#0B2E6B'}}>Bulk SMS Services <Box component={'span'} sx={{color:"#da5f07", display:'block'}}>In Coimbatore</Box></Typography>
                                <Typography sx={{color:'#06214f', fontSize:{lg:"1.3rem"},fontWeight:"700",}} >Instant Delivery. Higher Reach. Better Engagement.</Typography>
                                <Typography sx={{color:'#0B2E6B'}} >TRAI-Compliant Bulk SMS Gateway for Transactional, Promotional <br />and OTP SMS, Trusted by  1000+ Business in Coimbatore</Typography>

                            </Box>
                            <Grid container spacing={1}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid  size={{ xs: item.xs, lg: 2 }}>
                                                <Box sx={{display:"flex", flexDirection:'column',gap:1,alignItems:"center",px:{sm:1.5,md:0},
                                               
                                            }}>
                                                  
                                                   <Box  sx={{ width: 70, height: 70,border:'1px solid #054aaa',  borderRadius: "50%",  bgcolor: item.bgcolor,  display: "flex",  
                                                   alignItems: "center",  justifyContent: "center",   }}>
                                                    <Icon sx={{  color: "#054aaa",  fontSize: 36, }}  />
                                                    </Box>                                                  
                                                   
                                                   
                                                   
                                                    <Box sx={{display:"flex",flexDirection:"column", textAlign:'center'}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"}, color:'#030f22'}}>{item.text}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"}, color:'#030f22'}}>{item.text1}</Typography>

                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box   sx={{ display: "flex", gap: 3, flexDirection: "row", flexWrap: "wrap",  mt: 3,  }}>
                                <CommonButton sx={{fontSize:"1rem", bgcolor:'#0a3170', color:'white',fontWeight:600, textTransform:'uppercase', px:3, py:2}}>Request a Free Demo</CommonButton>
                                <CommonButton  sx={{fontSize:"1rem",fontWeight:600, width:'200px', color:'#0B2E6B', border:'2px solid #1F64D8', textTransform:'uppercase', px:3, py:2}}>View Pricing </CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{position: "relative",width: "100%",height: 570,overflow: "hidden", }}>
                      
                        <Box component="img" src={smshero} sx={{width: "100%",height: "100%",objectFit: "fill",display: "block", }}/>

                        <Paper  sx={{
                                    position: "absolute", bottom: "14%", right: "25%",
                                    p: 1.5, borderRadius: "12px", width:'50%', height:'20%'}}>
                              
                                      <Box sx={{display:'flex', justifyContent:'center', flexDirection:'row', gap:3}}>
                                        <Typography sx={{width:40, height:35, borderRadius:5,bgcolor:'#4e85e6', display:'flex', justifyContent:'center',py:1, color:'white'}}><SmsIcon/></Typography>
                                        <Typography sx={{color:'#02183f'}}>Your OTP is 123456. <br />Do not share it with anyone. <br />-Your Company</Typography>
                                       
                                      </Box>
                                       <Typography sx={{display:'flex', justifyContent:'end'}}>Now</Typography>
               

                                </Paper>

       {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, rgba(255,255,255,0.8)  0%, rgba(255,255,255,0.8)  10%, rgba(255,255,255,0.8) 20%, transparent 100%)",
                            md: "linear-gradient(to right, rgba(255,255,255,0.8)  0%, rgba(255,255,255,0.8)  10%, rgba(255,255,255,0.8) 20%, transparent 100%)",
                            },
                            pointerEvents: "none",
                        }}
                        />

                    </Box>
                </Grid>
            </Grid>

                <Box
              sx={{
                bgcolor: "#0B2E6B",
                color: "#fff",
                py:2, 
                  // maxWidth: "100 %",
                  
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
                  flex:1
            
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
              <RocketLaunchIcon
                sx={{
                  fontSize: 38,
                  color: "#fff",
                }}
              />
            </Box>
            
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 600,
                    mb: 1,
                    whiteSpace: "nowrap",
                      }}
                    >
                    Want to see how fast our SMS gateway really is?
                    </Typography>
            
                    <Typography
                      sx={{
                     
                          color: "rgba(255,255,255,.8)",
                    fontSize: "1rem",
                    // lineHeight: 1.7,
                    maxWidth: 520,
                      }}
                    >
                      Request a free demo account and send your first test campaign today
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
                    Get Free Demo
                  </Button>
            
                  
                </Box>
              </Box> 
            </Box>
        </Box>
  );
};

export default SmsHero;
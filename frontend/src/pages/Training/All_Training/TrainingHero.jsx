import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import trainingimg from "../../../assets/Images/training-alltrainng/trainingimg.PNG";
import figmaicon from "../../../assets/Images/Figmalogo.png";
import rocketimg from "../../../assets/Images/rocketimg.jpg";

import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import { Paper } from "@mui/material";


const TrainingHero = () => {



  return (
        <Box sx={{    position: "relative", bgcolor: "#fff", overflow: "hidden",}}>
            <Grid container sx={{}}>
               
                <Grid size={{xs:12,md:5.5}} sx={{bgcolor:'#071B52'}} >
      
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,},pl:{xs:2,lg:4},gap:{xs:2,}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"3rem"},fontWeight:"700", color:'white',}}>
                                                               
                               Best Software Training Institute in  <Box component='span' sx={{color:'#ff7309', fontSize:'3rem'}}>Coimbatore</Box> for Career-Ready IT Skills</Typography>


                                   <Typography sx={{color:'white' }} > <Box component='span' sx={{color:'#efff09', fontSize:'1.2rem'}}>Quick answer:</Box> KitKat Software Technologies is widely regarded as the best software training institute in Coimbatore because it trains students inside a live, working software development company rather than a simulated classroom. Learners build real client software, receive structured placement training, and graduate with verifiable project experience employers can actually check.</Typography>
                            </Box>

                             <Box sx={{display:"flex",gap:3}}>
                                <CommonButton  sx={{fontSize:"1rem", bgcolor:'#ff7309', color:'white', fontWeight:550, width:'300px', py:2, borderRadius:3}}>Book a Free Demo Class </CommonButton>
                                <CommonButton  sx={{fontSize:"0.9rem", border:'2px solid white', color:'white' , width:'200px', fontWeight:'bold' , py:2, borderRadius:3}}>Download Brochure </CommonButton>
                            </Box>


                         
                           
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5 }}>
                    <Box sx={{position: "relative",width: "100%",overflow: "hidden", 
                        
                    }}>
                        <Box component="img" src={trainingimg} sx={{width: "100%",objectFit: "cover",display: "block", }}/>


                      
                    </Box>
                </Grid>


            </Grid>

              
        </Box>
  );
};

export default TrainingHero;
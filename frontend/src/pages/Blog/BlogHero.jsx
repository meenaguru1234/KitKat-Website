import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MdMonitor } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import HeroBanner from "../../assets/Images/HeroBanner.png";
import { CommonButton } from "../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";

const BlogHero = () => {


  return (
        <Box sx={{position:"relative"}}>
            <Grid container >
                <Grid size={{xs:12,md:4.5, }}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", p:1, px:4}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,pl:{xs:2,lg:4},p:{xs:2,lg:1},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600", color:'#071B52'}}>Build Your Career. <br /><Box component={'span'} sx={{color:"#055DD8"}}>Build the Future.</Box></Typography>
                                <Typography sx={{color:'#04143e', fontSize:16, fontWeight:550}}>Great People. Meaningful Work. Limitless Growth.</Typography>
                                <Typography sx={{color:'#04143e', fontSize:17, }}>At KitKat Software Technologies, we build technology that helps businesses grow and makes a real impact every day. Join a team that values ideas, encourages innovation and supports your growth at every step.</Typography>
                            </Box>
                           
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton   sx={{fontSize:"0.8rem", bgcolor:'#055DD8', fontWeight:550, color:'white', textTransform:'uppercase'}}>EXPLORE OPEN POSITIONS</CommonButton>
                                <CommonButton  sx={{textTransform:'uppercase',border:'1px solid #055DD8', fontWeight:550}}>ABOUT OUR CULTURE</CommonButton>
                            </Box>
                        </Box>
                       
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7.5 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={HeroBanner} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            md: "linear-gradient(to right, white 0%, white 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                            },
                            pointerEvents: "none",
                        }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
  );
};

export default BlogHero;
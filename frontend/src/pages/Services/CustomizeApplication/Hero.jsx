import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import CustomHero from "../../../assets/Images/CustomHero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineShieldMoon } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { LuHeadset } from "react-icons/lu";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Paper } from "@mui/material";


const Hero = () => {

  const trainingArray = [
    {
      icon: SentimentSatisfiedAltOutlinedIcon,
    //   number:"150+",
      text: "Tailored Solutions",
      color: "#071B52",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: GppGoodOutlinedIcon,
    //   number:"10+",
      text: "Scalable & Secure",
      color: "#071B52",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: AvTimerOutlinedIcon,
    //   number:"30+",
      text: "On-time Delivery",
      color: "#071B52",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: HeadsetMicOutlinedIcon,
    //   number:"98%",
      text: "Ongoing Support",
      color: "#071B52",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

 

  return (
        <Box sx={{position:"relative"}}>
            <Grid container sx={{minHeight:'600px', }}>
                <Grid size={{xs:12,md:6.5}}>
                    
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        
                        <Box sx={{
                            display:"flex",flexDirection:"column",justifyContent:"space-evenly",
                            flexGrow:1, p: { xs: 2, lg: 1 },    pl: { xs: 2, lg: 6 },    gap: { xs: 2, lg: 0 },}}>
{/* 
                                <div>
                              <Breadcrumb>
                                  <Breadcrumb.Item href="#" style={{textDecoration:'none !important',color:'black'}}>Home</Breadcrumb.Item> <span><IoIosArrowForward /></span>
                                  <Breadcrumb.Item href="#" style={{textDecoration:'none',color:'black'}} > Services </Breadcrumb.Item>
                                  <span><IoIosArrowForward /></span>
                                  <Breadcrumb.Item href="#" active> Custom Software Development Company</Breadcrumb.Item>
                                 
                                </Breadcrumb>
                        </div> */}
                                
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>

                                

                                <Typography component={'h1'}  sx={{fontSize:{ xs:"2rem", md:"3.8rem" },fontWeight:700, lineHeight:1.15, color:"#071B52"   }}>
                                    Custom Software <Box component={'span'} sx={{color:"#FD6A02", display:'block'}}>Development Company</Box> 
                                    in Coimbatore
                                </Typography>
                                <Typography sx={{maxWidth:"520px", mt:3,color:"#071B52", fontSize:"1.1rem", fontWeight:'550', lineHeight:1.5}}>We build scalable, secure and high-performance custom software that streamlines your operations and drives real business growth.Bespoke solutions. Built around your business.</Typography>
                            </Box><br />
                            <Grid container spacing={1}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid key={index} size={{xs:6, md:3}} sx={{display:"flex",}}>
                                                <Box sx={{width:{},display:"flex",gap:1.5,alignItems:"center", px:{sm:1.5,md:0}}}>
                                                    <Icon sx={{fontSize:"2.5rem",color: "#071B52",fontWeight:'600', flexShrink: 0, }}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        {/* <Typography sx={{fontSize:{xs:"1.1rem",sm:"1.2rem",lg:"1.3rem"},fontWeight:700, lineHeight: 1.1,}}>{item.number}</Typography> */}
                                                        <Typography sx={{fontSize:{xs:"1rem",sm:"1rem",lg:"1rem"},fontWeight:700,color: "#071B52", lineHeight:'1.2'}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid> <br />
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} variant="contained" 
                                sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px",backgroundColor:'#FD6A02'}}>
                                    Request Your Free Consultation</CommonButton>
                                <CommonButton endIcon={<KeyboardArrowRightOutlinedIcon/>} 
                                variant="outlined" sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px", border:'1px solid #FD6A02', color:'#FD6A02'}}>
                                    View Our Case Studies</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid> 
                <Grid size={{ xs: 12, md: 5.5 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={CustomHero} sx={{width:"100%",height:"600px",objectFit:"cover"}}/>
 <Box
                      sx={{
                        position: "absolute",
                        right: "20px",
                        top: "70%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#fff",
                        borderRadius: "16px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        overflow: "hidden",
                        zIndex: 9999,
                        alignItems:'flex-end',
                        width:90
                      }}
                    >
                        <Paper
    elevation={5}
    sx={{
      borderRadius: "20px",
      overflow: "hidden",
      bgcolor: "#fff",
    }}
  >

     <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f8f8f8",
                          },
                        }}
                      >
                        <WhatsAppIcon sx={{ backgroundColor: "#25D366", color:'white', borderRadius:'20px', fontSize: 32 }}   
                        onClick={() => window.open("https://wa.me/919363839353", "_blank")  } />
                        <Typography sx={{ fontSize: "13px", mt: 1 }}>
                          WhatsApp
                        </Typography>
                      </Box>
                    
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderBottom: "1px solid #eee",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f8f8f8",
                          },
                        }}
                      >
                        <CallIcon sx={{ backgroundColor: "#FF6A00", color:'white',fontSize: 32, borderRadius:'20px' }}   
                        onClick={() => {    window.location.href = "tel:+919363839353";  }}/>
                        <Typography sx={{ fontSize: "13px", mt: 1 }}>
                          Call Us
                        </Typography>
                      </Box>
                    
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f8f8f8",
                          },
                        }}
                      >
                        <EmailIcon sx={{ backgroundColor: "#0D6EFD", color:'white', borderRadius:'20px', fontSize: 32 }}  
                        onClick={() => {    window.location.href = "mailto:hello@kitkat.com";  }}/>
                        <Typography sx={{ fontSize: "13px", mt: 1 }}>
                          Email Us
                        </Typography>
                      </Box>

   </Paper>
                     
                    </Box>
                   
                        {/* Fade Effect */}
                       <Box sx={{position:"absolute",top:0,left:0,width:"320px",height:"100%",
                       background:"linear-gradient(to right,white -10%,rgba(255,255,255,.95) 20%,rgba(255,255,255,.8) 35%,rgba(255,255,255,.3) 70%,transparent 100%)"
                        }}/>
                        
                    </Box>
                </Grid>
               
            </Grid>
        </Box>
  );
};

export default Hero;
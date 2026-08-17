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
const Hero = () => {
  const trainingArray = [
    {
      icon: MdMonitor,
      text: "Website Development",
      color: "#055DD8",
      borderRight:true,
      jss:"end",
      jsm:false,
      xs:4,
      sm:6,
      nd:4
    },
    {
      icon: MdOutlinePhoneAndroid,
      text: "Mobile App Development",
      color: "#5EA936",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:4,
      sm:6,
      nd:4
    },
    {
      icon: FaCode,
      text: "Custom Software Development",
      color: "#FE8240",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:4,
      sm:12,
      nd:4
    },
  ];

  return (
        <Box sx={{position:"relative"}}>
            <Grid container >
                <Grid size={{xs:12,md:4.5, }}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", p:1}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,pl:{xs:2,lg:4},p:{xs:2,lg:1},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600", color:'#071B52'}}>Best Software Development Company in <Box component={'span'} sx={{color:"#FD7A25"}}>Coimbatore</Box></Typography>
                                <Typography sx={{color:'#071B52'}}>We build websites, mobile apps and custom software that help businesses grow, automate and scale.</Typography>
                            </Box>
                            <Grid container sx={{minWidth:'550px', }}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,sm:item.sm,lg:item.nd}} sx={{display:"flex",
                                                    justifyContent:{sm:item.jss,md:item.jsm === true ? "center" : "start",lg:"start"},
                                                    borderRight:{sm:item.borderRight && "2px solid black",lg:"none"}}}>

                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}}}>
                                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:item.color,p:{xs:1,lg:1.5},borderRadius:50}}>
                                                        <Icon size='35px'/>
                                                    </Box>
                                                    <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",md:"0.85rem", color:'#071B52', fontWeight:550}}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} variant="contained" sx={{fontSize:"0.8rem", bgcolor:'#055DD8', fontWeight:550}}>Get a Free Consultation</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon sx={{color:'green'}}/>} variant="outlined" sx={{fontSize:"0.8rem",color:"#071B52", border:'1px solid #055DD8', fontWeight:550}}>Chat on Whatsapp</CommonButton>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"end",px:10,position:"absolute",bottom:5,right:0,zIndex:1}}>
                            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#032451",borderRadius:"5px",p:{xs:1,lg:1.5},gap:1}}>
                                <StarIcon sx={{color:"#FBC21D",fontSize:{xs:"1rem",sm:"1.2rem",lg:"32px"}}}/>
                                <Typography sx={{color:"white",fontSize:{xs:"0.8rem",sm:"1rem"}}}>10+ Years of Excellence Delivering Digital Success</Typography>
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

export default Hero;
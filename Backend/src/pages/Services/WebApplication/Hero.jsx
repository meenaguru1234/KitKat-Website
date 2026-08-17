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
import ServiceHero from "../../../assets/Images/ServiceHero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const Hero = () => {
  const trainingArray = [
    {
      icon: SentimentSatisfiedAltOutlinedIcon,
      number:"150+",
      text: "Projects Delivered",
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
      icon: Groups2OutlinedIcon,
      number:"10+",
      text: "Years of Experience",
      color: "#FE8240",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: BusinessCenterOutlinedIcon,
      number:"30+",
      text: "Expert Developers",
      color: "#5EA936",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: GppGoodOutlinedIcon,
      number:"98%",
      text: "Client Retention",
      color: "#FE8240",
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
            <Grid container>
                <Grid size={{xs:12,md:6}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"3rem"},fontWeight:"700",color:'#0B2E6B'}}>Web Application Development Services in Coimbatore</Typography>
                                <Typography sx={{color:'#0B2E6B'}} >We design beautifu,responsive websites and build powerful,SEO-ready solutions that help your business grow online.</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex",}}>
                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}}}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"2rem"}}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"1rem"},fontWeight:600, color:'#0B2E6B'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"}, color:'#0B2E6B'}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>}sx={{fontSize:"0.8rem", bgcolor:'#1F64D8', color:'white',fontWeight:600}}>Request a Free Consultation</CommonButton>
                                <CommonButton startIcon={<ImportantDevicesOutlinedIcon/>}  sx={{fontSize:"0.7rem",fontWeight:600, width:'200px', color:'#0B2E6B', border:'1px solid #1F64D8'}}>View Our Work</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={ServiceHero} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

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
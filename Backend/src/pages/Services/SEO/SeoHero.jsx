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
import seopackageHero from "../../../assets/Images/seopackageHero.JPG";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const SeoHero = () => {
  const trainingArray = [
    {
      icon: SentimentSatisfiedAltOutlinedIcon,
      number:"150+",
      text: "Happy Clients",
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
      icon: BusinessCenterOutlinedIcon,
      number:"300+",
      text: "Projects Delivered",
      color: "#5EA936",
      borderRight:false,
      jss:"start",
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
                <Grid size={{xs:12,md:5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600", 
                                color:'#03123d', }}>SEO Company <Box sx={{display:'block'}}>in <Box component='span' sx={{color:'#fe610d'}} >Coimbatore</Box></Box></Typography>
                                <Typography sx={{color:'#071B52' }} >We help businesses rank higher, get found by the right audience, and grow organic traffic that converts.</Typography>
                            </Box>
                            <Grid container spacing={1} sx={{mt:0}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex"}}>
                                                <Box sx={{display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}}}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"2rem"}, color:'#071B52'}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"},fontWeight:600, color:'#071B52'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3, mt:0, py:2}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} sx={{fontSize:"1rem", bgcolor:'#1a73e8', color:'white', fontWeight:550, width:'300px'}}>Request a Free SEO Audit</CommonButton>
                                <CommonButton   sx={{fontSize:"1rem", border:'2px solid #1a73e8', color:'#1a73e8' , width:'200px', fontWeight:'bold' }}>View Our Work</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={seopackageHero} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

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

export default SeoHero;
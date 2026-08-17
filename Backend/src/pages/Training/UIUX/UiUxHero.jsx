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
import UiUximg from "../../../assets/Images/uiuximghero.png";
import figmaicon from "../../../assets/Images/Figmalogo.png";
import rocketimg from "../../../assets/Images/rocketimg.jpg";

import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import { Paper } from "@mui/material";


const UiUxHero = () => {


  const trainingArray = [
    {
      icon: Groups2OutlinedIcon,
      number:"10+",
      text: "Years of ",
      text1: "Experience",
      color: "rgb(61, 8, 136)",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:2
    },
    {
      icon: BusinessCenterOutlinedIcon,
      number:"Live Projects",
      text: "Real Client",
       text1: "Work",
      color: "rgb(61, 8, 136)",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:2
    },
    {
      icon: Groups2OutlinedIcon,
      number:"Industry Experts",
      text: "Designers as",
       text1: "Mentors",
      color: "rgb(61, 8, 136)",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:2
    },
    {
      icon: GppGoodOutlinedIcon,
      number:"100% Placement",
      text: "Support",
      color: "rgb(61, 8, 136)",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:2
    },
    {
      icon: Groups2OutlinedIcon,
      number:"Small Batch",
      text: "Size",
      color: "rgb(61, 8, 136)",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:2
    },
  ];

  return (
        <Box sx={{    position: "relative", bgcolor: "#fff", overflow: "hidden",}}>
            <Grid container sx={{}}>
               
                <Grid size={{xs:12,md:6}} >
      
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,},pl:{xs:2,lg:4},gap:{xs:2,}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"4rem"},fontWeight:"800", color:'#021f6c',}}>
                                  UI UX Design <Box  component={'h1'} variant="h3" sx={{fontSize:{lg:"3rem"},fontWeight:"600", color:'black', }}>
                                  Course in  <Box component='span' sx={{color:'#0e36a5', fontSize:'4rem'}}>Coimbatore</Box></Box></Typography>


                                <Typography sx={{color:'#071B52', fontSize:22, fontWeight:600 }} >Design Better Experiences. Build a Better Career.</Typography>
                                 
                                <Typography sx={{color:'#071B52' }} > Learn UI / UX design with Figma, real projects and expert <br />mentorship. Create user- centered designs that make an impact and get your hired. </Typography>
                            </Box>

                             <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} sx={{fontSize:"1rem", bgcolor:'rgb(61, 8, 136)', color:'white', fontWeight:550, width:'300px', py:2}}>Book a Free Demo Class </CommonButton>
                                <CommonButton  endIcon={<DownloadIcon/>}  sx={{fontSize:"0.9rem", border:'2px solid rgb(61, 8, 136)', color:'rgb(61, 8, 136)' , width:'200px', fontWeight:'bold' , py:2}}>Download Brochure </CommonButton>
                            </Box>


                          <Grid container spacing={1} sx={{}} size={{xs:12,}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:12,lg:2.4}} sx={{display:"flex", flexDirection:'row',justifyContent:'center',
                                                overflow:'hidden'
                                             }}>
                                                <Box sx={{display:"flex",gap:2, alignItems:"center", 
                                                justifyContent:'flex-start', flexWrap:'nowrap',
                                            }}>
                                                <Box>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"1.5rem"}, color:'#071B52'}}/>

                                                </Box>
                                                    <Box sx={{display:"flex",flexDirection:"column", }}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"},fontWeight:600, color:'#071B52'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.text}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.text1}</Typography>

                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                           
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{position: "relative",width: "100%",height: '100%',overflow: "hidden", 
                        
                    }}>
                        <Box component="img" src={UiUximg} sx={{width: "100%",height: 600,objectFit: "cover",display: "block", }}/>


                         <Paper elevation={1} sx={{
                                    position: "absolute", top: "8%", right: "14%",
                                    p: 1.5, borderRadius: "12px", minWidth: "200px", zIndex: 2
                                }}>
                                   
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex:1 }}>
                                      <Box component="img" src={figmaicon} sx={{width: "40%",height: "50%",objectFit: "contain",display: "block", }}/>

                                        <Box sx={{ display: "flex", flexDirection:'column', alignItems: "left", color: "#051d7e" }}>
                                           
                                            <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>Learn Figma</Typography>
                                            <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>The Industry</Typography>
                                            <Typography sx={{ fontSize: "0.95rem", fontWeight: 700 }}>Standard</Typography>

                                        </Box>
                                    </Box>
                                </Paper>

                            <Paper elevation={10} sx={{
                                    position: "absolute", bottom: "6%", bgcolor:'#492a6a',right:'10%',
                                    p: 1.5, borderRadius: "5px", minwidth: 100, zIndex: 2, width:300
                                }}>
                                   
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex:1 }}>
                                      <Box component="img" src={rocketimg} sx={{width: "20%",height: "20%",objectFit: "fill",display: "block", }}/>

                                        <Box sx={{ display: "flex", flexDirection:'column', alignItems: "left", color: "#051d7e" }}>
                                           
                                            <Typography sx={{ fontSize: "1rem", fontWeight: 700 , color:'white'}}>Design. Prototype. Test.</Typography>
                                            <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color:'white' }}>Deliver Real Impact</Typography>

                                        </Box>
                                    </Box>
                                </Paper>





                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:1000},
                            background: {
                            xs: "linear-gradient(to bottom, white 10%,  rgba(244, 241, 241, 0.8) 40%, transparent 100%)",
                            md: "linear-gradient(to right, white 10%,  rgba(244, 241, 241, 0.8) 60%, transparent 100%)",
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

export default UiUxHero;
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import devopshero from "../../../assets/Images/training-devops/devopshero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import guaranteeimg from '../../../assets/Images/guarantee.png'
import { Paper } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineVisibility } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineHub } from "react-icons/md";
import { RiBrainLine } from "react-icons/ri";

const DevOpsHero = () => {


 
  return (
        <Box sx={{position:"relative", bgcolor:'#15213fec'}}>
            <Grid container sx={{           }}>
                <Grid size={{xs:12,md:5.5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", bgcolor:'white',}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{xs:'2.5rem', lg:"3.8rem"},fontWeight:"750", color:'#0a142fec', lineHeight:1.2 }}>
                                   DevOps Course<br /> <Box component='span' sx={{color:'#15213fec'}}>   in <Box component='span' sx={{color:'#e1440bec'}}>Coimbatore</Box></Box></Typography>
                                <Typography sx={{color:'#15213fec', fontSize:'1.7rem', fontWeight:600 }} >Automate. Deploy. Scale. Succeed.</Typography>
                           <Typography sx={{color:'#030c24ec', lineHeight:2.2, fontSize:19, }} >
                            Join the most practical Devops Training in Coimbatore <br /> with real-time projects,experts, mentors and <br /> 100% placement support.
                            </Typography>
                            </Box>
                           
                            <Box sx={{display:"flex",gap:2, mt:0,maxWidth:1400 ,borderRadius:5 }}>
                                <CommonButton sx={{fontSize:"1rem", bgcolor:'#e1440bec', color:'white',  width:'350px'}}>Book a Free Demo</CommonButton>
                                <CommonButton  sx={{fontSize:"1rem", border:'2px solid #0c47e7',bgcolor:'#0c47e7', color:'white' , width:'250px', }}>Download Syllabus</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon />}  sx={{fontSize:"1rem", border:'2px solid green', bgcolor:'green', color:'white' , width:'300px',  }}>Chat on Whatsapp</CommonButton>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5}}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={devopshero} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>



                                    

                             

                                      {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 20%, rgba(254, 254, 255, 0.8) 40%, transparent 100%)",
                            md: "linear-gradient(to right, white 0%, white 20%, rgba(247, 247, 249, 0.8)  60%, transparent 100%)",
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

export default DevOpsHero;
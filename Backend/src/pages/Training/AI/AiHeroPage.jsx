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
import aiheroimg from "../../../assets/Images/training-ai/aiheroimg.png";
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

const AiHeroPage = () => {

  const webapps = [
    {
        icon:RiBrainLine,
        name:'Machine Learning'
    },
      {
        icon:MdOutlineHub,
        name:'Deep Learning'
    },  
    {
        icon:LuMessageSquareMore,
        name:'Natural Language Processing  '
    },
      {
        icon:MdOutlineVisibility,
        name:'Computer Vision'
    },
      {
        icon:GiArtificialIntelligence,
        name:'Generative AI (LLM & More)'
    },
  ]

  return (
        <Box sx={{position:"relative", }}>
            <Grid container sx={{           }}>
                <Grid size={{xs:12,md:5.5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", bgcolor:'white',}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{xs:'2.5rem', lg:"3rem"},fontWeight:"700", color:'#15213fec', lineHeight:1.2 }}>
                                   Artificial Intelligence<br /> <Box component='span' sx={{color:'#15213fec'}}>  Course in <Box component='span' sx={{color:'#7d0ce7'}}>Coimbatore</Box></Box></Typography>
                                <Typography sx={{color:'#15213fec', fontSize:'1.7rem', fontWeight:600 }} >Learn AI, Build Real Projects and Get Placed.</Typography>
                           <Typography sx={{color:'#15213fec', lineHeight:2.2, fontSize:18 }} >
                            Join the most practical AI Course in Coimbatore and master <br /> Machine Learning, Deep Learning, NLP, Computer Vision <br /> and Generative AI with real-world projects.
                            </Typography>
                            </Box>
                           <Box sx={{display:"flex",gap:3, mt:0,maxWidth:1400 }}>
                                <CommonButton startIcon={<CalendarMonthIcon/>} sx={{fontSize:"1rem", bgcolor:'#e1440bec', color:'white',  width:'330px'}}>Book a Free Demo</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon />}  sx={{fontSize:"1rem", border:'2px solid green', bgcolor:'green', color:'white' , width:'330px',  }}>Chat on Whatsapp</CommonButton>
                                <CommonButton startIcon={<CallIcon />}  sx={{fontSize:"1rem", border:'2px solid #0c47e7',bgcolor:'#0c47e7', color:'white' , width:'250px', }}>Call Now</CommonButton>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5}}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={aiheroimg} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>



                                    

                                <Paper  sx={{
                                    position: "absolute", top: "34%", right: "4%", py:2, bgcolor:'transparent', boxShadow:'none',
                                    display:'flex', flexDirection:'column', gap:0.5,
                                    p: 1.5, width:'auto', height:'auto'}}>
                              
                              {
                                webapps.map((item, index)=>{
                                    let Icon = item.icon
                                    return(
                                      <Box  key={index} sx={{display: "flex", alignItems: "center",   gap: 2,  px: 2, py: 1.3,
                                    border: "1px solid #4ecaf8a0",    borderRadius: 3,   bgcolor: "#e6f5fa",  minWidth: 200, }} >
                                        <Icon   size={42} color="#092b82ec" style={{  }} />
                                       <Typography   sx={{ fontSize: { xs: "0.8rem", lg: "1rem" },  color: "#15213fec", fontWeight: 500,}} >
                                        {item.name}
                                        </Typography>
                                        </Box>

                                    )
                                })
                              }
                                    

                                </Paper>

                                      {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 30%, rgba(227, 227, 229, 0.8) 40%, transparent 100%)",
                            md: "linear-gradient(to right, white 0%, white 20%, rgba(227, 227, 229, 0.8)  60%, transparent 100%)",
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

export default AiHeroPage;
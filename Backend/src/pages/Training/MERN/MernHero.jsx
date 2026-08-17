import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import mernheroimg from "../../../assets/Images/mernheroimg.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import guaranteeimg from '../../../assets/Images/guarantee.png'
import { Paper } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const MernHero = () => {
  const trainingArray = [
    {
      icon: MenuBookIcon,
      number:"Live Projects",
      text: "& Real-time Training",
      color: "#f6f605",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: WorkspacePremiumIcon,
      number:"100% Placement",
      text: "Assistance",
      color: "#f6f605",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: SupervisorAccountIcon,
      number:"Industry Experts",
      text: "Trainers",
      color: "#f6f605",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: CalendarMonthIcon,
      number:"Flexible Batches",
      text: "Weekday/Weekend",
      color: "#f6f605",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

  return (
        <Box sx={{position:"relative", }}>
            <Grid container sx={{           }}>
                <Grid size={{xs:12,md:6}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", bgcolor:'rgba(4, 11, 43, 0.99)',}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.9rem"},fontWeight:"700", color:'white', }}>
                                   Best Full Stack Development Course <Box component='span' sx={{color:'#f6f605'}}> In Coimbatore</Box></Typography>
                                <Typography sx={{color:'white', fontSize:'2rem' }} >Learn. Build. Get Placed.</Typography>
                           <Typography sx={{color:'#d9d4d4', lineHeight:'1.8rem', fontSize:18 }} >KitKat Software Technologies trains you to become a confident, <br />
                            employable full stack developer with live projects,expert mentorship <br /> and train 100% placement assistance.</Typography>
                            </Box>
                            <Grid container spacing={1} sx={{mt:0, }}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex",bgcolor:'#15213fec', border:'1px solid #071B52', py:2, borderRadius:2,
                                            justifyContent:'center',px:2}}>
                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}, }}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"2rem"}, color:'#f4c429'}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem"},fontWeight:600, color:'#dbd6d6'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#dbd6d6'},}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3, mt:0, py:2}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} sx={{fontSize:"1rem", bgcolor:'orange', color:'white', fontWeight:550, width:'330px'}}>Book Your Free Demo Class</CommonButton>
                                <CommonButton startIcon={<PlayCircleOutlinedIcon />}  sx={{fontSize:"1rem", border:'2px solid #071B52', color:'white' , width:'230px', fontWeight:'bold' }}>Watch Course Video</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={mernheroimg} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>

                                <Paper  sx={{
                                    position: "absolute", bottom: "2%", right: "4%",
                                    p: 1.5, borderRadius: "12px", width:'20%', height:'20%'}}>
                              
                                      <Box component="img" src={guaranteeimg} sx={{width: "100%",height: "100%",
                                        objectFit: "fill",display: "block", }}/>
               

                                </Paper>

                                      {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, rgba(4, 11, 43, 0.94) 0%, rgba(4, 11, 43, 0.94) 30%, rgba(30, 33, 77, 0.8) 40%, transparent 100%)",
                            md: "linear-gradient(to right, rgba(4, 11, 43, 0.94) 0%, rgba(4, 11, 43, 0.94) 20%, rgba(30, 33, 77, 0.8)  60%, transparent 100%)",
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

export default MernHero;
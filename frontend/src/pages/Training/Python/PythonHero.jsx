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
import pythonheroimg from "../../../assets/Images/pythonheroimg.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import guaranteeimg from '../../../assets/Images/guarantee.png'
import { Paper } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import pythontextimg from "../../../assets/Images/pythontext.png"

const PythonHero = () => {
  const trainingArray = [
    {
      icon: MenuBookIcon,
      number:"100%",
      text: "Placement",
      text1:"Support",
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
      number:"Live Projects",
      text: "& Practical",
      text1:"Training",
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
      number:"Industry ",
      text:'Expert',
      text1: "Trainers",
      color: "#f6f605",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },

  ];

  const webapps = [
    {
        icon:MonitorOutlinedIcon,
        name:'Web Development'
    },
      {
        icon:DataThresholdingOutlinedIcon,
        name:'Data Science'
    },  
    {
        icon:PrecisionManufacturingOutlinedIcon,
        name:'Machine Learning  '
    },
      {
        icon:AutoModeIcon,
        name:'Automation'
    },
      {
        icon:AnalyticsIcon,
        name:'Data Analysis'
    },
  ]

  return (
        <Box sx={{position:"relative", }}>
            <Grid container sx={{           }}>
                <Grid size={{xs:12,md:5.5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", bgcolor:'white',}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{xs:'2.5rem', lg:"3.5rem"},fontWeight:"700", color:'#15213fec', }}>
                                   Python Training <br /> <Box component='span' sx={{color:'#15213fec'}}> In Coimbatore</Box></Typography>
                                <Typography sx={{color:'#e1210bec', fontSize:'2rem', fontWeight:600 }} >Learn, Build and Get Placed.</Typography>
                           <Typography sx={{color:'#15213fec', lineHeight:'1.8rem', fontSize:18 }} >
                            Job-focused Python Training with real-time projects ,<br /> certification and 100% placement support. <br />
                            Beginner to Advanced - We've got you covered!
                            </Typography>
                            </Box>
                            <Grid container spacing={1} sx={{mt:0,  display:'flex', justifyContent:'space-around'}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:4}} sx={{display:"flex",bgcolor:'white', border:'1px solid #d2daf0', py:1, borderRadius:2,
                                            justifyContent:'center',px:0}}>
                                                <Box sx={{width:{},display:"flex",gap:2,alignItems:"center",px:{sm:1.5,md:0}, }}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"2.5rem"}, color:'#15213fec'}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.9rem"},fontWeight:600, color:'#15213fec'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.9rem",color:'#15213fec'},}}>{item.text}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.9rem",color:'#15213fec'},}}>{item.text1}</Typography>

                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3, mt:0,maxWidth:1400 }}>
                                <CommonButton startIcon={<CalendarMonthIcon/>} sx={{fontSize:"0.9rem", bgcolor:'#e1440bec', color:'white',  width:'350px'}}>Book Free Demo Class</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon />}  sx={{fontSize:"0.9rem", border:'2px solid green', bgcolor:'green', color:'white' , width:'270px',  }}>Chat on Whatsapp</CommonButton>
                                <CommonButton startIcon={<CallIcon />}  sx={{fontSize:"0.9rem", border:'2px solid #0c47e7',bgcolor:'#0c47e7', color:'white' , width:'250px', }}>Call Now</CommonButton>

                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5}}>
                    <Box sx={{position: "relative",width: "100%",height: "100%",overflow: "hidden", }}>
                        <Box component="img" src={pythonheroimg} sx={{width: "100%",height: "100%",objectFit: "cover",display: "block", }}/>



                                      <Paper  sx={{bgcolor:'transparent', boxShadow:'none',
                                    position: "absolute", top: "2%", right: "22%", py:2, 
                                    p: 1.5, width:'30%', height:'auto'}}>
                              
                             <Box sx={{}}>
                        <Box component="img" src={pythontextimg} sx={{width: "150%",objectFit: "cover",display: "block", }}/>

                             </Box>

                                </Paper>

                                <Paper  sx={{
                                    position: "absolute", top: "20%", right: "4%", py:2, bgcolor:'transparent', boxShadow:'none',
                                    display:'flex', flexDirection:'column', gap:0.5,
                                    p: 1.5, width:'auto', height:'auto'}}>
                              
                              {
                                webapps.map((item, index)=>{
                                    let Icon = item.icon
                                    return(
                                      <Box  key={index} sx={{display: "flex", alignItems: "center",   gap: 2,  px: 2, py: 1.2,
                                    border: "1px solid #4ecaf8a0",    borderRadius: 3,   bgcolor: "#d9f2fba0",  minWidth: 200, }} >
                                        <Icon  sx={{ fontSize: { xs: "1.2rem", lg: "1.7rem" }, color: "#15213fec", }}  />
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

export default PythonHero;
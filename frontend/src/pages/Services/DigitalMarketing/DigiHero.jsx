import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import StarIcon from "@mui/icons-material/Star";
import DigiHeroimg from "../../../assets/Images/DigiHeroimg.JPG";
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
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DigiHero = () => {

  const digiArray = [
    {
      icon: AdsClickIcon,
      text: "Result-Driven Strategies",
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
      icon: BarChartIcon,
      text: "ROI-Focused Compaigns",
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
      icon: GroupsIcon,
      text: "Transparent Reporting",
      color: "#071B52",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: SettingsIcon,
      text: "Integrated with CRM & Tech",
      color: "#071B52",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
       {
      icon: HeadsetMicIcon,
      text: "Local Team, National Reach",
      color: "#071B52",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

 const channelData = [
  { name: "Organic Search", value: 45, color: "#3b82f6" },
  { name: "Paid Search", value: 25, color: "#f97316" },
  { name: "Social Media", value: 20, color: "#22c55e" },
  { name: "Direct", value: 10, color: "#a855f7" },
];
const buildConicGradient = (data) => {
  let cumulative = 0;
  const stops = data.map((d) => {
    const start = cumulative;
    cumulative += d.value;
    return `${d.color} ${start}% ${cumulative}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
};


  return (
        <Box sx={{position:"relative"}}>
            <Grid container sx={{minHeight:'600px'}}>
                <Grid size={{xs:12,md:6.5}}>
                    
                    <Box sx={{ height:550,display:"flex",flexDirection:"column"}}>
                        
                        <Box sx={{
                            display:"flex",flexDirection:"column",justifyContent:"space-evenly",
                            flexGrow:1, p: { xs: 2, lg: 1 },    pl: { xs: 2, lg: 6 },    gap: { xs: 2, lg: 0 },}}>

                                                               
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>

                                

                                <Typography component={'h1'}  sx={{fontSize:{ xs:"2rem", md:"3.5rem" },fontWeight:700, lineHeight:1.15, color:"#071B52"   }}>
                                    Digital Marketing<Box component={'span'} sx={{color:"#fd3d02", display:'block'}}> Company In Coimbatore</Box>
                                </Typography>
                                <Typography sx={{maxWidth:"600px",color:"#071B52", fontSize:"1.2rem", fontWeight:'800',}}>Strategy. Traffic. Conversations. Real Business Growth.</Typography>

                                <Typography sx={{maxWidth:"600px",mt:1, color:"#071B52", fontSize:"1rem", fontWeight:'500', lineHeight:1.5}}>
                                    Data-driven digital marketing services that attract, engage and convert your ideal customers. 
                                    Built by a team that understands both marketing and the technology behind it.    
                                </Typography>
                            </Box><br />
                            <Grid container spacing={1}>
                               <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: { xs: "wrap", md: "nowrap" },  
                               gap: { xs: 2, md: 0 },}}>
                                 {
                                    digiArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                          
                                             <Grid key={index} size={{xs:4, md:6}} sx={{display:"flex",  alignItems:'center', justifyContent:'center',  textAlign: "center",
                                                     px: { xs: 1, md: 0 },
                                                     borderRight: index !== digiArray.length - 1 ? { xs: "none", md: "1px solid #d0d5e0"} : "none",
                                                     flex: { md: 1 }, minWidth: { xs: "35%", md: 0 },}}>
                                                <Box sx={{display:"flex",gap:1.5,alignItems:"center", px:{sm:1.5,md:0},  flexDirection:'column'}}>
                                                    <Icon sx={{fontSize:"2rem",color: "#071B52",fontWeight:'600', flexShrink: 0, }}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                         <Typography sx={{fontSize:{xs:"1rem",sm:"1rem",lg:"1rem"},fontWeight:700,color: "#071B52", lineHeight:'1.2'}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                          )
                                    })
                                }
                               </Box>
                            </Grid> <br />
                            <Box sx={{display:"flex",gap:2}}>
                                <CommonButton sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px",
                                    backgroundColor:'#0b32be', textTransform:'uppercase', color:'white'}}>
                                    Request a Free Audit</CommonButton>
                                <CommonButton sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px", 
                                    border:'1px solid #0b32be', color:'#0b32be'}}>
                                    View Our Case Studies</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid> 
             

<Grid size={{ xs: 12, md: 5.5 }}>
    <Box sx={{ position: "relative", width: "100%", height: 600, overflow: "hidden" }}>
        <Box
            component="img"
            src={DigiHeroimg}
            sx={{
                width: "100%",
                height: "100%",
                minHeight: "600px",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
            }}
        />

        {/* Website Traffic Card - top left */}
        <Paper elevation={10} sx={{
            position: "absolute", top: "8%", left: "4%",
            p: 1.5, borderRadius: "12px", minWidth: "150px", zIndex: 2
        }}>
            <Typography sx={{ fontSize: "0.7rem", color: "#8a8a8a", fontWeight: 600 }}>
                Website Traffic
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#071B52" }}>
                    28,456
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", color: "#22c55e" }}>
                    <TrendingUpIcon sx={{ fontSize: "1rem" }} />
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700 }}>48.7%</Typography>
                </Box>
            </Box>
        </Paper>

        {/* Conversions Card - below website traffic */}
        <Paper elevation={10} sx={{
            position: "absolute", top: "30%", left: "4%",
            p: 1.5, borderRadius: "12px", minWidth: "150px", zIndex: 2
        }}>
            <Typography sx={{ fontSize: "0.7rem", color: "#8a8a8a", fontWeight: 600 }}>
                Conversions
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#071B52" }}>
                    1,845
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", color: "#22c55e" }}>
                    <TrendingUpIcon sx={{ fontSize: "1rem" }} />
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700 }}>60.3%</Typography>
                </Box>
            </Box>
        </Paper>


{/* Top Channels Card - top right */}
<Paper elevation={4} sx={{
    position: "absolute", top: "8%", right: "4%",
    p: 1.5, borderRadius: "12px", minWidth: "180px", zIndex: 2
}}>
    <Typography sx={{ fontSize: "0.7rem", color: "#8a8a8a", fontWeight: 600, mb: 0.5 }}>
        Top Channels
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
         <Box sx={{
            position: "relative",
            width: 55,
            height: 55,
            borderRadius: "50%",
            background: buildConicGradient(channelData),
            flexShrink: 0,
        }}>
            <Box sx={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 28, height: 28,
                borderRadius: "50%",
                backgroundColor: "#fff",
            }} />
        </Box>

        <Box>
            {channelData.map((entry, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: entry.color }} />
                    <Typography sx={{ fontSize: "0.6rem", color: "#333", mr: 0.5 }}>
                        {entry.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.6rem", fontWeight: 700 }}>
                        {entry.value}%
                    </Typography>
                </Box>
            ))}
        </Box>
    </Box>
</Paper>

        {/* More Traffic Better Leads Card - bottom right */}
        <Paper elevation={4} sx={{
            position: "absolute", bottom: "10%", right: "4%",
            p: 1.5, borderRadius: "12px", zIndex: 2, backgroundColor: "#fff"
        }}>
           <Box sx={{display:'flex', flexDirection:'row', flexw:'wrap'}}>
             <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#071B52", lineHeight: 1.3 }}>
                More Traffic.<br />Better Leads.<br />Higher ROI. 
            </Typography>
             <TrendingUpIcon sx={{ fontSize: "4rem" , color:'green'}} />
           </Box>
        </Paper>

        {/* Fade Effect */}
        <Box sx={{
            position: "absolute", top: 0, left: 0, width: "320px", height: "100%",
            background: "linear-gradient(to right,white 0%,rgba(255,255,255,.95) 20%,rgba(255,255,255,.8) 45%,rgba(255,255,255,.3) 70%,transparent 100%)",
        }} />
    </Box>
</Grid>
               
            </Grid>
        </Box>
  );
};

export default DigiHero;
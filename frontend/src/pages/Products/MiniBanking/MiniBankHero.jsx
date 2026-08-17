import React from "react";
import Box from "@mui/material/Box";
import BarChartIcon from '@mui/icons-material/BarChart';        // Data-Driven Decisions
import GpsFixedIcon from '@mui/icons-material/GpsFixed';        // Actionable Insights
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // Accurate Reporting
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; 
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import StarIcon from "@mui/icons-material/Star";
import minibankheroimg from "../../../assets/Images/product/minibank/minibankhero.png";
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
import { Paper, Typography } from "@mui/material";
  import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
  import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
  import EditIcon from '@mui/icons-material/Edit';
  import AccountTreeIcon from '@mui/icons-material/AccountTree';

const MiniBankHero = () => {

  const dataArray = [
    {
      icon: VerifiedUserIcon,
      text: "Secure",
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
      text: "Complaint",
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
      icon: GpsFixedIcon,
      text: "Efficient",
      color: "#071B52",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: GroupOutlinedIcon,
      text: "Scalable",
      color: "#071B52",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
       
  ];

//  const processData = [
// {
//     icon: AccountTreeIcon,
//     number:'150+',
//       text: "Project Delivered",
//       color: "#05257a",
//     },
//     {
//     icon: PeopleAltIcon,
//     number:'50+',
//       text: "Happy Clients",
//       color: "#05257a",
//     },
//     {
//     icon: EditIcon,
//     number:'10+',
//       text: "Industries Surved",
//       color: "#05257a",
//     },
//     {
//     icon: ModeStandbyIcon,
//     number:'98%',
//       text: "Client Retention Rate",
//       color: "#05257a",
//     }
// ];



  return (
        <Box sx={{position:"relative"}}>
            <Grid container sx={{minHeight:'600px'}}>
                <Grid size={{xs:12,md:4.5}}>
                    
                    <Box sx={{height:500,display:"flex",flexDirection:"column"}}>
                        
                        <Box sx={{
                            display:"flex",flexDirection:"column",justifyContent:"space-evenly",
                            flexGrow:1, p: { xs: 2, lg: 1 },    pl: { xs: 2, lg: 6 },    gap: { xs: 2, lg: 0 },}}>

                                                               
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>

                                

                                <Typography component={'h1'}  sx={{fontSize:{ xs:"2rem", md:"3rem" },fontWeight:700, lineHeight:1.15, color:"#051c59"   }}>
                                   Banking Software Company in<Box component={'span'} sx={{color:"#0837b7", display:'block'}}> Coimbatore</Box>
                                </Typography>
                                 <Typography sx={{maxWidth:"600px",mt:1, color:"#071B52", fontSize:"1.35rem", fontWeight:'500', lineHeight:1.5}}>
                                       Smart Banking Solutions for <br /> Cooperative Banks, Nidhi Companies <br /> & Microfinance Institutions

                                </Typography>
                            </Box><br />
                            <Grid container spacing={1}>
                               <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: { xs: "wrap", md: "nowrap" }, 
                                gap: { xs: 2, md: 2 },}}>
                                 {
                                    dataArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                          
                                             <Grid key={index} size={{xs:4, md:6}} sx={{display:"flex",  alignItems:'center', justifyContent:'center',  textAlign: "center",
                                                     px: { xs: 1, md: 2 },
                                                     borderRight: index !== dataArray.length - 1 ? { xs: "none", md: "1px solid #d0d5e0"} : "none",
                                                     flex: { md: 1 }, minWidth: { xs: "35%", md: 0 },}}>
                                                <Box sx={{display:"flex",gap:1.5,alignItems:"center", px:{sm:1.5,md:0},  flexDirection:'column'}}>
                                                    {/* <Box sx={{height:50, width:50, borderRadius:'50%',display:'flex',justifyContent:'center', border:'1px solid #799bf8', alignItems:'center'}}> */}
                                                    <Icon sx={{fontSize:"2.5rem",color: "#0f308d",fontWeight:'600', flexShrink: 0,alignItems:'center' }}/>

                                                    {/* </Box> */}
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
                                <CommonButton startIcon={<CalendarMonthOutlinedIcon/>} sx={{height:"54px",px:4,fontWeight:600,fontSize:"0.95rem",borderRadius:"8px",
                                    backgroundColor:'#0f308d', textTransform:'uppercase', color:'white'}}>
                                    Book a Free Demo Today!</CommonButton>
                                
                            </Box>
                        </Box>
                    </Box>
                </Grid> 
             

<Grid size={{ xs: 12, md: 7.5 }}>
    <Box sx={{ position: "relative", width: "100%", height: 500, overflow: "hidden" }}>
        <Box
            component="img"
            src={minibankheroimg}
            sx={{
                width: "100%",
                height: "100%",
                minHeight: "600px",
                objectFit: "contain",
                objectPosition: "center top",
                display: "block",
            }}
        />

   

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

export default MiniBankHero;
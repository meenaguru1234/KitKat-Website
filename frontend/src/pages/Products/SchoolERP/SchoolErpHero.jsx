import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsIcon from '@mui/icons-material/Groups';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import scerpheroimg from "../../../assets/Images/product/schoolerp/schoolerpheroimg.png";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../../StyledComponents/CommonButton";


const SchoolErpHero = () => {
  const trainingArray = [
    {
      icon: GroupsIcon,
      text: "Student Centric",
      color: "#055DD8",
      borderRight:true,
      jss:"end",
      jsm:false,
      xs:4,
      sm:6,
      nd:4
    },
    {
      icon: ShieldOutlinedIcon,
      text: "Secure & Reliable",
      color: "#FE8240",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:4,
      sm:6,
      nd:4
    },
    {
      icon: CloudQueueOutlinedIcon,
      text: "Cloud Based Access",
      color: "#5EA936",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:4,
      sm:12,
      nd:4
    },
      {
      icon: ShowChartOutlinedIcon,
      text: "Real time Insights",
      color: "#ac40fe",
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
                <Grid size={{xs:12,md:5.5, }}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", p:1,}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,pl:{xs:2,lg:4},p:{xs:2,lg:1},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2, p:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.5rem"},fontWeight:"600", color:'#071B52'}}>School ERP Software Development Company  <br />in   <Box component={'span'} sx={{color:"#0b6cf4"}}>Coimbatore</Box></Typography>
                                <Typography sx={{color:'#071B52', fontSize:17}}>Kitkat School ERP software automates admissions, fees, attendance, 
                                    academics and communication for schools of every size. Built for Indian schools. Trusted across India.</Typography>
                            </Box>
                            <Grid container sx={{minWidth:'550px', display:'flex', mb:7 }}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,sm:item.sm,lg:3}} sx={{display:"flex",
                                                    justifyContent:{sm:item.jss,md:item.jsm === true ? "center" : "start",lg:"start"},
                                                    borderRight:{sm:item.borderRight && "2px solid black",lg:"none"}}}>

                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}, flexDirection:'column'}}>
                                                    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"#0b6cf4",boxShadow:'30%',
                                                        backgroundColor:'#dee8f67b',p:{xs:1,lg:1.5},borderRadius:50}}>
                                                        <Icon sx={{fontSize:40}}/>
                                                    </Box>
                                                    <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",md:"0.95rem", width:100, color:'#071B52',textAlign:'center', fontWeight:550}}}>{item.text}</Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} variant="contained" sx={{fontSize:"0.95rem", bgcolor:'#0b6cf4', fontWeight:550}}>See Kitkat School ERP In Action</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon sx={{color:'green'}}/>} variant="outlined" sx={{fontSize:"0.95rem",color:"#071B52", border:'1px solid #055DD8', fontWeight:550}}>Chat on Whatsapp</CommonButton>
                            </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"end",px:10,position:"absolute",bottom:5,right:0,zIndex:1}}>
                            
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5 }}>
                    <Box sx={{position: "relative",width: "100%",height: '100%',overflow: "hidden", }}>
                        <Box component="img" src={scerpheroimg} sx={{width: "100%",height: 500,objectFit: "fill",display: "block", }}/>

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

export default SchoolErpHero;
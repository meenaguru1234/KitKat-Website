import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import digitalmarketinghero from "../../../assets/Images/training-digimark/digitalmarketinghero.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import guaranteeimg from '../../../assets/Images/guarantee.png'
import { Paper } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const DigiHero = () => {
  const trainingArray = [
    {
      icon: MenuBookIcon,
      number:"Live Projects",
      text: "& Real Campaigns",
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
      number:"Industry Expert",
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
            <Grid container sx={{     width: "100%",
                  height: 'auto',
                  borderRadius: 3,
                  overflow: "hidden",
            
                  backgroundImage: `url(${digitalmarketinghero})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
            
                  display: "flex",
                  alignItems: "flex-start",
                  p: 3,     }}>
                <Grid size={{xs:12,md:7}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column",  }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.9rem"},fontWeight:"700", color:'white', }}>
                               Digital Marketing Course <Box component='span' sx={{color:'#f69205', display:'block'}}> in Coimbatore</Box></Typography>
                                <Typography sx={{color:'white', fontSize:'2rem' }} >Learn, Practise and Get Placed</Typography>
                           <Typography sx={{color:'#d9d4d4', lineHeight:'1.8rem', fontSize:18 }} >Join KitKat Software Technologies and master SEO, Social Media, 
                            Google Ads, <br /> Content Marketing and more through practical training and live projects <br />with 100% placement support.</Typography>
                            </Box>
                            <Grid container spacing={2} sx={{mt:3, }}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex",bgcolor:'#15213fec', border:'1px solid #071B52', py:1, borderRadius:2,
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
                            <Box sx={{display:"flex",gap:3, mt:3, py:2, width:'100%'}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} sx={{fontSize:"1rem", bgcolor:'orange', color:'white', fontWeight:550, width:'350px'}}>Book Your Free Demo Class</CommonButton>
                                <CommonButton startIcon={<LocalPhoneIcon />}  sx={{fontSize:"1rem", border:'2px solid white', color:'white' , width:'250px', fontWeight:'bold' }}>Call Now</CommonButton>
                                <CommonButton startIcon={<WhatsAppIcon />}  sx={{fontSize:"1rem", border:'2px solid white', color:'white' , width:'250px', fontWeight:'bold' }}>Chat on Whatsapp</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
           
            </Grid>
        </Box>
  );
};

export default DigiHero;
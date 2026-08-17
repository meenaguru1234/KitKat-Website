import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DownloadIcon from '@mui/icons-material/Download';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarIcon from "@mui/icons-material/Star";
import mobappheroimg from "../../../assets/Images/mobappheroimg.jpg";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import rocketimg from "../../../assets/Images/rocketimgnew.png"
import { Paper } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import androidiosimg from "../../../assets/Images/androidios.png"


const MobAppHero = () => {
  const trainingArray = [
    {
      icon: Diversity3Icon,
      number:"10+",
       numberSize: true,
      text: "Years of Experience",
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
      icon: PictureInPictureAltIcon,
      number:"Real World",
       numberSize: false,
      text: "Projects",
      color: "#f6f605",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: SupervisedUserCircleIcon,
      number:"100% ",
       numberSize: true,
      text: "Placement Support",
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
      icon: GroupsIcon,
      number:"Small",
       numberSize: false,
      text: "Batch Size",
      color: "#f6f605",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
      {
      icon: FaceRetouchingNaturalIcon,
      number:"Expert",
       numberSize: false,
      text: "Mentors",
      color: "#f6f605",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
      {
      icon: VideogameAssetIcon,
      number:"Apps on",
       numberSize: false,
      text: "Play Store",
      color: "#f6f605",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
      {
      icon: PhoneAndroidIcon,
    number:"Apps on",
     numberSize: false,
      text: "App Store",
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
        <Box sx={{position:"relative",  }}>
            <Grid container>
                <Grid size={{xs:12,md:5.5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column"}}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},}}>
                            <Box sx={{display:"flex",flexDirection:"column",}}>
                                <Typography component={'h1'}  sx={{fontSize:{xs:'3rem',md:"3.7rem"},fontWeight:"800", color:'#03174d', }}>
                                   Mobile App</Typography> <Box component='span' sx={{ display:'block', color:'#03174d',fontWeight:700, fontSize:'2.8rem'}}> Development Course <br /> in<Box component='span' sx={{ color:'#0a34a8'}}> Coimbatore</Box></Box>
                                <Typography sx={{color:'#071B52', fontSize:{xs:'1.5rem', md:'2rem'}, lineHeight:1.7 }} >Learn. Build. Publish. Get Placed.</Typography>
                           <Typography sx={{color:'#071B52', lineHeight:'1.9rem', fontSize:18,mt:3 }} >
                            Join the best Mobile App Development Course in Coimbatore and build real-world apps for Android, iOS, Flutter & React Native with expert mentors.
                            </Typography>
                            </Box>
                       
                            <Box sx={{display:"flex", gap:3}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>} sx={{fontSize:"0.9rem", bgcolor:'#022da1', color:'white', fontWeight:550, width:'300px'}}>Book a Free Demo Class</CommonButton>
                                <CommonButton endIcon={<DownloadIcon />}  sx={{fontSize:"0.9rem", border:'2px solid #071B52', color:'#071B52' , width:'200px', fontWeight:'bold' }}>Download Brochure</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6.5, }}>
                    <Box sx={{position: "relative",overflow: "hidden", mt:2 }}>
                        <Box component="img" src={mobappheroimg} sx={{width: "100%",height: "100%",objectFit: "fill",display: "block", }}/>

                                <Paper  sx={{
                                    position: "absolute", top: "2%", right: "3%", bgcolor:'white',
                                    p: 1, borderRadius: "12px", width:'33%', height:'22%'}}>

                                        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', gap:2, p:1,
                                            height:'100%', width:'100%'
                                        }}>

                                            <Box sx={{display:'flex', flexDirection:'column', color:'#0834ab', }}>
                                                <Typography sx={{fontWeight:700}}>Real Apps</Typography>
                                                <Typography sx={{fontWeight:700}}>Real Experience</Typography>
                                                <Typography sx={{fontWeight:700}}>Real Career</Typography>

                                            </Box>

                                            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center', height:'auto', width:'40%',}}>
                                                            <Box component="img" src={rocketimg} sx={{width: "100%",height: "70%",objectFit: "cover", }}/>

                                            </Box>

                                        </Box>
                              
               

                                </Paper>

                                  <Paper  sx={{
                                    position: "absolute", bottom: "8%", right: "3%", bgcolor:'#fffefe ',
                                    p: 1, borderRadius: "12px", width:'22%', height:'20%'}}>

                                    <Box component="img" src={androidiosimg} sx={{width: "100%",height: "100%",objectFit: "fill",display: "block", }}/>
                                    
                                </Paper>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, white 30%, rgba(255,255,255,0.8) 40%, transparent 100%)",
                            md: "linear-gradient(to right, white 0%, white 20%, rgba(255,255,255,0.8) 60%, transparent 100%)",
                            },
                            pointerEvents: "none",
                        }}
                        />
                    </Box>
                </Grid>
            </Grid>

           <Box sx={{border:'1px solid #dbd6d6', p:2, position:'relative', mt:-3, bgcolor:'white',width:'100%', maxWidth:{xs:700,md:1450}, justifyContent:'center', 
            mx:5, borderRadius:3, flexDirection:{xs:'column', md:'row'}, display:'flex', 
            }}>
                 <Grid container spacing={2} justifyContent="space-around" sx={{width:'100%'}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{ xs: 12, sm: 6, md: "grow"} }sx={{   display: "flex", bgcolor: 'white', 
                                            borderRight: index !== trainingArray.length - 1 ? '1px solid #071B52' : "none",gap:3,
                                                justifyContent: 'center',}}>
                                                <Box sx={{display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0},flexDirection: 'row', }}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",nd:"2rem"}, color:'#071B52'}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{
                                                            fontSize:{ xs: item.numberSize ? "0.8rem" : "0.55rem",
                                                                       sm: item.numberSize ? "1.2rem" : "0.7rem",
                                                                       md: item.numberSize ? "1.5rem" : "0.8rem",},
                                                            fontWeight:600, color:'#071B52'}}>{item.number}</Typography>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",md:"0.8rem",color:'#071B52'},}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid> 
            </Box>
        </Box>
  );
};

export default MobAppHero;
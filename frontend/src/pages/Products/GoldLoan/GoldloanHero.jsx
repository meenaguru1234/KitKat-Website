import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { FaWhatsapp } from "react-icons/fa";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from "@mui/icons-material/Star";
import goldloanheroimg from "../../../assets/Images/product/goldloan/goldloanheroimg.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const GoldloanHero = () => {

  const trainingArray = [
    {
      icon: DoneIcon,
     text: "Faster Loan Processing",
      color: "#055DD8",
      borderRight:true,
      jsx:"end",
      jss:"end",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    {
      icon: DoneIcon,
      text: "Secure Gold & Vault Management",
      color: "#5EA936",
      borderRight:false,
      jss:"start",
      jsm:false,
      xs:6,
      sm:6,
      nd:3
    },
    
    {
      icon: DoneIcon,
      text: "Accurate Interest Calculation",
      color: "#FE8240",
      borderRight:false,
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
    {
      icon: DoneIcon,
      text: "Better Recovery & Collections",
      color: "#FE8240",
      borderRight:false,
      jsx:"end",
      jss:"center",
      jsm:true,
      xs:6,
      sm:12,
      nd:3
    },
  ];

  return (
        <Box sx={{position:"relative", height:'auto', width:'auto', bgcolor:'white'}}>
            <Grid container>
                <Grid size={{xs:12,md:5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.8rem"},fontWeight:"600", color:'#071B52', }}>
                               Gold Loan Software Development Company <br /> in <Box component={'span'} sx={{color:'#fc8804'}}>Coimbatore</Box></Typography>
                                <Typography sx={{color:'#041b59' , fontSize:17.5}} >
                                    Power your gold loan business with secure, compliant and <br /> feature-rich software. From appraisal to recovery, automate <br />
                                     every step and grow your loan portfolio with confidence.</Typography>
                            </Box>
                            <Grid container spacing={1} sx={{mt:0}}>
                                {
                                    trainingArray.map((item,index) => {
                                        const Icon = item.icon
                                        return (
                                            <Grid size={{xs:item.xs,lg:6}} sx={{display:"flex"}}>
                                                <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:0}}}>
                                                    <Icon sx={{fontSize:{xs:"1rem",sm:"1.5rem",lg:"1.5rem"}, color:'green'}}/>
                                                    <Box sx={{display:"flex",flexDirection:"column"}}>
                                                        <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.text}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <Box sx={{display:"flex",gap:3, mt:0}}>
                                <CommonButton endIcon={<EastOutlinedIcon/>}  sx={{fontSize:"0.9rem", bgcolor:'#fc8804', color:'white', fontWeight:550, width:'320px'}}>Book a Free Consultation</CommonButton>
                                <CommonButton startIcon={<FaWhatsapp color="green" size={25}/>}  sx={{fontSize:"0.9rem", border:'2px solid #b3bfe0', color:'#071B52' , width:'200px', fontWeight:'bold' }}>Chat on Whatsapp</CommonButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{position: "relative",width: "auto",height: 500}}>
                        <Box component="img" src={goldloanheroimg} sx={{objectFit: "fill",width: "100%",height: "100%", display:'block', overflow:'hidden',
                            }}/>

                        {/* Fade Effect */}
                        <Box sx={{position: "absolute",top: 0,left: 0, 
                            width:{xs:"100%",md:"180px"},
                            height: {xs:"100px",md:"100%"},
                            background: {
                            xs: "linear-gradient(to bottom, white 0%, #e2e2e439 20%, rgba(255,255,255,0.8) 50%, transparent 100%)",
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

export default GoldloanHero;
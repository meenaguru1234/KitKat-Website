import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { FaWhatsapp } from "react-icons/fa";
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from "@mui/icons-material/Star";
import medicalbillheroimg from "../../../assets/Images/product/medicalbilling/medibilheroimg.png";
import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const MedicalBillHero = () => {



  return (
        <Box sx={{position:"relative", height:'auto', width:'auto', bgcolor:'#e1e5ea3d'}}>
            <Grid container>
                <Grid size={{xs:12,md:5}}>
                    <Box sx={{height:"100%",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",flexGrow:1,p:{xs:2,lg:1},pl:{xs:2,lg:6},gap:{xs:2,lg:0}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"2.8rem"},fontWeight:"600", color:'#071B52', }}>
                               Medical Billing <br />Software Company<br />  in <Box component={'span'} sx={{color:'#046bfc'}}>Coimbatore</Box></Typography>
                                <Typography sx={{color:'#041b59' , fontSize:22}} >
                                    Custom Billing Solutions <br /> for Hospitals • Clinics • Labs</Typography>
                            </Box>
                           
                            <Box sx={{display:"flex",gap:3, mt:0}}>
                                <CommonButton startIcon={<CalendarMonthOutlinedIcon/>}  sx={{fontSize:"1rem", bgcolor:'#046bfc', color:'white', fontWeight:550, width:'320px', py:1, borderRadius:2}}>Book Free Demo</CommonButton>
                            </Box>

                            
                      <Box  sx={{ display: "flex", alignItems: "center",gap: 1.2,mt: 1, }}>
                        <Box  sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, borderRadius: "50%", backgroundColor: "green", display: "flex",
                        alignItems: "center", justifyContent: "center", flexShrink: 0, }} >
                        <DoneIcon sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, color: "white" }} />
                      </Box>

                      <Typography  sx={{  fontSize: { xs: "0.75rem", sm: "0.9rem", lg: "0.85rem" }, color: "#071B52", fontWeight: 500,}}>
                        Trusted by Healthcare Providers Across Tamil Nadu
                      </Typography>
                    </Box>
                                           
                           
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{position: "relative",width: "auto",height: 480}}>
                        <Box component="img" src={medicalbillheroimg} sx={{objectFit: "fill",width: "100%",height: "100%", display:'block', overflow:'hidden',
                            }}/>

                      
                    </Box>
                </Grid>
            </Grid>
        </Box>
  );
};

export default MedicalBillHero;
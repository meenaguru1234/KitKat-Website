import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MonitorIcon from '@mui/icons-material/Monitor';
import GppGoodIcon from '@mui/icons-material/GppGood';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SellIcon from '@mui/icons-material/Sell';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const WhyKitkat = () => {

      const processSteps = [
        { 
            icon: MonitorIcon, 
            label: "Software & Integrated Messaging", 
            color: "#1976d2", 
            desc: "Our SMS API Connects directly into CRM, ERP, Booking System and Custom Application." 
        },
        { 
            icon: GppGoodIcon, 
            label: "TRAI & DLT Compliance", 
            color: "#00b894", 
            desc:"Every account is registered correctly, ensuring your messages reach customers." 
        },
        { 
            icon: QuestionAnswerIcon, 
            label: "Multiple Message Types", 
            color: "#8e44ad" , 
            desc:"Transactional, promotional, and OTP routes , each configured for its specific needs."
        },
        { 
            icon: SellIcon, 
            label: "Transparent Pricing", 
            color: "#e67e22", 
            desc:"We quote SMS credits clearly, with no hidden charges during your compaign." 
        },
        { 
            icon: HeadsetMicIcon, 
            label: "Local, Responsive Support", 
            color: "#1976d2" , 
            desc:"Based in Papanaickenpalayam, Coimbatore, our team resolves gateway issues quickly."
        },
        { 
            icon: SignalCellularAltIcon, 
            label: "High Delivery Performance", 
            color: "#e91e63", 
            desc:" We measure success by delivery rates and customer response, not just by price." 
        },
      ];
    


  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}> Why Choose KitKat as Your Bulk SMS Servic Provider</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5, px:5, py:3}}>
                 <Grid container spacing={4} justifyContent="center">
               { 
                    processSteps.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} >
                                 
                                 <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                        <Box  sx={{ height: "100%",  textAlign: "center", px: 3,  
                                         borderRight: index !== processSteps.length - 1 ? "1px solid #E5E7EB" : "none",  }} >
                                <Icon sx={{color:item.color, fontSize:'60px'}} />
                                
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: "#03174e", textAlign: "center" , lineHeight:1.5, mb:2}}>
                                    {index + 1}. {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 400, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
                                      {item.desc}
                                 </Typography>
                                 </Box>

                            </Box>
                            </Grid>
                            </>
                        )

                    })
                
                }
                  </Grid>
            </Grid>

        </Grid>








    </Box>
  )
}

export default WhyKitkat
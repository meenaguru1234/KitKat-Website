import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Benifits = () => {

     const benifitprocess = [
        { 
            icon: GpsFixedIcon, 
            label: "High Open Rate", 
            color: "#1976d2", 
            desc: "SMS has up to 98% open rate, ensuring your message is read." 
        },
        { 
            icon: AccessTimeIcon, 
            label: "Instant Delivery", 
            color: "#00b894", 
            desc:"Messages are delivered within seconds to thousands of recipients." 
        },
        { 
            icon: CurrencyRupeeIcon, 
            label: "Cost-Effective", 
            color: "#8e44ad" , 
            desc:"Reach more customers at a fraction of the cost of other channels."
        },
        { 
            icon: PhoneAndroidIcon, 
            label: "Wider Reach", 
            color: "#e67e22", 
            desc:"Works on all mobiles, including feature phones and DND numbers (Transactional)." 
        },
        { 
            icon: VerifiedUserIcon, 
            label: "Reliable & Secure", 
            color: "#1976d2" , 
            desc:"Enterprise-grade infrastructure with data security and 99.9% uptime."
        },
        { 
            icon: TrendingUpIcon, 
            label: "Detailed Analytics", 
            color: "#e91e63", 
            desc:"Track delivery reports, response rates and campaign performance in real-time." 
        },
      ];
  return (
      <Box sx={{ py: 3, px: { xs: 2, md: 6 }, border:'1px solid #f0f1f2', bgcolor:'#fff', borderRadius:2}}>

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, 
                textAlign:'center' }}> Benifits of our Bulk SMS Service</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5, px:5, py:3}}>
                 <Grid container spacing={4} justifyContent="center">
               { 
                    benifitprocess.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} >
                                 
                                 <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 220 , gap:2}}>
                                        <Box  sx={{ height: "100%",  textAlign: "center", px: 3,  
                                         borderRight: index !== benifitprocess.length - 1 ? "1px solid #E5E7EB" : "none",  }} >
                                <Icon sx={{color:item.color, fontSize:'60px'}} />
                                
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: "#03123c", textAlign: "center" ,fontSize:'18px', lineHeight:1.5, mb:2}}>
                                    {index + 1}. {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 400, color: "#03123c", textAlign: "center", fontSize: 16, lineHeight: 1.5 }}>
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

export default Benifits
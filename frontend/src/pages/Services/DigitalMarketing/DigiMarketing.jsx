import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PolylineIcon from '@mui/icons-material/Polyline';
import OutboundIcon from '@mui/icons-material/Outbound';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const DigiMarketing = () => {

   const service = [
        { 
            icon: SearchIcon, 
            label: "Search Engine Optimisation (SEO)", 
            bgcolor: "#1976d2", 
            color: "#1976d2", 
            desc: "Rank higher on Google with technical SEO, content optimisation and quality link building." 
        },
        { 
            icon: PolylineIcon, 
            label: "Social Media Marketing", 
            bgcolor: "#e91e63", 
            color: "#e91e63", 
            desc:"Build brand awareness, engage your audience and grow across Facebook, Instagram, LinkedIn & more." 
        },
        { 
            icon: OutboundIcon, 
            label: "Pay-Per-Click Advertising", 
            bgcolor: "#8e44ad" , 
            color: "#8e44ad" , 
            desc:"Target high-intent customers with Google Ads & social advertising that deliver measurable results."
        },
        { 
            icon: EditDocumentIcon, 
            label: "Content Marketing", 
            bgcolor: "orange", 
            color: "orange", 
            desc:"Engaging blogs, website copy & campaign content that build authority and drive organic traffic." 
        },
        { 
            icon: EmailIcon, 
            label: "Email Marketing", 
            bgcolor: "#1976d2" , 
            color: "#1976d2" , 
            desc:"Nurture leads, retain customers and increase repeat business with smart email campaigns."
        },
        { 
            icon: SupportAgentIcon, 
            label: "Digital Marketing Consulting", 
            bgcolor: "#00b894", 
            color: "#00b894", 
            desc:" Audits, strategy sessions & training to empower your in-house marketing teams." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}>Our Digital Marketing Services</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5, px:5, py:3}}>
                 <Grid container spacing={4} justifyContent="center">
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} >
                                 
                               <Box sx={{height:'100%', width:'220px', gap:4, display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:4, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                 
                               <Box  sx={{ width: 70, height: 70,  borderRadius: "50%",  bgcolor: item.bgcolor,  display: "flex",  alignItems: "center",
                                        justifyContent: "center",   boxShadow: "0 6px 16px rgba(0,0,0,0.12)", }}>
                                    <Icon sx={{  color: "#fff",  fontSize: 36, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: item.color, fontSize:'20px', textAlign: "center" , lineHeight:1.5, mb:2}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
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

export default DigiMarketing
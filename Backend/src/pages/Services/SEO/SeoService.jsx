import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const SeoService = () => {

   const service = [
        { 
            icon: AnalyticsOutlinedIcon, 
            label: "On-Page & Off-Page SEO Services",
            color: "#22c55e", 
            desc: "Optimize your website content, structure, and earn quality backlinks to improve rankings and authority.",
        },
        { 
            icon: SettingsOutlinedIcon, 
            label: "Technical SEO Services",
            color: "#2563eb", 
            desc: "We fix crawl errors, speed issues, indexing problems, and improve your website's overall performance.",
        },
        { 
            icon: LocationOnOutlinedIcon, 
            label:"Local SEO Services & Google Business Profile",
            color: "#f97316" , 
            desc: "Rank in local searches and Google Maps with our proven local SEO and GBP optimization strategies.",
        },
        { 
            icon: ShoppingCartOutlinedIcon, 
            label:  "Ecommerce & Small Business SEO",
            color: "#9333ea", 
            desc: "SEO solutions tailored for online stores and SMEs to increase traffic, leads and sales.",
        },
        { 
            icon: ApartmentOutlinedIcon, 
            label: "Enterprise SEO Services",
            color: "#06b6d4" , 
            desc:    "Advanced SEO strategies for large websites with thousands of pages and multiple locations.",
        },
        { 
            icon: DescriptionOutlinedIcon, 
            label: "SEO Audit & Consulting",
            color: "#f97316", 
            desc: "In-depth SEO audits with actionable insights and expert consulting to drive better results.",
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 700, color: "#051749", fontSize: { xs: "1.6rem", md: "2rem" }, 
                textAlign:'center' }}> Our <Box component="span" sx={{color:'#2973f4' }}>SEO</Box> Services</Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{width: 55, borderBottom: "4px solid #2973f4", }} />
                </Box> </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5, px:5, py:3}}>
                 <Grid container spacing={4} justifyContent="center">
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} >
                                 
                               <Box sx={{height:'100%', width:'220px', gap:1, display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:4, border:'1px solid #E5E7EB', borderRadius:5, py:1, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 220 , gap:2}}>
                                 
                               <Box  sx={{ py:2, display: "flex",  alignItems: "center",    justifyContent: "center",   }}>
                                    <Icon sx={{  color: item.color,  fontSize: 60, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 0, fontWeight: 700, color: '#071B52', fontSize:'18px', textAlign: "center" , lineHeight:1.5, mb:0}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
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

export default SeoService
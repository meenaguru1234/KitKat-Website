import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

import seo from "../../../assets/Images/training-digimark/seo.png"
import googleads from "../../../assets/Images/training-digimark/googleads.png"
import socialmedia from "../../../assets/Images/training-digimark/socialmedia.png"
import content from "../../../assets/Images/training-digimark/contentmaking.png"
import email from "../../../assets/Images/training-digimark/emailmarketing.png"
import analytics from "../../../assets/Images/training-digimark/googleanalytics.png"

const ProjectDigi = () => {

   const service = [
        { 
            img: seo, 
            label: "SEO Project", 
            color: "#1976d2", 
            desc: "Optimize a website and improve search engine rankings." 
        },
        { 
            img: googleads, 
            label: "Google Ads Campaign", 
            color: "#00b83d", 
            desc:"Create and manage search & display ad campaigns." 
        },
        { 
            img: socialmedia, 
            label: "Social Media Campaign", 
            color: "#8e44ad" , 
            desc:"Plan and run paid campaigns on Facebook & Instagram."
        },
        { 
            img: content, 
            label: "Content Marketing", 
            color: "#e67e22", 
            desc:"Create blogs, content calendars and promote content." 
        },
        { 
            img: email, 
            label: "Email Marketing", 
            color: "#e91e63" , 
            desc:"Design email campaigns and automation workflows."
        },
        { 
            img: analytics, 
            label: "Analytics Project", 
            color: "#1976d2", 
            desc:"Track, analyse and report campaign performance." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

         <Box sx={{width:1400, display: "flex", justifyContent: "center", alignItems: "center", gap:2, mb: 2, flexWrap: "wrap", textAlign: "center" }}>
              
                <Typography variant="h3" sx={{ fontWeight: 700,textTransform:'uppercase', color: "#071B52", fontSize: { xs: "1rem", sm: "1rem", md: "1.4rem" } }}>
                Live Projects & Real Campaigns
                </Typography>
               
              </Box>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',alignItems:'center'}}>
                 <Grid container spacing={3}  justifyContent="center" sx={{}}>
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 5, md: 2 }} sx={{width:'100%',  }} >
                                 
                               <Box sx={{height:'100%', width:'220px',  display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:0, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                 
                               <Box  sx={{   display: "flex",  alignItems: "center",  justifyContent: "center",  height:65, width:75 }}>
                                    <Box component='img' src={item.img} sx={{objectFit:'fit', height:'100%', width:'100%'}} />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: '#071B52', fontSize:'16px', textAlign: "center" , lineHeight:1.5,}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, }}>
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

export default ProjectDigi
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import DomainIcon from '@mui/icons-material/Domain';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DigiSolution = () => {

   const service = [
        { 
            icon: RocketLaunchIcon, 
            label: "Start-ups", 
            color: "green", 
            desc: "	Affordable digital marketing packages that build initial visibility & credibility without straining early budgets." 
        },
        { 
            icon: BarChartIcon, 
            label: "Growing SMEs", 
            color: "blue", 
            desc:"Scalable, multi-channel campaigns that expand smoothly as your customer base and ambitions grow." 
        },
        { 
            icon: DomainIcon, 
            label: "Established Corporates", 
            color: "#8e44ad" , 
            desc:"Advanced solutions with deeper analytics, CRM integration & dedicated account management."
        },
        { 
            icon: ShoppingCartIcon, 
            label: "E-commerce Sellers", 
            color: "orange", 
            desc:"Conversion-focused SEO & PPC campaigns built to drive product sales & repeat purchases." 
        },
        
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#0b2775", fontSize: { xs: "1.6rem", md: "2.1rem" }, 
                textAlign:'center' }}>Digital Marketing Solutions for Every Business Stage</Typography>
            </Grid>


            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5}}>
                 <Grid container spacing={2}  sx={{ display:'flex',justifyContent:"center"}}>
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }} >
                                 
                               <Box sx={{height:'100%', width:'350px',  display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:4, 
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", px:3,
                                    width: 500 , gap:2,  border:'1px solid #E5E7EB', borderRadius:5, py:3, }}>
                                 
                               <Box  sx={{    display: "flex",  alignItems: "center",justifyContent: "center",  }}>
                                    <Icon sx={{  color:item.color,  fontSize: 46, height:90}}  />
                                    </Box> 
                                <Box sx={{display:'flex', flexDirection:'column', }}>  
                                    <Typography sx={{ mt: 2, fontWeight: 700, color: '#0a2b86', fontSize:'20px', textAlign: "center" , lineHeight:1.5, mb:2}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
                                      {item.desc}
                                 </Typography></Box>
                              

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

export default DigiSolution
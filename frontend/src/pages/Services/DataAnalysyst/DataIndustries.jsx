import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FactoryIcon from '@mui/icons-material/Factory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const DataIndustries = () => {

      const processSteps = [
        { 
            icon: FactoryIcon, 
            label: "Manufacturing", 
            color: "#0b4a89", 
            desc: "Process optimization, quality control, predictive maintenance & production analytics." 
        },
        { 
            icon: ShoppingCartIcon, 
            label: "Retail & E-commerce", 
            color: "#0b4a89", 
            desc:"Sales analytics, customer segmentation, inventory & demand forecasting." 
        },
        { 
            icon: MonitorHeartIcon, 
            label: "Healthcare", 
            color: "#0b4a89" , 
            desc:"Patient analytics, operational efficiency, and healthcare performance reporting."
        },
        { 
            icon: AccountBalanceIcon, 
            label: "Banking & Finance", 
            color: "#0b4a89", 
            desc:"Risk analytics, fraud detection, customer analytics & regulatory reporting." 
        },
        { 
            icon: SchoolIcon, 
            label: "Education", 
            color: "#0b4a89" , 
            desc:"Student performance analytics, attendance tracking & institutional reporting."
        },
         { 
            icon: LocalShippingIcon, 
            label: "Logistics & Supply Chain", 
            color: "#0b4a89" , 
            desc:"Route optimization, tracking, inventory management & supply chain visibility."
        },
     
      ];
    


  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#083a6b", fontSize: { xs: "1.6rem", md: "2.2rem" }, 
                textAlign:'center' }}> Industries We Serve</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', 
                alignItems:'center' ,maxWidth:'100%',   py:3, border:'1px solid #E5E7EB', borderRadius:5}}>
                 <Grid container spacing={2} sx={{display:'flex', justifyContent:'center', }}>
               { 
                    processSteps.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} sx={{}} >
                                 
                                 <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2, }}>
                                        <Box  sx={{        width: "100%",   maxWidth: 200,    textAlign: "center",     px: 3, 
                                         borderRight: index !== processSteps.length - 1 ? "1px solid #E5E7EB" : "none",  }} >
                                <Icon sx={{color:item.color, fontSize:'60px'}} />
                                
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: "#042f5a", textAlign: "center" , lineHeight:1.5, mb:2}}>
                                    {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 400, color: "#042f5a", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
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

export default DataIndustries
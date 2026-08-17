import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StorageIcon from '@mui/icons-material/Storage';           // Unlock Hidden Value
import ManageSearchIcon from '@mui/icons-material/ManageSearch';  // Better Decision Making
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'; // Reduce Costs
import ShowChartIcon from '@mui/icons-material/ShowChart';        // Forecast & Plan
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


const WhyBusiness = () => {

      const processSteps = [
        { 
            icon: StorageIcon, 
            label: "Unlock Hidden Value", 
            color: "#0b4a89", 
            desc: "Turn scattered data from multiple sources into valuable business insights." 
        },
        { 
            icon: ManageSearchIcon, 
            label: "Better Decision Making", 
            color: "#0b4a89", 
            desc:"Make faster, smarter decisions based on facts, not just intuition." 
        },
        { 
            icon: CurrencyRupeeIcon, 
            label: "Reduce Costs", 
            color: "#0b4a89" , 
            desc:"Identify inefficiencies and bottlenecks to cut waste and improve profitability."
        },
        { 
            icon: ShowChartIcon, 
            label: "Forecast & Plan", 
            color: "#0b4a89", 
            desc:"Predict trends and demand to plan resources and inventory more effectively." 
        },
        { 
            icon: GpsFixedIcon, 
            label: "Stay Competitive", 
            color: "#0b4a89" , 
            desc:"Use data insights to innovate faster and stay ahead in the market."
        },
     
      ];
    


  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#0b4a89", fontSize: { xs: "1.6rem", md: "2.2rem" }, 
                textAlign:'center' }}> Why Coimbatore Businesses Need Business Data Analytics</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', 
                alignItems:'center' ,maxWidth:'100%',   py:3}}>
                 <Grid container spacing={9} justifyContent="center" sx={{display:'flex', justifyContent:'center'}}>
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
                                
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: "#0b4a89", textAlign: "center" , lineHeight:1.5, mb:2}}>
                                    {item.label} 
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

export default WhyBusiness
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MonitorIcon from '@mui/icons-material/Monitor';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const DigiWhyKitkat = () => {

      const processSteps = [
        { 
            icon: MonitorIcon, 
            label: "Technically Grounded Strategy", 
            color: "#063a6d", 
            desc: "Our dev background means we understand websites, speed, tracking & data better than most." 
        },
        { 
            icon: FilterAltIcon, 
            label: "	Full-Funnel Campaigns", 
            color: "#00b894", 
            desc:"We connect SEO, social media, PPC & email into one seamless customer journey." 
        },
        { 
            icon: FileCopyIcon, 
            label: "Transparent Reporting", 
            color: "#063a6d" , 
            desc:"Clear, honest performance data every month. No vague metrics or hidden agendas."
        },
        { 
            icon: GroupsIcon, 
            label: "CRM-Integrated Marketing", 
            color: "#e67e22", 
            desc:"Campaigns connect directly into CRM systems we build, improving lead follow-up and conversions." 
        },
        { 
            icon: LocationPinIcon, 
            label: "Local Expertise, National Reach", 
            color: "#063a6d" , 
            desc:"Based in Coimbatore, serving clients across India with the same dedication."
        },
     
      ];
    


  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#03174e", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}> Why Choose KitKat as Your Digial Marketing Company?</Typography>
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
                                
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: "#03174e", textAlign: "center" , lineHeight:1.5, mb:2}}>
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

export default DigiWhyKitkat
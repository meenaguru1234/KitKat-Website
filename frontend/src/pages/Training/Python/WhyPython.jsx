import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';           // Industry Experts
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';     // Live Projects
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';           // Job Oriented Training
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; // Placement Support
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';       // Lifetime Access
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';   // Flexible Batches


const WhyPython = () => {

   const service = [
        { 
            icon: GroupsOutlinedIcon, 
            label: "Industry Experts", 
            bgcolor: "#1976d2", 
            color: "#1976d2", 
            desc: "Learn from working professionals with real-world experience." 
        },
        { 
            icon: LaptopMacOutlinedIcon, 
            label: "Live Projects", 
            bgcolor: "#00b894", 
            color: "#00b894", 
            desc:"Work on real projects that build your strong portfolio.." 
        },
        { 
            icon: SchoolOutlinedIcon, 
            label: "Job Oriented Training", 
            bgcolor: "#8e44ad" , 
            color: "#8e44ad" , 
            desc:"Syllabus designed as per latest industry requirements."
        },
        { 
            icon: WorkspacePremiumOutlinedIcon, 
            label: "100% Placement Support", 
            bgcolor: "#e67e22", 
            color: "#e67e22", 
            desc:"Resume building, mock interviews & placement assistance." 
        },
        { 
            icon: MenuBookOutlinedIcon, 
            label: "Lifetime Access", 
            bgcolor: "#1976d2" , 
            color: "#1976d2" , 
            desc:"Get lifetime access to course materials and recorded sessions."
        },
        { 
            icon: AccessTimeOutlinedIcon, 
            label: "Flexible Batches", 
            bgcolor: "#e91e63", 
            color: "#e91e63", 
            desc:" Choose from weekday, weekend or online batches." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 600, color: "#051749", fontSize: { xs: "1.6rem", md: "2rem" }, 
                textAlign:'center' }}>Why KitKat is the <Box component='span' sx={{color:'#e1210bec'}}> Best Python Training Institute</Box> in Coimbatore?</Typography>
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
                               flexWrap:'wrap', px:0, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                 
                               <Box  sx={{   display: "flex",  alignItems: "center",  justifyContent: "center",   }}>
                                    <Icon sx={{  color: "#0d3dc2",  fontSize: 50, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: '#0d3dc2', fontSize:'16px', textAlign: "center" , lineHeight:1,}}>
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

export default WhyPython
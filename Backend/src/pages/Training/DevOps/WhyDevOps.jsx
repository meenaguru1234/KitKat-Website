import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';           // Industry Experts
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';  
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';       // Lifetime Access
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';   // Flexible Batches


const WhyDevOps = () => {

   const service = [
        { 
            icon: GroupsOutlinedIcon, 
            label: " Expert Mentors", 
            bgcolor: "#1976d2", 
            color: "#1976d2", 
            desc: "Learn from practicing DevOps engineers with real-world experience." 
        },
        { 
            icon: LaptopMacOutlinedIcon, 
            label: "Real-time Projects", 
            bgcolor: "#00b894", 
            color: "#00b894", 
            desc:"Work on industry level projects and build a strong portfolio." 
        },
        { 
            icon: AdsClickOutlinedIcon, 
            label: "Placement Focused", 
            bgcolor: "#8e44ad" , 
            color: "#8e44ad" , 
            desc:"Resume building, mock interviews & placement assistance till you get placed."
        },
        { 
            icon: MenuBookOutlinedIcon, 
            label: "Up-to-date Syllabus", 
            bgcolor: "#e91e63", 
            color: "#e91e63", 
            desc:"Industry-relevant curriculum updated regularly to match market needs." 
        },
        { 
            icon: TrackChangesOutlinedIcon, 
            label: "Lifetime Access", 
            bgcolor: "#e67e22" , 
            color: "#e67e22" , 
            desc:"Access recorded sessions, notes and resources even after course completion."
        },
        { 
            icon: AccessTimeOutlinedIcon, 
            label: "Flexible Batches", 
            bgcolor: "#1976d2", 
            color: "#1976d2", 
            desc:"weekday, weekend and online batches to fit your schedule." 
        },
      ];

  return (
    <Box sx={{ py: 2, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 600, color: "#051749", fontSize: { xs: "1.6rem", md: "2rem" }, 
                textAlign:'center' }}>Why Choose KitKat for  <Box component='span' sx={{color:'#e1210bec'}}> DevOps Training</Box> in Coimbatore?</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:5, px:5, py:1}}>
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
                                    <Icon sx={{  color: item.color,  fontSize: 60, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: item.color, fontSize:'18px', textAlign: "center" , lineHeight:1,}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 16, }}>
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

export default WhyDevOps
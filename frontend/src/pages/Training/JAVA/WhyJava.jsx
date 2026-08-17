import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';


const WhyJava = () => {

   const service = [
        { 
            icon: CodeIcon, 
            label: "Project Based Learning", 
            color: "#e67e22", 
            desc: "Built real world projects and gain practical experience." 
        },
        { 
            icon: CastForEducationIcon, 
            label: "Expert Trainers", 
            color: "#00b83d", 
            desc:"Learn from Industry professionals with years of experience." 
        },
        { 
            icon: CrisisAlertIcon, 
            label: "Placement Focused", 
            color: "#1976d2" , 
            desc:"Dedicated placement cell from resume, Mock interviews & refferals."
        },
        { 
            icon: AccessTimeIcon, 
            label: "Flexible Batches", 
            color: "#8e44ad", 
            desc:"weekday & weekend batches to suit your schedule" 
        },
        { 
            icon: CardMembershipIcon, 
            label: "Certification", 
            color: "#e91e63" , 
            desc:"Industry recognized certificate from  boost your career."
        },
        { 
            icon: HeadsetMicIcon, 
            label: "Personalized Mentorship", 
            color: "#00b894", 
            desc:" Individual attention and continuous feedback." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

         <Box sx={{width:1400, display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap", textAlign: "center" }}>
                <Box sx={{ width: 70, height: 3, bgcolor: "#0d3dc2" }} />
                <Typography variant="h3" sx={{ fontWeight: 700,textTransform:'uppercase', color: "#071B52", fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" } }}>
                 Why choose KitKat for java Training in coimbatore
                </Typography>
                <Box sx={{ width: 70, height: 3, bgcolor: "#0d3dc2" }} />
              </Box>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', gap:3, px:5,}}>
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
                                    <Icon sx={{  color: item.color,  fontSize: 50, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: '#071B52', fontSize:'16px', textAlign: "center" , lineHeight:1,}}>
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

export default WhyJava
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SmsIcon from '@mui/icons-material/Sms';
import CampaignIcon from '@mui/icons-material/Campaign';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import StorageIcon from '@mui/icons-material/Storage';

const SmsService = () => {

   const service = [
        { 
            icon: SmsIcon, 
            label: "Transactional SMS Service", 
            bgcolor: "#1976d2", 
            color: "#1976d2", 
            desc: "Deliver order confirmations, appointment reminders and account updates instantly via high-priority routes.." 
        },
        { 
            icon: CampaignIcon, 
            label: "Promotional SMS Service", 
            bgcolor: "#00b894", 
            color: "#00b894", 
            desc:"Reach large audiences with offers and announcements through our promotional SMS gateway." 
        },
        { 
            icon: LockIcon, 
            label: "OTP SMS Service", 
            bgcolor: "#8e44ad" , 
            color: "#8e44ad" , 
            desc:"Fast and secure OTP delivery for logins, payments and verifications using dedicated priority routes."
        },
        { 
            icon: CodeIcon, 
            label: "Bulk SMS API & Integration", 
            bgcolor: "#e67e22", 
            color: "#e67e22", 
            desc:"Developer-friendly HTTP & XML APIs with easy integration into websites, apps and software systems." 
        },
        { 
            icon: EmailIcon, 
            label: "SMS Marketing Platform", 
            bgcolor: "#1976d2" , 
            color: "#1976d2" , 
            desc:"Contact management, scheduled campaigns and detailed delivery analytics in one platform."
        },
        { 
            icon: StorageIcon, 
            label: "Business SMS Gateway", 
            bgcolor: "#e91e63", 
            color: "#e91e63", 
            desc:" Scalable, reliable infrastructure for high-volume messaging and enterprise-level performance." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}>Our Bulk SMS Service</Typography>
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

export default SmsService
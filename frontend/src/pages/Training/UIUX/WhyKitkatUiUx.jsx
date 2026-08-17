import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import uiuxkitkatimg from "../../../assets/Images/whychooseUIUX.png"
import certifcateimg from "../../../assets/Images/certificate.PNG"

const WhyKitkatUiUx = () => {

         const reasons = [
            {
              icon: DoneIcon,
              title: "Learn from working UI/UX designers",
          
            },
            {
              icon: DoneIcon,
              title: "Real Client Project, not mock briefs",
            },
            {
              icon: DoneIcon,
              title: "Practical training with latest industry tools",
            },
            {
              icon: DoneIcon,
              title: "Personalized feedback & one-to-one mentoring",
            },
            {
              icon: DoneIcon,
              title: "Job focused work with placement support ",
            },
              {
              icon: DoneIcon,
              title: "Flexible batch timings(Weekend/Weekday",
            },
          ];
        
          const certificate = [
            {
              icon: DoneIcon,
              title: "Industry Recognized Certification",
          
            },
            {
              icon: DoneIcon,
              title: "Real Project Experience Mentioned",
            },
            {
              icon: DoneIcon,
              title: "Helps You Stand Out To Employers",
            },
           
          ]; 




  return (


   <Box >

       <Grid container spacing={4} sx={{ borderRadius:10, p:3 }}>
     
{/* Right Side Content Why choose kitkat */}
    <Grid size={{ xs: 12, md: 6}} sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>

       <Box sx={{border:'1px solid #E5E7EB',
      //  bgcolor:'#ebeced',
      backgroundImage:`url(${uiuxkitkatimg})` ,
      backgroundSize: "cover",      // ✅ Important
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    p: 3,
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 5,
    minHeight: 360,
    width: "100%",height:'100%', }}>
        
        
         <Box sx={{}}>

            <Box sx={{flex:1, justifyContent:'left', mb:2}}>
                <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#6f0572'}}>Why Choose KitKat?</Typography>
            </Box>

             <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
                {
                    reasons.map((item, index)=>{
                        const Icon = item.icon
                        return(
                             <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                                              <Box
                                                sx={{
                                                  width: 18,
                                                  height:18,
                                                  borderRadius: "50%",
                                                  bgcolor: "#8e58d1",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  flexShrink: 0,
                                                }}
                                              >
                                                <Icon  sx={{fontSize:12, color:'white'}} />
                                              </Box>
                                              <Box>
                                                <Typography sx={{fontSize:{xs:12, md:15}}}>{item.title}</Typography>
                                                </Box>

                            </Box>
                        )
                    })
                }



             </Box>




     </Box>

     <Box  sx={{ height:'100%', width:"40%"}}>
                {/* <Box component='img' src={uiuxkitkatimg}  sx={{height:'100%', width:'100%', objectFit:'fill'}}/> */}
    
     </Box>
         
        </Box>




    </Grid>

    {/* Left Side Content  - UI UX Certificate course*/}

    <Grid size={{ xs: 12, md: 6}}>

           <Box sx={{border:'1px solid #E5E7EB',bgcolor:'#ebeced', p:3,
         display:'flex', justifyContent:'space-evenly', flexDirection:'column', borderRadius:5, height:'100%', width:'100%'}}>
        
        
        
<Box>
    
            <Box sx={{flex:1, justifyContent:'left', mb:2}}>
                <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#6f0572'}}>UI UX Certification Course</Typography>
                <Typography>Get a recognized certificate from KitKat Software Technologies that validates your skills and boosts your career.</Typography>
            </Box>
</Box>



<Box sx={{display:'flex', flexWrap:'nowrap', justifyContent:'space-evenly'}}>
     <Box  sx={{ height:'90%', width:"40%"}}>
                <Box component='img' src={certifcateimg}  sx={{height:'100%', width:'100%', objectFit:'fill'}}/>
    
     </Box>
             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 , p:2, }}>
                {
                    certificate.map((item, index)=>{
                        const Icon = item.icon
                        return(
                             <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                                              <Box
                                                sx={{
                                                  width: 20,
                                                  height:20,
                                                  borderRadius: "50%",
                                                  bgcolor: "#dac4f4",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  flexShrink: 0,
                                                  
                                                }}
                                              >
                                                <Icon  sx={{fontSize:32, color:'#13012a', ml:2}} />
                                              </Box>
                                              <Box>
                                                <Typography sx={{fontSize:{xs:13, lg:20}, color:'#13012a'}}>{item.title}</Typography>
                                                </Box>

                            </Box>
                        )
                    })
                }



             </Box>
</Box>





  

    
         
        </Box>




    </Grid>



</Grid>
   </Box>


  )
}

export default WhyKitkatUiUx
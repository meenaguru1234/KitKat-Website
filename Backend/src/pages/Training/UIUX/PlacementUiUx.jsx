import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import grpimg from "../../../assets/Images/teamimage1.jpg"
import placementImg from "../../../assets/Images/placementmobimg.png"


const PlacementUiUx = () => {

    const processSteps = [
        {
             icon: ModelTrainingIcon,
             color: "#6c4393",
             title: "Training ",
          bgcolor:false,

             desc:"& Skill Building"
        },
        {
            
             icon: PhotoCameraBackIcon,
              color: "#6c4393",
              title: "Portfolio",
          bgcolor:false,

              desc: "Development.",
        },
        {          
            icon: PersonIcon,
            color: "#6c4393",
            title: "Interview",
          bgcolor:false,

            desc: "Preparation",
        },
        {         
         icon: AssignmentIndIcon,
        color: "#6c4393",
        title: "Job",
          bgcolor:false,

        desc: "Refferal",
        },
        {
          icon: DoneIcon,
          color: "white",
          bgcolor:true,
          title: "Get",
          desc: "Placed",
        },
         
    ];



     const reasons = [
                {
                  icon: RadioButtonCheckedIcon,
                  title: "Resume Building   ",
              
                },
                {
                  icon: RadioButtonCheckedIcon,
                  title: "Portfolio Review",
                },
                {
                  icon: RadioButtonCheckedIcon,
                  title: "Interview Preparation",
                },
                {
                  icon: RadioButtonCheckedIcon,
                  title: "Job Refferals",
                },
                {
                  icon: RadioButtonCheckedIcon,
                  title: "Placement Assistence ",
                },
                  
              ];

    return (
        <Box >

            <Grid container size={{xs:12, sm:12, md:6}} spacing={4} sx={{ borderRadius:10, p:3 , display:'flex',flexDirection:{xs:'column', md:'row'}}}>
                {/* Left side Content */}
                <Grid size={{xs:12, md:6}} sx={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>

               
                                    <Box
                   sx={{
                     position: "relative",
                     width: "100%",
                     height: 350,
                     borderRadius: 3,
                     overflow: "hidden",
                     backgroundImage: `url(${placementImg})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                   }}
                 >
                   
                 
                   {/* Text */}
                   <Box
                     sx={{
                       position: "absolute",
                       top: 0,
                       left: 0,
                       width: "55%",
                       height: "100%",
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "center",
                       px: 3,
                       color: "#fff",
                       zIndex: 1,
                     }}
                   >
                     <Typography  fontWeight={700} sx={{fontSize:'1.3rem', fontWeight:700, }}>
                       100% Placement Support
                     </Typography>
                 
                     <Typography sx={{ mt: 2, fontSize: "0.9rem" , mb:2}}>
                       We don't just train, we help you get placed!
                     </Typography>
                  
                 
                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                                                                             <Typography>{item.title}</Typography>
                                                                             </Box>
                             
                                                         </Box>
                                                     )
                                                 })
                                             }
                             
                             
                             
                                          </Box>
                 </Box>
                                  
                            </Box>        
                 
                                  

                    </Grid>


                {/* Right Side Content */}
                <Grid size={{xs:12,sm:12, md:6}} sx={{border:"1px solid #E5E7EB", borderRadius:5}}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                                
                   <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'2rem', fontWeight:600, color:'#332bc5'}}>Our Placement Process</Typography>
          
                        </Box>
                                
             <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row'},justifyContent: "center", alignItems:'flex-start', gap: { xs: 6, md: 3, lg:3 }, px:1 }}>

    {
        processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;

            return (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {/* circle + arrow wrapper */}
                    <Box sx={{ position: 'relative', display: 'flex', mb: 3 }}>
                        <Box sx={{
                            border: `2px solid ${step.color}`,
                            borderRadius: 50,
                            bgcolor: step.bgcolor === false ? "white" : "#330361",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: { xs: 50, sm: 50, lg: 80 },
                            width: { xs: 50, sm: 50, lg: 80 },
                            ml:2
                        }}>
                            <Icon sx={{ fontSize: 42, color: step.color }} />
                        </Box>

                        {/* Arrow - circle-ஓட vertical center-க்கு exact align */}
                        {!isLast && (
                            <ArrowForwardIcon
                                sx={{
                                    display: { xs: "none", md: "block" },
                                    position: 'absolute',
                                    top: '50%',
                                    left: '100%',
                                    transform: 'translate(7px, -50%)', // circle-க்கும் arrow-க்கும் நடுவுல gap
                                    color: "#332bc5",
                                    fontSize: "1.8rem",
                                }}
                            />
                        )}
                    </Box>

                    {/* Text */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 700, color: '#092d91', fontSize: "1rem" }}>
                            {step.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 700, color: '#092d91', fontSize: "1rem" }}>
                            {step.desc}
                        </Typography>
                    </Box>

                </Box>
            );
        })
    }

</Box>              


                    </Box>
                        
        


                </Grid>

             </Grid>         


           </Box>
    );
};

export default PlacementUiUx;
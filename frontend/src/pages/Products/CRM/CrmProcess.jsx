import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import groupimg from "../../../assets/Images/product/crm/groupimg.png"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';


const CrmProcess = () => {



      const processSteps = [
            {
              number:'1',
                 icon: SearchOutlinedIcon,
                 color: "#3a9af4",
                 title: "Discovery ",
              bgcolor:false,
    
                 desc:"Understand your business goals and workflows."
            },
            {
                number:'2',
                 icon: EditOutlinedIcon,
                  color: "#4a9343",
                  title: "Design",
              bgcolor:false,
    
                  desc:"Create wireframes and dashboard prototypes."
            },
            {          
              number:'3',
                icon: CodeOutlinedIcon,
                color: "#e69b2a",
                title: "Development",
              bgcolor:false,
    
                desc:"Agile development with regular updates."
            },
            {         
              number:'4',
             icon: GppGoodOutlinedIcon,
            color: "#6c4393",
            title: "Testing",
              bgcolor:false,
    
            desc:"Thorough testing for performance and security."
            },
             {
          number:'5',
          icon: RocketLaunchOutlinedIcon,
          color: "#f564dd",
          bgcolor:true,
          title: "Launch",
          desc: "Smooth deployment and data migration."
        },
            {
              number:'6',
          icon: SupportAgentOutlinedIcon,
          color: "#4fddda",
          bgcolor:true,
          title: "Support & Training",
          desc: "Training, documentation and ongoing support for your team."
        },
             
        ];


  return (
     <Box sx={{ py: { xs: 5, md: 4 }, px: { xs: 2, md: 6 }, bgcolor: "#f8fafc" , mx:'auto'}}>

 <Grid container sx={{ mx:'auto', width:1465}}>

  <Grid size={{xs:12,sm:12, md:7}} sx={{border:"1px solid #E5E7EB",borderRadius:5, }}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                                
                   <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#08044f'}}>Our CRM Development Process</Typography>
          
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
                            border: `2px solid white`,
                            borderRadius: 50,
                            bgcolor: step.color,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: { xs: 50, sm: 50, lg: 60 },
                            width:  { xs: 50, sm: 50, lg: 60 },
                            ml:2
                        }}>
                            <Icon sx={{ fontSize: 32, color: 'white' }} />
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
                       <Typography sx={{ fontWeight:600, color: '#0d1f4f', fontSize: "1.2rem" , textAlign:'center'}}>
                            {step.number}
                        </Typography>
                        <Typography sx={{ fontWeight:600, color: '#041649', fontSize: "1rem" , textAlign:'center'}}>
                            {step.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, color: '#041649', fontSize: "0.85rem" , textAlign:'center'}}>
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

       <Grid spacing={2} size={{xs:12, md:5}}>
  <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#08044f', px:3}}>Proudly Based in Coimbatore</Typography>
          
                        </Box>
                <Box  sx={{height: "80%",p: {  xs: 2, md: 2.5,  },    display: "flex",alignItems: "center",  }}  >
  
                <Box  sx={{width: "100%",  backgroundColor: "#ffffff",  borderRadius: "12px", overflow: "hidden",
                 minHeight: { xs: "230px", md: "230px", },display: "flex", flexDirection: { xs: "column", sm: "row", }, }} >
  
                 <Box sx={{ width: {   xs: "100%", sm: "45%",},p: {xs: 2,  md: 2,},color: "#172B4D", display:'flex',
                flexDirection:'column'}}>

                    <Box component={'img'} src={groupimg} sx={{borderRadius:5, mb:2}}/>
  
                    <Typography sx={{fontSize: {xs: "14px", md: "14px", }, fontWeight: 700, mb: 1.5, }}  >
                      KitKat Software Technologies
                    </Typography>
  
  
                    <Typography sx={{fontSize: {   xs: "11px", md: "13px",},   lineHeight: 1.7,color: "#444",}} >
                      36, Saravanampatti Main Rd,
                      <br />
                      Peelamedu, Coimbatore,
                      <br />
                      Tamil Nadu 641004
                    </Typography>
  
  
                    <Typography  sx={{mt: 1.5, fontSize: "14px", fontWeight: 600, color: "#172B4D",  }}   >
                      <LocalPhoneOutlinedIcon/> +91 93638 39353
                    </Typography>
  
  
                   
  
                  </Box>


                 <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
                    
                        <iframe style={{borderRadius:"10px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3231196547968!2d76.97610157363856!3d11.01436565476266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1783683945560!5m2!1sen!2sin" 
                  width="100%"  height="250px" loading="lazy"  ></iframe>
  
   <Typography sx={{ mt: 1.5, fontSize: "14px", fontWeight: 600,color: "#1769FF", cursor: "pointer", textAlign:'center' }}>
                      View on Google Maps
                    </Typography>
                    </Box>
                  
  
                </Box>
                
  
              </Box>
    </Grid>


     

 </Grid>
    
    </Box>
  )
}

export default CrmProcess
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
import SettingsIcon from '@mui/icons-material/Settings';


const ProcessMatrimony = () => {



      const processSteps = [
            {
              number:'1',
                 icon: SearchOutlinedIcon,
                 color: "#9b0b70",
                 title: "Discovery ",
                  bgcolor:false,
                 desc:"Understand your community, goals and requirements."
            },
            {
                number:'2',
                 icon: EditOutlinedIcon,
                  color: "#10258dbf",
                  title: "Planning",
                    bgcolor:false,    
                  desc:"Create sitemap, features and project roadmap."
            },
            {          
              number:'3',
                icon: CodeOutlinedIcon,
                color: "#f1950c",
                title: "Design",
              bgcolor:false,    
                desc:"UI/UX design that is clean, attractive & user-friendly."
            },
               {          
              number:'4',
                icon: SettingsIcon,
                color: "#168705",
                title: "Development",
              bgcolor:false,    
                desc:"Agile development with regular updates."
            },
            {         
              number:'5',
             icon: GppGoodOutlinedIcon,
            color: "#6c4393",
            title: "10258dbf",
              bgcolor:false,
    
            desc:"Thorough testing for security & performance."
            },
             {
          number:'6',
          icon: RocketLaunchOutlinedIcon,
          color: "#9b0b70",
          bgcolor:true,
          title: "Launch",
          desc: "Smooth deployment and go-live."
        },
            {
              number:'7',
          icon: SupportAgentOutlinedIcon,
          color: "#10258dbf",
          bgcolor:true,
          title: "Support",
          desc: "Ongoing maintenance and new feature support."
        },
             
        ];


  return (
     <Box sx={{ py: { xs: 5, md: 0 }, px: { xs: 2, md: 6 }, bgcolor: "#f8fafc" , mx:'auto'}}>

 <Grid container sx={{ mx:'auto', width:1300}}>

  <Grid size={{xs:12,sm:12,}} sx={{border:"1px solid #E5E7EB",borderRadius:5, }}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                                
                   <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'1.3rem', fontWeight:600, color:'#08044f'}}>Our Matrimony Website Development Process</Typography>
          
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
                                    transform: 'translate(67px, -60%)', // circle-க்கும் arrow-க்கும் நடுவுல gap
                                    color: "#332bc5",
                                    fontSize: "1.8rem",
                                }}
                            />
                        )}
                    </Box>

                    {/* Text */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb:2 }}>
                      <Typography sx={{ fontWeight:600, color: '#041649', fontSize: "1rem" , textAlign:'center'}}>
                           {step.number}. {step.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, color: '#041649', fontSize: "0.85rem" , textAlign:'center', width:150, }}>
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
  )
}

export default ProcessMatrimony
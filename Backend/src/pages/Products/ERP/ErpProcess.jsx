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
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



const ErpProcess = () => {



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


         const industryweserve = [
                {
              icon: FactoryOutlinedIcon,
              title: "Manufacturing",
              color:'#e89c1a'
            }, 
            {
              icon: LocationCityOutlinedIcon,
              title: "Construction & Real Estate",
              color:'#1a73e8'
            },
                {
              icon: FactoryOutlinedIcon,
              title: "Textiles & Garments",
              color:'#e89c1a'
            }, 
              {
              icon: SchoolOutlinedIcon,
              title: "Education & Institutions",
              color:'#1a73e8'
            },
               {
              icon: ShoppingCartOutlinedIcon,
              title: " Retail & Wholesale",
              color:'#e81a96'
            },
                  {
              icon: LocalShippingOutlinedIcon,
              title: "Logistics & Transport",
              color:'#e8511a'
            },
              {
              icon: LocalHospitalOutlinedIcon,
              title: "Healthcare & Hospitals",
              color:'#26af71'
            },
            {
              icon: MonetizationOnOutlinedIcon,
              title: "Finance & Microfinance",
              color:'#1a73e8'
            },
          
          
      
           
          
          ];

  return (
     <Box sx={{ py: { xs: 5, md: 0 }, px: { xs: 2, md: 6 }, bgcolor: "#f8fafc" , mx:'auto'}}>

 <Grid container sx={{ mx:'auto', width:1465}}>

     <Grid size={{ xs: 12, md: 5 }} sx={{border:'1px solid #c1cef1', borderRadius:5, px:1, py:2}}>
       
            <Typography sx={{fontSize:24, fontWeight:600, color:'#071B52', textAlign:'center'}}>Industries We Serve</Typography>

          <Grid container spacing={2} sx={{px:5, py:5, width:600}}>
            {industryweserve.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 6, sm: 6 }} key={index} >
                  <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 2,  }}>
                    <Box sx={{height:50, width:50,  py:1}}>
                    <Icon sx={{ fontSize: { xs: "1.8rem", md: "2.7rem" }, color: item.color, textAlign:'center', p:'auto' }} />
                     </Box>                    
                     <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: "0.7rem", md: "0.9rem" }, color: "#071B52" , width:200,textAlign:'left'}}>
                      {item.title}
                    </Typography>
                      </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

  <Grid size={{xs:12,sm:12, md:7}} sx={{border:"1px solid #E5E7EB",borderRadius:5, }}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                                
                   <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#08044f'}}>Our ERP Development Process</Typography>
          
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
                                    color: "#928cf1",
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

   


     

 </Grid>
    
    </Box>
  )
}

export default ErpProcess
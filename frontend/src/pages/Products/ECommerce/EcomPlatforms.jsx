import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import shopifyLogo from "../../../assets/Images/product/ecommerce/shopify.png";
import woocommerceLogo from "../../../assets/Images/product/ecommerce/woocommerce.png";
import magentoLogo from "../../../assets/Images/product/ecommerce/magento.png";
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

const EcomPlatforms = () => {

  const platformsArray = [
    {
         logo: shopifyLogo,
          name: "Shopify" ,
          title:"Shopify Development Services",
          desc:"Perfect for fast launches and growing brands. Easy to manage with powerful apps and integrations."
        },
    {
         logo: magentoLogo, 
         name: "Magento" ,
         title:'Magento Development Services',
         desc:"Ideal for large catalogues and complex business logic. Highly scalable and flexible."
        },
    {
         logo: woocommerceLogo, 
         name: "WooCommerce" ,
         title:'WooCommerce Development Services',
         desc:"Best for WordPress users. Powerful, flexible and cost-effective ecommerce solution."
        },
  

  ];

   const processSteps = [
        {
          number:'1',
             icon: SearchOutlinedIcon,
             color: "#3a9af4",
             title: "Discovery ",
          bgcolor:false,

             desc:"We understand your business, products, audience & goals."
        },
        {
            number:'2',
             icon: EditOutlinedIcon,
              color: "#4a9343",
              title: "Design",
          bgcolor:false,

              desc:"Wireframes & design mockups for your approval."
        },
        {          
          number:'3',
            icon: CodeOutlinedIcon,
            color: "#e69b2a",
            title: "Development",
          bgcolor:false,

            desc:"Agile development in sprints with regular updates."
        },
        {         
          number:'4',
         icon: GppGoodOutlinedIcon,
        color: "#6c4393",
        title: "Testing",
          bgcolor:false,

        desc:"Thorough testing of payments, shipping & devices."
        },
        {
          number:'5',
          icon: RocketLaunchOutlinedIcon,
          color: "#f564dd",
          bgcolor:true,
          title: "Launch",
          desc: "We go live smoothly with zero disruption to your business."
        },
            {
              number:'6',
          icon: SupportAgentOutlinedIcon,
          color: "#4fddda",
          bgcolor:true,
          title: "Support",
          desc: "Ongoing support & maintenance for continuous growth."
        },
         
    ];

  return (
    <Box sx={{ py: { xs: 5, md: 4 }, px: { xs: 2, md: 6 }, bgcolor: "#f8fafc" , mx:'auto'}}>

 <Grid container sx={{border:"1px solid #E5E7EB", borderRadius:5, mx:'auto', width:1465}}>



       <Grid spacing={2} size={{xs:12, md:5.5}}>
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem",mt:3, md: "1.5rem" } }}
        >
          Ecommerce Platforms We Specialise In
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", borderRadius: 2 }} />
      </Box>

      {/* Platforms Grid */}
      <Grid container spacing={2} justifyContent="center">
        {platformsArray.map((item, index) => (
          <Grid size={{ xs: 4, sm: 3, md: 4 }} key={index}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                p: { xs: 2, md: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transform: "translateY(-4px)",
                  borderColor: "#1a73e8",
                },
              }}
            >
              <Box
                component="img"
                src={item.logo}
                alt={item.name}
                sx={{
                  width: { xs: "40px", md: "86px" },
                  height: { xs: "40px", md: "86px" },
                  objectFit: "contain",
                }}
              />
          

               <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.7rem", md: "0.9rem" }, color: "#071B52" }}>
                {item.title}
              </Typography>
               <Typography sx={{ fontWeight: 500, fontSize: { xs: "0.7rem", md: "0.85rem" }, color: "#071B52" }}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>


       <Grid size={{xs:12,sm:12, md:6.5}} sx={{}}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', height:'100%'}}>

                                
                   <Box sx={{justifyContent:'left',mb:3 }}>
                            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#08044f'}}>Our Ecommerce Development Process</Typography>
          
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
                            height: { xs: 50, sm: 50, lg: 80 },
                            width: { xs: 50, sm: 50, lg: 80 },
                            ml:2
                        }}>
                            <Icon sx={{ fontSize: 42, color: 'white' }} />
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

 </Grid>
    
    </Box>
  );
};

export default EcomPlatforms;

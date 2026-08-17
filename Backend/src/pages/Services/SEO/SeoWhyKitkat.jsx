import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ServiceHero from '../../../assets/Images/ServiceHero.PNG'
import { CommonButton } from '../../../StyledComponents/CommonButton';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';


const SeoWhyKitkat = () => {

    const benefits = [
        {
            icon: CheckOutlinedIcon,
            title:   "10+ years of experience in search engine optimization",
        },
        {
           icon: CheckOutlinedIcon,
            title:  "Proven strategies that deliver sustainable rankings",
        },
        {
           icon: CheckOutlinedIcon,
            title:   "100% white hat SEO practices - no shortcuts",
        },
        {
            icon: CheckOutlinedIcon,
            title:  "Transparent reports with clear ROI tracking",
        },
        {
            icon: CheckOutlinedIcon,
            title: "Dedicated SEO consultant for every client",
        },
        {
              icon: CheckOutlinedIcon,
            title:  "Affordable SEO services for businesses of all sizes",
        }
    ];

    const impact = [
        {
          
           percentage: '3X',
           color: "#16a34a",
           title: "Increase in",
           subtitle: "Organic Traffic",

        },
        {
           
           percentage: '200%',
           color: "#f97316",
           title: "Growth in",
           subtitle: "Keyword Rankings",

        },
        {
         
           percentage: '150%',
           color: "#2563eb",
           title: "Increase in",
           subtitle: "Leads",

        },
        {
            
           percentage: '2.5%',
           color: "#2563eb",
           title: "Better ROI for",
           subtitle: "Our Clients",

        }
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>

                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 4 }} sx={{}}>
                    <Typography sx={{ fontWeight: 600, color: "#051f67", fontSize: { xs: "1.4rem", md: "1.2rem" } }}>
                        Why Choose KitKat as Your SEO Company?
                    </Typography>

                    <Paper elevation={0} sx={{ border: "1px solid #E5E7EB", borderRadius: "16px", p: { xs: 3, md: 4 } }}>
                        {benefits.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        mb: index !== benefits.length - 1 ? 2 : 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 15,
                                            height: 15,
                                            borderRadius: "20%",
                                            bgcolor: "#227f08",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon sx={{ color: "white", fontSize: "0.9rem" , fontWeight:600}} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: "0.85rem" }}>
                                            {item.title}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                            );
                        })}
                    </Paper>
                </Grid>

                {/* MIDDLE:Our Result speaks */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ border:'1px solid #E5E7EB', borderRadius:5, px:3}}>
                    <Typography sx={{ fontWeight: 600, color: "#031c5f", fontSize: { xs: "1.4rem", md: "1.5rem" }, mb: 1 ,
                textAlign:'center',}}>
                       Our Results Speak
                    </Typography>

                    <Grid container spacing={2}  wrap="wrap" sx={{ width: '100%' }}>
                        {impact.map((story, index) =>{ 

                            let Icon = story.icon
                            
                        return (
                              <Grid
                                 key={index}
                                size={{ xs: 12, nd:6 }}
                                 sx={{
                                    borderRadius: 2,
                                     height: 150,
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "center",
                                     alignItems: "center",
                                     textAlign: "center",
                                     px: 2,
                                     boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                     border:'1px solid #dce4fa'
                                  
                                 }}
                             >
                               
                                 <Box  sx={{ width: '100%',  }}>
                                     <Typography sx={{ fontWeight: 700, color: story.color, fontSize: { xs: "1.3rem", md: "2.5rem" } }}>
                                         {story.percentage}
                                     </Typography>
                                     <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: { xs: "0.75rem", md: "0.9rem" } }}>
                                         {story.title}
                                     </Typography>
                                      <Typography sx={{ fontWeight: 500, color: "#031547", fontSize: { xs: "0.75rem", md: "1rem" } }}>
                                         {story.subtitle}
                                     </Typography>
                                 </Box>
                              </Grid>
                          );
                    }
                        )}
                    </Grid>
                </Grid>

                   <Grid size={{ xs: 12, md: 4 }} sx={{ border:'1px solid #E5E7EB', borderRadius:5, px:3}}>
                    <Typography sx={{ fontWeight: 800, color: "#03174e", fontSize: { xs: "1.4rem", md: "1rem" }, mb: 3, p:1, mt:2 ,
                textAlign:'center',}}>
                       Case Study:Coimbatore Ecommerce Brand
                    </Typography>

                       <Grid container spacing={2}   alignItems="center" sx={{mb:5}}  >
                          <Grid size={{ xs: 12, sm: 5 }}>
                            <Box component="img" src={ServiceHero} sx={{ width: "100%",height: 150,objectFit: "fill",borderRadius: 2,}} />
                          </Grid>
                           <Grid size={{ xs: 12, sm: 7 }}>
                             <Typography  sx={{
                                 fontSize: "0.95rem",
                                 color: "#03174e",
                                 lineHeight: 1.8,
                               }}
                             >
                               Through our SEO strategy, we helped an ecommerce store increase organic traffic by <b>210%</b> and revenue by
                               <b> 185%</b> in just 6 months.
                             </Typography>
                                </Grid>

                        </Grid>

                        <Box sx={{display:"flex",gap:3, mt:-5, py:2}}>
                                <CommonButton  sx={{fontSize:"1rem", bgcolor:'white', border:'1px solid #1a73e8', color:'#1a73e8', fontWeight:550, width:'300px'}}>
                                   View More Case Studies <ArrowForwardOutlinedIcon/> </CommonButton>
                                 </Box>
                       
                       </Grid>
                       
                </Grid>

         
        </Box>
    );
};

export default SeoWhyKitkat;
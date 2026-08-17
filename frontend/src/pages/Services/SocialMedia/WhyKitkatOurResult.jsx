import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import BarChartIcon from '@mui/icons-material/BarChart';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const WhyKitkatOurResult = () => {

    const benefits = [
        {
            icon: DoneIcon,
            title: "Local insight with global social media best practices",
        },
        {
           icon: DoneIcon,
            title: "Creative team that produces content people love to share",
        },
        {
           icon: DoneIcon,
            title: "Transparent pricing with no hidden costs",
        },
        {
            icon: DoneIcon,
            title: "Dedicated account manager for personal support",
        },
        {
            icon: DoneIcon,
            title: "Data-backed strategies focused on measurable results",
        },
        {
              icon: DoneIcon,
            title: "Proven track record across multiple industries",
        }
    ];

    const impact = [
        {
           icon:BarChartIcon,
           percentage: '3X',
           text:"Average Increase in Engagement",
           color:'#0b42d8'

        },
        {
            icon:Diversity2OutlinedIcon,
           percentage: '2.5X',
           text:"Growth in Website Traffic",
           color:'#0b42d8'

        },
        {
            icon:AdsClickOutlinedIcon,
           percentage: '40%',
           text:"Average Increase in Leads",
           color:'#031f6e'

        },
        {
             icon:CurrencyRupeeOutlinedIcon,
           percentage: '2X',
           text:"Better ROI on Ad Spend",
           color:'orange'

        }
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>
                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 5 }} sx={{}}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" } }}>
                       Why Choose KitKat as Your Social Media Marketing Company in Coimbatore?
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
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            bgcolor: "#0c38b1",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon sx={{ color: "white", fontSize: "1rem" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: "1rem" }}>
                                            {item.title}
                                        </Typography>
                                        
                                    </Box>
                                </Box>
                            );
                        })}
                    </Paper>
                </Grid>

                {/* RIGHT: Our Impact in Numbers */}
                <Grid size={{ xs: 12, md: 7 }} sx={{ border:'1px solid #E5E7EB', borderRadius:5, p:2}}>
                    <Typography sx={{ fontWeight: 700, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" }, mb: 3 ,
                textAlign:'left',}}>
                       Our Result Speaks
                    </Typography>

                    <Grid container spacing={0}  wrap="nowrap" sx={{ width: '100%' }}>
                        {impact.map((story, index) =>{ 

                            let Icon = story.icon
                            
                        return (
                              <Grid
                                 key={index}
                                 size="grow"
                                 sx={{
                                     display: "flex",
                                     flexDirection: 'column',
                                     alignItems: 'center',
                                     justifyContent: 'flex-start',
                                     textAlign: 'center',
                                     gap: 1,
                                     px: { xs: 1, md: 2 },
                                     minWidth: 170,
                                     border:'1px solid #E5E7EB',
                                     borderRadius:5,
                                     mx:2
                                     
                                    
                                 }}
                             >
                                 <Box
                                     sx={{
                                         display: "flex",
                                         alignItems: "center",
                                         justifyContent: "center",
                                         width: '100%',
                                     }}
                                 >
                                     <Icon sx={{ color: story.color, fontSize: "5rem" }} />
                                 </Box>
                                 <Box sx={{ width: '100%' }}>
                                     <Typography sx={{ fontWeight: 700, color: "#031f6e", fontSize: { xs: "1.3rem", md: "2.5rem" } }}>
                                         {story.percentage}
                                     </Typography>
                                     <Typography sx={{ fontWeight: 500, color: "#031f6e", fontSize: { xs: "0.75rem", md: "0.9rem" } }}>
                                         {story.text}
                                     </Typography>
                                 </Box>
                              </Grid>
                          );
                    }
                        )}
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default WhyKitkatOurResult;
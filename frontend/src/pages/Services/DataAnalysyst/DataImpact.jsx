import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AdsClickIcon from '@mui/icons-material/AdsClick';

const DataImpact = () => {

    const benefits = [
        {
            icon: DoneIcon,
            title: "Local Coimbatore team with strong analytics expertise",
        },
        {
           icon: DoneIcon,
            title: "Customized solutions aligned with your business goals",
        },
        {
           icon: DoneIcon,
            title: "Latest tools & technologies for faster insights",
        },
        {
            icon: DoneIcon,
            title: "Scalable solutions that grow with your business",
        },
        {
            icon: DoneIcon,
            title: "Transparent communication & measurable results",
        },
        {
              icon: DoneIcon,
            title: "End-to-end support from strategy to implementation",
        }
    ];

    const impact = [
        {
           icon:BarChartIcon,
           percentage: '18%',
           text:"Average Cost Reduction",
           color:'#031f6e'

        },
        {
            icon:BarChartIcon,
           percentage: '35%',
           text:"Average Revenue Growth",
           color:'green'

        },
        {
            icon:AccessTimeIcon,
           percentage: '40%',
           text:"Faster Decision Making",
           color:'#031f6e'

        },
        {
             icon:AdsClickIcon,
           percentage: '95%',
           text:"Client Satisfaction Rate",
           color:'#031f6e'

        }
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>

                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 6 }} sx={{}}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.5rem" } }}>
                        Why Choose KitKat for Data Analytics?
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
                                            bgcolor: "#08277f",
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
                <Grid size={{ xs: 12, md: 6 }} sx={{ border:'1px solid #E5E7EB', borderRadius:5, px:3}}>
                    <Typography sx={{ fontWeight: 800, color: "#082f9b", fontSize: { xs: "1.4rem", md: "1.7rem" }, mb: 3 ,
                textAlign:'center',}}>
                       Our Impact in Numbers
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
                                     minWidth: 0,
                                     borderRight: index !== impact.length - 1 ? '1px solid #E5E7EB' : 'none',
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

export default DataImpact;
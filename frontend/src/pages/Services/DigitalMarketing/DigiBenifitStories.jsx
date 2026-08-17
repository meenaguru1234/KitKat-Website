import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const DigiBenifitStories = () => {

    const benefits = [
        {
            icon: TrendingUpIcon,
            title: "Increase Website Traffic",
            desc: "Attract the right audience through proven strategies.",
        },
        {
            icon: PersonIcon,
            title: "Generate Quality Leads",
            desc: "Convert visitors into enquiries and paying customers.",
        },
        {
            icon: VisibilityIcon,
            title: "Improve Brand Visibility",
            desc: "Build trust and recognition across all digital channels.",
        },
        {
            icon: CurrencyRupeeIcon,
            title: "Better ROI",
            desc: "Data-driven campaigns that deliver maximum returns.",
        },
        {
            icon: ShowChartIcon,
            title: "Long-Term Growth",
            desc: "Sustainable strategies for consistent business growth.",
        },
    ];

    const successStories = [
        {
            logoText: "HEALTH PLUS",
            logoSub: "CLINICS",
            color:'#062780',
            size:20,
            quote: "KitKat helped us increase our appointments by 120% with SEO and targeted campaigns.",
            client: "Health Plus Clinics",
            location: "Coimbatore",
        },
        {
            logoText: "urban",
            logoSub: "furnishings",
            color:'#041b5b',
            size:25,
            quote: "Our online sales grew by 85% in 6 months through PPC and remarketing campaigns.",
            client: "Urban Furnishings",
            location: "Coimbatore",
        },
        {
            logoText: "EduBright",
            logoSub: "ACADEMY",
            color:'#0936b0',
            size:22,
            quote: "Lead generation improved significantly with social media and content marketing.",
            client: "EduBright Academy",
            location: "Coimbatore",
        },
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={4}>

                {/* LEFT: Benefits List */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontWeight: 800, color: "#041b5b", fontSize: { xs: "1.4rem", md: "1.7rem" } }}>
                        Benefits of Our Digital Marketing Services
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
                                        mb: index !== benefits.length - 1 ? 3 : 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: "50%",
                                            bgcolor: "#16a34a",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon sx={{ color: "white", fontSize: "1.4rem" }} />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, color: "#031f6e", fontSize: "1rem" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "0.88rem", color: "#041952" }}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Paper>
                </Grid>

                {/* RIGHT: Client Success Stories */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontWeight: 800, color: "#06226d", fontSize: { xs: "1.4rem", md: "1.7rem" }, mb: 3 ,
                textAlign:'center',}}>
                        Client Success Stories
                    </Typography>

                    <Grid container spacing={2}>
                        {successStories.map((story, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 4 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        border: "1px solid #E5E7EB",
                                        borderRadius: "16px",
                                        p: 2.5,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                   <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                                     <Typography sx={{ fontWeight: 800, fontSize: story.size,  color:story.color }}>
                                        {story.logoText}
                                    </Typography>
                                    <Typography sx={{ fontSize: story.size,   mb: 2,color:story.color }}>
                                        {story.logoSub}
                                    </Typography>
                                   </Box>

                                    <Typography sx={{ fontSize: "0.85rem", color: "#082b64", lineHeight: 1.6, flexGrow: 1 }}>
                                        {story.quote}
                                    </Typography>

                                    <Box sx={{ mt: 2 }}>
                                        <Typography sx={{ fontWeight: 700, color: "#021b61", fontSize: "0.85rem" }}>
                                            – {story.client}
                                        </Typography>
                                        <Typography sx={{ fontSize: "0.8rem", color: "#021b4d" }}>
                                            {story.location}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default DigiBenifitStories;
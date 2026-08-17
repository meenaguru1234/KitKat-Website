import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';

const Clientstories = () => {

    const successStories = [
        {
            logoText: "Sakthi",
            logoSub: "TEXTILES",
            color: '#0a8a3f',
            title: "Sakthi Textiles, Coimbatore",
            textBefore: "Implemented predictive analytics for demand forecasting and reduced raw material waste by ",
            highlight: "18%",
            textAfter: " in 6 months.",
        },
        {
            logoText: "urban",
            logoSub: "Super Store",
            color: '#e8590c',
            title: "Urban Super Store",
            textBefore: "Optimized inventory and sales strategy using BI dashboards, resulting in ",
            highlight: "22%",
            textAfter: " increase in overall profitability.",
        },
        {
            logoText: "Kovai",
            logoSub: "Hospitals",
            color: '#0936b0',
            title: "Kovai Hospitals",
            textBefore: "Automated patient and operational reporting, improving efficiency and reducing report generation time by ",
            highlight: "60%",
            textAfter: ".",
        },
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>
            <Grid container spacing={5}>

                <Grid size={{ xs: 12 }}>
                    <Typography sx={{ fontWeight: 800, color: "#06226d", fontSize: { xs: "1.4rem", md: "1.7rem" }, mb: 3,
                textAlign: 'center' }}>
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
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            flexShrink: 0,
                                            minWidth: 70,
                                            py:4
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 800, fontSize: "1.8rem", color: story.color, lineHeight: 1.1 }}>
                                            {story.logoText}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: "1rem", letterSpacing: 0.5, color: story.color }}>
                                            {story.logoSub}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#0748b2", mb: 1 }}>
                                            {story.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "0.9rem", color: "rgb(5, 31, 67)", lineHeight: 1.7 }}>
                                            {story.textBefore}
                                            <Box component="span" sx={{ fontWeight: 700, color: "#0958d9", fontSize:20 }}>
                                                {story.highlight}
                                            </Box>
                                            {story.textAfter}
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

export default Clientstories;

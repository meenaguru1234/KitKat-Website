import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const SeoProcess = () => {

    const processSteps = [
        {
            number: 1,
             icon: SearchOutlinedIcon,
             color: "#22c55e",
             title: "SEO Audit & Analysis",
             desc: "We analyze your website, competitors, and industry to identify opportunities.",
        },
        {
            number: 2,
             icon: TrackChangesOutlinedIcon,
              color: "#f97316",
              title: "Keyword Research & Strategy",
              desc: "We find high-value keywords your customers search for and build a strategy.",
        },
        {
            number: 3,
            icon: EditNoteOutlinedIcon,
            color: "#a855f7",
            title: "On-Page Optimization",
            desc: "We optimize content, meta tags, internal links, and site structure for better rankings.",
        },
        {
            number: 4,
         icon: CodeOutlinedIcon,
        color: "#06b6d4",
        title: "Technical Optimization",
        desc: "We fix technical SEO issues, improve speed, mobile-friendliness, and crawlability.",
        },
        {
            number: 5,
          icon: LinkOutlinedIcon,
          color: "#f97316",
          title: "Off-Page SEO & Link Building",
          desc: "We build quality backlinks and brand mentions to improve authority.",
        },
         {
            number: 6,
          icon: QueryStatsOutlinedIcon,
         color: "#2563eb",
         title: "Reporting & Growth",
         desc:"We monitor performance, share reports, and continuously improve results.",
        },
    ];

    return (
        <Box sx={{ py: 2, px: { xs: 2, md: 6 } }}>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 800,
                    color: "#092d91",
                    fontSize: { xs: "1.6rem", md: "2rem" },
                    textAlign: "center",
                    mb: 2,
                }}
            >
                Our <Box component='span' sx={{color:'#649ae1'}}>SEO</Box> Process
            </Typography>

            <Box
                sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "16px",
                    p: { xs: 3, md: 5 },

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { xs: 6, md: 0 },
                    }}
                >
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <React.Fragment key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        width: { xs: "100%", md: 180 },
                                        position: "relative",
                                        minHeight: 280,
                                    }}
                                >
                                    {/* Number badge */}
                                

                                    {/* Icon */}
                                       
                                    <Box sx={{height:90, width:90, borderRadius:50, border:`2px solid ${step.color}`, mb:3, display:'flex', justifyContent:'center',py:2}}>
                                    <Icon sx={{ fontSize: 52, color: step.color, justifyContent:'center',  }} />

                                    </Box>
                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: '#092d91',
                                            fontSize: "1.1rem",
                                            mb: 1,
                                             minHeight: 55,
                                        }}
                                    >
                                         {step.number}. {step.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontSize: "0.85rem",
                                            color: "#02123c",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {step.desc}
                                    </Typography>
                                </Box>

                                {/* Arrow between steps (not after last one) */}
                                {index !== processSteps.length - 1 && (
                                    <KeyboardDoubleArrowRightIcon
                                        sx={{
                                            display: { xs: "none", md: "block" },
                                            color: "#9ca3af",
                                            fontSize: "1.8rem",
                                            mx: 1, mt:-10
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default SeoProcess;
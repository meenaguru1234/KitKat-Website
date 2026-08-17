import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const SocialProcess = () => {

    const processSteps = [
        {
            number: 1,
             icon: TrackChangesOutlinedIcon,
             
             color: "#2563eb",
             title: "Discovery & Research",
             desc: "We study your business, audience, competitors and market trends.",
        },
        {
            number: 2,
             icon: SummarizeOutlinedIcon,
              color: "#f97316",
              title: "Strategy Planning",
              desc: "We create a custom strategy with clear goals and KPI metrics.",
        },
        {
            number: 3,
            icon: CreateOutlinedIcon,
            color: "#22c55e",
            title: "Content Creation",
            desc: "Engaging, on-brand content designed to connect and convert.",
        },
        {
            number: 4,
         icon: CampaignOutlinedIcon,
        color: "#a855f7",
        title: "Campaign Execution",
        desc: "We run targeted ad campaigns across the right platforms.",
        },
        {
            number: 5,
          icon: TimelineOutlinedIcon,
          color: "#f97316",
          title: "Community Engagement",
          desc: "We engage with your audience and build a loyal community.",
        },
         {
            number: 6,
          icon: BrokenImageOutlinedIcon,
         color: "#06b6d4",
         title: "Performance Analysis",
         desc:"We analyze results, optimize campaigns and improve ROI.",
        },
            {
            number: 7,
          icon: EmojiEventsOutlinedIcon,
         color: "#2563eb",
         title: "Growth & Optimization",
         desc:"Continuous improvement to scale results and achieve growth.",
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
                Our <Box component='span' sx={{color:'#0a6df0'}}>Social Media Marketing</Box> Process
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

export default SocialProcess;
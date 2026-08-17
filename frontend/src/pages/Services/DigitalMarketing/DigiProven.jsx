import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SettingsIcon from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const DigiProven = () => {

    const processSteps = [
        {
            number: 1,
            icon: FactCheckIcon,
            badgeColor: "#7c3aed",   // purple
            label: "Discover & Audit",
            desc: "We analyse your business, website & competitors to find opportunities.",
        },
        {
            number: 2,
            icon: TrackChangesIcon,
            badgeColor: "#22c55e",   // green
            label: "Strategy & Planning",
            desc: "A customised plan with the right mix of channels and clear goals.",
        },
        {
            number: 3,
            icon: SettingsIcon,
            badgeColor: "#f97316",   // orange
            label: "Execute & Optimise",
            desc: "We implement, monitor and optimise campaigns for maximum performance.",
        },
        {
            number: 4,
            icon: ShowChartIcon,
            badgeColor: "#2563eb",   // blue
            label: "Measure & Report",
            desc: "Transparent reporting with insights that show real business impact.",
        },
        {
            number: 5,
            icon: EmojiEventsIcon,
            badgeColor: "#ec4899",   // pink
            label: "Grow & Scale",
            desc: "We scale what works and keep improving your ROI month after month.",
        },
    ];

    return (
        <Box sx={{ py: 5, px: { xs: 2, md: 6 } }}>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 800,
                    color: "#092d91",
                    fontSize: { xs: "1.6rem", md: "2.2rem" },
                    textAlign: "center",
                    mb: 5,
                }}
            >
                Our Proven Digital Marketing Process
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
                                        width: { xs: "100%", md: 190 },
                                        position: "relative",
                                    }}
                                >
                                    {/* Number badge */}
                                    <Box
                                        sx={{
                                            width: 34,
                                            height: 34,
                                            borderRadius: "50%",
                                            backgroundColor: step.badgeColor,
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            fontSize: "0.95rem",
                                            mt:-6,ml:-9,
                                            mb:3
                                        }}
                                    >
                                        {step.number}
                                    </Box>

                                    {/* Icon */}
                                    <Icon sx={{ fontSize: "3rem", color: step.badgeColor, mb: 1.5 }} />

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: '#092d91',
                                            fontSize: "1.1rem",
                                            mb: 1,
                                        }}
                                    >
                                        {step.label}
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

export default DigiProven;
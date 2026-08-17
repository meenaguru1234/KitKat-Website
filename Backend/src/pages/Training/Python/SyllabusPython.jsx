import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import python from "../../../assets/Images/python.png";
import code from "../../../assets/Images/code.png";
import settings from "../../../assets/Images/settings.png";
import dj from "../../../assets/Images/dj.png";
import chart from "../../../assets/Images/chart.png";
import brain from "../../../assets/Images/brain.png";
import monitor from "../../../assets/Images/monitor.png";

const SyllabusPython = () => {
    const processSteps = [
        {
            number: "Module 1",
            icon: python,
            color: "#2563eb",
            title: "Python for Beginners",
            desc: [
                "Installation & Setup",
                "Basic Syntax",
                "Variables & Data Types",
                "Operators",
                "Control Statements",
                "Functions",
            ],
        },
        {
            number: "Module 2",
            icon: code,
            color: "#22c55e",
            title: "Core Python Programming",
            desc: [
                "Data Structures",
                "String Manipulation",
                "File Handling",
                "Exception Handling",
                "Modules & Packages",
                "OOP Concepts",
            ],
        },
        {
            number: "Module 3",
            icon: settings,
            color: "#f97316",
            title: "Advanced Python",
            desc: [
                "Decorators",
                "Generators",
                "Iterators",
                "Multithreading",
                "Regular Expressions",
                "DB Connectivity",
            ],
        },
        {
            number: "Module 4",
            icon: dj,
            color: "#ed3cbd",
            title: "Web Development (Django & Flask)",
            desc: [
                "Django - MVC, Models",
                "Templates & Forms",
                "RESTful APIs",
                "Flask Fundamentals",
                "Mini & Major Projects",
                "Deployment",
            ],
        },
        {
            number: "Module 5",
            icon: chart,
            color: "#a855f7",
            title: "Data Science with Python",
            desc: [
                "NumPy",
                "Pandas",
                "Data Visualization",
                "Data Cleaning",
                "EDA & Statistics",
                "Real-world Project",
            ],
        },
        {
            number: "Module 6",
            icon: brain,
            color: "#0e7490",
            title: "Machine Learning & AI",
            desc: [
                "Supervised Learning",
                "Unsupervised Learning",
                "Scikit-learn",
                "Model Evaluation",
                "Basic Neural Networks",
                "ML Project",
            ],
        },
        {
            number: "Module 7",
            icon: monitor,
            color: "#ef4444",
            title: "Automation & Scripting",
            desc: [
                "Python Scripting",
                "Web Scraping",
                "Automation",
                "File & Email Handling",
                "Task Scheduling",
                "Real-time Project",
            ],
        },
    ];

    return (
        <Box
            sx={{
                py: 5,
                px: { xs: 2, sm: 3, md: 5 },
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: 800,
                    color: "#092d91",
                    fontSize: {
                        xs: "1.5rem",
                        sm: "1.8rem",
                        md: "2rem",
                    },
                    mb: 3,
                }}
            >
                <Box component="span" sx={{color:'#092d91',}}>Python</Box>
                <Box
                    component="span"
                    sx={{
                        color: "#ed441e",
                        mx: 1,
                    }}
                >
                   Course Syllabus
                </Box>
                <Box
                    component="span"
                    sx={{
                        color: "#092d91",
                    }}
                >
                    –  What You Will Learn
                </Box>
            </Typography>

            {/* Main container */}
            <Box
                sx={{
                    width: '100%',
                    overflowX: { xs: "auto", md: "visible" },
                    pb: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "stretch",
                        justifyContent: "center",
                        gap: { xs: 2, md: 1.5 },
                        minWidth: { xs: "1100px", md: "auto" },
                    }}
                >
                    {processSteps.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Card */}
                            <Box
                                sx={{
                                    width: {
                                        xs: 100,
                                        sm: 160,
                                        md: 155,
                                        lg: 170,
                                    },
                                    minWidth: {
                                        xs: 145,
                                        md: 155,
                                    },
                                    borderRadius: "10px",
                                    backgroundColor: "#fff",
                                    boxShadow:
                                        "0px 3px 10px rgba(0,0,0,0.12)",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Module Header */}
                                <Box
                                    sx={{
                                        minHeight: {
                                            xs: 78,
                                            md: 82,
                                        },
                                        backgroundColor: step.color,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        px: 1,
                                        py: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: {
                                                xs: "0.85rem",
                                                md: "0.9rem",
                                            },
                                            fontWeight: 700,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {step.number}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontSize: {
                                                xs: "0.82rem",
                                                md: "0.88rem",
                                            },
                                            fontWeight: 700,
                                            lineHeight: 1.2,
                                            mt: 0.3,
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                </Box>

                                {/* Icon */}
                                <Box
                                    sx={{
                                        height: 95,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        p: 1.5,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={step.icon}
                                        alt={step.title}
                                        sx={{
                                            width: 55,
                                            height: 55,
                                            objectFit: "contain",
                                        }}
                                    />
                                </Box>

                                {/* Description */}
                                <Box
                                    sx={{
                                        px: 1.2,
                                        pb: 2,
                                        flexGrow: 1,
                                    }}
                                >
                                    {step.desc.map((item, itemIndex) => (
                                        <Box
                                            key={itemIndex}
                                            sx={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 0.6,
                                                mb: 1,
                                            }}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    color: step.color,
                                                    fontSize: "10px",
                                                    mt: "4px",
                                                    flexShrink: 0,
                                                }}
                                            />

                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        xs: "0.66rem",
                                                        md: "0.68rem",
                                                    },
                                                    lineHeight: 1.4,
                                                    color: "#071B52",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Arrow */}
                            {index !== processSteps.length - 1 && (
                                <Box
                                    sx={{
                                        display: {
                                            xs: "flex",
                                            md: "flex",
                                        },
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minWidth: { xs: 20, md: 20 },
                                    }}
                                >
                                    <KeyboardDoubleArrowRightIcon
                                        sx={{
                                            color: step.color,
                                            fontSize: {
                                                xs: "1.5rem",
                                                md: "1.7rem",
                                            },
                                        }}
                                    />
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SyllabusPython;
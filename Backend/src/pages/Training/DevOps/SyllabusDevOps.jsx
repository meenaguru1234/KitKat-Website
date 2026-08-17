import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import linux from "../../../assets/Images/training-devops/linux.png"
import git from "../../../assets/Images/training-devops/git.png"
import jenkins from "../../../assets/Images/training-devops/jenkins.png"
import docker from "../../../assets/Images/training-devops/docker.png"
import kubernete from "../../../assets/Images/training-devops/kubernate.png"
import aws from "../../../assets/Images/training-devops/aws.png"
import devops from "../../../assets/Images/training-devops/devops.png"
import SchoolIcon from '@mui/icons-material/School';


const SyllabusDevOps = () => {
    const processSteps = [
        {
            number: "Module 1",
            img: linux,
            color: "#2563eb",
            title: "Linux & Scripting",
            desc: [
              "Linux Fundamentals",
                "File System",
               " Shell Scripting",
                "Process Management",
                "Users & Permissions"
            ],
        },
        {
            number: "Module 2",
            img: git,
            color: "#22c55e",
            title: "Git & Version Control",
            desc: [
              "Git Basics",
              "Branching & Merging",
              "Remote Repositories",
              "Git Workflow",
              "Hands-on Practice"
            ],
        },
        
        {
            number: "Module 3",
            img: jenkins,
            color: "#f97316",
            title: "CI with Jenkins",
            desc: [
              "Jenkins Installation",
              "Jobs & Plugins",
              "Build Triggers",
              "Pipeline as Code",
              "CI Best Practices",
            ],
        },
          {
            number: "Module 4",
            img: docker,
            color: "#0e7490",
            title: "Containers with Docker",
            desc: [
              "Docker Basics",
              "Images & Containers",
              "Dockerfile",
              "Docker Compose",
              "Hands-on Projects",
            ],
        },
        {
            number: "Module 5",
            img: kubernete,
            color: "#ed3cbd",
            title: "Kubernetes",
            desc: [
              "K8s Architecture",
              "Pods & Deployments",
              "Services & Ingress",
              "ConfigMaps & Secrets",
              "Helm Basics",
            ],
        },
        {
            number: "Module 6",
            img: aws,
            color: "#a855f7",
            title: "Cloud & DevOps Tools",
            desc: [
              "AWS Core Services",
              "EC2, S3, IAM, VPC",
              "Ansible Basics",
              "Monitoring (Prometheus)",
              "Logging & Alerts",
            ],
        },
      
        {
            number: "Module 7",
            img: devops,
            color: "#ef4444",
            title: "CI/CD Project",
            desc: [
               "End-to-End Pipeline",
               "Build, Test, Deploy",
               "Monitoring Setup",
               "Real-time Project",
               "Portfolio Ready",
            ],
        },
    ];

    return (
        <Box sx={{ py: 1, px: { xs: 2, sm: 3, md: 5 }, }} >
            {/* Heading */}
            <Typography  sx={{ textAlign: "center", fontWeight: 800, color: "#092d91", fontSize: { xs: "1.5rem",sm: "1.8rem",md: "2rem", },
                    mb: 3,   }} >
                <Box component="span" sx={{color:'#092d91',}}></Box>
                <Box component="span" sx={{ color: "#ed441e", mx: 1, }} >
                  DevOps Course Syllabus
                </Box>
                <Box component="span"  sx={{  color: "#092d91",   }} >
                    –  What You Will Learn
                </Box>
            </Typography>

            {/* Main container */}
            <Box sx={{  width: '100%', overflowX: { xs: "auto", md: "visible" }, pb: 2, }} >
                <Box  sx={{  display: "flex",   alignItems: "stretch",   justifyContent: "center", gap: { xs: 2, md: 1.5 },
                        minWidth: { xs: "1100px", md: "auto" },}}>
                    {processSteps.map((step, index) => {
                        const Icon = step.icon
                        return (
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
                                        mb:1
                                    }}
                                >
                                 <Box
                                        component="img"
                                        src={step.img}
                                        alt={step.title}
                                        sx={{
                                            width: 75,
                                            height:75,
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
                    )
                    }
                    )}
                </Box>
            </Box>
             <Box sx={{display:'flex', justifyContent:'center',}}>
            <Typography sx={{border:'1px solid #d0dcfe', width:'60%', textAlign:'center', py:1.3, borderRadius:2, bgcolor:'#d0dcfe', 
                color:'#052a92', fontSize:18, fontWeight:550}}>
              <SchoolIcon/>  Hands-on labs, real-world assignments and capstone project in every stage!</Typography>
        </Box>
        </Box>
       
    );
};

export default SyllabusDevOps;
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import DoneIcon from '@mui/icons-material/Done';

import careerimg from "../../../assets/Images/training-devops/careerimg.png"

import linux from "../../../assets/Images/training-devops/linux.png"
import git from "../../../assets/Images/training-devops/git.png"
import jenkins from "../../../assets/Images/training-devops/jenkins.png"
import docker from "../../../assets/Images/training-devops/docker.png"
import kubernete from "../../../assets/Images/training-devops/kubernate.png"
import aws from "../../../assets/Images/training-devops/aws.png"
import ansible from "../../../assets/Images/training-devops/ansible.png"
import terraform from "../../../assets/Images/training-devops/terraform.png"
import prometheus from "../../../assets/Images/training-devops/premetheus.png"
import github from "../../../assets/Images/training-devops/github.png"

const ToolsTechADevOps = () => {

    const career = [
  {
    icon: DoneIcon,
    title: "DevOps Engineer",
  },
    {
    icon: DoneIcon,
    title: "Site Reliability Engineer (SRE)",
  },
    {
    icon: DoneIcon,
    title: "Cloud Engineer",
  },
    {
    icon: DoneIcon,
    title: "Release Engineer",
  },
    {
    icon: DoneIcon,
    title: "Build & Release Engineer",
  },
    {
    icon: DoneIcon,
    title: "Infrastructure Engineer",
  },
];

const devopsTools = [
  {
    icon: linux,
    name: "Linux",
  },
  {
    icon: git,
    name: "Git",
  },
  {
    icon: jenkins,
    name: "Jenkins",
  },
  {
    icon: docker,
    name: "Docker",
  },
  {
    icon: kubernete,
    name: "Kubernetes",
  },
  {
    icon: aws,
    name: "AWS",
  },
  {
    icon: ansible,
    name: "Ansible",
  },
  {
    icon: terraform,
    name: "Terraform",
  },
  {
    icon: prometheus,
    name: "Prometheus",
  },
  {
    icon: github,
    name: "GitHub",
  },
  
];


return (
  <Box
    sx={{
      width: "100%",
      px: { xs: 2, md: 4 },
      py: 5,
    }}
  >
    <Grid container spacing={3}>

       {/* ================= TOOLS & TECHNOLOGIES ================= */}
      <Grid size={{ xs: 12, lg: 6 }}>
        <Box
          sx={{
            border: "1px solid #e4e7f0",
            borderRadius: 3,
            overflow: "hidden",
            height: "100%",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >

          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "1.7rem" },
              fontWeight: 700,
              color: "#5a16d6",
              p: 3,
              pb: 2,
            }}
          >
            Tools & Technologies You Will Master
          </Typography>


          <Grid container>

            {devopsTools.map((item, index) => (
              <Grid
                size={{ xs: 6, sm: 2.3 }}
                key={index}
              >
                <Box
                  sx={{
                    height: 145,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRight:
                      index % 4 !== 3
                        ? "1px solid #e5e5e5"
                        : "none",

                    borderBottom:
                      index < 8
                        ? "1px solid #e5e5e5"
                        : "none",
                  }}
                >

                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.name}
                    sx={{
                      width: 55,
                      height: 55,
                      objectFit: "contain",
                      mb: 1.2,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#15213f",
                    }}
                  >
                    {item.name}
                  </Typography>

                </Box>
              </Grid>
            ))}

          </Grid>
        </Box>
      </Grid>

      {/* ================= devops COURSES ================= */}
<Grid size={{ xs: 12, lg: 6 }}>
  <Box
    sx={{
      border: "1px solid #e4e7f0",
      borderRadius: 3,
      p: { xs: 2, md: 3 },
      height: "100%",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", md: "1.6rem" },
        fontWeight: 700,
        color: "#051e5d",
        mb: 3,
      }}
    >
      Career Opportunities After DevOps Course
    </Typography>

    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        gap: 2,
      }}
    >

      {/* CAREER LIST */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {career.map((item, index) => {
          const Icon = item.icon;

          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  minWidth: 20,
                  border: "2px solid #e1e5f5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#193fc0",
                  mt: 0.2,
                }}
              >
                <Icon
                  sx={{
                    fontSize: 16,
                    color: "white",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  color: "#041448",
                  lineHeight: 1.5,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={careerimg}
          alt="DevOps Career Opportunities"
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: 330,
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

    </Box>
  </Box>
</Grid>


     

    </Grid>
  </Box>
);     
}

export default ToolsTechADevOps
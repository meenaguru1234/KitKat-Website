import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import { FaPython } from "react-icons/fa";

import python from "../../../assets/Images/training-ai/python.png"
import numpy from "../../../assets/Images/training-ai/numpy.png"
import pandas from "../../../assets/Images/training-ai/pandas.png"
import scikitlearn from "../../../assets/Images/training-ai/scikitlearn.png"
import tensorflow from "../../../assets/Images/training-ai/tensorflow.png"
import keras from "../../../assets/Images/training-ai/keras.png"
import pytorch from "../../../assets/Images/training-ai/pytorch.png"
import opencv from "../../../assets/Images/training-ai/opencv.png"
import matplotlib from "../../../assets/Images/training-ai/matplotlib-removebg-preview.png"
import huggingface from "../../../assets/Images/training-ai/huggingface.png"
import langchain from "../../../assets/Images/training-ai/langchain.png"





const ToolsTechAi = () => {

    const aiCourses = [
  {
    icon: WorkspacePremiumOutlinedIcon,
    title: "AI Certification Course",
    description: "Industry recognized certificate on course completion.",
    isicon:true
  },
  {
    icon: VisibilityOutlinedIcon,
    title: "Computer Vision Course",
    description: "Build applications that can see and understand images.",
    isicon:true

  },
  {
    icon: PsychologyOutlinedIcon,
    title: "Machine Learning Course",
    description: "Learn ML algorithms and build intelligent models.",
    isicon:true

  },
  {
    icon: AutoAwesomeOutlinedIcon,
    title: "Generative AI Course",
    description: "Master LLMs, prompt engineering and AI content generation.",
    isicon:true

  },
  {
    icon: HubOutlinedIcon,
    title: "Deep Learning Course",
    description: "Build and train deep neural networks using TensorFlow.",
    isicon:true

  },
  {
    img: python,
    title: "AI with Python Course",
    description: "Combine Python programming with AI and ML.",
    isicon:false
  },
  {
    icon: ChatOutlinedIcon,
    title: "NLP Course",
    description: "Work with text data and build chatbots and language models.",
    isicon:true

  },
  {
    icon: BarChartOutlinedIcon,
    title: "AI for Data Science Course",
    description: "Apply AI techniques to solve real data science problems.",
    isicon:true

  },
];

const aiTools = [
  {
    icon: python,
    name: "Python",
  },
  {
    icon: numpy,
    name: "NumPy",
  },
  {
    icon: pandas,
    name: "Pandas",
  },
  {
    icon: scikitlearn,
    name: "Scikit-learn",
  },
  {
    icon: tensorflow,
    name: "TensorFlow",
  },
  {
    icon: keras,
    name: "Keras",
  },
  {
    icon: pytorch,
    name: "PyTorch",
  },
  {
    icon: opencv,
    name: "OpenCV",
  },
  {
    icon: matplotlib,
    name: "Matplotlib",
  },
  {
    icon: python,
    name: "NLTK",
  },
  {
    icon: huggingface,
    name: "Hugging Face",
  },
  {
    icon: langchain,
    name: "LangChain",
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

      {/* ================= AI COURSES ================= */}
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
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              color: "#051e5d",
              mb: 3,
            }}
          >
            AI Courses We Offer
          </Typography>

          <Grid container spacing={3}>
            {aiCourses.map((item, index) => {
              const Icon = item.icon;

              return (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >

                    {/* ICON CIRCLE */}
                    <Box
                      sx={{
                        minWidth: 65,
                        width: 65,
                        height: 65,
                        border: "2px solid #e1e5f5",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {
                        item.isicon ? 
                        (
                        <Icon
                        sx={{
                          fontSize: 34,
                          color: "#193fc0",
                        }}
                      />
                    ) :( 
                    <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: 35,
                      height:35,
                      objectFit: "contain",
                      mb: 1.2,
                      alignItems:'center'

                    }}
                  />)
                      }
                    </Box>

                    {/* CONTENT */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#193fc0",
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          color: "#072267",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>


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

            {aiTools.map((item, index) => (
              <Grid
                size={{ xs: 6, sm: 3 }}
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

    </Grid>
  </Box>
);     
}

export default ToolsTechAi
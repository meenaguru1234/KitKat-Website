import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";

import pythonofferimg from "../../../assets/Images/pythonofferimg.png";

import python from "../../../assets/Images/python.png";
import barchart from "../../../assets/Images/barchart.png";
import monitorpython from "../../../assets/Images/monitorpython.png";
import dj from "../../../assets/Images/dj.png";
import chart from "../../../assets/Images/chart.png";
import brain from "../../../assets/Images/brain.png";
import monitor from "../../../assets/Images/monitor.png";
import certificateimg from "../../../assets/Images/certificateimg.png"
import flash from "../../../assets/Images/flash.png"

const CoursePython = () => {

  const leftPythonArray = [
    {
      icon: python,
      title: "Basic Python Course",
      desc: "Perfect for beginners starting their coding journey.",
    },
    {
      icon: barchart,
      title: "Advanced Python Course",
      desc: "For those who want to master Python programming.",
    },
    {
      icon: monitorpython,
      title: "Python Full Stack Course",
      desc: "Learn frontend, backend & database with Python.",
    },
    {
      icon: certificateimg,
      title: "Python Certification Course",
      desc: "Get industry recognized certificate on completion.",
    },
  ];

  const rightPythonArray = [
    {
      icon: dj,
      title: "Python Django Course",
      desc: "Build secure and scalable web applications.",
    },
    {
      icon: flash,
      title: "Python Flask Course",
      desc: "Build lightweight web apps and REST APIs.",
    },
    {
      icon: chart,
      title: "Python Data Science Course",
      desc: "Analyse data & build insights using Python.",
    },
    {
      icon: brain,
      title: "Python Machine Learning Course",
      desc: "Build intelligent models with real datasets.",
    },
    {
      icon: monitor,
      title: "Python Automation Course",
      desc: "Automate tasks and improve productivity.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 6 },

        /* faded background */
        background:
          "linear-gradient(135deg, #eef6ff 0%, #f8fbff 45%, #ffffff 100%)",
      }}
    >

      <Grid  container spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: "1400px",  mx: "auto", p: { xs: 2, md: 3 }, borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(224,238,255,0.85), rgba(255,255,255,0.95))",
          boxShadow: "0 8px 30px rgba(31, 73, 125, 0.08)",
        }}
      >

        {/* ================= LEFT SIDE ================= */}

        <Grid   size={{ xs: 12, md: 4 }} sx={{ display: "flex", flexDirection: "column", }} >

          {/* Heading */}

          <Typography   sx={{ fontSize: {xs: "28px", sm: "32px", md: "34px", }, lineHeight: 1.25, fontWeight: 700, color: "#06296f", mb: 2,
              px: { xs: 1, md: 0 }, }}>  Python Courses <br />  We Offer </Typography>

          {/* Girl Image */}

          <Box  sx={{position:'relative', width: "100%", flex: 1, minHeight: { xs: "300px", md: "500px" }, borderRadius: "18px",  overflow: "hidden",  backgroundColor: "#dceafb", }} >
            <Box  component="img" src={pythonofferimg} alt="Python Courses"  sx={{ width: "100%",  height: "100%",  
              minHeight: { xs: "300px", md: "500px" }, objectFit: "cover", display: "block",}}  />

             </Box>

              {/* <Paper  sx={{
                                                 position: "absolute", bottom: "20%", right: "14%",
                                                 p: 1.5, borderRadius: "12px", width:'20%', height:'20%'}}>
                                           
                                                   <Box component="img" src={python} sx={{width: "100%",height: "100%",
                                                     objectFit: "fill",display: "block", }}/>
                            
             
                                             </Paper> */}

        </Grid>


        {/* ================= RIGHT SIDE ================= */}

        <Grid  size={{ xs: 12, md: 8 }} sx={{ display: "grid", gridTemplateColumns: {  xs: "1fr", sm: "1fr 1fr", },
        gap: { xs: 1.5, md: 2 }, alignContent: "start", }} >

          {/* LEFT COLUMN */}

          <Box  sx={{ display: "flex", flexDirection: "column", }} >

            {
            leftPythonArray.map((item, index) => (
              <Paper  key={index} elevation={0}  sx={{ minHeight: { xs: "110px", md: "115px",}, p: {xs: 2, md: 2,},
                  display: "flex",  alignItems: "center",  borderRadius: "14px", border: "1px solid #e5eaf2", backgroundColor: "#ffffff",
                  boxShadow: "0 3px 12px rgba(31, 73, 125, 0.08)", transition: "0.3s",
                    "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow:"0 8px 20px rgba(31, 73, 125, 0.14)",
                  },
                }}
              >

                {/* Icon */}

                <Box  sx={{ width: "70px",  minWidth: "70px",  height: "70px", display: "flex", alignItems: "center",  
                justifyContent: "center",  mr: 2,  borderRadius: "50%",  backgroundColor: "#f5f9ff",   }} >
                  <Box  component="img"  src={item.icon} alt={item.title}  sx={{ width: "50px",  height: "50px",  objectFit: "contain", }} />
                </Box>

                {/* Divider */}

                <Box  sx={{ width: "1px", height: "65px", backgroundColor: "#e5e7eb",  mr: 2, }}  />

                {/* Content */}

                <Box>
                  <Typography sx={{fontWeight: 700,  color: "#06296f", fontSize: {xs: "15px", md: "16px", }, }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{  color: "#333",  fontSize: {  xs: "12px",md: "13px",  },lineHeight: 1.5, }}>
                    {item.desc}
                  </Typography>
                </Box>

              </Paper>
            ))}

          </Box>


          {/* RIGHT COLUMN */}

          <Box sx={{ display: "flex",flexDirection: "column",  }} >

            {rightPythonArray.map((item, index) => (
              <Paper  key={index}  elevation={0} sx={{ minHeight: {xs: "110px",md: "115px",},p: {xs: 2,md: 2, },display: "flex",
                  alignItems: "center",borderRadius: "14px", border: "1px solid #e5eaf2",backgroundColor: "#ffffff",
                  boxShadow: "0 3px 12px rgba(31, 73, 125, 0.08)", transition: "0.3s",
                    "&:hover": {transform: "translateY(-3px)",boxShadow:"0 8px 20px rgba(31, 73, 125, 0.14)",
                  },
                }}
              >

                {/* Icon */}

                <Box sx={{width: "70px", minWidth: "70px",height: "70px",display: "flex",alignItems: "center",justifyContent: "center",
                    mr: 2, borderRadius: "50%", backgroundColor: "#f5f9ff",  }}  >
                  <Box component="img" src={item.icon} alt={item.title} sx={{width: "50px", height: "50px",objectFit: "contain",}}/>
                </Box>

                {/* Divider */}

                <Box sx={{width: "1px", height: "65px", backgroundColor: "#e5e7eb", mr: 2, }} />

                {/* Content */}

                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#06296f", fontSize: { xs: "15px", md: "16px",}, mb: 0.5, }} >
                    {item.title}
                  </Typography>

                  <Typography sx={{color: "#333", fontSize: {  xs: "12px",  md: "14px", }, lineHeight: 1.5,  width:'60%' }}>
                    {item.desc}
                  </Typography>
                </Box>

              </Paper>
            ))}

          </Box>

        </Grid>

      </Grid>

    </Box>
  );
};

export default CoursePython;
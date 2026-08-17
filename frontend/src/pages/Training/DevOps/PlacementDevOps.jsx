import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";
import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import placementpytonimg from "../../../assets/Images/placementpythonbg.png"
import tcs from "../../../assets/Images/tcsbelowtext.png"
import infosys from "../../../assets/Images/infosys.png"
import wipro from "../../../assets/Images/wipro.png"
import cognizant from "../../../assets/Images/cognizant.png"
import zoho from "../../../assets/Images/zoho.png"
import avatar1 from "../../../assets/Images/training-devops/boyimg1.jpg"
import avatar2 from "../../../assets/Images/training-devops/client2.jpg"
import DoneIcon from '@mui/icons-material/Done';
import placementSupport from "../../../assets/Images/training-devops/placementsupport.png"
import placementimg from "../../../assets/Images/training-devops/placementimg.png"

const PlacementDevOps = () => {


  const placementSupport = [
    "Resume Building",
    "Aptitude Training",
    "Mock Interviews",
    "Technical Interviews",
    "Job Referrals",
    "Placement Assistance",
  ];

  const placementRecord = [
    {
      number: "500+",
      title: "Students Placed",
      color: "#1769c2",
    },
    {
      number: "150+",
      title: "Hiring Partners",
      color: "#16a34a",
    },
    {
      number: "95%",
      title: "Success Rate",
      color: "#6d28d9",
    },
  ];

  const successtory = [
    {
      avatar: avatar1,
      name: "— Karthik R.",
      comment: "The DevOps course at Kitkat gave me practical exposure and confidence. I got placed as a DevOps Engineer in a top IT company.",
    },
    {
      avatar: avatar2,
      name: "— Priya S.",
      comment: "Mentors are excellent and the hands-on projects helped me a lot. Best DevOps training institute in Coimbatore!",
    },
  ];

     const companylogo = [
          {
             logo: tcs
          },
          {
              logo:infosys
  
          },
          {
              logo:wipro
  
          },
           {
              logo:cognizant
  
          },
           {
              logo:zoho
  
          }
      ]


  return (

    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 5 },

        background:
          "linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
      }}
    >



      <Grid container spacing={2} sx={{ maxWidth: "1400px",  mx: "auto",mt: { xs: 5, md: 6 },}} >

                            {/* left side contetn */}


    

         {/* ================= 100% PLACEMENT SUPPORT ================= */}
<Grid size={{ xs: 12, md: 4 }}>
  <Box
    sx={{
         width: "100%",
      height: 350,
      borderRadius: 3,
      overflow: "hidden",

      backgroundImage: `url(${placementimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      display: "flex",
      alignItems: "flex-start",
      p: 3,
    }}
  >
    {/* Content */}
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        p: { xs: 2.5, md: 1 },
        width: { xs: "60%", md: "65%" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.4rem", md: "1.6rem" },
          fontWeight: 700,
          color: "#eee",
          mb: 2.5,
        }}
      >
        100% Placement Support
      </Typography>

      {/* Resume Building */}
     
       <Box>
                          {placementSupport.map(
                            (item, index) => (

                              <Box     key={index}    sx={{   display: "flex",   alignItems: "center",     gap: 1, mb: 1.7,   }}     >
                                <CheckCircleOutlineOutlinedIcon     sx={{ color: "White",  fontSize: 20,     }}    />
                                <Typography      sx={{  color: "white",    fontSize: { xs: "13px",  md: "14px",     },   
                                fontWeight: 600,    }}  >    {item} </Typography>
                              </Box>
                )
                          )}
                        </Box>


    </Box>

    {/* IMAGE */}
{/* <Box sx={{height:'auto', width:'auto'}}>
      <Box
      component="img"
      src={placementSupport}
      alt="Placement Support"
      sx={{
      border:'2px solid red',
        width: "58%",
        height: "auto",
        objectFit: "contain",
        zIndex: 1,
      }}
    />
  </Box> */}
</Box>
</Grid>
        


                            {/* Middle contetn */}

        <Grid size={{  xs: 12, md: 5, }}    >

          <Paper  elevation={0}  sx={{  minHeight: { xs: "390px",  md: "390px",  }, height: "100%", borderRadius: "16px", border:"1px solid #e2e8f0",
                    overflow: "hidden",  background: "linear-gradient(135deg,#eef6ff,#faf7ff)",}}  >

            {/* Heading */}

            <Typography sx={{textAlign: "center", color: "#06296f",  fontWeight: 700, fontSize: { xs: "23px", md: "25px", },py: 2,}}  >
              Our Placement Record
            </Typography>


            {/* STATISTICS */}

            <Grid  container sx={{ borderTop:"1px solid #e5e7eb", borderBottom:"1px solid #e5e7eb", }} >

              {placementRecord.map(
                (item, index) => (

                  <Grid  key={index}  size={4}  sx={{  textAlign: "center", py: 3, borderRight: index !== 2 ? "1px solid #e5e7eb": "none", }} >

                    <Typography   sx={{ fontSize: { xs: "28px", md: "34px", }, fontWeight: 800, color: item.color,   }} >
                      {item.number}
                    </Typography>

                    <Typography  sx={{ color: "#06296f",fontWeight: 600,  fontSize: { xs: "11px", md: "13px", }, }} >
                      {item.title}
                    </Typography>

                  </Grid>

                )
              )}

            </Grid>


            {/* HIRING PARTNERS */}

            <Box   sx={{ p: 3, }} >

              <Typography   sx={{ textAlign: "center", fontSize: {  xs: "19px", md: "21px",  },  fontWeight: 700, color: "#06296f",
                  mb: 3, }}  >     Our Top Hiring Partners  </Typography>


              <Grid  container    spacing={1}  alignItems="center"  justifyContent="center"   >               
                 {/* {[
                  "TCS",
                  "Infosys",
                  "wipro",
                  "accenture",
                  "ZOHO",
                ].map((company, index) => ( */}

                  {/* <Grid
                    key={index}
                    size={{
                      xs: 4,
                      sm: 2.4,
                    }}
                  > */}

                    {/* <Typography
                      sx={{
                        textAlign: "center",

                        fontSize: {
                          xs: "15px",
                          md: "20px",
                        },

                        fontWeight: 700,

                        color:
                          index === 0
                            ? "#1769c2"
                            : index === 1
                            ? "#2484c6"
                            : index === 2
                            ? "#0f766e"
                            : index === 3
                            ? "#111827"
                            : "#f97316",
                      }}
                    >
                      {company}
                    </Typography>

                  </Grid>

                ))} */}


               <Box sx={{display:'flex', justifyContent:'space-around', }}>
                 {
                    companylogo.map((item, index)=>{
                        return(
                            <Grid key={index} sx={{width:'auto', height:'auto', }}>

                                 <Box component="img" src={item.logo}  alt="company logo"   
                                 sx={{ width: "100%", height: "50%", objectFit: "contain", }} />

                            
                            
                            </Grid>
                        )
                    })
                }
               </Box>

              </Grid>

            </Box>

          </Paper>

        </Grid>


        {/* =================================================
            BOX 3 - TRAINING MODES
        ================================================= */}

        <Grid size={{   xs: 12,  md: 3,}}   >

          <Paper
            elevation={0}
            sx={{
              minHeight: {
                xs: "390px",
                md: "390px",
              },

              height: "100%",

              borderRadius: "16px",

              border:
                "1px solid #e2e8f0",

              background:
                "linear-gradient(135deg,#f0f5ff,#faf7ff)",

              overflow: "hidden",
            }}
          >

            <Typography
              sx={{
                textAlign: "center",

                color: "#06296f",

                fontWeight: 700,

                fontSize: {
                  xs: "23px",
                  md: "25px",
                },

                py: 2,

                borderBottom:
                  "1px solid #e5e7eb",
              }}
            >
              Our Training Modes
            </Typography>


            {successtory.map(
              (item, index) => {

                const Icon = item.icon;

                return (

                  <Box
                    key={index}
                    sx={{
                      display: "flex",

                      gap: 3,

                      p: 2,

                      borderBottom:
                        index !== successtory.length - 1
                          ? "1px solid #e5e7eb"
                          : "none",
                    }}
                  >

                    {/* ICON */}

                    <Box
                      sx={{
                        width: 'auto',
                        minWidth: 55,

                        height: 'auto',

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        borderRadius: "12px",

                        backgroundColor: "#edf5ff",
                      }}
                    >

                 {/* <Box component='img' src={item.image} sx={{width:'100%', width:'100%', objectFit:'contain', borderRadius:5}} /> */}
                  <Avatar src={item.avatar} alt={item.name} sx={{ width: 74, height: 74 }} />


                    </Box>


                    {/* CONTENT */}

                    <Box>

                      <Typography
                        sx={{
                          fontWeight: 500,

                          color: "#06296f",

                          fontSize: {
                            xs: "14px",
                            md: "15px",
                          },

                          mb: 0.4,
                        }}
                      >
                        {item.comment}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#06296f",
                          fontWeight:600,
                          fontSize: {
                            xs: "12px",
                            md: "16px",
                          },

                          lineHeight: 1.4,
                        }}
                      >
                        {item.name}
                      </Typography>

                    </Box>

                  </Box>

                );

              }
            )}

          </Paper>

        </Grid>





      </Grid>

    </Box>
  );
};


export default PlacementDevOps;
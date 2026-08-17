import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";

// Icons
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

// Images - change these paths according to your project
import officeImage from "../../../assets/Images/product/ecommerce/teammates.jpg";



const EcomDevelopment = () => {

 

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >

   


      {/* =====================================================
          FULL BLUE OFFICE SECTION
      ====================================================== */}

      <Box  sx={{ width: {  xs: "94%",   sm: "94%",  md: "94%",  },  maxWidth: "1450px", mx: "auto",  backgroundColor: "#062B68",
          borderRadius: {  xs: "10px",   md: "14px",   },    overflow: "hidden",  color: "#ffffff", }} >

        <Grid
          container
          sx={{
            minHeight: {
              xs: "auto",
              md: "320px",
            },
            display:'flex', flexDirection:'row'
          }}
        >

          {/* =================================================
              OFFICE IMAGE
          ================================================== */}

          <Grid
            item
            xs={12}
            md={3}
          >

            <Box
              component="img"
              src={officeImage}
              alt="KitKat Office"
              sx={{
                width: "100%",

                height: {
                  xs: "250px",
                  sm: "300px",
                  md: "100%",
                },

                minHeight: {
                  md: "320px",
                },

                objectFit: "cover",

                display: "block",
              }}
            />

          </Grid>


          {/* =================================================
              CENTER BLUE CONTENT
          ================================================== */}

          <Grid  item size={{ xs:12, md:4.5}} >

            <Box  sx={{  height: "100%",    px: {  xs: 3,   sm: 4, md: 4,  },  py: {
                  xs: 4,
                  md: 3.5,
                },
                // border:'1px solid white',
                display: "flex",

                flexDirection: "column",

                justifyContent: "center",
              }}
            >

              {/* HEADING */}

              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "25px",
                    md: "25px",
                  },

                  fontWeight: 700,

                  lineHeight: 1.35,

                  mb: 2,
                }}
              >
                Your Local Ecommerce Development Company
                <br />
                in Coimbatore
              </Typography>


              {/* DESCRIPTION */}

              <Typography
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "14px",
                  },

                  color: "#ffffff",

                  lineHeight: 1.7,

                  mb: 2.5,
                }}
              >
                We understand local business needs, logistics,
                customer behavior and payment preferences. Get
                the advantage of a local team with global-quality
                solutions.
              </Typography>


              {/* LINE */}

              <Box
                sx={{
                  width: "100%",

                  height: "1px",

                  backgroundColor:
                    "rgba(255,255,255,0.25)",

                  mb: 2,
                }}
              />


              {/* FEATURES */}

              <Grid
                container
                spacing={2}
              >

                {/* FEATURE 1 */}

                <Grid item xs={4}>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "flex-start",
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: "25px",
                      }}
                    >
                      ♧
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          md: "11px",
                        },

                        lineHeight: 1.5,
                      }}
                    >
                      Local Support
                      <br />
                      Faster Turnaround
                    </Typography>

                  </Box>

                </Grid>


                {/* FEATURE 2 */}

                <Grid item xs={4}>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "flex-start",
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: "25px",
                      }}
                    >
                      ◷
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          md: "11px",
                        },

                        lineHeight: 1.5,
                      }}
                    >
                      On-Time Delivery
                      <br />
                      Every Time
                    </Typography>

                  </Box>

                </Grid>


                {/* FEATURE 3 */}

                <Grid item xs={4}>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "flex-start",
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: "25px",
                      }}
                    >
                      ♡
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "10px",
                          md: "11px",
                        },

                        lineHeight: 1.5,
                      }}
                    >
                      Trusted by 200+
                      <br />
                      Businesses
                    </Typography>

                  </Box>

                </Grid>

              </Grid>

            </Box>

          </Grid>


          {/* =================================================
              MAP + ADDRESS
          ================================================== */}

          <Grid
            item
            xs={12}
            md={4.5}
          >

            <Box
              sx={{
                height: "80%",

                p: {
                  xs: 2,
                  md: 2.5,
                },

                display: "flex",

                alignItems: "center",
              }}
            >

              <Box
                sx={{
                  width: "100%",

                  backgroundColor: "#ffffff",

                  borderRadius: "12px",

                  overflow: "hidden",

                  minHeight: {
                    xs: "230px",
                    md: "230px",
                  },

                  display: "flex",

                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                }}
              >

                {/* MAP IMAGE */}

                <iframe style={{borderRadius:"10px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3231196547968!2d76.97610157363856!3d11.01436565476266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1783683945560!5m2!1sen!2sin" 
                width="50%" loading="lazy" ></iframe>


                {/* ADDRESS */}

                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "45%",
                    },

                    p: {
                      xs: 2,
                      md: 2,
                    },

                    color: "#172B4D",
                  }}
                >

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        md: "14px",
                      },

                      fontWeight: 700,

                      mb: 1.5,
                    }}
                  >
                    KitKat Software Technologies
                  </Typography>


                  <Typography
                    sx={{
                      fontSize: {
                        xs: "11px",
                        md: "13px",
                      },

                      lineHeight: 1.7,

                      color: "#444",
                    }}
                  >
                    36, Saravanampatti Main Rd,
                    <br />
                    Peelamedu, Coimbatore,
                    <br />
                    Tamil Nadu 641004
                  </Typography>


                  <Typography
                    sx={{
                      mt: 1.5,

                      fontSize: "13px",

                      fontWeight: 600,

                      color: "#172B4D",
                    }}
                  >
                    📞 +91 93638 39353
                  </Typography>


                  <Typography
                    sx={{
                      mt: 1.5,

                      fontSize: "14px",

                      fontWeight: 600,

                      color: "#1769FF",

                      cursor: "pointer",
                    }}
                  >
                    View on Google Maps
                  </Typography>

                </Box>

                

              </Box>
              

            </Box>
            
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",

            pb: 2,

            mt: {
              xs: 0,
              md: -1,
            },
          }}
        >

          <Button
            variant="outlined"
            sx={{
              color: "#F5A623",

              borderColor: "#F5A623",

              borderRadius: "6px",

              px: {
                xs: 3,
                md: 4,
              },

              py: 0.8,
              mb:3,

              fontSize: "14px",

              fontWeight: 700,

              textTransform: "none",

              "&:hover": {
                color: "#F5A623",

                borderColor: "#F5A623",

                backgroundColor:
                  "rgba(245,166,35,0.08)",
              },
            }}
          >
            Visit Our Office&nbsp; →
          </Button>

        </Box>

          </Grid>

        </Grid>


     
      </Box>



    </Box>
  );
};


export default EcomDevelopment;
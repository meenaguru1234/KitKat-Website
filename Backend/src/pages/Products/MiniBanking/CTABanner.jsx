import React from "react";
import {Box,Typography, Grid,Paper, Button, Divider,} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const CTABanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 5, md: 0 },
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
   

      <Box
        sx={{
          maxWidth: "1450px",
          margin: "25px auto 0",
          borderRadius: "22px",
          overflow: "hidden",
          background:
            "linear-gradient(105deg, #062d72 0%, #063d91 55%, #0756a9 100%)",
          minHeight: { xs: "auto", md: "245px" },
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 4 },
          color: "#fff",
        }}
      >
        <Grid
          container
          spacing={3}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {/* CTA Image / Icon */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 150, md: 220 },
                  height: { xs: 110, md: 150 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <AccountBalanceIcon
                  sx={{
                    fontSize: { xs: 90, md: 125 },
                    color: "#ffffff",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* CTA Content */}
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "29px" },
                fontWeight: 600,
                lineHeight: 1.15,
                mb: 1.5,
              }}
            >
              Ready to Modernise
              <br />
              Your Banking Operations?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "15px", md: "17px" },
                lineHeight: 1.6,
                maxWidth: "570px",
                color: "#e8f1ff",
              }}
            >
              Transform your bank or financial institution with a
              modern, secure and scalable banking software solution.
            </Typography>
          </Grid>

          {/* CTA Right */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "stretch", md: "flex-end" },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "#ffd600",
                  color: "#092b63",
                  fontSize: { xs: "17px", md: "21px" },
                  fontWeight: 800,
                  textTransform: "none",
                  borderRadius: "35px",
                  px: { xs: 3, md: 4 },
                  py: 1.5,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#ffca00",
                    boxShadow: "none",
                  },
                }}
              >
                Book Your Free Demo
              </Button>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <PhoneIcon />
                  <Typography
                    sx={{
                      fontSize: { xs: "15px", md: "18px" },
                      fontWeight: 600,
                    }}
                  >
                    +91 70108 16299
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <EmailIcon />
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "17px" },
                      fontWeight: 600,
                      wordBreak: "break-word",
                    }}
                  >
                    kitkatsoftwaretechnologies@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

     
    </Box>
  )
}

export default CTABanner


import React from "react";
import {
  Box,
  Grid,
  Typography,

} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";

import google from "../../../assets/Images/training-alltrainng/google.png";
import msme from "../../../assets/Images/training-alltrainng/msme.png";
import iso from "../../../assets/Images/training-alltrainng/iso.png";

const TrustKitKat = () => {


  return (
    <Box
      sx={{
        width: "95%",
        mx: "auto",
        mt: 4,
      }}
    >
    

      {/* ================= WHY THOUSANDS TRUST KITKAT ================= */}

      <Typography
        sx={{
          textAlign: "center",
          color: "#092557",
          fontWeight: 700,
          fontSize: {
            xs: "1.5rem",
            md: "2rem",
          },
          mt: 3,
          mb: 2,
        }}
      >
        Why Thousands Trust KitKat
      </Typography>

      {/* TRUST CARDS */}

      <Grid container spacing={0.3}>
        {/* GOOGLE REVIEWS */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Box
            sx={{
              height: "155px",
              border: "1px solid #dedede",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#092557",
                mb: 1,
              }}
            >
              Google Reviews
            </Typography>

            <Box
              component="img"
              src={google}
              sx={{
                width: "55px",
                height: "55px",
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#222",
              }}
            >
              4.8 ⭐⭐⭐⭐⭐
            </Typography>

            <Typography
              sx={{
                color: "#777",
                fontSize: "0.8rem",
              }}
            >
              (250+ Reviews)
            </Typography>
          </Box>
        </Grid>

        {/* MSME */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Box
            sx={{
              height: "155px",
              border: "1px solid #dedede",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
              py:2
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#092557",
                // mb: 1,
              }}
            >
              Recognised by
            </Typography>

            <Box
              component="img"
              src={msme}
              sx={{
                width: "200px",
                height: "125px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* ISO */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Box
            sx={{
              height: "155px",
              border: "1px solid #dedede",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Box
              component="img"
              src={iso}
              sx={{
                width: "190px",
                height: "90px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* LOCATION */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Box
            sx={{
              height: "155px",
              border: "1px solid #dedede",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#092557",
                mb: 1,
              }}
            >
              Verified Location
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <LocationOnIcon
                sx={{
                  color: "#F58216",
                  fontSize: 55,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.6,
                }}
              >
                Coimbatore
                <br />
                Tamil Nadu
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* SECURE */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Box
            sx={{
              height: "155px",
              border: "1px solid #dedede",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#092557",
                mb: 1,
              }}
            >
              Secure & Trusted
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <LockIcon
                sx={{
                  color: "#69B82F",
                  fontSize: 55,
                }}
              />

              <Box>
                <Typography sx={{ fontWeight: 600 }}>
                  SSL Secured Website
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    fontSize: "0.9rem",
                  }}
                >
                  Your data is safe
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrustKitKat;
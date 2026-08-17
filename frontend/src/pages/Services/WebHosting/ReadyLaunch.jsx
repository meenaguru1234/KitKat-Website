import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import { FaRocket, FaChevronRight } from "react-icons/fa";
import rocket from "../../../assets/Images/rocket.png"

const ReadyLaunch = () => {
  return (
    <>
    <Box
  sx={{
    bgcolor: "#071B52",
    color: "#fff",
    py: 5,
    px: { xs: 3, md: 6 },
    mb:-5
  }}
>
  <Box
    sx={{
      maxWidth: "1300px",
      mx: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 4,
    }}
  >
    {/* Left */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.08)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="img" src={rocket} alt='rocketimage'   sx={{ width: 200, height: 200, objectFit: "fit", mt:-4}} />
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            mb: 1,
          }}
        >
          Ready to Launch or Move Your Website?
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,.75)",
          }}
        >
          Partner with a reliable web hosting company in Coimbatore that
          puts your success first.
        </Typography>
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
      <Button
        variant="contained"
        endIcon={<FaChevronRight />}
        sx={{
          bgcolor: "#F44336",
          px: 4,
          py: 1.4,
          borderRadius: "8px",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            bgcolor: "#D32F2F",
          },
        }}
      >
        GET STARTED TODAY
      </Button>

      <Typography
        sx={{
          mt: 2,
          color: "rgba(255,255,255,.8)",
        }}
      >
        or call us at <strong>+91 4546 247 001</strong>
      </Typography>
    </Box>
  </Box> <br />
  <hr />
</Box>
</>
  )
}

export default ReadyLaunch
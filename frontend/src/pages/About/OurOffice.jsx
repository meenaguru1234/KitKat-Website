import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import cartoonimg from "../../assets/Images/aboutus/teamworkcartoon.png";

const OurOffice = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        {/* Left - Office Info */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              border: "1px solid #e5e5e5",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              height: "100%",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              {/* Text side */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", color: "#0B1F44" }}>
                    Our Office
                  </Typography>
                  <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
                  <LocationOnOutlinedIcon sx={{ color: "#03286d", fontSize: 22, mt: 0.3 }} />
                  <Typography sx={{ fontSize: "0.9rem", color: "#041e4f", lineHeight: 1.7 }}>
                    No.70/77, 1st Floor, Krishna Complex, Kattor Road,
                    Papanaickenpalayam, Coimbatore – 641 037, Tamil Nadu, India
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <PhoneOutlinedIcon sx={{ color: "#03286d", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.9rem", color: "#041e4f" }}>
                    +91 422 4957272
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <MailOutlineOutlinedIcon sx={{ color: "#03286d", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.9rem", color: "#041e4f" }}>
                    info@kitkatsoftwaretechnologies.com
                  </Typography>
                </Box>
              </Grid>

              {/* Map side */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 220, sm: 260 },
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    title="KitKat Software Technologies Location"
                    src="https://www.google.com/maps?q=Kitkat+Software+Technologies,+Kattor+Road,+Papanaickenpalayam,+Coimbatore&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Right - CTA Banner */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #1a56db 0%, #0B2E6B 100%)",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              height: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Text + buttons */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.4rem", md: "1.5rem" },
                  color: "#fff",
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Let's Build Something Great Together
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#dbe4fb", mb: 3 }}>
                Have a project in mind? Let's discuss how we can help your
                business grow with the right technology.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Box
                  component="button"
                  sx={{
                    bgcolor: "#FF5722",
                    color: "#fff",
                    border: "none",
                    borderRadius: 2,
                    px: 3,
                    py: 1.2,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { bgcolor: "#e64a19" },
                  }}
                >
                  Get in Touch →
                </Box>
                <Box
                  component="button"
                  sx={{
                    bgcolor: "#fff",
                    color: "#1a56db",
                    border: "none",
                    borderRadius: 2,
                    px: 3,
                    py: 1.2,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    "&:hover": { bgcolor: "#f0f0f0" },
                  }}
                >
                  View Our Services
                </Box>
              </Box>
            </Box>

            {/* Image - right side */}
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: 140, md: 180 },
                height: { xs: 140, md: 180 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={cartoonimg}
                alt="Team handshake"
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurOffice;
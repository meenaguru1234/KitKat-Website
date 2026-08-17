import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';

const OurOfficeLocation = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 2 } }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.6rem", md: "1.7rem" }, color: "#0B1F44", mb: 1 }}>
          Our Office
        </Typography>
        <Box sx={{ width: 60, height: 2, bgcolor: "#1a56db", mx: "auto" }} />
      </Box>

      <Grid container spacing={3}>
        {/* Left - Info card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              border: "1px solid #e5e5e5",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              height: "100%",
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", color: "#1a56db", mb: 3 }}>
              KitKat Software Technologies
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, mb: 2.5 }}>
              <LocationOnOutlinedIcon sx={{ color: "#0B1F44", fontSize: 22, mt: 0.3 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#333", lineHeight: 1.7 }}>
                No.70/77, 1st Floor, Krishna Complex, Kattor Road,
                Papanaickenpalayam, Coimbatore - 641037, Tamil Nadu, India
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <PhoneOutlinedIcon sx={{ color: "#0B1F44", fontSize: 22 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#333" }}>
                +91 422 4957272
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <WhatsAppIcon sx={{ color: "#0B1F44", fontSize: 22 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#333" }}>
                +91 95008 04438
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
              <MailOutlineOutlinedIcon sx={{ color: "#0B1F44", fontSize: 22 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#333" }}>
                info@kitkatsoftwaretechnologies.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
              <LanguageOutlinedIcon sx={{ color: "#0B1F44", fontSize: 22 }} />
              <Typography sx={{ fontSize: "0.9rem", color: "#333" }}>
                www.kitkatsoftwaretechnologies.com
              </Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<PersonPinCircleOutlinedIcon />}
              component="a"
              href="https://www.google.com/maps?q=Kitkat+Software+Technologies,+Kattor+Road,+Papanaickenpalayam,+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: "#1a56db",
                color: "#1a56db",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 2,
                px: 3,
                py: 1,
                "&:hover": { borderColor: "#12419e", bgcolor: "#f0f4ff" },
              }}
            >
              Get Directions
            </Button>
          </Box>
        </Grid>

        {/* Right - Embedded Map */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 320, md: "50%" },
              minHeight: { md: 400 },
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #e5e5e5",
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
  );
};

export default OurOfficeLocation;
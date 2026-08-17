import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import officeImage from "../../assets/Images/contactus/teamwork3.jpg";

const WhyChooseContact = () => {
  const points = [
    "Customized solutions tailored to your business goals",
    "Agile development with transparent communication",
    "On-time delivery with uncompromised quality",
    "Secure, scalable and future-ready technology",
    "Long-term partnership and dedicated support",
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 2 } }}>
      <Grid container spacing={5} alignItems="center">
        {/* Left - Image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 260, sm: 340, md: 320 },
              borderRadius: 3,
              overflow: "hidden",

            }}
          >
            <Box
              component="img"
              src={officeImage}
              alt="KitKat office team"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Right - Text */}
        <Grid size={{ xs: 12, md: 6 }} sx={{py:3}}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: "1.6rem", md: "1.9rem" }, fontWeight: 800, color: "#0B1F44", mb: 1 }}
          >
            Why Businesses Choose KitKat
          </Typography>
          <Box sx={{ width: 60, height: 3, bgcolor: "#1a56db", mb: 3 }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {points.map((point, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CheckCircleIcon sx={{ color: "#1a56db", fontSize: 22, flexShrink: 0 }} />
                <Typography sx={{ fontSize: "0.95rem", color: "#333" }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseContact;
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import image1 from "../../assets/Images/blog/teamwork1.jpg";
import image2 from "../../assets/Images/blog/teamwork2.jpg";
import image3 from "../../assets/Images/blog/teamwork3.jpg";
import image4 from "../../assets/Images/blog/teamwork4.jpg";

const CultureBlog = () => {
  const placementArray = [
    "Flat hierarchy and open-door policy",
    "Encourages new ideas and innovation",
    "Diverse team with inclusive values",
    "Fun activities, team outings and celebrations",
  ];

  const cultureImages = [image1, image2, image3, image4];

  return (
    <Box
      sx={{
        mt: 4,
        borderRadius: 3,
        p: { xs: 2, md: 4 },
        bgcolor: "#f7f9fc",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#001E4E",
              mb: 1,
            }}
          >
            Our Culture
          </Typography>
          <Box sx={{ width: 60, height: 3, bgcolor: "#1a56db", mb: 2 }} />

          <Typography sx={{ color: "#333", fontSize: 15, mb: 3 }}>
            We believe a great workplace creates great work. Our culture is
            built on trust, respect and a shared passion for technology.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {placementArray.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CheckCircleIcon sx={{ color: "#1a56db", fontSize: 20 }} />
                <Typography sx={{ fontSize: "0.95rem", color: "#001E4E" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Side - 2x2 Photo Grid */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: 2,
            }}
          >
            {cultureImages.map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: { xs: 150, sm: 200, md: 220 },
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`culture-${index}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CultureBlog;
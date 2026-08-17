import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const OurValues = () => {
  const values = [
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#FF5722",
      title: "Integrity",
      description: "We do what's right, even when no one is watching.",
    },
    {
      icon: <ShieldOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#1565C0",
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
    {
      icon: <LightbulbOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#2E7D32",
      title: "Innovation",
      description: "We embrace new ideas and technologies to drive better solutions.",
    },
    {
      icon: <VolunteerActivismOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#7B1FA2",
      title: "Commitment",
      description: "We are committed to our clients, our team and our community.",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 1} }}>
      {/* Heading with dashes */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 5 }}>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "1.8rem", md: "1.7rem" }, fontWeight: 800, color: "#0B1F44" }}
        >
          Our Values
        </Typography>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
      </Box>

      {/* Value cards */}
      <Grid container spacing={3}>
        {values.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                border: "1px solid #e5e5e5",
                borderRadius: 3,
                p: 3,
                height: "100%",
                textAlign: "center",
                transition: "box-shadow 0.2s ease",
                "&:hover": {
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: item.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", color: "#0B1F44", mb: 1 }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurValues;
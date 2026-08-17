import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import officeImage from "../../assets/Images/aboutus/ofclobby.PNG";

const OurStory = () => {
  const stats = [
    {
      icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 26, color: "#FF5722" }} />,
      value: "2016",
      label: "Year Founded",
    },
    {
      icon: <LocationOnOutlinedIcon sx={{ fontSize: 26, color: "#FF5722" }} />,
      value: "Coimbatore",
      label: "Headquarters",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 26, color: "#FF5722" }} />,
      value: "50+",
      label: "Skilled Professionals",
    },
    {
      icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 26, color: "#FF5722" }} />,
      value: "300+",
      label: "Projects Delivered",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 1} }}>
      <Grid container spacing={5} alignItems="center">
        {/* Left - Office Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 280, sm: 300, md: 380 },
              borderRadius: "20px 20px 60px 20px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={officeImage}
              alt="KitKat office"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>

        {/* Right - Text + Stats */}
        <Grid size={{ xs: 12, md: 7 }}>
          {/* Heading with dash */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "1.7rem" },
                fontWeight: 800,
                color: "#0B1F44",
              }}
            >
              Our Story
            </Typography>
          </Box>

          {/* Paragraphs */}
          <Typography sx={{ fontSize: "1rem", color: "#333", lineHeight: 1.8, mb: 2.5 }}>
            Founded with a vision to help businesses harness technology
            effectively, KitKat Software Technologies has grown from a small
            team of passionate developers to a trusted technology partner for
            companies across industries.
          </Typography>
          <Typography sx={{ fontSize: "1rem", color: "#333", lineHeight: 1.8, mb: 4 }}>
            We believe software should solve real problems, simplify
            operations and create measurable impact. That's why we combine
            technical excellence with business understanding to build
            solutions that truly make a difference.
          </Typography>

          {/* Stats row */}
          <Grid container spacing={3}>
            {stats.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      minWidth: 50,
                      borderRadius: "50%",
                      bgcolor: "#FFF1EC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#0B1F44", lineHeight: 1.2 }}>
                      {item.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
                      {item.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurStory;
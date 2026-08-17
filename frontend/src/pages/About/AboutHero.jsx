import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import teamImage from "../../assets/Images/aboutus/teamwork3.jpg";

const AboutHero = () => {
  const features = [
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 28, color: "#0B2E6B" }} />,
      title: "Client-Focused",
      subtitle: "Approach",
    },
    {
      icon: <LightbulbOutlinedIcon sx={{ fontSize: 28, color: "#0B2E6B" }} />,
      title: "Innovative",
      subtitle: "Solutions",
    },
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 28, color: "#0B2E6B" }} />,
      title: "Quality &",
      subtitle: "Reliability",
    },
    {
      icon: <DescriptionOutlinedIcon sx={{ fontSize: 28, color: "#0B2E6B" }} />,
      title: "Transparent",
      subtitle: "Process",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 6 } }}>
      {/* Breadcrumbs */}
      <Breadcrumbs separator="›" sx={{ mb: 3, fontSize: "0.9rem" }}>
        <Link href="/" underline="hover" color="text.secondary">
          Home
        </Link>
        <Typography color="text.primary" sx={{ fontSize: "0.9rem" }}>
          About Us
        </Typography>
      </Breadcrumbs>

      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Badge */}
          <Box
            sx={{
              display: "inline-block",
              border: "1px solid #FF5722",
              color: "#FF5722",
              borderRadius: "30px",
              px: 2,
              py: 0.7,
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: 0.5,
              mb: 3,
            }}
          >
            ABOUT KITKAT SOFTWARE TECHNOLOGIES
          </Box>

          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem", lg: "3rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#0B1F44",
              mb: 1,
            }}
          >
            Building Software.
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem", lg: "3rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#FF5722",
              mb: 3,
            }}
          >
            Powering Businesses.
          </Typography>

          {/* Paragraph */}
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#444",
              lineHeight: 1.7,
              mb: 4,
              maxWidth: 480,
            }}
          >
            KitKat Software Technologies is a leading software development
            company in Coimbatore, delivering custom software, web, mobile
            and automation solutions that help businesses work smarter and
            grow faster.
          </Typography>

          {/* Feature icons row */}
          <Grid container spacing={3}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3 }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 , borderRight:index!=features.length-1 ? "1px solid #d9e5f9" : "none"}}>
                  {item.icon}
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 550, color: "#0B1F44", lineHeight: 1.3 }}>
                    {item.title}
                    <br />
                    {item.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side - Image with organic shape */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 300, sm: 400, md: 480 },
              borderRadius: "180px 20px 180px 20px",
              overflow: "hidden",
              mt:-6
            }}
          >
            <Box
              component="img"
              src={teamImage}
              alt="KitKat team"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;
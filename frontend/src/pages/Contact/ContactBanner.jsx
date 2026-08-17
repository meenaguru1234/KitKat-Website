import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const ContactBanner = () => {
  const stats = [
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
      value: "150+",
      label: "Happy Clients",
    },
    {
      icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
      value: "350+",
      label: "Projects Delivered",
    },
    {
      icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
      value: "10+",
      label: "Years of Experience",
    },
    {
      icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
      value: "98%",
      label: "Client Retention Rate",
    },
    {
      icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 50, color: "#fff" }} />,
      value: "100%",
      label: "Support & Satisfaction",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 3, md: 2 } }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0B1F44 0%, #0B2E6B 100%)",
          borderRadius: 3,
          py: { xs: 4, md:4 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container spacing={3}>
          {stats.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: "grow" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  justifyContent: { xs: "flex-start", md: "center" },
                  borderRight: {
                    md: index !== stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  },
                }}
              >
                {item.icon}
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.5rem", color: "#fff", lineHeight: 1.2 }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ fontSize: "0.8rem", color: "#c9d3e6" }}>
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactBanner;
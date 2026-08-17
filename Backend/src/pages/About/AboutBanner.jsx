import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const AboutBanner = () => {
  const stats = [
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "8+",
      label: "Years of Experience",
    },
    {
      icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "300+",
      label: "Projects Delivered",
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "150+",
      label: "Happy Clients",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <ShowChartOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "98%",
      label: "Client Retention",
    },
    {
      icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      value: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, mt: 4 }}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #0B1F44 0%, #0B2E6B 100%)",
          borderRadius: 3,
          py: { xs: 4, md: 3 },
          px: { xs: 2, md: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={3}>
          {stats.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 , flexDirection:'column'}}>
               <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                 {item.icon} <Box component={'span'}>
                      <Typography sx={{ fontWeight: 800, fontSize: "1.4rem", color: "#fff", lineHeight: 1.2 }}>
                    {item.value}
                  </Typography>
                </Box>
                </Box>
               
               
                
                  <Typography sx={{ fontSize: "0.9rem", color: "#c9d3e6" }}>
                    {item.label}
                  </Typography>
                
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutBanner;
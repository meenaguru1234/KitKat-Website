import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const OurJourney = () => {
  const processArray = [
    {
      icon: <FlightOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#FF5722",
      year: "2016",
      description: "KitKat was founded in Coimbatore with a small team and big dreams.",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#1565C0",
      year: "2017–18",
      description: "Expanded our team and started delivering custom software solutions.",
    },
    {
      icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#2E7D32",
      year: "2019–20",
      description: "Ventured into mobile app development and cloud technologies.",
    },
    {
      icon: <ShowChartOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#7B1FA2",
      year: "2021–22",
      description: "Reached 200+ successful projects and clients across India.",
    },
    {
      icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#FF5722",
      year: "2023–24",
      description: "Strengthened our processes, team and infrastructure for future growth.",
    },
    {
      icon: <TrackChangesOutlinedIcon sx={{ fontSize: 30, color: "#fff" }} />,
      bgColor: "#1565C0",
      year: "2025 & Beyond",
      description: "Continuing our mission to empower businesses with innovative software.",
    },
  ];

  return (
    <Box sx={{ mt: 1 }}>
      <Grid container sx={{ px: { xs: 1, lg: 8 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", lg: "1.7rem" }, py: 2, fontWeight: "800", color: "#03193f" }}
          >
            Our Journey
          </Typography>
          <Box sx={{ width: "65px", height: "3px", backgroundColor: "#0749C4" }} />
        </Box>

        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            ps: 3,
            pt: 3,
            borderTop: "1px solid #EBF0F3",
            borderRight: "1px solid #EBF0F3",
            px:3,
            borderRadius:5
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
            {processArray.map((item, index) => (
              <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 1, md: 0 } }} key={index}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: 0.5, lg: 1 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 60,
                      height: 60,
                      bgcolor: item.bgColor,
                      borderRadius: 50,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ textAlign: "center", fontSize: "14px", fontWeight: "600" }}>
                    {item.year}
                  </Typography>
                  <Typography sx={{ textAlign: "center", fontSize: "13px", color: "#0B2E6B" }}>
                    {item.description}
                  </Typography>

                  {index !== processArray.length - 1 && (
                    <SouthIcon sx={{ display: { md: "none" } }} />
                  )}
                </Box>

                {index !== processArray.length - 1 && (
                  <EastOutlinedIcon
                    sx={{
                      display: { xs: "none", md: "block" },
                      mt: 1.5,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurJourney;
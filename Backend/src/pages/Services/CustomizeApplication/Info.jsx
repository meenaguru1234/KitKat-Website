import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonIcon from "@mui/icons-material/Person";

const Info = () => {

  const infoArray = [
    {
      icon: ScheduleIcon,
      number: "10+",
      text: "Years of Experience",
    },
    {
      icon: EventNoteIcon,
      number: "150+",
      text: "Projects Delivered",
    },
    {
      icon: PersonIcon,
      number: "75+",
      text: "Happy Clients",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#071f3b", color: "#fff", py: 2 , width:'100%', borderRadius:'0px', marginLeft:'0%'}}>
      <Grid container alignItems="center">

        {/* Left Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 700,
              pl: 4,
            }}
          >
            Local Team. Global Standards. Software That Works Your Way.
          </Typography>
        </Grid>

        {/* Right Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%",
            }}
          >
            {infoArray.map((item, index) => {
              const Icon = item.icon;
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Icon sx={{ fontSize: 40 }} />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Info;
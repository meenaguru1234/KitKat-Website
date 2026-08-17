import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import Diversity3Icon from '@mui/icons-material/Diversity3';


const HrmBanner = () => {

  const infoArray = [
    {
      icon: Diversity3Icon,
      number: "9+",
      text: "Years of Experience",
    },
    {
      icon: BusinessCenterOutlinedIcon,
      number: "500+",
      text: "HRM Projects Delivered",
    },
    {
      icon: Groups2OutlinedIcon,
      number: "300+",
      text: "Happy Clients",
    },
       {
      icon: Diversity3Icon,
      number: "50,000+",
      text: "Employees Managed",
    },
     {
      icon: HeadsetMicOutlinedIcon,
      number: "24/7",
      text: "Support & Maintanence",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#071f3b", color: "#fff", py: 2 , width:'100%', borderRadius:'0px', marginLeft:'0%'}}>
      <Grid container alignItems="center">


        {/* Right Content */}
        <Grid size={{ xs: 12}}>
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

export default HrmBanner
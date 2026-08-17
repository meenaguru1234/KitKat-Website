import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ScheduleIcon from "@mui/icons-material/Schedule";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const BannerMiniBank = () => {

  const infoArray = [
    {
      icon: Groups2OutlinedIcon,
      number: "100+",
      text: "Happy Customers",
    },
    {
      icon: HeadsetMicOutlinedIcon,
      number: "Local Support",
      text: "in Coimbatore",
    },
    {
      icon: GppGoodOutlinedIcon,
      number: "RBI & Regulatory",
      text: "Compliance Aware",
    },
       {
      icon: SettingsOutlinedIcon,
      number: "Custom Solution for",
      text: "Your Unique Needs",
    },
 
  ];

  return (
    <Box sx={{ bgcolor: "#031362", color: "#fff", py: 2 , width:'100%', borderRadius:'0px', marginLeft:'0%', mt:-12}}>
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
                        fontSize: "1rem",
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1rem",
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

export default BannerMiniBank
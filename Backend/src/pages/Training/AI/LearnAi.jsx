import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaidIcon from '@mui/icons-material/Paid';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import Grid from "@mui/material/Grid";

const LearnAi = () => {
  const whyLearnPython = [
  {
    icon: TrendingUpIcon,
    title: "High Demand",
    desc: "AI professionals are in high demand worldwide.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Future Ready",
    desc: "AI is the future of technology and innovation.",
  },
  {
    icon: PaidIcon,
    title: "Great Salary,",
    desc: "AI roles offer attractive salary packages.",
  },
  {
    icon: BusinessCenterIcon,
    title: "Diverse Careers",
    desc: "Work in multiple industries and domains.",
  },
  {
    icon: LanguageIcon,
    title: "Global Opportunities",
    desc: "AI skills open doors to global career opportunities.",
  },
  
];

    return (
<Box
  sx={{
    mt: { xs: 5, md: 6 },
    textAlign: "center",
  }}
>
  {/* Heading */}

  <Typography
    sx={{
      fontSize: {
        xs: "28px",
        md: "34px",
      },
      fontWeight: 700,
      color: "#06296f",
      mb: { xs: 3, md: 4 },
    }}
  >
   Why Learn Artificial Intelligence?
   
  </Typography>


  {/* Why Learn Cards */}

  <Grid
    container
    spacing={{ xs: 3, md: 2 }}
    justifyContent="center"
    sx={{ display:'flex' , justifyContent:'center', width:1600}}
  >
    {whyLearnPython.map((item, index) => {
      const Icon = item.icon;

      return (
        <Grid
          key={index}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 2,
          }}
          sx={{}}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "flex-start",
                lg: "center",
              },

              textAlign: "left",

              gap: 1.5,

              minHeight: {
                xs: "70px",
                lg: "100px",
              },

              px: { xs: 2, lg: 1 },
            }}
          >

            {/* Icon */}

            <Box
              sx={{
                minWidth: {
                  xs: "55px",
                  md: "60px",
                },

                height: {
                  xs: "55px",
                  md: "60px",
                },

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                sx={{
                  fontSize: {
                    xs: "42px",
                    md: "50px",
                  },

                  color: "#1769c2",

                  strokeWidth: 1.2,
                }}
              />
            </Box>


            {/* Text */}

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  fontWeight: 700,

                  color: "#06296f",

                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "14px",
                  },

                  fontWeight: 500,

                  color: "#06296f",

                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </Typography>
            </Box>

          </Box>
        </Grid>
      );
    })}
  </Grid>
</Box>
    );
};

export default LearnAi
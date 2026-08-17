import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PaymentsIcon from '@mui/icons-material/Payments';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import Grid from "@mui/material/Grid";

const SkillsDevOps = () => {
  const whyDevOps = [
  {
    icon: TrendingUpIcon,
    title: "High Demand",
    desc: "DevOps professionals are in high demand globally.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Faster Deployments",
    desc: "Automate processes and deliver software faster.",
  },
  {
    icon: VerifiedUserIcon,
    title: "Better Collaboration,",
    desc: "Bridge the gap between development and operations.",
  },
  {
    icon: PaymentsIcon,
    title: "Cost Efficient",
    desc: "Reduce manual work and infrastructure costs.",
  },
  {
    icon: LanguageIcon,
    title: "Future Proof Career",
    desc: "DevOps skills ensure long-term career growth.",
  },
  
];

    return (
<Box
  sx={{
    mt: { xs: 5, md: 1 },
    textAlign: "center",
  }}
>
  {/* Heading */}

  <Typography
    sx={{
      fontSize: {
        xs: "28px",
        md: "32px",
      },
      fontWeight: 700,
      color: "#06296f",
      mb: { xs: 3, md: 4 },
    }}
  >
   Why DevOps Skills Are in High Demand?
   
  </Typography>


  {/* Why Learn Cards */}

  <Grid
    container
    spacing={{ xs: 3, md: 2 }}
    justifyContent="center"
    sx={{ display:'flex' , justifyContent:'center', width:1600}}
  >
    {whyDevOps.map((item, index) => {
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

              gap: 2,

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
                    md: "70px",
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

export default SkillsDevOps
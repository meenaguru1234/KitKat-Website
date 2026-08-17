import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Person3Icon from '@mui/icons-material/Person3';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import Grid from "@mui/material/Grid";

const LearnPython = () => {
  const whyLearnPython = [
  {
    icon: Person3Icon,
    title: "High Demand",
    desc: "for Python Developers",
  },
  {
    icon: TrendingUpIcon,
    title: "Easy to Learn",
    desc: "& Beginner Friendly",
  },
  {
    icon: AutoAwesomeIcon,
    title: "Used in AI, ML,",
    desc: "Data Science & Web Development",
  },
  {
    icon: ReceiptIcon,
    title: "Great Salary",
    desc: "Packages Worldwide",
  },
  {
    icon: GroupsOutlinedIcon,
    title: "Open Source",
    desc: "& Community Support",
  },
  {
    icon: BusinessOutlinedIcon,
    title: "Ideal for",
    desc: "Startups & Enterprises",
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
    Why Learn{" "}
    <Box
      component="span"
      sx={{
        color: "#f45112",
      }}
    >
      Python?
    </Box>
  </Typography>


  {/* Why Learn Cards */}

  <Grid
    container
    spacing={{ xs: 3, md: 2 }}
    justifyContent="center"
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

export default LearnPython;
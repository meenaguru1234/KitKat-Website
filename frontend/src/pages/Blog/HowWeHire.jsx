import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const HowWeHire = () => {
  const steps = [
    {
      icon: <DescriptionOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "1. Apply Online",
      text: "Submit your application with your latest resume.",
    },
    {
      icon: <PersonSearchOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "2. Resume Review",
      text: "Our team reviews your profile and experience.",
    },
    {
      icon: <CallOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "3. Initial Call",
      text: "A quick call to understand your background and goals.",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "4. Technical Interview",
      text: "Assessment of your skills and problem-solving ability.",
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "5. Final Interview",
      text: "Meet the team and discuss how you can contribute.",
    },
    {
      icon: <MailOutlineOutlinedIcon sx={{ color: "#1a56db", fontSize: "40px" }} />,
      color: "#1a56db",
      title: "6. Offer & Onboarding",
      text: "Welcome aboard! We ensure a smooth onboarding.",
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container sx={{ px: { xs: 1, lg: 8 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{ fontSize: { xs: "1.8rem", lg: "1.5rem" }, py: 2, fontWeight: "700", color: "#0B2E6B" }}
          >
            How We Hire
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
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
            {steps.map((item, index) => (
              <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 1, md: 0 } }} key={index}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: 0.5, lg: 1 } }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      border: `2px solid ${item.color}`,
                      p: 1.5,
                      borderRadius: 50,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ textAlign: "center", fontSize: "14px", fontWeight: "650", color: "#0B2E6B" }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ textAlign: "center", fontSize: "13px", color: "#0B2E6B" }}>
                    {item.text}
                  </Typography>

                  {index !== steps.length - 1 && (
                    <SouthIcon
                      sx={{
                        display: { md: "none" },
                      }}
                    />
                  )}
                </Box>

                {index !== steps.length - 1 && (
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

export default HowWeHire;
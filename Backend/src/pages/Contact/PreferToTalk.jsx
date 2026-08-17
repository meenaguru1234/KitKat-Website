import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const PreferToTalk = () => {
  const channels = [
    {
      icon: <PhoneOutlinedIcon sx={{ fontSize: 28, color: "#4A6CF7" }} />,
      bgColor: "#EAF0FF",
      title: "Call Us",
      main: "+91 422 4957272",
      sub: "Mon - Sat: 9:30 AM - 6:30 PM",
    },
    {
      icon: <MailOutlineOutlinedIcon sx={{ fontSize: 28, color: "#FF5722" }} />,
      bgColor: "#FFF1EC",
      title: "Email Us",
      main: "info@kitkatsoftwaretechnologies.com",
      sub: "We reply within 1 business hour",
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 28, color: "#25D366" }} />,
      bgColor: "#E7FBEF",
      title: "WhatsApp",
      main: "+91 95008 04438",
      sub: "Chat with our team",
    },
    {
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 28, color: "#7B1FA2" }} />,
      bgColor: "#F3E8FC",
      title: "Schedule a Meeting",
      main: "Book a free consultation",
      sub: "at your convenience",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 1 } }}>
      <Box
        sx={{
          bgcolor: "#F7F9FC",
          border:"1px solid #e0e0e0" ,
          borderRadius: 3,
          p: { xs: 3, md: 2 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.6rem" }, color: "#0B1F44", mb: 1 }}>
            Prefer to talk?
          </Typography>
          <Typography sx={{ fontSize: "0.95rem", color: "#666" }}>
            Reach out to us directly through any of these channels.
          </Typography>
        </Box>

        <Grid container>
          {channels.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                borderRight: {
                  md: index !== channels.length - 1 ? "1px solid #e0e0e0" : "none",
                },
                px: 2,
              }}
            >
              <Box sx={{ textAlign: "center", py: { xs: 2, md: 0 } }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: item.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#0B1F44", mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "0.9rem", color: "#0B1F44", mb: 0.5, wordBreak: "break-word" }}>
                  {item.main}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#888" }}>
                  {item.sub}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PreferToTalk;
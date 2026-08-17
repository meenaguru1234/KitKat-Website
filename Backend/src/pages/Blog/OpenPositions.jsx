import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import BarChartIcon from '@mui/icons-material/BarChart';
import CampaignIcon from '@mui/icons-material/Campaign';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const OpenPositions = () => {
  const positions = [
    {
      icon: <CodeIcon sx={{ color: "#1a56db", fontSize: 28 }} />,
      title: "Software Developer",
      type: "Full-time",
      location: "Coimbatore",
      description: "Build robust, scalable applications and work with modern technologies.",
      skills: "Java / .NET / Python, SQL, Data Structures",
    },
    {
      icon: <WebIcon sx={{ color: "#1a56db", fontSize: 28 }} />,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Coimbatore",
      description: "Create responsive, user-friendly web experiences.",
      skills: "HTML, CSS, JavaScript, React / Angular",
    },
    {
      icon: <BarChartIcon sx={{ color: "#1a56db", fontSize: 28 }} />,
      title: "Data Analyst",
      type: "Full-time",
      location: "Coimbatore",
      description: "Analyze data, generate insights and support data-driven decisions.",
      skills: "SQL, Excel, Power BI, Python, Statistics",
    },
    {
      icon: <CampaignIcon sx={{ color: "#1a56db", fontSize: 28 }} />,
      title: "Digital Marketing Executive",
      type: "Full-time",
      location: "Coimbatore",
      description: "Plan and execute campaigns to grow brand presence and leads.",
      skills: "SEO, SEM, Social Media, Analytics, Content Marketing",
    },
    {
      icon: <MailOutlineOutlinedIcon sx={{ color: "#1a56db", fontSize: 28 }} />,
      title: "HR Executive",
      type: "Full-time",
      location: "Coimbatore",
      description: "Manage recruitment, employee engagement and HR operations.",
      skills: "HRMS, Communication, Employee Relations",
    },
  ];

  return (
    <Box sx={{ mt: 2, px: { xs: 2, md: 4 } }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          sx={{ fontSize: "1.8rem", fontWeight: 700, color: "#001E4E" }}
        >
          Open Positions
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            bgcolor: "#1a56db",
            mx: "auto",
            mt: 1,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {positions.map((job, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 2,
              border: "1px solid #e5e5e5",
              borderRadius: 3,
              p: 3,
              "&:hover": {
                boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* Icon + Title + Description */}
            <Box sx={{ display: "flex", gap: 2, flex: 2 }}>
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  bgcolor: "#eaf1ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {job.icon}
              </Box>
              <Box>
                <Typography
                  sx={{ fontWeight: 700, color: "#1a56db", fontSize: "1.1rem" }}
                >
                  {job.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#666", mb: 0.5 }}>
                  {job.type} &nbsp;•&nbsp; {job.location}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#333" }}>
                  {job.description}
                </Typography>
              </Box>
            </Box>

            {/* Skills */}
            <Box sx={{ flex: 1.2 }}>
              <Typography sx={{ fontSize: "0.9rem", color: "#001E4E" }}>
                <b>Skills:</b> {job.skills}
              </Typography>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1a56db",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                borderRadius: 2,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#12419e" },
              }}
            >
              View & Apply
            </Button>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#1a56db",
            color: "#1a56db",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1,
            borderRadius: 2,
          }}
        >
          View All Openings
        </Button>
      </Box>
    </Box>
  );
};

export default OpenPositions;
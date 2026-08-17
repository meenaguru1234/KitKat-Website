import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import aravind from "../../assets/Images/aboutus/boyimg1.jpg";
import karthik from "../../assets/Images/aboutus/boyimg2.jpg";
import priya from "../../assets/Images/aboutus/girlimg1.jpg";
import manikandan from "../../assets/Images/aboutus/boyimg1.jpg";

const LeadershipTeam = () => {
  const team = [
    {
      photo: aravind,
      name: "Aravind K.",
      role: "Founder & CEO",
      description: "Visionary leader with expertise in software architecture and business strategy.",
      linkedin: "#",
    },
    {
      photo: karthik,
      name: "Karthik M.",
      role: "CTO",
      description: "Technology enthusiast with 10+ years in software development and system design.",
      linkedin: "#",
    },
    {
      photo: priya,
      name: "Priya S.",
      role: "Head – Operations",
      description: "Expert in project delivery, process improvement and client success.",
      linkedin: "#",
    },
    {
      photo: manikandan,
      name: "Manikandan R.",
      role: "Head – Business Development",
      description: "Focused on building strong partnerships and driving business growth.",
      linkedin: "#",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 2} }}>
      {/* Heading with dashes */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "1.8rem", md: "1.7rem" }, fontWeight: 800, color: "#0B1F44" }}
        >
          Leadership Team
        </Typography>
        <Box sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} />
      </Box>

      {/* Team cards */}
      <Grid container spacing={3}>
        {team.map((person, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                border: "1px solid #e5e5e5",
                borderRadius: 3,
                p: 3,
                height: "100%",
                transition: "box-shadow 0.2s ease",
                "&:hover": {
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
             <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:2}}>
                   <Box
                  component="img"
                  src={person.photo}
                  alt={person.name}
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                
              <IconButton
                component="a"
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#0A66C2",
                  color: "#fff",
                  borderRadius: 2,
                  width: 32,
                  height: 32,
                  "&:hover": { bgcolor: "#004182" },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </IconButton>
             </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: "#0B1F44" }}>
                    {person.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#666" , mb:2}}>
                    {person.role}
                  </Typography>

                     <Typography sx={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.6, mb: 2 }}>
                {person.description}
              </Typography>
                </Box>
              </Box>

           

            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeadershipTeam;
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo1 from "../../assets/Images/aboutus/annapoorna.png"
import logo2 from "../../assets/Images/aboutus/kmch.png";
import logo3 from "../../assets/Images/aboutus/greenline.png";
import logo4 from "../../assets/Images/aboutus/vf.jpg";
import logo5 from "../../assets/Images/aboutus/texmo.png";
import logo6 from "../../assets/Images/aboutus/sks.png"

const TrustedBy = () => {
  const clients = [
    { logo: logo1, name: "Sree Annapoorna", subtitle: "Retail" },
    { logo: logo2, name: "Kovai", subtitle: "Healthcare" },
    { logo: logo3, name: "Greenline", subtitle: "Logistics" },
    { logo: logo4, name: "Vahini", subtitle: "Fashions" },
    { logo: logo5, name: "Texmo", subtitle: "Industries" },
    { logo: logo6, name: "SKS", subtitle: "Academy" },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 2 } }}>
      {/* Heading with dash */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.4rem", md: "1.7rem" },
            fontWeight: 800,
            color: "#0B1F44",
            display:'flex',
            justifyContent:'center',
            width:'100%'

          }}
        >
          Trusted By Businesses Across Industries
        </Typography>
        {/* <Box component={'span'} sx={{ width: 40, height: 3, bgcolor: "#FF5722" }} /> */}
      </Box>

      {/* Client logos row */}
      <Grid container spacing={3}>
        {clients.map((client, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              sx={{
                border: "1px solid #e5e5e5",
                borderRadius: 3,
                p: 1,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                height: "100%",
                transition: "box-shadow 0.2s ease",
                "&:hover": {
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                component="img"
                src={client.logo}
                alt={client.name}
                sx={{
                  width: 42,
                  height: 42,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              <Typography sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#0B1F44", lineHeight: 1.3 }}>
                {client.name}
                <br />
                {client.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustedBy;
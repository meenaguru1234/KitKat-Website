import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';


const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    agree: false,
  });

  const handleChange = (field) => (e) => {
    const value = field === "agree" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Hook up your API / email service here
    console.log("Form submitted:", formData);
  };

  const features = [
    {
      icon: <PhoneOutlinedIcon sx={{ fontSize: 26, color: "#1a56db" }} />,
      title: "Quick Response",
      description: "We respond within 1 business hour",
    },
    {
      icon: <GroupsOutlinedIcon sx={{ fontSize: 26, color: "#1a56db" }} />,
      title: "Expert Team",
      description: "Skilled professionals ready to help",
    },
    {
      icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: "#1a56db" }} />,
      title: "Trusted Partner",
      description: "10+ years of delivering digital excellence",
    },
    {
      icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 26, color: "#1a56db" }} />,
      title: "Long-Term Support",
      description: "We're with you even after delivery",
    },
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "ERP & CRM Solutions",
    "Workflow Automation",
    "Digital Marketing",
    "Other",
  ];

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      fontSize: "0.9rem",
    },
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 8 }, py: { xs: 4, md: 2 } }}>
      <Grid container spacing={5}>
        {/* Left Side */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography sx={{ color: "#FF5722", fontWeight: 700, fontSize: "0.9rem", letterSpacing: 1, mb: 2 }}>
            CONTACT US
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.4rem" },
              fontWeight: 800,
              lineHeight: 1.25,
              color: "#0B1F44",
              mb: 3,
            }}
          >
            Let's Build Something{" "}
            <Box component="span" sx={{ color: "#FF5722" }}>
              Great Together
            </Box>
          </Typography>

          <Typography sx={{ fontSize: "1rem", color: "#444", lineHeight: 1.7, mb: 5, maxWidth: 460 }}>
            Have a project idea or looking for the right technology partner?
            We're here to help you turn your goals into powerful digital
            solutions.
          </Typography>

          <Grid container spacing={3}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      minWidth: 50,
                      borderRadius: 2,
                      bgcolor: "#EAF1FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0B1F44", mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Side - Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              height:'auto',
              border: "1px solid #e5e5e5",
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              boxShadow: "0px 4px 25px rgba(0,0,0,0.05)",
            }}
          >
            <Typography sx={{ fontWeight: 800, fontSize: "1.4rem", color: "#0B1F44", mb: 0.5 }}>
              Send Us a Message
            </Typography>
            <Box sx={{ width: 50, height: 3, bgcolor: "#1a56db", mb: 2 }} />
            <Typography sx={{ fontSize: "0.9rem", color: "#666", mb: 3 }}>
              Fill out the form and our team will get back to you shortly.
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Your Name *"
                  value={formData.name}
                  onChange={handleChange("name")}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Your Email *"
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={formData.company}
                  onChange={handleChange("company")}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  select
                  fullWidth
                  label="Services You're Interested In *"
                  value={formData.service}
                  onChange={handleChange("service")}
                  sx={textFieldSx}
                >
                  <MenuItem value="">Select a Service</MenuItem>
                  {services.map((service, index) => (
                    <MenuItem key={index} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Tell us about your project *"
                  value={formData.message}
                  onChange={handleChange("message")}
                  sx={textFieldSx}
                />
              </Grid>
              <Grid size={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={formData.agree}
                    onChange={handleChange("agree")}
                    sx={{ p: 0.5, mr: 1 }}
                  />
                  <Typography sx={{ fontSize: "0.85rem", color: "#444" }}>
                    I agree to the{" "}
                    <Box component="span" sx={{ color: "#1a56db", fontWeight: 600, cursor: "pointer" }}>
                      Privacy Policy
                    </Box>{" "}
                    and{" "}
                    <Box component="span" sx={{ color: "#1a56db", fontWeight: 600, cursor: "pointer" }}>
                      Terms of Service
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
              <Grid size={12}>
                <Button
                  fullWidth
                //   variant="contained"
                  disabled={!formData.agree}
                  onClick={handleSubmit}
                  endIcon={<NearMeOutlinedIcon />}
                  sx={{
                    bgcolor: "#1a56db",
                    color:'white',
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#12419e" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactHero;
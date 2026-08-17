import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CottageIcon from '@mui/icons-material/Cottage';

const SmsIndustry = () => {

    const industries = [
  {
    icon: SchoolIcon,
    color: "#0B5ED7",
    title: "School Bulk SMS Service",
    desc: "Attendance alerts, fee reminders and exam notifications reach parents instantly.",
  },
  {
    icon: AccountBalanceIcon,
    color: "#1976D2",
    title: "College Bulk SMS Service",
    desc: "Admission updates, event announcements and result notifications reach students.",
  },
  {
    icon: LocalHospitalIcon,
    color: "#2E7D32",
    title: "Hospital Bulk SMS Service",
    desc: "Appointment reminders, report notifications and health camp updates improve communication.",
  },
  {
    icon: MedicalServicesIcon,
    color: "#00695C",
    title: "Clinic Bulk SMS Service",
    desc: "Booking confirmations and follow-up reminders reduce missed appointments.",
  },
  {
    icon: AccountBalanceIcon,
    color: "#1565C0",
    title: "Banking Bulk SMS Service",
    desc: "Transaction alerts and account notifications require secure, high-priority routing.",
  },
  {
    icon: LocalGroceryStoreIcon,
    color: "#1976D2",
    title: "E-commerce SMS Service",
    desc: "Order updates, delivery alerts and customer notifications improve customer satisfaction.",
  },
  {
    icon: CottageIcon,
    color: "#2E7D32",
    title: "Real Estate SMS Service",
    desc: "New project launches, site visit reminders and offer updates reach potential buyers effectively.",
  },
];

  return (
 <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>

        <Grid container spacing={3}>
      <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                    <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}> 
                       Industry Specific Bulk SMS Solutions</Typography>
                </Grid>

   <Grid container spacing={0}>
  {industries.map((item, index) => {
    const Icon = item.icon;

    return (
      <Grid   key={index} size={{ xs: 12, md: 4 }}  sx={{  border: "1px solid #E5E7EB",  p: 3,  }}  >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Icon   sx={{  fontSize: 52,   color: item.color,   mt: 0.5,  }}   />

          <Box>
            <Typography    sx={{  fontWeight: 700,   color: "#07245C",  fontSize: "1.3rem",  mb: 1, }}   >
              {item.title}
            </Typography>

            <Typography    sx={{ color: "#4B5563",  lineHeight: 1.7,  }} >
              {item.desc}
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  })}
</Grid>
</Grid>
</Box>
  )
}

export default SmsIndustry
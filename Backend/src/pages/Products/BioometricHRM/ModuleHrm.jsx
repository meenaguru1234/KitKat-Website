import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined'
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const ModuleHrm = () => {

  const servicesArray = [
    {
      icon: FingerprintOutlinedIcon,
      color: "#1a73e8",
      title: "Biometric Attendance Management",
      text: "Fingerprint, face & RFID based attendance with real-time sync and geo-fencing.",
    },
    {
      icon: CurrencyRupeeOutlinedIcon,
      color: "#3ce81a",
      title: "Payroll Management Software",
      text: "Automate salary, deductions, PF, ESI, TDS, payslips and bank transfers.",
    },
    {
      icon: Groups2OutlinedIcon,
      color: "#ae1ae8",
      title: "Employee Management System",
      text: "Centralized employee database with profiles, documents & role-based access.",
    },
    {
      icon: FlightTakeoffOutlinedIcon,
      color: "#f67c0a",
      title: "Leave Management System",
      text: "Apply, approve and track leave with accruals and holiday calendar.",
    },
    {
      icon: TravelExploreOutlinedIcon,
      color: "#1a73e8",
      title: "Recruitment & Onboarding",
      text: "Manage job openings, applications, interviews and smooth onboarding process.",
    },
    {
      icon: AdsClickOutlinedIcon,
      color: "#d928b9",
      title: "Performance Management",
      text: "Set goals, conduct appraisals and track performance with 360° feedback.",
    },
    {
      icon: AccessTimeOutlinedIcon,
      color: "#e84a1a",
      title: "Shift & Rostering Management",
      text: "Create shifts, manage rosters and handle overtime seamlessly.",
    },
    {
      icon: StickyNote2OutlinedIcon,
      color: "#3ce81a",
      title: "Claims & Reimbursement Management",
      text: "Expense claims, approvals & reimbursements with digital documentation.",
    },
    {
      icon: BarChartOutlinedIcon,
      color: "#551a8f",
      title: "Reports & Analytics",
      text: "HR dashboards, MIS reports and analytics for data-driven decisions.",
    },
    {
      icon: NotificationsActiveOutlinedIcon,
      color: "#1eec81",
      title: "Employee Self Service Portal",
      text: "Employees can view payslips, apply leave, update details and raise requests.",
    },
   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
       Core HRM Modules We Build
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={2}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  p: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    borderColor: "#e5e7eb",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon sx={{ fontSize: "3.5rem", color: item.color, mb: 1 }} />
             <Box sx={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                   <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#071B52" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#071B52", lineHeight: 1.6 }}>
                  {item.text}
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

export default ModuleHrm;

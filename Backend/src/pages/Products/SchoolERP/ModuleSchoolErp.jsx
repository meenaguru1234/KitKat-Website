import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';


const ModuleSchoolErp = () => {

  const servicesArray = [
    {
      icon: ManageAccountsIcon,
      color: "#1a73e8",
      title: "Admission Management",
      text: "Enquiry, application, document upload, seat allotment & more.",
    },
    {
      icon: SchoolOutlinedIcon,
      color: "#3ce81a",
      title: "Student Information Management",
      text: "Complete academic, medical and family records in one place.",
    },
    {
      icon: CurrencyRupeeOutlinedIcon,
      color: "#ae1ae8",
      title: "Fee Management Software",
      text: "Online fee collection, instalments, reminders & receipts.",
    },
    {
      icon: EventAvailableOutlinedIcon,
      color: "#f67c0a",
      title: "Attendance Management",
      text: "Biometric, RFID & app-based attendance with real-time alerts.",
    },
    {
      icon: CalendarMonthOutlinedIcon,
      color: "#1a73e8",
      title: "Time Table Management",
      text: "Auto timetable, conflict free scheduling & sub management.",
    },
    {
      icon: LibraryBooksOutlinedIcon,
      color: "#d928b9",
      title: "Examination Management",
      text: "Exam scheduling, marks entry, grading & report cards.",
    },
    {
      icon: DirectionsBusOutlinedIcon,
      color: "#e84a1a",
      title: "Transport Management",
      text: "Route planning, bus tracking & student pickup/drop alerts.",
    },
    {
      icon: MenuBookOutlinedIcon,
      color: "#3ce81a",
      title: "Library Management",
      text: "Book tracking, issue/return, fine & digital library.",
    },
    {
      icon: FactoryOutlinedIcon,
      color: "#551a8f",
      title: "Hostel Management",
      text: "Room allocation, mess management & student monitoring.",
    },
    {
      icon: SmsOutlinedIcon,
      color: "#1eec81",
      title: "Communication Portal",
      text: "SMS, email, app & parent portal for seamless communication.",
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
       Core Modules Inside Our School Management System
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

export default ModuleSchoolErp;

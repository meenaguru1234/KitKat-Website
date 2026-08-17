
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

const PowerfulFeatures = () => {

     const powerfulFeatures = [
        {
          icon: PersonOutlineOutlinedIcon,
          title: "Customer &\nMember\nManagement",
        },
        {
          icon: AccountBalanceWalletOutlinedIcon,
          title: "Deposits &\nWithdrawals\nManagement",
        },
        {
          icon: PaymentsOutlinedIcon,
          title: "Loan Processing\n& Repayment\nTracking",
        },
        {
          icon: CalculateOutlinedIcon,
          title: "Interest\nCalculation\nEngine",
        },
        {
          icon: AssessmentOutlinedIcon,
          title: "MIS & Business\nIntelligence\nReports",
        },
        {
          icon: NotificationsNoneOutlinedIcon,
          title: "Alerts &\nReminders",
        },
        {
          icon: LockOutlinedIcon,
          title: "Role-Based\nSecurity &\nAudit Trails",
        },
        {
          icon: CloudOutlinedIcon,
          title: "Cloud Backup\n& Data\nSecurity",
        },
      ];



  return (
    <Box  sx={{ width: "100%", backgroundColor: "#fff", py: {  xs: 5, },  px: {  xs: 1.5,  sm: 3,  md: 5, }, }}  >
   
         <Box  sx={{ maxWidth: "1450px", mx: "auto",  }}
         >
   
       
   
    <Box sx={{ mt: { xs: 5,md:0 } }}>
   
             {/* Heading with lines */}
               <Box sx={{ display: "flex",alignItems: "center", justifyContent: "center", gap: { xs: 1, md: 2, },  mb: {xs: 3, md: 2,  },}}>
   
               <Box
                 sx={{
                   width: {
                     xs: 35,
                     sm: 70,
                     md: 130,
                   },
                   height: "2px",
                   backgroundColor: "#1558D6",
                 }}
               />
   
               <Typography
                 component="h2"
                 sx={{
                   color: "#071B52",
                   fontWeight: 700,
                   fontSize: {
                     xs: "1.3rem",
                     sm: "1.7rem",
                     md: "1.5rem",
                   },
                   textAlign: "center",
                   whiteSpace: "nowrap",
                 }}
               >
                 POWERFUL FEATURES
               </Typography>
   
               <Box
                 sx={{
                   width: {
                     xs: 35,
                     sm: 70,
                     md: 130,
                   },
                   height: "2px",
                   backgroundColor: "#1558D6",
                 }}
               />
   
             </Box>
   
   
             {/* Features */}
   
             <Grid
               container
               sx={{
                 width: "100%",
               }}
             >
   
               {powerfulFeatures.map((item, index) => {
   
                 const Icon = item.icon;
   
                 return (
   
                   <Grid
                     key={index}
                     size={{
                       xs: 6,
                       sm: 4,
                       md: 1.5,
                     }}
                   >
   
                     <Box
                       sx={{
                         height: {
                           xs: 150,
                           sm: 165,
                           md: 190,
                         },
   
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         justifyContent: "center",
   
                         textAlign: "center",
   
                         borderRight:
                           index !== powerfulFeatures.length - 1
                             ? {
                                 xs:
                                   index % 2 === 0
                                     ? "1px solid #dce5f0"
                                     : "none",
   
                                 sm:
                                   index % 3 !== 2
                                     ? "1px solid #dce5f0"
                                     : "none",
   
                                 md: "1px solid #f7f8f9",
                               }
                             : "none",
   
                         px: {
                           xs: 1,
                           sm: 1.5,
                           md: 1,
                         },
                       }}
                     >
   
                       {/* Circle Icon */}
   
                       <Box
                         sx={{
                           width: {
                             xs: 65,
                             sm: 75,
                             md: 90,
                           },
   
                           height: {
                             xs: 65,
                             sm: 75,
                             md: 90,
                           },
   
                           borderRadius: "50%",
   
                           border:
                             "2px solid #d7e3f0",
   
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
   
                           mb: 1.5,
   
                           backgroundColor: "#fff",
                         }}
                       >
   
                         <Icon
                           sx={{
                             color: "#0756B8",
   
                             fontSize: {
                               xs: 36,
                               sm: 42,
                               md: 50,
                             },
                           }}
                         />
   
                       </Box>
   
   
                       {/* Feature Text */}
   
                       <Typography
                         sx={{
                           color: "#071B52",
                           fontWeight: 600,
   
                           fontSize: {
                             xs: "0.7rem",
                             sm: "0.8rem",
                             md: "0.9rem",
                           },
   
                           lineHeight: 1.3,
   
                           whiteSpace: "pre-line",
                         }}
                       >
                         {item.title}
                       </Typography>
   
                     </Box>
   
                   </Grid>
   
                 );
   
               })}
   
             </Grid>
   
           </Box>
   
         </Box>
   
       </Box>
  )
}

export default PowerfulFeatures
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from "../../../StyledComponents/CommonButton";

// Icons
import { GiTwoCoins } from "react-icons/gi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TbCirclePercentage } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { TbMoneybagPlus } from "react-icons/tb";
import { RiSafeFill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { BsPersonFillGear } from "react-icons/bs";

const ModuleGoldloan = () => {

  const servicesArray = [
    {
      icon: GiTwoCoins,
      color: "#f67c0a",
      title: "Gold Appraisal & Pledge Management",
      text: "Capture gold details, weight, purity, images & appraisal value with secure pledge tracking.",
    },
    {
      icon: LuFileSpreadsheet,
      color: "#3ce81a",
      title: "Loan Management",
      text: "Manage new loans, top-up loans, part release, renewal & loan closure seamlessly.",
    },
    {
      icon: TbCirclePercentage,
      color: "#f67c0a",
      title: "Interest & EMI Management",
      text: "Flexible interest schemes, EMI schedules & auto interest calculation.",
    },
    {
      icon: MdGroup,
      color: "#ae1ae8",
      title: "Customer Management",
      text: "Maintain customer KYC, contact details, loan history & communication log.",
    },
    {
      icon: TbMoneybagPlus,
      color: "#d928b9",
      title: "Collections & Recovery",
      text: "Track due dates, follow-ups, collections, reminders & recovery agent visits.",
    },
    {
      icon: RiSafeFill,
      color: "#1a73e8",
      title: "Vault & Stock Management",
      text: "Manage gold items in vault, stock-in, stock-out & branch transfers.",
    },
    {
      icon: MdBarChart,
      color: "#3ce81a",
      title: "TAccounting & Reports",
      text: "Profit & loss, ledger, daybook, RBI reports & branch-wise MIS reports.",
    },
    {
      icon: BsPersonFillGear,
      color: "#e84a1a",
      title: "User & Role Management",
      text: "Set user roles, permissions & branch access with full audit trail.",
    },

   
  ];

  return (
    <Box sx={{ py: { xs: 2, md: 3 }, px: { xs: 2, md: 6 } }}>

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 2 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.4rem", md: "1.7rem" } }}
        >
      Core Modules in Our Gold Loan Software
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#1a73e8", mx: "auto", mt: 1.5, borderRadius: 2 }} />
      </Box>

      {/* Services Grid */}
      <Grid container spacing={2}>
        {servicesArray.map((item, index) => {
          const Icon = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
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
                <Icon size={50} color={item.color} />
             <Box sx={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                   <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#071B52" , width:180}}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#071B52", lineHeight: 1.6, width:180 }}>
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

export default ModuleGoldloan;

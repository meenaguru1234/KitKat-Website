import React from "react";
import { Box,  Typography,  Grid,  Paper,  Divider,} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";

const SoftwareBanking = () => {

    const solutions = [
    {
      title: "Core Banking\nSoftware",
      icon: AccountBalanceOutlinedIcon,
      iconBg: "#1558D6",
      iconColor: "#1558D6",
      points: [
        "Account Management",
        "Deposits & Withdrawals",
        "Interest Calculation",
        "Ledger & Day Books",
        "MIS & Statutory Reports",
      ],
    },
    {
      title: "Microfinance\nSoftware",
      icon: GroupsOutlinedIcon,
      iconBg: "#13A678",
      iconColor: "#13966F",
      points: [
        "Group & Individual Lending",
        "Repayment Tracking",
        "Field Collection App",
        "Overdue & NPA Reports",
        "Multi-Branch Support",
      ],
    },
    {
      title: "Nidhi & Cooperative\nSoftware",
      icon: FamilyRestroomOutlinedIcon,
      iconBg: "#5530A8",
      iconColor: "#5130A7",
      points: [
        "Share Accounting",
        "Member Management",
        "Loan & Deposit Management",
        "Dividend Calculation",
        "Audit & Compliance Reports",
      ],
    },
  ];

  return (
    <Box  sx={{  width: "100%",backgroundColor: "#fff", py: { xs: 5, md: 2 }, px: { xs: 2, sm: 3, md: 5 }, }}>

     

      <Box sx={{ maxWidth: "1450px", mx: "auto" }}>

        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, md: 2 },
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              width: { xs: 40, sm: 80, md: 130 },
              height: "2px",
              backgroundColor: "#1558D6",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: "#071B52",
              fontWeight: 700,
              textAlign: "center",
              fontSize: {
                xs: "1.4rem",
                sm: "1.8rem",
                md: "1.5rem",
              },
              whiteSpace: "nowrap",
            }}
          >
            OUR BANKING SOFTWARE SOLUTIONS
          </Typography>

          <Box
            sx={{
              width: { xs: 40, sm: 80, md: 130 },
              height: "2px",
              backgroundColor: "#1558D6",
            }}
          />
        </Box>

        {/* Solution Cards */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
        >
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Grid
                key={index}
                size={{
                  xs: 12,
                  sm: 10,
                  md: 4,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: { xs: 300, md: 350 },
                    border: "1px solid #dfe7f2",
                    borderRadius: "18px",
                    p: { xs: 3, md: 3.5 },
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    backgroundColor: "#fff",
                    
                  }}
                >

                  {/* Icon + Title */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2.5,
                    }}
                  >

                    <Box
                      sx={{
                        width: { xs: 75, md: 90 },
                        height: { xs: 75, md: 90 },
                        minWidth: { xs: 75, md: 90 },
                        borderRadius: "50%",
                        backgroundColor: item.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        sx={{
                          color: "#fff",
                          fontSize: {
                            xs: 42,
                            md: 50,
                          },
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: item.iconColor,
                        fontWeight: 700,
                        fontSize: {
                          xs: "1.25rem",
                          md: "1.5rem",
                        },
                        lineHeight: 1.2,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.title}
                    </Typography>

                  </Box>

                  {/* Points */}
                  <Box sx={{ mt: 2 }}>

                    {item.points.map((point, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                          mb: 1.4, ml:10
                        }}
                      >

                        <CheckIcon
                          sx={{
                            color:
                              index === 0
                                ? "#1558D6"
                                : index === 1
                                ? "#159B72"
                                : "#432E9B",
                            fontSize: 21,
                            fontWeight: "bold",
                          }}
                        />

                        <Typography
                          sx={{
                            color: "#071B52",
                            fontSize: {
                              xs: "0.9rem",
                              md: "1rem",
                            },
                            fontWeight: 500,
                            
                          }}
                        >
                          {point}
                        </Typography>

                      </Box>
                    ))}

                  </Box>

                </Paper>
              </Grid>
            );
          })}
        </Grid>

     

    

      </Box>
    </Box>
  )
}

export default SoftwareBanking
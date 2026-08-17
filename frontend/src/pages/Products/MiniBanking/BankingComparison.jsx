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

import CheckCircleIcon from "@mui/icons-material/CheckCircle";



const BankingComparison = () => {

  // ================= COMPARISON DATA =================

  const comparisonData = [
    {
      feature: "Primary Use",
      core: "Bank branches & full-scale\noperations",
      microfinance: "Microfinance & group lending\ninstitutions",
      nidhi: "Nidhi & Cooperative\nsocieties",
    },
    {
      feature: "Account Management",
      core: "yes",
      microfinance: "yes",
      nidhi: "yes",
    },
    {
      feature: "Loan Management",
      core: "Advanced loan products",
      microfinance: "Group & individual loans",
      nidhi: "Member loans",
    },
    {
      feature: "Interest Calculation",
      core: "Daily / Monthly / Quarterly",
      microfinance: "Daily / Weekly / Monthly",
      nidhi: "Monthly / Yearly",
    },
    {
      feature: "Field Collection",
      core: "No",
      microfinance: "yes",
      nidhi: "No",
    },
    {
      feature: "Regulatory Reports",
      core: "yes",
      microfinance: "yes",
      nidhi: "yes",
    },
    {
      feature: "Best For",
      core: "Cooperative Banks,\nCredit Societies",
      microfinance: "Microfinance Institutions,\nNGOs, SHGs",
      nidhi: "Nidhi Companies,\nCooperative Societies",
    },
  ];




  const renderCell = (value) => {

    if (value === "yes") {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.8,
          }}
        >
          <CheckCircleIcon
            sx={{
              color: "#159765",
              fontSize: 21,
            }}
          />

          <Typography
            component="span"
            sx={{
              fontSize: {
                xs: "0.75rem",
                sm: "0.9rem",
                md: "1rem",
              },
              color: "#18233A",
            }}
          >
            Yes
          </Typography>
        </Box>
      );
    }

    return (
      <Typography
        sx={{
          whiteSpace: "pre-line",
          textAlign: "center",
          color: "#18233A",
          fontSize: {
            xs: "0.72rem",
            sm: "0.85rem",
            md: "0.98rem",
          },
          lineHeight: 1.3,
        }}
      >
        {value}
      </Typography>
    );
  };


  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: {
          xs: 5,
          md: 0,
        },
        px: {
          xs: 1.5,
          sm: 3,
          md: 5,
        },
      }}
    >

      <Box
        sx={{
          maxWidth: "1450px",
          mx: "auto",
        }}
      >

     
        <Box>

          {/* Heading */}

          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              color: "#071B52",
              fontWeight: 700,
              fontSize: {
                xs: "1.25rem",
                sm: "1.7rem",
                md: "1.5rem",
              },
              mb: {
                xs: 2.5,
                md: 2,
              },
            }}
          >
            CORE BANKING vs MICROFINANCE vs NIDHI SOFTWARE
          </Typography>


          {/* Table */}

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              border: "1px solid #cfdbea",
              borderRadius: {
                xs: "12px",
                md: "18px",
              },
              overflow: "auto",
              boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
            }}
          >

            <Table
              sx={{
                minWidth: {
                  xs: 850,
                  md: 1000,
                },
              }}
            >

              {/* Table Header */}

              <TableHead>

                <TableRow>

                  {/* Feature */}

                  <TableCell
                    sx={{
                      backgroundColor: "#0645A5",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.8rem",
                        md: "1.1rem",
                      },
                      textAlign: "center",
                      borderRight: "1px solid #fff",
                      py: 1.8,
                      width: "18%",
                    }}
                  >
                    Feature
                  </TableCell>


                  {/* Core Banking */}

                  <TableCell
                    sx={{
                      backgroundColor: "#075DC6",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.8rem",
                        md: "1.1rem",
                      },
                      textAlign: "center",
                      borderRight: "1px solid #fff",
                      py: 1.8,
                    }}
                  >
                    Core Banking Software
                  </TableCell>


                  {/* Microfinance */}

                  <TableCell
                    sx={{
                      backgroundColor: "#08A574",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.8rem",
                        md: "1.1rem",
                      },
                      textAlign: "center",
                      borderRight: "1px solid #fff",
                      py: 1.8,
                    }}
                  >
                    Microfinance Software
                  </TableCell>


                  {/* Nidhi */}

                  <TableCell
                    sx={{
                      backgroundColor: "#5630A8",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.8rem",
                        md: "1.1rem",
                      },
                      textAlign: "center",
                      py: 1.8,
                    }}
                  >
                    Nidhi & Cooperative Software
                  </TableCell>

                </TableRow>

              </TableHead>


              {/* Table Body */}

              <TableBody>

                {comparisonData.map((row, index) => (

                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        index % 2 === 0
                          ? "#f8fafc"
                          : "#ffffff",

                      "&:last-child td": {
                        borderBottom: 0,
                      },
                    }}
                  >

                    {/* Feature Name */}

                    <TableCell
                      sx={{
                        color: "#071B52",
                        fontWeight: 600,
                        fontSize: {
                          xs: "0.75rem",
                          sm: "0.9rem",
                          md: "1rem",
                        },
                        borderRight: "1px solid #d8e1ec",
                        borderBottom: "1px solid #d8e1ec",
                        py: 1.4,
                      }}
                    >
                      {row.feature}
                    </TableCell>


                    {/* Core */}

                    <TableCell
                      sx={{
                        borderRight: "1px solid #d8e1ec",
                        borderBottom: "1px solid #d8e1ec",
                        py: 1.4,
                      }}
                    >
                      {renderCell(row.core)}
                    </TableCell>


                    {/* Microfinance */}

                    <TableCell
                      sx={{
                        borderRight: "1px solid #d8e1ec",
                        borderBottom: "1px solid #d8e1ec",
                        py: 1.4,
                      }}
                    >
                      {renderCell(row.microfinance)}
                    </TableCell>


                    {/* Nidhi */}

                    <TableCell
                      sx={{
                        borderBottom: "1px solid #d8e1ec",
                        py: 1.4,
                      }}
                    >
                      {renderCell(row.nidhi)}
                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>

          </TableContainer>

        </Box>



      </Box>

    </Box>
  );
};

export default BankingComparison;
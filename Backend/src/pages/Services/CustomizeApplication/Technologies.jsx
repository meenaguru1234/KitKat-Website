import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import reactLogo from "../../../assets/Images/react.png";
import nodeLogo from "../../../assets/Images/nodejs.png"
import laravelLogo from "../../../assets/Images/laravel1.png"
import phpLogo from "../../../assets/Images/php.png"
import awsLogo from "../../../assets/Images/aws.png"
import azureLogo from "../../../assets/Images/azure.jpg"
import mysqlLogo from "../../../assets/Images/mysql.png"
import postgresqlLogo from "../../../assets/Images/postgreSql.png"

const Technologies = () => {

    const techArray = [
      { img: reactLogo},
    { img: nodeLogo, name: "Node.js" },
    { img: laravelLogo },
    { img: phpLogo},
    { img: awsLogo,  },
    { img: azureLogo,  },
    { img: mysqlLogo, },
    { img: postgresqlLogo, name:"PostgreSQL" },
];



  return (
    <>
       <Box sx={{ py: 6, px: 2 }}>

      {/* Heading */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 5, flexWrap: "wrap", textAlign: "center" }}>
        <Box sx={{ width: 70, height: 3, bgcolor: "#FD6A02" }} />
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#071B52", fontSize: { xs: "1.6rem", md: "2.2rem" } }}>
          Technologies We Work With
        </Typography>
        <Box sx={{ width: 70, height: 3, bgcolor: "#FD6A02" }} />
      </Box>

      {/* Card */}
      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "15px",
          p: { xs: 3, md: 5 },
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(8, 1fr)",
            },
            rowGap: 4,
            columnGap: 2,
          }}
        >
          {techArray.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  height: 50,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    height: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#071B52",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={{ textAlign: "center", mt: 4, color: "#071B52", fontSize: "1rem", fontWeight:600 }}>
          We use the right technology stack based on your project
          requirements, performance goals and long-term scalability.
        </Typography>
      </Box>

    </Box>
    </>
  );
};


export default Technologies